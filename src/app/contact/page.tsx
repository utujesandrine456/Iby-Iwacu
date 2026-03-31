"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MapPin, Mail, Phone, ChevronDown } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

export default function ContactPage() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 80]);

  const contactItems = [
    { icon: <Phone className="w-5 h-5" />, label: "+250 785 805 869", href: "tel:+250785805869" },
    { icon: <Mail className="w-5 h-5" />, label: "support@ibyiwacu.com", href: "mailto:support@ibyiwacu.com" },
    { icon: <MapPin className="w-5 h-5" />, label: "Remera, Kigali, Rwanda", href: "#map" },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* background image with parallax */}
        <div className="absolute inset-0">
          <Image
            src="/Contact.jpg"
            alt="Connect with us"
            fill
            className="object-cover object-center scale-105"
            priority
          />
          {/* layered overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Animated accent blobs */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-72 h-72 bg-[#AD5618]/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -120, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-56 h-56 bg-[#eb8034]/15 rounded-full blur-3xl pointer-events-none"
        />

        {/* floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/30 rounded-full pointer-events-none"
            style={{ left: `${15 + i * 14}%`, top: `${20 + i * 10}%` }}
            animate={{ y: [0, -60, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
          />
        ))}

        {/* main content */}
        <div className="container relative z-10 py-32">
          <motion.div
            style={{ opacity: heroOpacity, y: heroY }}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#AD5618]/20 border border-[#AD5618]/40 backdrop-blur-sm px-4 py-2 rounded-md mb-6"
            >
              <span className="w-2 h-2 bg-[#eb8034] rounded-full animate-pulse" />
              <span className="text-[#eb8034] font-semibold tracking-widest text-xs">
                We&apos;d love to hear from you
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-7xl font-extrabold text-white mb-6 leading-tight"
            >
              Get In{" "}
              <span className="relative">
                <span className="text-[#eb8034]">Touch</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-[#eb8034] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/80 leading-relaxed mb-12 max-w-2xl"
            >
              Have a question, idea, or want to partner with us? Our team is
              ready to help — reach out and we&apos;ll respond within 24&nbsp;hours.
            </motion.p>

            {/* interactive contact cards */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-col sm:flex-row gap-4"
            >
              {contactItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-3 bg-white/10 hover:bg-[#AD5618] backdrop-blur-sm border border-white/20 hover:border-[#AD5618] text-white px-5 py-3.5 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer"
                >
                  <span className="text-[#eb8034] group-hover:text-white transition-colors">
                    {item.icon}
                  </span>
                  <span className="group-hover:text-white transition-colors">{item.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="text-white/50 text-xs tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-2 bg-white/60 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          <ChevronDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </section>

      {/* ── FORM + INFO ────────────────────────────────────────── */}
      <section id="contact-section" className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-5 gap-12 items-start"
          >
            {/* ── Contact Info sidebar ── */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
                  Contact <span className="text-[#AD5618]">Information</span>
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Choose the most convenient way to reach us. We&apos;re always
                  happy to help.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    icon: <Phone className="w-5 h-5" />,
                    title: "Phone",
                    value: "+250 785 805 869",
                    sub: "Mon–Fri, 8 AM – 6 PM",
                  },
                  {
                    icon: <Mail className="w-5 h-5" />,
                    title: "Email",
                    value: "support@ibyiwacu.com",
                    sub: "Response within 24 hours",
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    title: "Address",
                    value: "Sector Remera, KN3",
                    sub: "Kigali, Rwanda",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-11 h-11 bg-[#AD5618] rounded-md flex items-center justify-center text-white shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{item.title}</div>
                      <div className="text-[#AD5618] font-semibold">{item.value}</div>
                      <div className="text-sm text-gray-500">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* business hours */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  {[
                    { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
                    { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((s, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-gray-700 font-medium">{s.day}</span>
                      <span className="text-gray-500">{s.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── Form ── */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
            >
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-500 mb-8 text-sm">
                Fill out the form below and we&apos;ll get back to you soon.
              </p>
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── MAP ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
              Find Us in <span className="text-[#AD5618]">Kigali</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Located in the vibrant heart of Rwanda&apos;s capital city
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl border-4 border-[#AD5618]/10"
          >
            <iframe
              title="Iby'Iwacu Location – Kigali, Rwanda"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5089234567!2d30.0644!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0x4b7b8b7b8b7b8b7b!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1234567890"
              className="w-full h-[450px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ── Contact Form Component ─────────────────────────────────── */
function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      }, 3000);
    }, 1200);
  }

  const inputClass =
    "w-full px-4 py-3 rounded-md border border-gray-200 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#AD5618]/30 focus:border-[#AD5618] transition-all placeholder-gray-400 text-sm";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Full Name <span className="text-[#AD5618]">*</span>
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Jean Pierre"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Email Address <span className="text-[#AD5618]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+250 7XX XXX XXX"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Subject <span className="text-[#AD5618]">*</span>
          </label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            placeholder="How can we help?"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Message <span className="text-[#AD5618]">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us more about your inquiry…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <motion.button
        whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
        whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
        type="submit"
        disabled={status !== "idle"}
        className={`w-full py-3.5 rounded-md font-bold text-base transition-all shadow-md ${status === "idle"
          ? "bg-[#AD5618] text-white hover:bg-[#91530A]"
          : status === "sending"
            ? "bg-[#AD5618]/60 text-white cursor-not-allowed"
            : "bg-green-600 text-white"
          }`}
      >
        {status === "idle" && (
          <span className="flex items-center justify-center gap-2">
            Send Message
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </span>
        )}
        {status === "sending" && (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending…
          </span>
        )}
        {status === "sent" && (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Message Sent!
          </span>
        )}
      </motion.button>

      {status === "sent" && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-sm text-green-700 bg-green-50 border border-green-200 rounded-md py-3 px-4"
        >
          Thank you! We&apos;ll get back to you within 24 hours.
        </motion.p>
      )}
    </form>
  );
}