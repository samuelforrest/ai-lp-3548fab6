import { motion } from "framer-motion";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#161926] via-[#1a223a] to-[#232946] text-white overflow-x-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.65 }}
        transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }}
      >
        <motion.div
          className="absolute w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-pink-500 via-yellow-400 to-red-500 blur-3xl opacity-40 left-[-20vw] top-[-20vw]"
          animate={{
            scale: [1, 1.08, 1],
            y: [0, 40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
        <motion.div
          className="absolute w-[40vw] h-[40vw] rounded-full bg-gradient-to-tl from-blue-600 via-purple-500 to-emerald-400 blur-2xl opacity-30 right-[-15vw] bottom-[-10vw]"
          animate={{
            scale: [1, 1.1, 0.95, 1],
            x: [0, 20, -10, 0],
            y: [0, -30, 25, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 17,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
      </motion.div>

      {/* Header/Nav */}
      <header className="fixed top-0 left-0 w-full z-30 bg-gradient-to-b from-[#181b25]/90 to-transparent backdrop-blur-sm border-b border-white/10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 font-bold text-xl md:text-2xl tracking-wide text-yellow-300">
            <span>
              <svg className="w-8 h-8 md:w-9 md:h-9" fill="none" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="15" fill="#FDE68A" />
                <path d="M8 22c0-5.333 16-5.333 16 0" stroke="#F59E42" strokeWidth="2" strokeLinecap="round" />
                <ellipse cx="12" cy="14" rx="2" ry="3" fill="#fff" />
                <ellipse cx="20" cy="14" rx="2" ry="3" fill="#fff" />
              </svg>
            </span>
            Grandma's Bakes
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-base font-medium">
            <li>
              <a href="#home" className="hover:text-yellow-300 transition-colors duration-200 focus-visible:text-yellow-300">Home</a>
            </li>
            <li>
              <a href="#features" className="hover:text-yellow-300 transition-colors duration-200 focus-visible:text-yellow-300">Features</a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-300 transition-colors duration-200 focus-visible:text-yellow-300">About</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-yellow-300 transition-colors duration-200 focus-visible:text-yellow-300">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-300 transition-colors duration-200 focus-visible:text-yellow-300">Contact</a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              type="button"
              className="flex items-center px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
              aria-label="Open navigation"
            >
              <svg className="w-7 h-7 text-yellow-300" fill="none" viewBox="0 0 24 24">
                <rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor" />
                <rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor" />
                <rect x="4" y="16" width="16" height="2" rx="1" fill="currentColor" />
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Nav Menu (static, no toggle logic, just for demonstration) */}
        <ul className="md:hidden px-6 pb-4 pt-1 space-y-2 hidden">
          <li>
            <a href="#home" className="block py-2 px-3 rounded hover:bg-yellow-300/10 text-yellow-100 focus-visible:bg-yellow-300/20">Home</a>
          </li>
          <li>
            <a href="#features" className="block py-2 px-3 rounded hover:bg-yellow-300/10 text-yellow-100 focus-visible:bg-yellow-300/20">Features</a>
          </li>
          <li>
            <a href="#about" className="block py-2 px-3 rounded hover:bg-yellow-300/10 text-yellow-100 focus-visible:bg-yellow-300/20">About</a>
          </li>
          <li>
            <a href="#testimonials" className="block py-2 px-3 rounded hover:bg-yellow-300/10 text-yellow-100 focus-visible:bg-yellow-300/20">Testimonials</a>
          </li>
          <li>
            <a href="#contact" className="block py-2 px-3 rounded hover:bg-yellow-300/10 text-yellow-100 focus-visible:bg-yellow-300/20">Contact</a>
          </li>
        </ul>
      </header>

      <main className="relative pt-28 md:pt-36 z-10">
        {/* Hero Section */}
        <section id="home" className="relative flex flex-col items-center justify-center text-center px-4 md:px-0 min-h-[70vh]">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg mb-6"
          >
            Grandma’s Baking, <span className="block">Reimagined.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
            className="max-w-xl mx-auto text-lg md:text-2xl text-gray-200 font-medium mb-8"
          >
            Bringing generations of oven-baked magic to your door. Taste the warmth, love, and legacy in every bite.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <a
              href="#cta"
              className="inline-block bg-gradient-to-tr from-yellow-400 via-pink-400 to-red-400 shadow-xl text-[#181b25] font-bold px-8 py-3 rounded-full text-lg md:text-xl transition-all duration-200 hover:scale-105 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-yellow-300"
            >
              Order a Sweet Memory
            </a>
          </motion.div>
        </section>

        {/* Features */}
        <motion.section
          id="features"
          className="relative max-w-6xl mx-auto mt-24 md:mt-32 px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.42, 0, 0.58, 1] }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-yellow-300 mb-6 text-center">What Makes Us Special?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="bg-[#212438]/90 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-200"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <span className="mb-4">
                <svg className="w-10 h-10 text-pink-400" fill="none" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="18" fill="#F9A8D4" />
                  <path d="M14 24c0-4 12-4 12 0" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" />
                  <ellipse cx="16" cy="18" rx="2" ry="3" fill="#fff" />
                  <ellipse cx="24" cy="18" rx="2" ry="3" fill="#fff" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold mb-2 text-yellow-200">Secret Family Recipes</h3>
              <p className="text-gray-200">Passed down through generations, every treat is baked with a pinch of nostalgia and a cup of love.</p>
            </motion.div>

            <motion.div
              className="bg-[#212438]/90 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-200"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <span className="mb-4">
                <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 40 40">
                  <rect x="6" y="6" width="28" height="28" rx="14" fill="#FDE68A" />
                  <path d="M20 14v8m0 4h.01" stroke="#F59E42" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold mb-2 text-yellow-200">Fresh, Local Ingredients</h3>
              <p className="text-gray-200">We use only the finest local produce, ensuring every bite bursts with authentic flavor and wholesome goodness.</p>
            </motion.div>

            <motion.div
              className="bg-[#212438]/90 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-200"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <span className="mb-4">
                <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="18" fill="#60A5FA" />
                  <path d="M14 26c0-2.5 12-2.5 12 0" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
                  <ellipse cx="20" cy="17" rx="7" ry="5" fill="#fff" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold mb-2 text-yellow-200">Modern Ordering, Classic Taste</h3>
              <p className="text-gray-200">Order online with ease and get grandma’s goodness delivered—still warm, always fresh, forever classic.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="relative max-w-5xl mx-auto mt-24 md:mt-32 px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
        >
          <div className="bg-[#181b25]/90 rounded-3xl shadow-lg p-8 md:p-14 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 flex-shrink-0 mb-6 md:mb-0">
              <motion.img
                src="/grandma-baking.jpg"
                alt="Grandma baking"
                className="w-full rounded-2xl object-cover shadow-md border-4 border-yellow-300/30"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-3">Our Story</h2>
              <p className="text-gray-200 mb-3 text-lg">
                Born in a humble kitchen, Grandma’s Bakes began with one goal: to spread the joy of homemade treats far and wide.
              </p>
              <p className="text-gray-400 mb-3">
                From melt-in-your-mouth cookies to show-stopping cakes, each creation is a tribute to family, tradition, and the timeless art of baking.
              </p>
              <p className="text-gray-400 text-base">
                Every order helps support local charities and brings a smile to someone in need. Taste the difference kindness makes!
              </p>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          id="testimonials"
          className="relative max-w-6xl mx-auto mt-24 md:mt-32 px-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-yellow-300 mb-8 text-center">Loved by the Community</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="bg-[#232946]/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-yellow-300/10 hover:scale-105 transition-transform duration-200"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250, damping: 28 }}
            >
              <svg className="w-12 h-12 mb-3 text-yellow-300" fill="none" viewBox="0 0 32 32">
                <ellipse cx="16" cy="16" rx="14" ry="14" fill="#FDE68A" />
                <ellipse cx="16" cy="18" rx="8" ry="6" fill="#fff" />
              </svg>
              <p className="text-gray-100 mb-3 italic">
                “The cinnamon rolls taste just like my childhood. My grandkids can’t get enough!”
              </p>
              <span className="text-yellow-200 font-semibold">— Margaret S.</span>
            </motion.div>
            <motion.div
              className="bg-[#232946]/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-yellow-300/10 hover:scale-105 transition-transform duration-200"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250, damping: 28 }}
            >
              <svg className="w-12 h-12 mb-3 text-pink-400" fill="none" viewBox="0 0 32 32">
                <ellipse cx="16" cy="16" rx="14" ry="14" fill="#F9A8D4" />
                <ellipse cx="16" cy="18" rx="8" ry="6" fill="#fff" />
              </svg>
              <p className="text-gray-100 mb-3 italic">
                “Ordered online and had the yummiest lemon cake delivered in hours. So easy!”
              </p>
              <span className="text-yellow-200 font-semibold">— Jamie R.</span>
            </motion.div>
            <motion.div
              className="bg-[#232946]/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-yellow-300/10 hover:scale-105 transition-transform duration-200"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250, damping: 28 }}
            >
              <svg className="w-12 h-12 mb-3 text-blue-300" fill="none" viewBox="0 0 32 32">
                <ellipse cx="16" cy="16" rx="14" ry="14" fill="#60A5FA" />
                <ellipse cx="16" cy="18" rx="8" ry="6" fill="#fff" />
              </svg>
              <p className="text-gray-100 mb-3 italic">
                “Every cookie feels like a hug from grandma herself. Outstanding flavor!”
              </p>
              <span className="text-yellow-200 font-semibold">— Priya D.</span>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          id="cta"
          className="relative max-w-4xl mx-auto mt-24 md:mt-32 px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        >
          <div className="rounded-3xl bg-gradient-to-r from-yellow-300 via-pink-400 to-red-400 px-6 md:px-16 py-12 flex flex-col items-center text-center shadow-xl">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#181b25] mb-4">Craving Something Sweet?</h2>
            <p className="text-[#181b25]/80 mb-7 text-lg md:text-xl font-medium max-w-2xl">
              Indulge in our hand-crafted treats and rediscover the magic of homemade baking. Secure your batch today!
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#181b25] text-yellow-300 font-bold px-8 py-3 rounded-full text-lg md:text-xl transition-all duration-200 hover:bg-[#232946] hover:text-pink-200 focus-visible:ring-2 focus-visible:ring-pink-400"
            >
              Get in Touch
            </a>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="relative max-w-5xl mx-auto mt-24 md:mt-32 px-4 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        >
          <div className="bg-[#181b25]/90 rounded-3xl shadow-lg p-8 md:p-14 flex flex-col md:flex-row gap-10 items-center">
            {/* Contact Info */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-4">Contact Us</h2>
              <p className="text-gray-200 mb-2">
                Have a question, custom request, or just want to chat about cookies?
              </p>
              <div className="flex flex-col gap-2 text-base mt-4">
                <div className="flex items-center gap-2 text-yellow-200">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path d="M2.5 5.5C2.5 4.67 3.17 4 4 4h12a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 16 16h-12A1.5 1.5 0 0 1 2.5 14.5v-9Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3 5l7 6 7-6" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span>hello@grandmasbakes.com</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-200">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path d="M3 6.5c0-1.11.9-2 2-2h10a2 2 0 0 1 2 2v7c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2v-7Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M7 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span>123 Flour Ave, Sweetville</span>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="hover:text-pink-400 transition-colors duration-200 focus-visible:text-pink-400"
                  aria-label="Instagram"
                >
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                    <circle cx="17" cy="7" r="1.2" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-yellow-300 transition-colors duration-200 focus-visible:text-yellow-300"
                  aria-label="Facebook"
                >
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                    <path d="M15 8h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-200 focus-visible:text-blue-400"
                  aria-label="Twitter"
                >
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                    <path d="M7 17c6.5 0 10-5.25 10-9.77V7c.7-.49 1.3-1 1.8-1.6-.65.3-1.4.55-2.1.65A3.44 3.44 0 0 0 18 5c-.7.4-1.5.7-2.3.7-1.8 0-3.2 1.4-3.2 3.2 0 .25.03.5.08.73-2.7-.13-5.1-1.4-6.7-3.3-.3.5-.5 1.1-.5 1.7 0 1.1.6 2.1 1.5 2.7-.6-.02-1.2-.2-1.7-.5v.07c0 1.5 1.1 2.8 2.6 3.1-.2.06-.5.08-.7.08-.2 0-.4-.02-.6-.05.4 1.3 1.6 2.2 3 2.2A6.93 6.93 0 0 1 4 16.4c-.2 0-.4-.01-.6-.04.6.4 1.2.7 1.8.7" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Contact Form */}
            <form className="w-full md:w-1/2 space-y-6">
              <div>
                <label htmlFor="name" className="block text-yellow-200 font-semibold mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#212438]/70 border border-yellow-300/30 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-yellow-200 font-semibold mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#212438]/70 border border-yellow-300/30 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 placeholder-gray-400"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-yellow-200 font-semibold mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#212438]/70 border border-yellow-300/30 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 placeholder-gray-400 resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-tr from-yellow-400 via-pink-400 to-red-400 text-[#181b25] font-bold py-3 rounded-full text-lg transition-all duration-200 hover:scale-105 hover:bg-yellow-400/80 focus-visible:ring-2 focus-visible:ring-pink-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="relative z-20 bg-[#161926]/95 border-t border-white/10 py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-yellow-300 font-bold text-lg">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="15" fill="#FDE68A" />
              <path d="M8 22c0-5.333 16-5.333 16 0" stroke="#F59E42" strokeWidth="2" strokeLinecap="round" />
              <ellipse cx="12" cy="14" rx="2" ry="3" fill="#fff" />
              <ellipse cx="20" cy="14" rx="2" ry="3" fill="#fff" />
            </svg>
            Grandma's Bakes
          </div>
          <ul className="flex gap-6 text-gray-300 text-base font-medium">
            <li>
              <a href="#home" className="hover:text-yellow-300 transition-colors duration-200 focus-visible:text-yellow-300">Home</a>
            </li>
            <li>
              <a href="#features" className="hover:text-yellow-300 transition-colors duration-200 focus-visible:text-yellow-300">Features</a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-300 transition-colors duration-200 focus-visible:text-yellow-300">About</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-yellow-300 transition-colors duration-200 focus-visible:text-yellow-300">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-300 transition-colors duration-200 focus-visible:text-yellow-300">Contact</a>
            </li>
          </ul>
          <div className="flex gap-3">
            <a href="#" className="hover:text-pink-400 transition-colors duration-200 focus-visible:text-pink-400" aria-label="Instagram">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                <circle cx="17" cy="7" r="1.2" fill="currentColor" />
              </svg>
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors duration-200 focus-visible:text-yellow-300" aria-label="Facebook">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                <path d="M15 8h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200 focus-visible:text-blue-400" aria-label="Twitter">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                <path d="M7 17c6.5 0 10-5.25 10-9.77V7c.7-.49 1.3-1 1.8-1.6-.65.3-1.4.55-2.1.65A3.44 3.44 0 0 0 18 5c-.7.4-1.5.7-2.3.7-1.8 0-3.2 1.4-3.2 3.2 0 .25.03.5.08.73-2.7-.13-5.1-1.4-6.7-3.3-.3.5-.5 1.1-.5 1.7 0 1.1.6 2.1 1.5 2.7-.6-.02-1.2-.2-1.7-.5v.07c0 1.5 1.1 2.8 2.6 3.1-.2.06-.5.08-.7.08-.2 0-.4-.02-.6-.05.4 1.3 1.6 2.2 3 2.2A6.93 6.93 0 0 1 4 16.4c-.2 0-.4-.01-.6-.04.6.4 1.2.7 1.8.7" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-7">
          &copy; {new Date().getFullYear()} Grandma's Bakes. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
export default LandingPage;