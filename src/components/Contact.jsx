import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Replace these with your own EmailJS info
    const serviceID = "service_03jkwcc";
    const templateID = "template_tsrqrbj";
    const userID = "BaFswMHyviXUIlHws";

    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then(
        () => {
          setLoading(false);
          setMessage("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setMessage("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="  w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 "
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">Get in Touch</h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Have a project or question? Send me a message!
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2">
        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-800 rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-semibold">
              Name
            </label>
            <input
              id="name"
              name="user_name"
              type="text"
              required
              className="w-full rounded-md bg-gray-700 border border-gray-600 px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              id="email"
              name="user_email"
              type="email"
              required
              className="w-full rounded-md bg-gray-700 border border-gray-600 px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full rounded-md bg-gray-700 border border-gray-600 px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {message && (
            <p className="mt-4 text-center text-green-400 font-semibold">
              {message}
            </p>
          )}
        </motion.form>

        {/* Map */}
        <motion.div
          className="rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
           <iframe
            title="location"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.117241171332!2d75.78727047538387!3d26.89663846064168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4040c69d4d5%3A0x4e6dcab1a7c16f9b!2sHawa%20Mahal!5e0!3m2!1sen!2sin!4v1685263061674!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
