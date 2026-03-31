"use client";

import { useState } from "react";
import {
  CreditCard,
  Trash2,
  Plus,
  CheckCircle,
  Edit,
  Shield,
  Wallet,
  ChevronRight,
  MoreVertical,
  CheckCircle2,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Card = {
  id: number;
  brand: string;
  holder: string;
  last4: string;
  expiry: string;
  isDefault: boolean;
  color: string;
};

export default function PaymentMethodsPage() {
  const [cards, setCards] = useState<Card[]>([
    { id: 1, brand: "Visa", holder: "Peter Ducker", last4: "2138", expiry: "10/26", isDefault: true, color: "bg-[#121212]" },
    { id: 2, brand: "Mastercard", holder: "Peter Ducker", last4: "9931", expiry: "02/27", isDefault: false, color: "bg-[#AD5618]" },
    { id: 3, brand: "Amex", holder: "Peter Ducker", last4: "3012", expiry: "08/25", isDefault: false, color: "bg-gray-800" },
  ]);
  const [adding, setAdding] = useState(false);

  const setDefault = (id: number) => {
    setCards(prev => prev.map(c => ({ ...c, isDefault: c.id === id })));
  };

  const removeCard = (id: number) => {
    setCards(prev => prev.filter(c => c.id !== id));
  };

  const addCard = (newCard: { number: string; holder: string; expiry: string; brand: string }) => {
    const last4 = newCard.number.replace(/\s+/g, "").slice(-4) || "0000";
    const nextId = Math.max(0, ...cards.map(c => c.id)) + 1;
    setCards(prev => [
      ...prev,
      { id: nextId, brand: newCard.brand, holder: newCard.holder, last4, expiry: newCard.expiry, isDefault: prev.length === 0, color: "bg-gray-700" },
    ]);
    setAdding(false);
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-black/5">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Payment methods</h1>
          <p className="text-gray-500 font-normal">Manage your secure payment options and default billing methods.</p>
        </div>
      </div>

      {/* Cards List */}
      <div className="grid lg:grid-cols-2 gap-8">
        <AnimatePresence>
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: idx * 0.1 }}
              className={`h-64 rounded-[20px] p-10 cursor-pointer flex flex-col justify-between text-white shadow-2xl relative overflow-hidden group ${card.color} border-4 ${card.isDefault ? "border-[#AD5618]/30" : "border-transparent"}`}
            >
              <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id={`pattern-card-${card.id}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M0 30 L15 0 L30 30 L45 60 L60 30 M0 0 L30 60 L60 0" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill={`url(#pattern-card-${card.id})`} />
                </svg>
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div className="text-lg font-bold tracking-widest">{card.brand}</div>
                </div>
                {card.isDefault && (
                  <div className="px-4 py-2 bg-white/20 backdrop-blur-xl rounded-md text-[14px] font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3" />
                    Default
                  </div>
                )}
              </div>

              <div className="relative z-10 space-y-6">
                <div className="text-3xl font-bold tracking-[0.2em]">... ... ... {card.last4}</div>
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="space-y-1">
                    <div className="text-[16px] font-medium text-white/40 leading-none">Card Holder</div>
                    <div className="text-md font-medium tracking-tight">{card.holder}</div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="text-[16px] font- text-white/40 leading-none">Expires</div>
                    <div className="text-md font-medium tracking-tight">{card.expiry}</div>
                  </div>
                </div>
              </div>

              {/* Action Overlays */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                {!card.isDefault && (
                  <button onClick={() => setDefault(card.id)} className="w-10 h-10 bg-white/20 hover:bg-[#AD5618] rounded-xl flex items-center justify-center transition-colors">
                    <CheckCircle className="w-4 h-4" />
                  </button>
                )}
                <button onClick={() => removeCard(card.id)} className="w-10 h-10 bg-white/20 hover:bg-red-500 rounded-xl flex items-center justify-center transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Add New Card Button */}
        <button
          onClick={() => setAdding(true)}
          className="h-64 rounded-[20px] border-4 border-dashed cursor-pointer border-black/5 flex flex-col items-center justify-center gap-4 hover:border-[#AD5618]/30 hover:bg-[#AD5618]/5 transition-all group"
        >
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Plus className="w-8 h-8 text-gray-300 group-hover:text-[#AD5618]" />
          </div>
          <div className="text-lg font-semibold text-gray-400 group-hover:text-[#AD5618]">Add New Method</div>
        </button>
      </div>

      {/* Add Card Modal / Section */}
      <AnimatePresence>
        {adding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#121212]/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[40px] p-12 max-w-xl w-full relative shadow-2xl"
            >
              <button
                onClick={() => setAdding(false)}
                className="absolute top-8 right-8 p-3 bg-gray-50 rounded-lg text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-10">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-gray-900">New payment method</h2>
                  <p className="text-gray-500 font-normal">Your information is handled securely using 256-bit encryption.</p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-md font-medium text-gray-700 px-1">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                      <input className="w-full bg-gray-50  rounded-[12px] py-4 pl-14 pr-6 text-sm text-black/80 font-normal focus:outline-none focus:ring-4 focus:ring-[#AD5618]/5 transition-all placeholder:text-gray-500" placeholder="0000 0000 0000 0000" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-md font-medium text-gray-700  px-1">Expiry Date</label>
                      <input className="w-full bg-gray-50 rounded-[12px] py-4 px-6 text-sm text-black/80 font-normal focus:outline-none focus:ring-4 focus:ring-[#AD5618]/5 transition-all text-center placeholder:text-gray-500" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-md font-medium text-gray-700  px-1">CVV / CVC</label>
                      <input className="w-full bg-gray-50  rounded-[12px] py-4 px-6 text-sm text-black/80 font-normal focus:outline-none focus:ring-4 focus:ring-[#AD5618]/5 transition-all text-center placeholder:text-gray-500" placeholder="***" type="password" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-md font-medium text-gray-700 px-1">Cardholder Name</label>
                    <input className="w-full bg-gray-50 text-black/80 font-normal rounded-[12px] py-4 px-6 text-sm focus:outline-none focus:ring-4 focus:ring-[#AD5618]/5 transition-all placeholder:text-gray-500" placeholder="Enter name on card" />
                  </div>

                  <button
                    onClick={() => addCard({ number: "1234123412344444", holder: "New User", expiry: "12/28", brand: "Visa" })}
                    className="px-10 py-4 bg-[#AD5618] text-white rounded-[12px] font-medium text-md shadow-xl shadow-[#AD5618]/20 hover:bg-[#91530A] transition-all"
                  >
                    Securely Save Card
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
