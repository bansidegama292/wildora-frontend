// import React, { useState } from "react";

// function Animals() {
//   const [filter, setFilter] = useState("All");

//   const animals = [
//     { name: "African Lion", emoji: "🦁", desc: "King of the jungle ruling the savanna", img: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800", tag: "Big Cat", category: "Mammal", color: "from-orange-500 to-red-600" },
//     { name: "Asian Elephant", emoji: "🐘", desc: "The gentle giant with intelligence beyond measure", img: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800", tag: "Mammal", category: "Mammal", color: "from-gray-500 to-gray-700" },
//     { name: "Reticulated Giraffe", emoji: "🦒", desc: "The tallest animal reaching for the skies", img: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=800", tag: "Herbivore", category: "Mammal", color: "from-yellow-500 to-orange-500" },
//     { name: "Bengal Tiger", emoji: "🐯", desc: "The striped predator of the Indian forests", img: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800", tag: "Big Cat", category: "Mammal", color: "from-orange-600 to-yellow-500" },
//     { name: "Zebra", emoji: "🦓", desc: "The striped beauty of African plains", img: "https://images.unsplash.com/photo-1526095179574-86e5e0e0f9c0?w=800", tag: "Herbivore", category: "Mammal", color: "from-gray-700 to-gray-900" },
//     { name: "Peacock", emoji: "🦚", desc: "The colorful national bird of India", img: "https://images.unsplash.com/photo-1574062907701-cb05f2a02e0c?w=800", tag: "Bird", category: "Bird", color: "from-blue-500 to-emerald-500" },
//     { name: "Flamingo", emoji: "🦩", desc: "The elegant pink wading bird", img: "https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=800", tag: "Bird", category: "Bird", color: "from-pink-400 to-rose-500" },
//     { name: "Crocodile", emoji: "🐊", desc: "The ancient predator of the waters", img: "https://images.unsplash.com/photo-1580415111494-d5e15a10d3f8?w=800", tag: "Reptile", category: "Reptile", color: "from-green-700 to-emerald-900" },
//     { name: "King Cobra", emoji: "🐍", desc: "The majestic serpent of the wild", img: "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=800", tag: "Reptile", category: "Reptile", color: "from-green-600 to-lime-600" },
//   ];

//   const categories = ["All", "Mammal", "Bird", "Reptile"];
//   const filtered = filter === "All" ? animals : animals.filter((a) => a.category === filter);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100 pt-20">
//       {/* Header */}
//       <section className="bg-gradient-to-r from-green-950 via-emerald-900 to-green-950 text-white py-20 px-6 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10 text-9xl flex justify-around items-center pointer-events-none">🦁 🐘 🦒</div>
//         <div className="relative z-10 max-w-4xl mx-auto text-center">
//           <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Our Residents</span>
//           <h1 className="text-5xl md:text-6xl font-extrabold mt-3 mb-4">Explore Our Animals</h1>
//           <p className="text-gray-300 text-lg">Meet the incredible creatures that call Wildora home</p>
//         </div>
//       </section>

//       {/* Filter */}
//       <section className="px-6 py-10">
//         <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setFilter(cat)}
//               className={`px-6 py-2.5 rounded-full font-bold transition-all ${
//                 filter === cat ? "bg-green-900 text-white shadow-lg scale-105" : "bg-white text-green-900 hover:bg-green-100 shadow"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* Grid */}
//       <section className="px-6 pb-20">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filtered.map((animal, i) => (
//             <div key={i} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
//               <div className="relative h-64 overflow-hidden">
//                 <img src={animal.img} alt={animal.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
//                 <div className={`absolute top-4 left-4 bg-gradient-to-r ${animal.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>{animal.tag}</div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
//                 <div className="absolute bottom-4 right-4 text-5xl group-hover:scale-125 transition-transform">{animal.emoji}</div>
//                 <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow">{animal.name}</h3>
//               </div>
//               <div className="p-6">
//                 <p className="text-gray-600 mb-4">{animal.desc}</p>
//                 <button className="w-full bg-gradient-to-r from-green-900 to-emerald-700 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all">
//                   Learn More →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Animals;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const animalData = [
  { name: "African Lion", category: "Mammals", image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=700", description: "Known for its strength and majestic appearance." },
  { name: "Elephant", category: "Mammals", image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=700", description: "A gentle giant with remarkable intelligence." },
  { name: "Tiger", category: "Mammals", image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=700", description: "A powerful big cat with beautiful stripes." },
  { name: "Giraffe", category: "Mammals", image: "https://images.unsplash.com/photo-1534567110243-8875d64ca8ff?w=700", description: "The tallest living land animal." },
  { name: "Parrot", category: "Birds", image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=700", description: "A colourful bird known for its intelligence." },
  { name: "Flamingo", category: "Birds", image: "https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=700", description: "A beautiful bird famous for its pink colour." },
];

function Animals() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredAnimals = animalData.filter((animal) => {
    const matchesSearch = animal.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || animal.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <section className="bg-linear-to-br from-forest-light to-forest-dark text-white px-6 py-24 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-60 h-60 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative">
          <p className="text-yellow-400 uppercase tracking-[0.4em] font-bold text-sm">Wildlife Collection</p>
          <h1 className="font-display text-5xl md:text-6xl font-black mt-4">
            Meet Our Animals
          </h1>
          <p className="text-green-100 text-lg mt-5 max-w-2xl leading-8">
            Discover fascinating creatures, explore their world, and learn
            interesting facts about wildlife.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
          <input
            type="text"
            placeholder="🔍 Search animal name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:max-w-md border border-gray-300 rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-forest-light focus:border-transparent transition"
          />
          <div className="flex flex-wrap gap-3">
            {["All", "Mammals", "Birds"].map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  category === item
                    ? "bg-forest-light text-white shadow-lg"
                    : "bg-[#edf2e9] text-forest-light hover:bg-green-200"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <p className="text-gray-500 mb-7">
          Showing <span className="font-bold text-forest-light">{filteredAnimals.length}</span> animals
        </p>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredAnimals.map((animal) => (
              <motion.div
                layout
                key={animal.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
                    {animal.category}
                  </span>
                  <h2 className="font-display text-2xl font-black text-forest-light mt-4">
                    {animal.name}
                  </h2>
                  <p className="text-gray-500 mt-3 leading-7 text-sm">{animal.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredAnimals.length === 0 && (
          <div className="text-center py-20">
            <p className="text-6xl">🐾</p>
            <h3 className="text-2xl font-bold mt-4 text-forest-light">No animals found</h3>
            <p className="text-gray-500 mt-2">Try another search or category.</p>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

export default Animals;