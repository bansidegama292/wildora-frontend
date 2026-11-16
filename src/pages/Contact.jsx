
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const contactInfo = [
    {
      icon: "📍",
      title: "Our Location",
      detail: "Wildora Wildlife Park, Gujarat, India",
    },
    {
      icon: "📞",
      title: "Phone Number",
      detail: "+91 98765 43210",
    },
    {
      icon: "✉️",
      title: "Email Address",
      detail: "info@wildora.com",
    },
    {
      icon: "🕒",
      title: "Opening Hours",
      detail: "Monday - Sunday: 9 AM - 6 PM",
    },
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Feedback submission failed");
      }

      setSuccess("Thank you! Your feedback has been submitted successfully.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setError(err.message || "Server connection failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-linear-to-r from-green-950 via-green-800 to-emerald-700 text-white py-20 px-6 text-center">
        <p className="text-green-200 uppercase tracking-[4px] text-sm mb-4">
          We'd Love To Hear From You
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-5">
          Contact <span className="text-lime-300">Wildora</span>
        </h1>

        <p className="max-w-2xl mx-auto text-green-100 text-lg">
          Have a question, suggestion, or feedback?
          Get in touch with our Wildora team.
        </p>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-12">
          <p className="text-green-700 font-semibold tracking-widest uppercase">
            Get In Touch
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-3">
            We Are Here For You
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-2xl shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-4xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-green-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 word-break-words">
                {item.detail}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <p className="text-green-700 font-semibold tracking-widest uppercase">
              Send Feedback
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-3 mb-6">
              Share Your Experience With Us
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              Your feedback helps us improve the Wildora
              Zoo experience. Send us your questions,
              suggestions, and valuable feedback.
            </p>

            <div className="bg-green-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3">
                Explore Wildora
              </h3>

              <p className="text-green-100 leading-7">
                Discover wildlife, enjoy nature, and
                create unforgettable memories with us.
              </p>

              <div className="text-5xl mt-5">
                🦁 🐘 🦒
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl p-7 md:p-10">

            <h3 className="text-2xl font-bold text-green-950 mb-2">
              Send Us a Message
            </h3>

            <p className="text-gray-500 mb-7">
              Fill in the details below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your feedback here..."
                  rows="5"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600 resize-none"
                ></textarea>
              </div>

              {success && (
                <p className="text-green-700 bg-green-50 p-3 rounded-lg">
                  {success}
                </p>
              )}

              {error && (
                <p className="text-red-600 bg-red-50 p-3 rounded-lg">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-900 text-white py-4 rounded-xl font-bold hover:bg-green-800 transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Feedback →"}
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* Google Map - Gujarat Zoo */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="text-center mb-8">
          <p className="text-green-700 font-semibold tracking-widest uppercase">
            Find Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-3">
            Explore Zoos in Gujarat
          </h2>

          <p className="text-gray-600 mt-3">
            Find zoo locations across Gujarat on Google Maps.
          </p>
        </div>

        <div className="bg-white p-3 rounded-3xl shadow-xl overflow-hidden">

          <iframe
            title="Zoo Locations in Gujarat"
            src="https://www.google.com/maps?q=Zoo+in+Gujarat+India&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

        <div className="text-center mt-7">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Zoo+in+Gujarat+India"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-900 text-white px-8 py-3 rounded-full font-bold hover:bg-green-800 transition"
          >
            Get Directions 📍
          </a>
        </div>

      </section>
              <Footer/>
    </div>
  );
}

export default Contact;
