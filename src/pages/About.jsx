
// import React from "react";
// import { useForm } from "react-hook-form";

// function registration() {

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset
//   } = useForm();

//   const onSubmit = async (data) => {

//   try {

//     const response = await fetch(
//       "http://localhost:5000/api/auth/register",
//       {
//         method: "POST",

//         headers: {
//           "Content-Type": "application/json"
//         },

//         body: JSON.stringify(data)
//       }
//     );

//     const result = await response.json();

//     if (response.ok) {
//       alert(result.message);
//       reset();
//     } 
//     else {
//       alert(result.message);
//     }

//   } catch (error) {

//     console.log("Error:", error);
//     alert("Backend connection failed!");

//   }

// };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-5">

//       <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">

//         <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
//           Registration Form
//         </h2>

//           <form onSubmit={handleSubmit(onSubmit)}>
//           {/* Name */}
//           <label className="block font-semibold mb-1">
//             Full Name
//           </label>

//           <input
//             type="text"
//             placeholder="Enter your name"
//             className="w-full border border-gray-300 rounded-lg p-3 mb-1 focus:outline-none focus:ring-2 focus:ring-green-500"
//             {...register("name", {
//               required: "Name is required"
//             })}
//           />

//           <p className="text-red-500 text-sm mb-3">
//             {errors.name?.message}
//           </p>

//           {/* Email */}
//           <label className="block font-semibold mb-1">
//             Email
//           </label>

//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full border border-gray-300 rounded-lg p-3 mb-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                 message: "Enter valid email"
//               }
//             })}
//           />

//           <p className="text-red-500 text-sm mb-3">
//             {errors.email?.message}
//           </p>

//           {/* Password */}
//           <label className="block font-semibold mb-1">
//             Password
//           </label>

//           <input
//             type="password"
//             placeholder="Enter password"
//             className="w-full border border-gray-300 rounded-lg p-3 mb-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             {...register("password", {
//               required: "Password is required",
//               minLength: {
//                 value: 6,
//                 message: "Minimum 6 characters required"
//               }
//             })}
//           />

//           <p className="text-red-500 text-sm mb-3">
//             {errors.password?.message}
//           </p>

//           {/* Phone */}
//           <label className="block font-semibold mb-1">
//             Phone Number
//           </label>

//           <input
//             type="tel"
//             placeholder="Enter phone number"
//             className="w-full border border-gray-300 rounded-lg p-3 mb-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             {...register("phone", {
//               required: "Phone number is required",
//               pattern: {
//                 value: /^[0-9]{10}$/,
//                 message: "Enter valid 10 digit number"
//               }
//             })}
//           />

//           <p className="text-red-500 text-sm mb-3">
//             {errors.phone?.message}
//           </p>

//           {/* Gender */}
//           <label className="block font-semibold mb-1">
//             Gender
//           </label>

//           <select
//             className="w-full border border-gray-300 rounded-lg p-3 mb-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             {...register("gender", {
//               required: "Please select gender"
//             })}
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>

//           <p className="text-red-500 text-sm mb-3">
//             {errors.gender?.message}
//           </p>

//           {/* Buttons */}
//           <div className="flex gap-3">

//             <button
//               type="submit"
//               className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition"
//             >
//               Register
//             </button>

//             <button
//               type="button"
//               onClick={() => reset()}
//               className="w-full bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
//             >
//               Reset
//             </button>

//           </div>

//         </form>
//       </div>
//     </div>
//   );
// }

// export default registration;
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7 },
  }),
};

function About() {
  return (
    <>
      <Navbar />

      <section className="relative bg-linear-to-br from-forest-light to-forest-dark text-white py-28 px-6 overflow-hidden">
        <div className="absolute top-10 right-10 w-60 h-60 bg-yellow-400/20 rounded-full blur-3xl animate-float" />
        <div className="max-w-7xl mx-auto relative">
          <p className="text-yellow-400 font-bold tracking-[0.4em] uppercase text-sm">Our Story</p>
          <h1 className="font-display text-5xl md:text-7xl font-black mt-5 max-w-3xl leading-[1.05]">
            More Than A Zoo, <br className="hidden md:block" />
            A World Of <span className="text-yellow-400 italic">Discovery.</span>
          </h1>
          <p className="text-green-100 text-lg leading-8 mt-7 max-w-2xl">
            We believe every animal has a story and every visitor can become a
            friend of nature.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=900"
          alt="Nature and wildlife"
          className="w-full `h-[450px]` object-cover rounded-4xl shadow-2xl"
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">Who We Are</p>
          <h2 className="font-display text-4xl font-black text-forest-light mt-4 leading-tight">
            Welcome To The Wildora Family
          </h2>
          <p className="text-gray-600 leading-8 mt-6">
            Wildora is an online zoo experience and ticket booking platform. Our
            aim is to make planning a zoo visit simple, convenient, and
            enjoyable for everyone.
          </p>
          <p className="text-gray-600 leading-8 mt-4">
            Visitors can explore animal information, discover wildlife
            photographs, and choose their preferred visiting date through our
            online booking system.
          </p>
        </motion.div>
      </section>

      <section className="bg-[#f0f4eb] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label">What Drives Us</p>
            <h2 className="font-display text-4xl font-black text-forest-light mt-3">
              Our Mission & Vision
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              ["🌿", "Our Mission", "To create awareness about wildlife, encourage respect for animals, and provide visitors with a convenient zoo booking experience."],
              ["🌍", "Our Vision", "To inspire people to care about nature and build a future where wildlife and people can thrive together."],
            ].map(([icon, title, desc], i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="glass-card p-10"
              >
                <span className="text-5xl">{icon}</span>
                <h3 className="font-display text-2xl font-black mt-5 text-forest-light">{title}</h3>
                <p className="text-gray-600 leading-8 mt-4">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <p className="section-label">Our Values</p>
          <h2 className="font-display text-4xl font-black text-forest-light mt-3">
            What Makes Us Special
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {[
            ["🐾", "Animal Care", "Respect and care for every animal."],
            ["🌱", "Nature", "Promote awareness about nature."],
            ["❤️", "Education", "Help visitors learn about wildlife."],
            ["🎟️", "Convenience", "Make online ticket booking simple."],
          ].map(([icon, title, description], i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="border border-green-100 p-7 rounded-2xl text-center hover:shadow-xl hover:-translate-y-1 transition-all bg-white"
            >
              <div className="text-4xl">{icon}</div>
              <h3 className="font-black text-xl mt-4 text-forest-light">{title}</h3>
              <p className="text-gray-500 mt-3 leading-6 text-sm">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;