// import React, { useState } from "react";
// import Navbar from "../Components/Navbar";

// function Home() {
//   const [videoError, setVideoError] = useState(false);

//   const animals = [
//     { name: "African Lion", emoji: "🦁", desc: "The majestic king of the jungle ruling the savanna", img: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800", tag: "Big Cat", color: "from-orange-500 to-red-600" },
//     { name: "Asian Elephant", emoji: "🐘", desc: "The gentle giant with intelligence beyond measure", img: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800", tag: "Mammal", color: "from-gray-500 to-gray-700" },
//     { name: "Reticulated Giraffe", emoji: "🦒", desc: "The tallest animal reaching for the skies", img: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=800", tag: "Herbivore", color: "from-yellow-500 to-orange-500" },
//   ];

//   const galleryImages = [
//     "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600",
//     "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=600",
//     "https://images.unsplash.com/photo-1552410260-0fd9b577afa6?w=600",
//     "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600",
//     "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600",
//     "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600",
//   ];

//   const tickets = [
//     { type: "Kids", price: "₹199", icon: "🧒", features: ["Ages 3-12", "Full day access", "Free souvenir"], popular: false },
//     { type: "Adults", price: "₹399", icon: "🎫", features: ["Full day access", "Guided tour", "Free parking"], popular: true },
//     { type: "Family", price: "₹999", icon: "👨‍👩‍👧", features: ["2 Adults + 2 Kids", "Priority entry", "Safari ride"], popular: false },
//   ];

//   const stats = [
//     { number: "250+", label: "Animals", icon: "🐾" },
//     { number: "50K+", label: "Happy Visitors", icon: "👨‍👩‍👧" },
//     { number: "15+", label: "Years", icon: "🏆" },
//     { number: "30+", label: "Species", icon: "🌍" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-green-100 font-sans overflow-x-hidden">


//       {/* ============ HERO ============ */}
//       <section id="home" className="relative min-h-screen flex items-center justify-center text-center text-white px-5 pt-20 overflow-hidden">
//         {!videoError ? (
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             poster="https://images.unsplash.com/photo-1511497584788-876760111969?w=1600"
//             onError={() => setVideoError(true)}
//             className="absolute inset-0 w-full h-full object-cover z-0"
//           >
//             <source src="https://videos.pexels.com/video-files/3576378/3576378-hd_1920_1080_30fps.mp4" type="video/mp4" />
//             <source src="https://cdn.coverr.co/videos/coverr-a-lion-in-the-wild-1573/1080p.mp4" type="video/mp4" />
//           </video>
//         ) : (
//           <img src="https://images.unsplash.com/photo-1511497584788-876760111969?w=1600" alt="Wildlife" className="absolute inset-0 w-full h-full object-cover z-0" />
//         )}

//         <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-black/50 to-green-950/90 z-10"></div>
//         <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl z-10"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl z-10"></div>

//         <div className="relative z-20 max-w-5xl">
//           <span className="inline-block bg-yellow-400/20 border border-yellow-400 text-yellow-300 px-5 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-md">
//             🌍 Welcome to the Wild Side
//           </span>
//           <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
//             Experience the <br />
//             <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
//               Beauty of Wildlife
//             </span>
//           </h2>
//           <p className="text-lg md:text-2xl mb-10 text-gray-100 max-w-2xl mx-auto drop-shadow-lg">
//             Explore breathtaking animals, discover nature's wonders, and create memories that last a lifetime.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-green-900 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg">
//               🎟️ Book Your Tickets
//             </button>
//             <button className="bg-white/10 backdrop-blur-md border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-900 transition-all duration-300">
//               ▶ Watch Video
//             </button>
//           </div>
//           <div className="mt-16 animate-bounce">
//             <div className="w-6 h-10 border-2 border-white/70 rounded-full mx-auto flex items-start justify-center p-2">
//               <div className="w-1.5 h-2 bg-white rounded-full"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ============ STATS ============ */}
//       <section className="bg-gradient-to-r from-green-950 via-emerald-900 to-green-950 text-white py-14 px-6 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10 text-[150px] flex justify-around items-center pointer-events-none select-none">🦁 🐘 🦒 🦓</div>
//         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
//           {stats.map((stat, i) => (
//             <div key={i} className="text-center p-4 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-default">
//               <div className="text-4xl mb-2">{stat.icon}</div>
//               <div className="text-3xl font-extrabold text-yellow-400">{stat.number}</div>
//               <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ============ ABOUT ============ */}
//       <section id="about" className="py-20 px-6">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <div className="relative">
//             <img src="https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=800" alt="About Wildora" className="rounded-3xl shadow-2xl w-full h-[400px] object-cover" />
//             <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-green-900 p-6 rounded-2xl shadow-xl hidden md:block">
//               <div className="text-4xl font-extrabold">15+</div>
//               <div className="text-sm font-bold">Years of Magic</div>
//             </div>
//           </div>
//           <div>
//             <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">About Us</span>
//             <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mt-3 mb-6">
//               About <span className="text-emerald-600">Wildora</span>
//             </h2>
//             <p className="text-gray-700 text-lg leading-relaxed mb-6">
//               Wildora is an online zoo ticket booking platform. Visitors can explore different animals, check ticket details and book their zoo tickets easily from anywhere.
//             </p>
//             <p className="text-gray-600 leading-relaxed mb-8">
//               Our mission is to connect people with nature and wildlife in the most memorable way possible. Join us in our journey to celebrate and protect the incredible diversity of life on Earth.
//             </p>
//             <div className="flex gap-4 flex-wrap">
//               <button className="bg-green-900 text-white px-8 py-3 rounded-full font-bold hover:bg-green-800 transition-all hover:scale-105">Learn More</button>
//               <button className="border-2 border-green-900 text-green-900 px-8 py-3 rounded-full font-bold hover:bg-green-900 hover:text-white transition-all">Our Mission</button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ============ ANIMALS ============ */}
//       <section id="animals" className="py-20 px-6 bg-gradient-to-b from-white to-green-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-14">
//             <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Our Residents</span>
//             <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mt-3">Explore Our Animals</h2>
//             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Meet the incredible creatures that call Wildora home</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {animals.map((animal, i) => (
//               <div key={i} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-green-100">
//                 <div className="relative overflow-hidden h-72">
//                   <img src={animal.img} alt={animal.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
//                   <div className={`absolute top-4 left-4 bg-gradient-to-r ${animal.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>{animal.tag}</div>
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70"></div>
//                   <div className="absolute bottom-4 right-4 text-5xl drop-shadow-2xl group-hover:scale-125 transition-transform duration-300">{animal.emoji}</div>
//                   <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-lg">{animal.name}</h3>
//                 </div>
//                 <div className="p-6">
//                   <p className="text-gray-600 mb-4">{animal.desc}</p>
//                   <button className="w-full bg-gradient-to-r from-green-900 to-emerald-700 text-white py-3 rounded-full font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300">Discover →</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============ GALLERY ============ */}
//       <section id="gallery" className="py-20 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Moments</span>
//             <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mt-3">Wild Gallery</h2>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {galleryImages.map((img, i) => (
//               <div key={i} className={`relative overflow-hidden rounded-2xl group cursor-pointer ${i === 0 || i === 3 ? "row-span-2" : ""}`}>
//                 <img
//                   src={img}
//                   alt={`Gallery ${i + 1}`}
//                   className={`w-full ${i === 0 || i === 3 ? "h-full min-h-[400px]" : "h-48 md:h-64"} object-cover group-hover:scale-110 transition-transform duration-700`}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
//                   <span className="text-white font-bold">View →</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============ TICKETS ============ */}
//       <section id="tickets" className="py-20 px-6 bg-gradient-to-b from-green-50 to-emerald-100">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-14">
//             <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Pricing</span>
//             <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mt-3">Choose Your Ticket</h2>
//             <p className="text-gray-600 mt-4">Pick the perfect plan for your wild adventure</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {tickets.map((ticket, i) => (
//               <div
//                 key={i}
//                 className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
//                   ticket.popular
//                     ? "bg-gradient-to-br from-green-900 to-emerald-800 text-white shadow-2xl md:scale-110 border-4 border-yellow-400"
//                     : "bg-white text-green-900 shadow-xl border border-green-100"
//                 }`}
//               >
//                 {ticket.popular && (
//                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-green-900 px-5 py-1.5 rounded-full text-sm font-extrabold shadow-lg whitespace-nowrap">
//                     ⭐ MOST POPULAR
//                   </div>
//                 )}
//                 <div className="text-center">
//                   <div className="text-5xl mb-3">{ticket.icon}</div>
//                   <h3 className="text-2xl font-bold mb-2">{ticket.type}</h3>
//                   <div className="text-5xl font-extrabold mb-6">
//                     <span className={ticket.popular ? "text-yellow-400" : "text-emerald-600"}>{ticket.price}</span>
//                     <span className="text-sm font-normal opacity-70"> /visit</span>
//                   </div>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   {ticket.features.map((f, idx) => (
//                     <li key={idx} className="flex items-center gap-2">
//                       <span className={ticket.popular ? "text-yellow-400" : "text-emerald-600"}>✓</span>
//                       <span className={ticket.popular ? "text-gray-200" : "text-gray-700"}>{f}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <button
//                   className={`w-full py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 ${
//                     ticket.popular
//                       ? "bg-yellow-400 text-green-900 hover:bg-yellow-300 shadow-lg"
//                       : "bg-green-900 text-white hover:bg-green-800"
//                   }`}
//                 >
//                   Book Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============ FINAL CTA ============ */}
//       <section className="relative bg-gradient-to-r from-green-950 via-emerald-900 to-green-950 text-white text-center py-24 px-5 overflow-hidden">
//         <div className="absolute inset-0 opacity-10 text-9xl flex items-center justify-around pointer-events-none select-none">
//           <span>🦓</span><span>🦒</span><span>🦁</span>
//         </div>
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
//         <div className="relative z-10 max-w-3xl mx-auto">
//           <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
//             Ready for a <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Wild Adventure?</span>
//           </h2>
//           <p className="text-lg md:text-xl mb-10 text-gray-200">
//             Book your tickets today and enjoy an amazing wildlife experience with your family and friends.
//           </p>
//           <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-green-900 px-12 py-4 rounded-full font-extrabold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl">
//             🎟️ Book Tickets Now
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const animals = [
  {
    name: "African Lion",
    type: "King of the Jungle",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=700",
  },
  {
    name: "Elephant",
    type: "Gentle Giant",
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=700",
  },
  {
    name: "Tiger",
    type: "The Powerful Predator",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=700",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="relative min-h-[85vh] flex items-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(100deg,rgba(4,35,22,.95),rgba(4,35,22,.4)),url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600')",
        }}
      >
        <div className="absolute top-20 right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-float" />
        <div className="max-w-7xl mx-auto px-6 w-full py-24 relative">
          <div className="max-w-2xl text-white">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-yellow-400 font-bold tracking-[0.4em] uppercase mb-6 text-sm"
            >
              ✦ Welcome to Wildora Zoo
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl font-black leading-[1.05]"
            >
              Discover The{" "}
              <span className="text-yellow-400 italic">Wild</span> World
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-200 text-lg leading-8 mt-7 max-w-xl"
            >
              Explore the amazing world of wildlife. Meet beautiful animals,
              learn about nature, and enjoy a memorable experience with your
              family.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="flex flex-wrap gap-4 mt-9"
            >
              <Link to="/tickets" className="btn-gold">
                Book Your Tickets ↗
              </Link>
              <Link to="/about" className="btn-outline">
                Explore More
              </Link>
            </motion.div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest uppercase">
          ↓ Scroll to explore
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#e8efe4] py-14 border-b border-green-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["50+", "Animal Species"],
            ["1000+", "Happy Visitors"],
            ["20+", "Years of Care"],
            ["100%", "Love for Nature"],
          ].map(([number, label], i) => (
            <motion.div
              key={label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <h2 className="font-display text-4xl md:text-5xl font-black text-forest-light">
                {number}
              </h2>
              <p className="text-gray-600 mt-2 text-sm font-medium">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="section-label">About Our Zoo</p>
            <h2 className="font-display text-4xl md:text-5xl font-black text-forest-light leading-tight mt-4">
              A Place Where Nature Comes Alive
            </h2>
            <p className="text-gray-600 leading-8 mt-6">
              Wildora is a place to discover wildlife, understand nature, and
              learn why protecting animals matters. Enjoy a wonderful day
              exploring the animal kingdom.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 bg-forest-light text-white px-7 py-3 rounded-full font-bold hover:bg-forest-dark hover:gap-4 transition-all"
            >
              Know More About Us →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=900"
              alt="Wildlife"
              className="w-full h-105 object-cover rounded-4xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-forest-dark px-6 py-4 rounded-2xl shadow-xl font-black">
              Since 2005 🌿
            </div>
          </motion.div>
        </div>
      </section>

      {/* ANIMALS */}
      <section className="bg-[#f0f4eb] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-label">Wildlife Collection</p>
            <h2 className="font-display text-4xl md:text-5xl font-black text-forest-light mt-3">
              Meet Our Amazing Animals
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Discover some of the wonderful creatures at Wildora.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {animals.map((animal, i) => (
              <motion.div
                key={animal.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-amber-700 font-semibold uppercase tracking-widest">
                    {animal.type}
                  </p>
                  <h3 className="font-display text-2xl font-black text-forest-light mt-2">
                    {animal.name}
                  </h3>
                  <Link
                    to="/animals"
                    className="inline-flex items-center gap-2 mt-5 font-bold text-green-800 hover:text-amber-700 hover:gap-4 transition-all"
                  >
                    Explore Animal →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/animals"
              className="inline-block border-2 border-forest-light text-forest-light px-8 py-3 rounded-full font-bold hover:bg-forest-light hover:text-white transition-all"
            >
              View All Animals
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-4xl bg-linear-to-br from-forest-light to-forest-dark text-white p-10 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl" />
          <p className="text-yellow-400 uppercase tracking-[0.3em] font-bold relative">
            Plan Your Visit
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-4 relative">
            Your Wild Adventure Starts Here!
          </h2>
          <p className="text-green-100 mt-5 max-w-2xl mx-auto leading-7 relative">
            Choose your visit date and book your tickets online. Make wonderful
            memories with family and friends.
          </p>
          <Link to="/tickets" className="btn-gold mt-8 relative">
            Book Tickets Now ↗
          </Link>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}

export default Home;