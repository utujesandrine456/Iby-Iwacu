"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Linkedin, Palette, Globe, Handshake, Heart, Clock, MessageCircle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#AD5618] overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-6xl font-extrabold mb-6">Get In <span className="text-[#eb8034]">Touch</span></h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Iby'Iwacu connects local artisans to global markets with passion and reliability. 
              We'd love to hear from you—whether you have questions, ideas, or want to collaborate with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Get In Touch With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help and answer any questions you might have. Choose the best way to reach us.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Visit Our Office",
                subtitle: "Sector Remera, KN3 Kigali, Rwanda",
                description: "Come visit us at our headquarters in the heart of Kigali",
                action: "Get Directions",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Us",
                subtitle: "support@ibyiwacu.com",
                description: "Send us an email and we'll respond within 24 hours",
                action: "Send Email",
                color: "from-green-500 to-green-600"
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Call Us",
                subtitle: "+250 785 805 869",
                description: "Speak directly with our team during business hours",
                action: "Call Now",
                color: "from-purple-500 to-purple-600"
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{contact.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{contact.title}</h3>
                <p className="text-xl font-semibold text-[#AD5618] mb-4">{contact.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{contact.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${contact.color} text-white rounded-full font-semibold hover:shadow-lg transition-all`}
                >
                  {contact.action}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Business Hours & Additional Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#AD5618]" />
                Business Hours
              </h3>
              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
                  { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
                  { day: "Sunday", hours: "Closed" }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-semibold text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-2xl">
                <p className="text-green-800 text-sm">
                  <strong>Note:</strong> We're currently available for urgent inquiries 24/7 via email.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-[#AD5618]" />
                Quick Response
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email Inquiries</div>
                    <div className="text-sm text-gray-600">Response within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone Calls</div>
                    <div className="text-sm text-gray-600">Immediate assistance during business hours</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-2xl">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Urgent Matters</div>
                    <div className="text-sm text-gray-600">Priority response within 2 hours</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Contact Form & Info */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-3xl p-10"
            >
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-xl text-gray-600 mb-8">
                Have a question or want to work together? Fill out the form below and we'll get back to you soon.
              </p>
              <MessageForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Why Choose Iby'Iwacu?</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Palette className="w-6 h-6" />,
                      title: "Authentic Craftsmanship",
                      description: "Every product is handmade by skilled Rwandan artisans using traditional techniques"
                    },
                    {
                      icon: <Globe className="w-6 h-6" />,
                      title: "Global Reach",
                      description: "We connect local talent with international markets, expanding opportunities"
                    },
                    {
                      icon: <Handshake className="w-6 h-6" />,
                      title: "Fair Trade",
                      description: "We ensure fair compensation and sustainable livelihoods for our artisan partners"
                    },
                    {
                      icon: <Heart className="w-6 h-6" />,
                      title: "Sustainable Impact",
                      description: "Supporting local communities while preserving cultural heritage for future generations"
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="text-[#AD5618]">{feature.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-[#AD5618] rounded-3xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Follow Our Journey</h3>
                <p className="mb-6 opacity-90">Stay connected with us on social media for the latest updates, artisan stories, and new product launches.</p>
                <div className="flex gap-4">
                  {[
                    { name: "Facebook", icon: <Facebook className="w-5 h-5" /> },
                    { name: "Instagram", icon: <Instagram className="w-5 h-5" /> },
                    { name: "Twitter", icon: <Twitter className="w-5 h-5" /> },
                    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" /> }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Find Us in Kigali</h2>
            <p className="text-xl text-gray-600">Located in the vibrant heart of Rwanda's capital city</p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <iframe
              title="Iby'Iwacu Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5089234567!2d30.0644!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0x4b7b8b7b8b7b8b7b!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1234567890"
              className="w-full h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function MessageForm() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call
    setTimeout(() => {
      setStatus("sent");
      // Reset form after 3 seconds
      setTimeout(() => {
        setStatus("idle");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          inquiryType: 'general'
        });
      }, 3000);
    }, 1200);
  }

  return (
    <motion.form 
      onSubmit={onSubmit} 
      className="space-y-8"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Inquiry Type Selection */}
      <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
        <label className="block text-lg font-semibold text-gray-900 mb-4">What can we help you with?</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { value: 'general', label: 'General Inquiry', icon: '💬' },
            { value: 'partnership', label: 'Partnership', icon: '🤝' },
            { value: 'wholesale', label: 'Wholesale', icon: '📦' },
            { value: 'press', label: 'Press & Media', icon: '📰' }
          ].map((type) => (
            <motion.label
              key={type.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative flex flex-col items-center p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                formData.inquiryType === type.value
                  ? 'border-[#AD5618] bg-[#AD5618]/5 text-[#AD5618]'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <input
                type="radio"
                name="inquiryType"
                value={type.value}
                checked={formData.inquiryType === type.value}
                onChange={handleInputChange}
                className="sr-only"
              />
              <span className="text-2xl mb-2">{type.icon}</span>
              <span className="text-sm font-medium text-center">{type.label}</span>
            </motion.label>
          ))}
        </div>
      </motion.div>

      {/* Personal Information */}
      <motion.div variants={fadeInUp} transition={{ duration: 0.5, delay: 0.1 }}>
        <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">First Name *</label>
            <input 
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full rounded-2xl bg-white px-6 py-4 text-gray-900 border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#AD5618]/20 focus:border-[#AD5618] transition-all text-lg hover:border-gray-300" 
              placeholder="John" 
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">Last Name *</label>
            <input 
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full rounded-2xl bg-white px-6 py-4 text-gray-900 border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#AD5618]/20 focus:border-[#AD5618] transition-all text-lg hover:border-gray-300" 
              placeholder="Doe" 
              required
            />
          </div>
        </div>
      </motion.div>

      {/* Contact Information */}
      <motion.div variants={fadeInUp} transition={{ duration: 0.5, delay: 0.2 }}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">Email Address *</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-2xl bg-white px-6 py-4 text-gray-900 border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#AD5618]/20 focus:border-[#AD5618] transition-all text-lg hover:border-gray-300" 
              placeholder="john@example.com" 
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">Phone Number</label>
            <input 
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full rounded-2xl bg-white px-6 py-4 text-gray-900 border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#AD5618]/20 focus:border-[#AD5618] transition-all text-lg hover:border-gray-300" 
              placeholder="+250 7XX XXX XXX" 
            />
          </div>
        </div>
      </motion.div>

      {/* Company Information */}
      <motion.div variants={fadeInUp} transition={{ duration: 0.5, delay: 0.3 }}>
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-3">Company/Organization</label>
          <input 
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full rounded-2xl bg-white px-6 py-4 text-gray-900 border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#AD5618]/20 focus:border-[#AD5618] transition-all text-lg hover:border-gray-300" 
            placeholder="Your company or organization (optional)" 
          />
        </div>
      </motion.div>

      {/* Message Details */}
      <motion.div variants={fadeInUp} transition={{ duration: 0.5, delay: 0.4 }}>
        <h3 className="text-xl font-bold text-gray-900 mb-6">Message Details</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">Subject *</label>
            <input 
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full rounded-2xl bg-white px-6 py-4 text-gray-900 border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#AD5618]/20 focus:border-[#AD5618] transition-all text-lg hover:border-gray-300" 
              placeholder="How can we help you?" 
              required
            />
          </div>
          
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">Message *</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="w-full rounded-2xl bg-white px-6 py-4 text-gray-900 border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#AD5618]/20 focus:border-[#AD5618] transition-all text-lg resize-none hover:border-gray-300" 
              placeholder="Tell us more about your inquiry. Please include any specific details that would help us assist you better..." 
              required
            />
            <div className="mt-2 text-sm text-gray-500">
              {formData.message.length}/500 characters
            </div>
          </div>
        </div>
      </motion.div>

      {/* Privacy Notice */}
      <motion.div 
        variants={fadeInUp} 
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-gray-50 rounded-2xl p-6"
      >
        <div className="flex items-start gap-3">
          <input 
            type="checkbox" 
            id="privacy-consent"
            className="mt-1 w-5 h-5 text-[#AD5618] border-2 border-gray-300 rounded focus:ring-[#AD5618] focus:ring-2" 
            required
          />
          <label htmlFor="privacy-consent" className="text-sm text-gray-600 leading-relaxed">
            I agree to the processing of my personal data in accordance with Iby'Iwacu's Privacy Policy. 
            I understand that my information will be used to respond to my inquiry and may be used to 
            send me relevant updates about products and services.
          </label>
        </div>
      </motion.div>
      
      {/* Submit Button */}
      <motion.div variants={fadeInUp} transition={{ duration: 0.5, delay: 0.6 }}>
        <motion.button
          whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
          whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
          type="submit"
          className={`w-full py-5 rounded-2xl font-bold text-xl transition-all shadow-lg ${
            status === "idle"
              ? "bg-[#AD5618] text-white hover:bg-[#91530A] hover:shadow-xl"
              : status === "sending"
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-green-500 text-white"
          }`}
          disabled={status !== "idle"}
        >
          {status === "idle" && (
            <span className="flex items-center justify-center gap-2">
              Send Message
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </span>
          )}
          {status === "sending" && (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending Message...
            </span>
          )}
          {status === "sent" && (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Message Sent Successfully!
            </span>
          )}
        </motion.button>
        
        {status === "sent" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-green-50 border border-green-200 rounded-2xl"
          >
            <p className="text-green-800 text-center">
              Thank you for your message! We'll get back to you within 24 hours.
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.form>
  );
}