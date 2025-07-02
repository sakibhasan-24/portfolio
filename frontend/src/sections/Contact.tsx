"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "SUCCESS" | "ERROR">(null);
  const [senderName, setSenderName] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_VITE_SID!,
        process.env.NEXT_PUBLIC_VITE_TID!,
        formData,
        process.env.NEXT_PUBLIC_VITE_EM!
      )
      .then(
        () => {
          setLoading(false);
          setStatus("SUCCESS");
          setSenderName(formData.from_name || formData.from_email);
          setFormData({ from_name: "", from_email: "", message: "" });

          setTimeout(() => {
            setStatus(null);
            setSenderName("");
          }, 6000);
        },
        () => {
          setLoading(false);
          setStatus("ERROR");
          setTimeout(() => setStatus(null), 4000);
        }
      );
  };

  const whatsappNumber = "8801966529597";
  const whatsappMessage = encodeURIComponent(
    "Hi! I want to get in touch with you."
  );

  return (
    <div id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl my-10 mx-auto bg-gradient-to-tr from-gray-900/80 via-gray-800/60 to-gray-900/90 p-12 rounded-3xl shadow-lg text-white"
      >
        <h2 className="text-4xl mb-10 text-purple-400 font-extrabold tracking-wide text-center">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit}>
          <label className="block mb-6">
            <span className="block mb-1 font-semibold text-purple-300">
              Name
            </span>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1
              transition"
            />
          </label>

          <label className="block mb-6">
            <span className="block mb-1 font-semibold text-purple-300">
              Email
            </span>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1
              transition"
            />
          </label>

          <label className="block mb-6">
            <span className="block mb-1 font-semibold text-purple-300">
              Message
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Write your message here..."
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1
              transition resize-none"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-1/2 mx-auto flex items-center justify-center cursor-pointer py-3 mt-4 bg-purple-600 hover:bg-purple-700 active:scale-95
            rounded-xl font-semibold text-lg shadow-lg transition-transform duration-150"
          >
            {loading ? "Sending..." : "Send"}
          </button>

          <AnimatePresence>
            {status === "SUCCESS" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-6 text-center text-green-400 font-semibold"
              >
                {`Thanks, ${senderName}! Your message was sent successfully. I'll get back to you soon.`}
              </motion.p>
            )}
            {status === "ERROR" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-6 text-center text-red-400 font-semibold"
              >
                Oops, something went wrong. Please try again.
              </motion.p>
            )}
          </AnimatePresence>
        </form>

        <div className="mt-10 flex justify-center items-center gap-4">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold shadow-lg transition"
          >
            <FaWhatsapp size={24} />
            Connect WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
}
