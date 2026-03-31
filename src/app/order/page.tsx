"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  CreditCard,
  ShoppingCart,
  Search,
  Plus,
  Minus,
  Trash2,
  CheckCircle2,
  History,
  Navigation,
  X,
  ShoppingBag
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
}

interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export default function OrderPage() {
  const [activeTab, setActiveTab] = useState('new-order');
  const [paymentMethod, setPaymentMethod] = useState('mobile-money');
  const [selectedProducts, setSelectedProducts] = useState<OrderItem[]>([]);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'Rwanda',
    postalCode: '',
    specialNote: ''
  });

  const products: Product[] = [
    {
      id: '1',
      name: 'Agaseke Basket',
      category: 'Baskets',
      price: 45000,
      image: '/hand woven baskets 1.png',
      description: 'Handcrafted traditional basket with intricate patterns',
      inStock: true
    },
    {
      id: '2',
      name: 'Imigongo Art',
      category: 'Art',
      price: 75000,
      image: '/Beautiful sitting corner.png',
      description: 'Beautiful geometric art piece made from cow dung',
      inStock: true
    },
    {
      id: '3',
      name: 'Rwandan Coffee',
      category: 'Coffee',
      price: 25000,
      image: '/Rwanda Bean Single-origin Rwandan coffee.png',
      description: 'High-quality Arabica coffee beans from Rwanda',
      inStock: true
    },
    {
      id: '4',
      name: 'Kitenge',
      category: 'Textiles',
      price: 35000,
      image: '/Real Wax African Fabrics 100 Cotton Fabric by Africanpremier, $27_99 1.png',
      description: 'Vibrant traditional fabric with cultural patterns',
      inStock: false
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addToOrder = (product: Product) => {
    const existingItem = selectedProducts.find(item => item.productId === product.id);
    if (existingItem) {
      setSelectedProducts(prev => prev.map(item =>
        item.productId === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setSelectedProducts(prev => [...prev, { productId: product.id, quantity: 1, price: product.price }]);
    }
    setIsReviewModalOpen(true);
  };

  const removeFromOrder = (productId: string) => {
    setSelectedProducts(prev => prev.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) removeFromOrder(productId);
    else setSelectedProducts(prev => prev.map(item => item.productId === productId ? { ...item, quantity } : item));
  };

  const getTotalAmount = () => selectedProducts.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-black/5">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Order management</h1>
          <p className="text-gray-500 font-medium">Create, track, and manage your artisanal orders.</p>
        </div>
      </div>

      <div className="flex p-1.5 bg-gray-100 rounded-lg max-w-xl">
        {[
          { id: 'new-order', label: 'New Order', icon: <Plus className="w-4 h-4" /> },
          { id: 'order-history', label: 'History', icon: <History className="w-4 h-4" /> },
          { id: 'track-order', label: 'Tracking', icon: <Navigation className="w-4 h-4" /> }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md text-md font-medium transition-all ${activeTab === tab.id
              ? "bg-white text-[#AD5618] shadow-sm"
              : "text-gray-400 hover:text-gray-600"
              }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>


      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {activeTab === 'new-order' && (
            <div className="max-w-4xl mx-auto space-y-10">
              {/* Product Selection */}
              <div className="bg-white rounded-[24px] p-10 border border-black/5 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-gray-900">Select Products</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search artisanal products..."
                      className="bg-gray-50 border border-black/5 rounded-md py-2.5 pl-10 pr-4 text-sm font-normal focus:outline-none focus:ring-4 focus:ring-[#AD5618]/5 placeholder:text-gray-500 transition-all text-black/80"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).map(product => (
                    <motion.div
                      key={product.id}
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="group flex flex-col justify-between h-full bg-gray-50 rounded-[20px] p-6 border border-transparent hover:border-[#AD5618]/10 hover:bg-white hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="space-y-4 cursor-pointer">
                        <div className="relative h-48 w-full overflow-hidden rounded-2xl shadow-inner bg-white">
                          <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                          {!product.inStock && (
                            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center">
                              <span className="px-4 py-2 bg-red-500 text-white rounded-md text-[14px] font-medium shadow-lg">Out of Stock</span>
                            </div>
                          )}
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-2xl font-semibold text-gray-900 leading-none transition-colors">{product.name}</h4>
                          <p className="text-[10px] text-gray-400 font-bold tracking-widest">{product.category}</p>
                        </div>
                        <p className="text-xs text-gray-500 font-medium line-clamp-2">{product.description}</p>
                      </div>

                      <div className="mt-8 flex items-center justify-between">
                        <div className="text-lg font-bold text-gray-900">RWF {product.price.toLocaleString()}</div>
                        <button
                          onClick={() => addToOrder(product)}
                          disabled={!product.inStock}
                          className={`w-8 h-8 rounded-md flex items-center justify-center  cursor-pointer transition-all ${product.inStock
                            ? "bg-[#AD5618] text-white shadow-lg shadow-[#AD5618]/30 hover:scale-110 active:scale-95"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                            }`}
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[24px] p-10 border border-black/5 shadow-sm">
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-8">Shipping details</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { label: "Full Name", name: "fullName", placeholder: "e.g. John Doe" },
                    { label: "Email Address", name: "email", placeholder: "e.g. john@example.com" },
                    { label: "Phone Number", name: "phone", placeholder: "e.g. +250..." },
                    { label: "City", name: "city", placeholder: "e.g. Kigali" },
                  ].map(field => (
                    <div key={field.name} className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 tracking-widest px-1">{field.label}</label>
                      <input
                        type="text"
                        name={field.name}
                        placeholder={field.placeholder}
                        className="w-full bg-gray-50 border border-black/5 rounded-md py-3.5 px-5 text-sm font-normal focus:outline-none focus:ring-4 focus:ring-[#AD5618]/5 focus:border-[#AD5618]/20 transition-all placeholder:text-gray-500 text-black/80"
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                      />
                    </div>
                  ))}
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 tracking-widest px-1">Shipping address</label>
                    <textarea
                      rows={3}
                      name="address"
                      placeholder="Enter your full street address..."
                      className="w-full bg-gray-50 border border-black/5 rounded-md py-3.5 px-5 text-sm font-normal focus:outline-none focus:ring-4 focus:ring-[#AD5618]/5 focus:border-[#AD5618]/20 transition-all resize-none placeholder:text-gray-500 text-black/80"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {selectedProducts.length > 0 && (
                <button
                  onClick={() => setIsReviewModalOpen(true)}
                  className="fixed bottom-10 right-10 z-30 cursor-pointer bg-[#AD5618] text-white p-4 rounded-md shadow-2xl shadow-[#AD5618]/40 flex items-center gap-3 hover:scale-105 transition-all group active:scale-95"
                >
                  <div className="relative">
                    <ShoppingBag className="w-6 h-6" />
                    <span className="absolute -top-2 -right-2 bg-white text-[#AD5618] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#AD5618]">
                      {selectedProducts.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                  </div>
                  <span className="font-bold text-md">Review Order</span>
                </button>
              )}

              <Modal
                isOpen={isReviewModalOpen}
                onClose={() => setIsReviewModalOpen(false)}
                title="Review Your Order"
              >
                <div className="space-y-8">
                  {selectedProducts.length === 0 ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto">
                        <ShoppingCart className="w-8 h-8 text-gray-300" />
                      </div>
                      <p className="text-sm font-bold text-gray-400 tracking-widest">No products selected</p>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                        {selectedProducts.map(item => {
                          const product = products.find(p => p.id === item.productId);
                          return (
                            <div key={item.productId} className="flex items-center gap-6 p-5 bg-gray-50 rounded-2xl group border border-transparent hover:border-[#AD5618]/10 transition-all">
                              <div className="w-20 h-20 relative rounded-xl overflow-hidden border border-black/5 shadow-sm">
                                <Image src={product?.image || ""} alt="" fill className="object-cover" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-lg font-medium text-gray-900 truncate">{product?.name}</div>
                                <div className="text-xs text-[#AD5618] font-bold mt-1">RWF {product?.price.toLocaleString()}</div>
                              </div>
                              <div className="flex flex-col items-end gap-3">
                                <div className="flex items-center bg-white border border-black/5 rounded-lg p-1 shadow-sm">
                                  <button onClick={() => updateQuantity(item.productId, item.quantity - 1)} className="p-1.5 hover:text-[#AD5618] hover:bg-gray-50 rounded-md transition-all"><Minus className="w-3.5 h-3.5" /></button>
                                  <span className="w-10 text-center text-sm font-bold text-gray-900">{item.quantity}</span>
                                  <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} className="p-1.5 hover:text-[#AD5618] hover:bg-gray-50 rounded-md transition-all"><Plus className="w-3.5 h-3.5" /></button>
                                </div>
                                <button onClick={() => removeFromOrder(item.productId)} className="text-gray-300 hover:text-red-500 transition-colors p-1"><Trash2 className="w-4 h-4" /></button>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="pt-8 border-t border-black/5 space-y-4">
                        <div className="flex justify-between items-center text-gray-400 text-md font-medium">
                          <span>Subtotal</span>
                          <span className="text-gray-900">RWF {getTotalAmount().toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-gray-400 text-md font-medium">
                          <span>Shipping</span>
                          <span className="text-green-600">Free</span>
                        </div>
                        <div className="flex justify-between items-center pt-6 border-t border-black/5">
                          <span className="text-2xl font-semibold text-gray-900">Total Amount</span>
                          <span className="text-3xl font-bold text-[#AD5618] tracking-tighter">RWF {getTotalAmount().toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="pt-6 space-y-4">
                        <div className="text-[16px] font-medium text-gray-400 px-1">Payment Method</div>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { id: 'mobile-money', label: 'Mobile Money', icon: <Smartphone className="w-5 h-5" /> },
                            { id: 'card', label: 'Card Payment', icon: <CreditCard className="w-5 h-5" /> }
                          ].map(m => (
                            <button
                              key={m.id}
                              onClick={() => setPaymentMethod(m.id)}
                              className={`flex flex-col items-center justify-center gap-3 p-6 cursor-pointer rounded-2xl border-2 transition-all ${paymentMethod === m.id
                                ? "border-[#AD5618] bg-[#AD5618]/5 text-[#AD5618]"
                                : "border-gray-50 bg-gray-50 text-gray-400 hover:bg-gray-100 hover:border-gray-200"
                                }`}
                            >
                              <div className={`p-3 rounded-xl ${paymentMethod === m.id ? 'bg-[#AD5618] text-white shadow-lg shadow-[#AD5618]/20' : 'bg-white'}`}>
                                {m.icon}
                              </div>
                              <span className="text-[14px] font-medium text-center">{m.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setIsReviewModalOpen(false);
                        }}
                        className="mt-4 py-4 px-10 bg-[#AD5618] text-white rounded-md font-medium text-md shadow-2xl mx-auto shadow-[#AD5618]/30 cursor-pointer hover:-translate-y-0.5 transition-all active:translate-y-0 disabled:bg-gray-100 disabled:shadow-none disabled:text-gray-400"
                        disabled={selectedProducts.length === 0}
                      >
                        Complete Order
                      </button>
                    </div>
                  )}
                </div>
              </Modal>
            </div>
          )}

          {activeTab === 'order-history' && (
            <div className="bg-white rounded-[24px] p-10 border border-black/5 shadow-sm overflow-hidden">
              <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-10">Purchase history</h3>
              <div className="space-y-4">
                {[
                  { id: 'ORD-9821', date: 'Oct 24, 2024', total: 120000, status: 'Delivered', img: '/hand woven baskets 1.png' },
                  { id: 'ORD-9812', date: 'Oct 15, 2024', total: 85000, status: 'Processing', img: '/Beautiful sitting corner.png' },
                  { id: 'ORD-9755', date: 'Sep 28, 2024', total: 45000, status: 'Shipped', img: '/Rwanda Bean Single-origin Rwandan coffee.png' }
                ].map(order => (
                  <div key={order.id} className="group flex items-center  cursor-pointer justify-between p-6 bg-gray-50 rounded-[24px] hover:bg-white hover:shadow-xl hover:border-[#AD5618]/10 border border-transparent transition-all">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 relative rounded-lg overflow-hidden border border-black/5">
                        <Image src={order.img} alt="" fill className="object-cover" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-gray-900 tracking-tight">{order.id}</div>
                        <div className="text-sm font-semibold text-gray-400 capitalize">Placed on {order.date}</div>
                      </div>
                    </div>
                    <div className="text-right space-y-3">
                      <div className="text-lg font-bold text-[#AD5618]">RWF {order.total.toLocaleString()}</div>
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-bold tracking-widest ${order.status === 'Delivered' ? 'bg-green-50 text-green-600' :
                        order.status === 'Shipped' ? 'bg-blue-50 text-blue-600' :
                          'bg-amber-50 text-amber-600'
                        }`}>
                        {order.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'track-order' && (
            <div className="bg-white rounded-[24px] p-10 border border-black/5 shadow-sm text-center py-20 space-y-4">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-300">
                <Navigation className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">Track your order</h3>
              <p className="text-gray-500 max-w-sm mx-auto">Enter your order ID to see the real-time status of your artisanal products.</p>
              <div className="flex gap-4 max-w-md mx-auto pt-6">
                <input
                  type="text"
                  placeholder="Order ID (e.g. ORD-1234)"
                  className="flex-1 bg-gray-50 border border-black/5 rounded-xl py-3 px-5 text-sm font-normal focus:outline-none focus:ring-4 focus:ring-[#AD5618]/5 placeholder:text-gray-500 transition-all text-black/80"
                />
                <button className="px-8 py-3 bg-[#AD5618] text-white rounded-xl font-bold tracking-widest text-xs shadow-lg shadow-[#AD5618]/20 hover:bg-[#91530A] transition-all">Track</button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
