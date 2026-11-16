// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";

// function Login() {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
  
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); 
    
//     console.log("Login Data:", form);
    
//     // 🔥 આ લાઈન ધ્યાનથી જુઓ: અહીં '/tickets' જ છે (નાના અક્ષરે)
//     navigate("/Booking"); 
//   };

//   return (
//     <>
//       <Navbar />
      
//       <div className="min-h-screen bg-[#f4f7f2] flex items-center justify-center py-16 px-4 relative overflow-hidden">
        
//         <div className="bg-white p-2 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white w-full max-w-4xl flex flex-col md:flex-row relative z-10 overflow-hidden">
          
//           <div className="hidden md:block md:w-1/2 relative">
//             <img
//               src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop"
//               alt="Zoo Animal"
//               className="absolute inset-0 w-full h-full object-cover rounded-l-[1.5rem]"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-l-[1.5rem] flex flex-col justify-end p-10">
//               <h2 className="text-3xl font-black text-white mb-2">Wildora Zoo</h2>
//               <p className="text-gray-200 text-sm leading-relaxed">
//                 Step into the wild. Login to book your tickets and explore the amazing wildlife.
//               </p>
//             </div>
//           </div>

//           <div className="w-full md:w-1/2 p-8 md:p-12">
            
//             <div className="flex bg-gray-100 p-1.5 rounded-xl mb-8">
//               <button className="flex-1 py-2.5 rounded-lg font-bold bg-white text-forest-dark shadow-sm transition-all">
//                 Login
//               </button>
//               <button 
//                 onClick={() => navigate("/register")}
//                 className="flex-1 py-2.5 rounded-lg font-bold text-gray-500 hover:text-forest-dark transition-all"
//               >
//                 Register
//               </button>
//             </div>

//             <div className="text-center md:text-left mb-8">
//               <h2 className="text-2xl font-black text-forest-dark mb-2">Welcome Back!</h2>
//               <p className="text-gray-500 text-sm">Please enter your details to sign in.</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5">
              
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
//                 <div className="relative">
//                   <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">✉️</span>
//                   <input 
//                     type="email" 
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email" 
//                     required
//                     className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-forest-light focus:border-forest-light transition-all bg-gray-50 focus:bg-white" 
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
//                 <div className="relative">
//                   <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔒</span>
//                   <input 
//                     type={showPassword ? "text" : "password"} 
//                     name="password"
//                     value={form.password}
//                     onChange={handleChange}
//                     placeholder="Enter your password" 
//                     required
//                     className="w-full border border-gray-300 rounded-xl pl-11 pr-16 py-3 outline-none focus:ring-2 focus:ring-forest-light focus:border-forest-light transition-all bg-gray-50 focus:bg-white" 
//                   />
//                   <button 
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-forest-light hover:text-forest-dark uppercase"
//                   >
//                     {showPassword ? "Hide" : "Show"}
//                   </button>
//                 </div>
//               </div>

//               <button 
//                 type="submit" 
//                 className="w-full bg-gradient-to-r from-forest-dark to-forest-light text-white py-3.5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all mt-4"
//               >
//                 Login Now
//               </button>
//             </form>

//             <p className="text-center text-sm text-gray-500 mt-8">
//               Don't have an account?{" "}
//               <button onClick={() => navigate("/register")} className="font-bold text-forest-dark hover:underline">
//                 Register here
//               </button>
//             </p>

//           </div>
//         </div>
//       </div>
      
//       <Footer />
//     </>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    console.log("Login Data:", form);
    
    // 🔥 1. યુઝરનો ડેટા sessionStorage માં સેવ કરો (જેથી બુકિંગ પેજ પર કામ લાગે)
    const dummyUser = {
      _id: "user_12345",
      name: "Test User",
      email: form.email,
      phone: "9876543210"
    };

    sessionStorage.setItem("wildoraUser", JSON.stringify(dummyUser));
    sessionStorage.setItem("wildoraToken", "dummy_token_12345");
    
    // 🔥 2. '/Booking' ની જગ્યાએ '/booking' (નાના અક્ષરે) કરો
    navigate("/booking"); 
  };

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-[#f4f7f2] flex items-center justify-center py-16 px-4 relative overflow-hidden">
        
        <div className="bg-white p-2 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white w-full max-w-4xl flex flex-col md:flex-row relative z-10 overflow-hidden">
          
          <div className="hidden md:block md:w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop"
              alt="Zoo Animal"
              className="absolute inset-0 w-full h-full object-cover rounded-l-[1.5rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-l-[1.5rem] flex flex-col justify-end p-10">
              <h2 className="text-3xl font-black text-white mb-2">Wildora Zoo</h2>
              <p className="text-gray-200 text-sm leading-relaxed">
                Step into the wild. Login to book your tickets and explore the amazing wildlife.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12">
            
            <div className="flex bg-gray-100 p-1.5 rounded-xl mb-8">
              <button className="flex-1 py-2.5 rounded-lg font-bold bg-white text-forest-dark shadow-sm transition-all">
                Login
              </button>
              <button 
                onClick={() => navigate("/register")}
                className="flex-1 py-2.5 rounded-lg font-bold text-gray-500 hover:text-forest-dark transition-all"
              >
                Register
              </button>
            </div>

            <div className="text-center md:text-left mb-8">
              <h2 className="text-2xl font-black text-forest-dark mb-2">Welcome Back!</h2>
              <p className="text-gray-500 text-sm">Please enter your details to sign in.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">✉️</span>
                  <input 
                    type="email" 
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email" 
                    required
                    className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-forest-light focus:border-forest-light transition-all bg-gray-50 focus:bg-white" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔒</span>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password" 
                    required
                    className="w-full border border-gray-300 rounded-xl pl-11 pr-16 py-3 outline-none focus:ring-2 focus:ring-forest-light focus:border-forest-light transition-all bg-gray-50 focus:bg-white" 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-forest-light hover:text-forest-dark uppercase"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-forest-dark to-forest-light text-white py-3.5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all mt-4"
              >
                Login Now
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-8">
              Don't have an account?{" "}
              <button onClick={() => navigate("/register")} className="font-bold text-forest-dark hover:underline">
                Register here
              </button>
            </p>

          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Login;