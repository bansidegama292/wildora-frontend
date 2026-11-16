import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="contact" className="bg-gray-950 text-white pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div>
          <h2 className="text-3xl font-extrabold mb-4 flex items-center gap-2">
            <span className="text-yellow-400">🌿</span> Wildora
          </h2>
          <p className="text-gray-400 leading-relaxed">Explore Nature. Discover Wildlife. Create memories that last a lifetime.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link to="/animals" className="hover:text-yellow-400 transition">Animals</Link></li>
            <li><Link to="/gallery" className="hover:text-yellow-400 transition">Gallery</Link></li>
            <li><Link to="/tickets" className="hover:text-yellow-400 transition">Tickets</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400 transition">About</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 text-yellow-400">Visit Us</h3>
          <p className="text-gray-300 mb-2">📍 Wildlife Park, India</p>
          <p className="text-gray-300 mb-2">🕐 Mon-Sun: 9AM - 6PM</p>
          <p className="text-gray-300">🅿️ Free Parking</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 text-yellow-400">Contact</h3>
          <p className="text-gray-300 mb-2">📞 +91 98765 43210</p>
          <p className="text-gray-300 mb-4">✉️ hello@wildora.com</p>
          <div className="flex gap-3 text-2xl">
            <a href="#" className="hover:text-yellow-400 transition hover:scale-125">📘</a>
            <a href="#" className="hover:text-yellow-400 transition hover:scale-125">📷</a>
            <a href="#" className="hover:text-yellow-400 transition hover:scale-125">🐦</a>
            <a href="#" className="hover:text-yellow-400 transition hover:scale-125">▶️</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © 2026 Wildora. All Rights Reserved. Made with 💚 for nature lovers.
      </div>
    </footer>
  );
}

export default Footer;