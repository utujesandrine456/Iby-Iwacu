"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type AuthUser = {
  id: string;
  email: string;
  fullName?: string;
  createdAt: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  loading: boolean;
  login: (params: { email: string; password: string }) => Promise<{ ok: true } | { ok: false; message: string }>;
  signup: (params: { email: string; password: string; fullName?: string }) => Promise<{ ok: true } | { ok: false; message: string }>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const USERS_KEY = "ibyiwacu.users";
const SESSION_KEY = "ibyiwacu.session";

type PersistedUser = AuthUser & { passwordHash: string };

function readUsers(): PersistedUser[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as PersistedUser[]) : [];
  } catch {
    return [];
  }
}

function writeUsers(users: PersistedUser[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function setSession(userId: string | null) {
  if (typeof window === "undefined") return;
  if (userId) localStorage.setItem(SESSION_KEY, userId);
  else localStorage.removeItem(SESSION_KEY);
}

function getSession(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(SESSION_KEY);
}

async function hashPassword(password: string): Promise<string> {
  if (typeof window === "undefined" || !window.crypto?.subtle) {
    return `plain:${password}`;
  }
  const enc = new TextEncoder().encode(password);
  const digest = await window.crypto.subtle.digest("SHA-256", enc);
  const hashArray = Array.from(new Uint8Array(digest));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = getSession();
    if (!id) {
      setLoading(false);
      return;
    }
    const users = readUsers();
    const u = users.find((x) => x.id === id) || null;
    setUser(u ? { id: u.id, email: u.email, fullName: u.fullName, createdAt: u.createdAt } : null);
    setLoading(false);
  }, []);

  const login = useCallback(async ({ email, password }: { email: string; password: string }) => {
    const users = readUsers();
    const pwHash = await hashPassword(password);
    const found = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.passwordHash === pwHash);
    if (!found) {
      return { ok: false as const, message: "Invalid email or password" };
    }
    setSession(found.id);
    setUser({ id: found.id, email: found.email, fullName: found.fullName, createdAt: found.createdAt });
    return { ok: true as const };
  }, []);

  const signup = useCallback(async ({ email, password, fullName }: { email: string; password: string; fullName?: string }) => {
    const users = readUsers();
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false as const, message: "Email already in use" };
    }
    const pwHash = await hashPassword(password);
    const newUser: PersistedUser = {
      id: crypto.randomUUID(),
      email,
      fullName,
      createdAt: new Date().toISOString(),
      passwordHash: pwHash,
    };
    const next = [...users, newUser];
    writeUsers(next);
    setSession(newUser.id);
    setUser({ id: newUser.id, email: newUser.email, fullName: newUser.fullName, createdAt: newUser.createdAt });
    return { ok: true as const };
  }, []);

  const logout = useCallback(() => {
    setSession(null);
    setUser(null);
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  }, []);

  const value = useMemo<AuthContextValue>(() => ({ user, loading, login, signup, logout }), [user, loading, login, signup, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}


