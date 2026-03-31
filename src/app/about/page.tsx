"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Target, Star, Users, Heart, MapPin, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/about.jpg"
            alt="Rwandan Artisans Community"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Animated Accent Elements */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-[#AD5618]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#eb8034]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center text-white"
            >
              <motion.h1
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-7xl font-extrabold mb-8"
              >
                <motion.span
                  className="inline-block drop-shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  About <span className="text-[#eb8034]">Iby&apos;Iwacu</span>
                </motion.span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-10 drop-shadow-md"
              >
                Connecting Rwanda&apos;s rich cultural heritage with the world through authentic craftsmanship,
                sustainable practices, and meaningful partnerships with local artisans.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-5 justify-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/products"
                    className="group relative px-8 py-4 bg-[#AD5618] text-white rounded-md font-bold text-lg overflow-hidden transition-all duration-300 shadow-2xl hover:bg-[#91530A] inline-flex items-center gap-3"
                  >
                    Explore Our Products
                    <motion.svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="px-8 py-3.5 border-2 border-white text-white rounded-md font-bold text-lg hover:bg-white hover:text-[#AD5618] transition-all duration-300 inline-block shadow-2xl"
                  >
                    Partner With Us
                  </Link>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-20 grid grid-cols-3 gap-10 max-w-4xl mx-auto"
              >
                {[
                  { value: "100+", label: "Artisans Supported" },
                  { value: "5,000+", label: "Products Sold" },
                  { value: "25", label: "Communities Reached" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                  >
                    <motion.div
                      className="text-4xl font-extrabold text-[#eb8034] drop-shadow-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-lg text-white font-semibold mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          whileHover={{ scale: 1.2 }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
              <h2 className="text-5xl font-extrabold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
                <p>
                  Iby&apos;Iwacu, meaning &quot;Our Heritage&quot; in Kinyarwanda, was born from a vision to bridge
                  the gap between Rwanda&apos;s talented artisans and global markets. We believe that every
                  handcrafted piece tells a story of tradition, resilience, and hope.
                </p>
                <p>
                  Founded in 2020, our platform has grown to support over 100 artisans across Rwanda,
                  helping them showcase their incredible skills while preserving centuries-old techniques
                  for future generations.
                </p>
                <p>
                  Today, we&apos;re proud to be a catalyst for positive change, creating sustainable livelihoods
                  while sharing the beauty of Rwandan culture with the world.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="relative h-64 rounded-3xl overflow-hidden shadow-2xl"
                >
                  <Image src="/hand woven baskets 1.png" alt="Artisan at work" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative h-64 rounded-3xl overflow-hidden shadow-2xl mt-8"
                >
                  <Image src="/community 1.png" alt="Community" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                </motion.div>
              </div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-3xl shadow-2xl p-8"
              >
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-[#AD5618]">100+</div>
                  <div className="text-sm text-gray-600 font-semibold">Artisans Supported</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="bg-[#AD5618] text-white rounded-3xl p-10"
            >
              <div className="mb-6">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-extrabold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed opacity-90">
                To empower Rwandan artisans by connecting them with global markets,
                ensuring fair compensation while preserving traditional craftsmanship
                and promoting sustainable economic growth.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100"
            >
              <div className="mb-6">
                <Star className="w-12 h-12 text-[#AD5618]" />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                To become the leading platform for authentic African craftsmanship,
                creating a world where traditional arts thrive in modern markets
                and cultural heritage is celebrated globally.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our relationships with artisans, customers, and communities.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Authenticity",
                description: "Every product is genuinely handcrafted using traditional techniques passed down through generations."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Fair Trade",
                description: "We ensure artisans receive fair compensation and work in safe, respectful conditions."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Sustainability",
                description: "We promote eco-friendly practices and sustainable materials in all our products."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Community",
                description: "We invest in local communities, supporting education and skill development programs."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center p-8 bg-gray-50 rounded-3xl hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-[#AD5618]">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-[#AD5618] text-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold mb-6">Our Impact</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Together with our artisan partners, we&apos;re creating positive change across Rwanda&apos;s creative communities.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: "100+", label: "Artisans Supported", icon: <Users className="w-8 h-8" /> },
              { number: "5,000+", label: "Products Sold", icon: <Star className="w-8 h-8" /> },
              { number: "25", label: "Communities Reached", icon: <MapPin className="w-8 h-8" /> },
              { number: "$50K+", label: "Artisan Earnings", icon: <Heart className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8"
              >
                <div className="flex justify-center mb-4 text-white">{stat.icon}</div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-5xl font-extrabold mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-lg font-semibold opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate individuals dedicated to promoting Rwandan craftsmanship and supporting artisan communities.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "ISHIMWE Amani Samuel",
                role: "Founder & CEO",
                image: "/Ellipse 4.png",
                description: "Passionate about connecting Rwandan artisans with global opportunities."
              },
              {
                name: "UWASE UTUJE Sandrine",
                role: "Artisan Relations Manager",
                image: "/Ellipse 4.png",
                description: "Building strong relationships with our artisan partners across Rwanda."
              },
              {
                name: "IMPANO Blessed Winner",
                role: "Quality Assurance Lead",
                image: "/Ellipse 4.png",
                description: "Ensuring every product meets our high standards of authenticity and quality."
              },
              {
                name: "ABAYO Moise",
                role: "Chief Technology Officer",
                image: "/Ellipse 4.png",
                description: "Ensuring every product meets our high standards of authenticity and quality."
              },
              {
                name: "UMURERWA Bonnette",
                role: "Sales and Marketing Lead",
                image: "/Ellipse 4.png",
                description: "Ensuring every product meets our high standards of authenticity and quality."
              },
              {
                name: "MUGISHA INEZA Nora",
                role: "Chief Operatinal Officer",
                image: "/Ellipse 4.png",
                description: "Ensuring every product meets our high standards of authenticity and quality."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative cursor-pointer"
              >
                <div className="relative bg-white rounded-3xl p-8 transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-[#AD5618]/20 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#AD5618]/5 rounded-bl-full -mr-16 -mt-16 transition-all duration-500 group-hover:w-40 group-hover:h-40" />

                  <div className="relative w-40 h-40 mx-auto mb-8">
                    <div className="absolute inset-0 bg-[#AD5618] rounded-2xl rotate-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-105" />
                    <div className="relative w-full h-full bg-gray-200 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="absolute -bottom-4 right-0 flex flex-col gap-2 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {[
                        { icon: <Linkedin className="w-4 h-4" />, color: "bg-[#0077b5]" },
                        { icon: <Twitter className="w-4 h-4" />, color: "bg-[#1da1f2]" },
                        { icon: <Mail className="w-4 h-4" />, color: "bg-[#AD5618]" }
                      ].map((item, i) => (
                        <motion.a
                          key={i}
                          href="#"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className={`${item.color} text-white p-2.5 rounded-xl shadow-lg`}
                        >
                          {item.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-[#AD5618]">
                      {member.name}
                    </h3>
                    <p className="text-sm font-bold text-[#AD5618] tracking-wider mb-4 opacity-80">
                      {member.role}
                    </p>
                    <div className="h-px w-12 bg-gray-200 mx-auto mb-4 group-hover:w-20 group-hover:bg-[#AD5618]/30 transition-all duration-500" />
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Join Our Journey</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Be part of preserving Rwanda&apos;s cultural heritage while supporting sustainable livelihoods for talented artisans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/products"
                  className="inline-block bg-[#AD5618] text-white px-6 py-4 rounded-md font-semibold text-lg hover:bg-[#91530A] transition-colors shadow-xl"
                >
                  Shop Our Collection
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-block border-2 border-[#AD5618] text-[#AD5618] px-6 py-4 rounded-md font-semibold text-lg hover:bg-[#AD5618] hover:text-white transition-colors"
                >
                  Partner With Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}