"use client";

import { useState } from "react";
import { CreditCard, Star, Trash2, Plus, CheckCircle, Edit, Shield, Wallet } from "lucide-react";

type Card = {
  id: number;
  brand: string;
  holder: string;
  last4: string;
  expiry: string;
  isDefault: boolean;
};

export default function PaymentMethodsPage() {
  const [cards, setCards] = useState<Card[]>([
    { id: 1, brand: "Visa", holder: "Peter Ducker", last4: "2138", expiry: "10/26", isDefault: true },
    { id: 2, brand: "Mastercard", holder: "Peter Ducker", last4: "9931", expiry: "02/27", isDefault: false },
    { id: 3, brand: "Amex", holder: "Peter Ducker", last4: "3012", expiry: "08/25", isDefault: false },
  ]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [adding, setAdding] = useState(false);

  const setDefault = (id: number) => {
    setCards(prev => prev.map(c => ({ ...c, isDefault: c.id === id })));
  };

  const removeCard = (id: number) => {
    setCards(prev => prev.filter(c => c.id !== id));
  };

  const saveEdit = (id: number, updated: Partial<Card>) => {
    setCards(prev => prev.map(c => (c.id === id ? { ...c, ...updated } : c)));
    setEditingId(null);
  };

  const addCard = (newCard: { number: string; holder: string; expiry: string; brand: string }) => {
    const last4 = newCard.number.replace(/\s+/g, "").slice(-4) || "0000";
    const nextId = Math.max(0, ...cards.map(c => c.id)) + 1;
    setCards(prev => [
      ...prev,
      { id: nextId, brand: newCard.brand, holder: newCard.holder, last4, expiry: newCard.expiry, isDefault: prev.length === 0 },
    ]);
    setAdding(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-10">
      <div className="container">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Payment Methods</h1>
            <p className="text-gray-600">Manage your saved cards and choose a default method</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600 bg-white rounded-xl border border-gray-200 px-4 py-2">
            <Shield className="w-4 h-4 text-[#AD5618]" />
            <span>Secure • Encrypted</span>
          </div>
        </div>

        {/* Cards List */}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map(card => (
            <div key={card.id} className={`bg-white rounded-2xl border ${card.isDefault ? "border-[#AD5618]" : "border-white/60"} shadow-xl overflow-hidden`}>
              <div className="bg-gradient-to-r from-[#AD5618] to-[#91530A] text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5" />
                  <div className="font-semibold">{card.brand}</div>
                </div>
                {card.isDefault ? (
                  <span className="inline-flex items-center gap-1 text-sm"><CheckCircle className="w-4 h-4" /> Default</span>
                ) : (
                  <button onClick={() => setDefault(card.id)} className="text-sm underline underline-offset-4 hover:opacity-90">Set as default</button>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-lg font-semibold tracking-widest">•••• •••• •••• {card.last4}</div>
                    <div className="text-sm text-gray-600">{card.holder}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Expiry</div>
                    <div className="font-medium">{card.expiry}</div>
                  </div>
                </div>

                {editingId === card.id ? (
                  <EditCardForm
                    initial={card}
                    onCancel={() => setEditingId(null)}
                    onSave={(values) => saveEdit(card.id, values)}
                  />
                ) : (
                  <div className="flex items-center gap-3">
                    <button onClick={() => setEditingId(card.id)} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                      <Edit className="w-4 h-4" /> Edit
                    </button>
                    <button onClick={() => removeCard(card.id)} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors">
                      <Trash2 className="w-4 h-4" /> Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add New Card */}
        <div className="mt-10">
          {adding ? (
            <AddCardForm onCancel={() => setAdding(false)} onAdd={addCard} />
          ) : (
            <div className="flex justify-center">
              <button onClick={() => setAdding(true)} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#AD5618] to-[#91530A] text-white px-6 py-3 font-semibold shadow-lg hover:from-[#91530A] hover:to-[#7A4A09] transition-colors">
                <Plus className="w-5 h-5" /> Add New Card
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function EditCardForm({ initial, onCancel, onSave }: { initial: Card; onCancel: () => void; onSave: (values: Partial<Card>) => void }) {
  const [holder, setHolder] = useState(initial.holder);
  const [expiry, setExpiry] = useState(initial.expiry);

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave({ holder, expiry }); }} className="grid gap-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
          <input value={holder} onChange={(e) => setHolder(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
          <input value={expiry} onChange={(e) => setExpiry(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent" placeholder="MM/YY" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-[#AD5618] hover:bg-[#91530A] text-white px-4 py-2 font-medium transition-colors">
          <CheckCircle className="w-4 h-4" /> Save
        </button>
        <button type="button" onClick={onCancel} className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 font-medium hover:bg-gray-50">Cancel</button>
      </div>
    </form>
  );
}

function AddCardForm({ onCancel, onAdd }: { onCancel: () => void; onAdd: (card: { number: string; holder: string; expiry: string; brand: string }) => void }) {
  const [number, setNumber] = useState("");
  const [holder, setHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [brand, setBrand] = useState("Visa");

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-white/60 p-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <Wallet className="w-5 h-5 text-[#AD5618]" />
        <h2 className="text-lg font-semibold text-gray-900">Add a new card</h2>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); onAdd({ number, holder, expiry, brand }); }} className="grid gap-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
            <input value={number} onChange={(e) => setNumber(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent" placeholder="1234 5678 9012 3456" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
            <input value={holder} onChange={(e) => setHolder(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent" placeholder="Full name" />
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
            <input value={expiry} onChange={(e) => setExpiry(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent" placeholder="MM/YY" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
            <select value={brand} onChange={(e) => setBrand(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent bg-white">
              <option>Visa</option>
              <option>Mastercard</option>
              <option>Amex</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-[#AD5618] hover:bg-[#91530A] text-white px-5 py-2.5 font-semibold">
            <Plus className="w-4 h-4" /> Save Card
          </button>
          <button type="button" onClick={onCancel} className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 font-semibold hover:bg-gray-50">Cancel</button>
        </div>
      </form>
    </div>
  );
}


