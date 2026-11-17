// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";

// function Login() {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
  
//   // ફોર્મની સ્ટેટ
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); 
    
//     console.log("Login Data:", form);
    
//     // 🔥 અહીં 'Tickets' ની જગ્યાએ 'tickets' (નાના અક્ષરે) કરો
//     navigate("/tickets"); 
//   };

//   return (
//     <>
//       <Navbar />
      
//       <div className="min-h-screen bg-[#f4f7f2] flex items-center justify-center py-16 px-4 relative overflow-hidden">
        
//         {/* લોગિન કાર્ડ (Split Layout) */}
//         <div className="bg-white p-2 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white w-full max-w-4xl flex flex-col md:flex-row relative z-10 overflow-hidden">
          
//           {/* ડાબી બાજુ: ઝૂ (Zoo) નો ફોટો */}
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

//           {/* જમણી બાજુ: ફોર્મ */}
//           <div className="w-full md:w-1/2 p-8 md:p-12">
            
//             {/* ઉપરના 2 ટૅબ (Login / Register) */}
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

//             {/* લોગિન ફોર્મ */}
//             <form onSubmit={handleSubmit} className="space-y-5">
              
//               {/* Email Field */}
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

//               {/* Password Field */}
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

//               {/* Login Button */}
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

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "react-toastify/dist/ReactToastify.css";

function Tickets() {
  const navigate = useNavigate();

  const [tickets, setTickets] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);

  const getSavedUser = () => {
    try {
      return JSON.parse(sessionStorage.getItem("wildoraUser") || "null");
    } catch {
      return null;
    }
  };

  const [savedUser, setSavedUser] = useState(getSavedUser);

  const [form, setForm] = useState({
    name: savedUser?.name || "",
    email: savedUser?.email || "",
    phone: savedUser?.phone || "",
    visitDate: "",
    timeSlot: "",
  });

  const [quantities, setQuantities] = useState({});

  // 🔥 Login Check (જો લોગિન ના હોય તો સીધા લોગિન પેજ પર મોકલો)
  useEffect(() => {
    const user = getSavedUser();
    const token = sessionStorage.getItem("wildoraToken");

    if (!token || !user?._id) {
      toast.warning("Please login first to book tickets.");
      navigate("/login");
      return;
    }

    setSavedUser(user);

    setForm((previous) => ({
      ...previous,
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
    }));
  }, [navigate]);

  // Fetch Tickets
  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/tickets/all");
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to fetch tickets");
      }

      setTickets(result.tickets || []);
    } catch (error) {
      toast.error(error.message || "Unable to load tickets.");
    } finally {
      setFetching(false);
    }
  };

  // Infant Ticket First, Remaining Order Same
  const sortedTickets = [...tickets].sort((a, b) => {
    const nameA = (a.ticketName || a.userName || "").trim().toLowerCase();
    const nameB = (b.ticketName || b.userName || "").trim().toLowerCase();

    if (nameA === "infant ticket") return -1;
    if (nameB === "infant ticket") return 1;

    return 0;
  });

  const getTicketName = (ticket) =>
    ticket.ticketName || ticket.userName || "Zoo Ticket";

  const selectedTickets = tickets.filter(
    (ticket) => Number(quantities[ticket._id] || 0) > 0
  );

  const totalQuantity = selectedTickets.reduce(
    (sum, ticket) => sum + Number(quantities[ticket._id]),
    0
  );

  const totalAmount = selectedTickets.reduce(
    (sum, ticket) =>
      sum + Number(ticket.price) * Number(quantities[ticket._id]),
    0
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuantity = (ticketId, value) => {
    const quantity = Math.max(0, Math.min(10, Number(value) || 0));

    setQuantities((previous) => ({
      ...previous,
      [ticketId]: quantity,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = getSavedUser();
    const token = sessionStorage.getItem("wildoraToken");

    if (!token || !user) {
      toast.error("Please login before booking tickets.");
      navigate("/Booking");
      return;
    }

    if (!user._id) {
      toast.error("User ID not found. Please logout and login again.");
      return;
    }

    if (selectedTickets.length === 0) {
      toast.warning("Please select at least one ticket.");
      return;
    }

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.visitDate ||
      !form.timeSlot
    ) {
      toast.warning("Please fill all required booking details.");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      toast.error("Please enter a valid 10 digit mobile number.");
      return;
    }

    setLoading(true);

    try {
      const bookingData = {
        userId: user._id,
        bookingDate: form.visitDate,
        timeSlot: form.timeSlot,

        ticketItems: selectedTickets.map((ticket) => ({
          ticketId: ticket._id,
          category: ticket.ageGroup || ticket.ticketName || ticket.userName,
          quantity: Number(quantities[ticket._id]),
        })),

        addOns: [],

        guestInfo: {
          fullName: form.name.trim(),
          email: form.email.trim(),
          mobile: form.phone.trim(),
        },
      };

      const response = await fetch(
        "http://localhost:5000/api/bookings/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(bookingData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Booking failed");
      }

      toast.success("Ticket booking confirmed successfully!");

      setQuantities({});

      setForm({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        visitDate: "",
        timeSlot: "",
      });

      setTimeout(() => {
        navigate("/my-tickets"); // 🔥 બુકિંગ પછી સીધા માય ટિકિટ્સ પેજ પર
      }, 1500);

    } catch (error) {
      toast.error(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toLocaleDateString("en-CA");

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f3f7ef]">
        <ToastContainer position="top-right" autoClose={3000} theme="colored" />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-linear-to-r from-green-950 via-green-800 to-green-700 py-20 px-6 text-white">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <p className="text-lime-300 uppercase tracking-[4px] text-sm font-semibold">
              Wildora Wildlife Park
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold mt-5">
              Book Your <span className="text-lime-300">Tickets</span>
            </h1>

            <p className="max-w-2xl mx-auto text-green-100 mt-5 text-lg">
              Choose your tickets and enjoy an unforgettable wildlife experience with your family.
            </p>
          </div>

          <div className="absolute -right-16 -bottom-24 text-[220px] opacity-10">
            🦁
          </div>
        </section>

        {/* Age Information */}
        <section className="max-w-7xl mx-auto px-6 pt-14">
          <div className="bg-white rounded-3xl shadow-md p-7 md:p-10 border border-green-100">
            <div className="text-center mb-8">
              <p className="text-green-700 font-bold uppercase tracking-widest text-sm">
                Before Booking
              </p>
              <h2 className="text-3xl font-extrabold text-green-950 mt-2">
                Age Information
              </h2>
              <p className="text-gray-500 mt-2">
                Please check the age categories before selecting tickets.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-green-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">👶</div>
                <h3 className="text-xl font-bold text-green-950">Child</h3>
                <p className="text-gray-600 mt-2">Below 12 years</p>
              </div>

              <div className="bg-green-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">🧑</div>
                <h3 className="text-xl font-bold text-green-950">Adult</h3>
                <p className="text-gray-600 mt-2">12 to 59 years</p>
              </div>

              <div className="bg-green-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">👴</div>
                <h3 className="text-xl font-bold text-green-950">Senior Citizen</h3>
                <p className="text-gray-600 mt-2">60 years and above</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ticket Selection */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
            <div>
              <p className="text-green-700 font-bold uppercase tracking-widest text-sm">
                Select Your Tickets
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-green-950 mt-2">
                Available Ticket Types
              </h2>
            </div>

            <div className="bg-green-900 text-white px-6 py-3 rounded-full">
              Selected: {totalQuantity} Tickets
            </div>
          </div>

          {fetching ? (
            <p className="text-center py-10 text-green-800">Loading tickets...</p>
          ) : sortedTickets.length === 0 ? (
            <p className="text-center py-10 text-gray-600">No tickets available right now.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sortedTickets.map((ticket) => {
                const quantity = Number(quantities[ticket._id] || 0);

                return (
                  <div
                    key={ticket._id}
                    className={`bg-white rounded-2xl p-4 shadow-md border-2 transition duration-300 ${
                      quantity > 0
                        ? "border-green-700 shadow-xl"
                        : "border-transparent hover:border-green-200 hover:-translate-y-1"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                        🎟️
                      </div>

                      {quantity > 0 && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                          Selected ✓
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-extrabold text-green-950 mt-4">
                      {getTicketName(ticket)}
                    </h3>

                    <p className="text-gray-500 mt-2 min-h-10 text-sm">
                      {ticket.description || "Zoo entry ticket"}
                    </p>

                    <div className="mt-3">
                      <span className="text-2xl font-extrabold text-green-800">
                        ₹{ticket.price}
                      </span>
                      <span className="text-gray-500 ml-1 text-sm">/ person</span>
                    </div>

                    <p className="text-sm text-gray-500 mt-2">
                      Age Group: {ticket.ageGroup || "All Ages"}
                    </p>

                    <div className="border-t border-gray-100 mt-4 pt-4">
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Number of Tickets
                      </label>

                      <div className="flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => handleQuantity(ticket._id, quantity - 1)}
                          disabled={quantity === 0}
                          className="w-9 h-9 rounded-lg bg-green-100 text-green-900 font-bold text-xl disabled:opacity-40"
                        >
                          −
                        </button>

                        <span className="text-lg font-bold text-green-950">
                          {quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => handleQuantity(ticket._id, quantity + 1)}
                          disabled={quantity >= 10}
                          className="w-9 h-9 rounded-lg bg-green-900 text-white font-bold text-xl disabled:opacity-40"
                        >
                          +
                        </button>
                      </div>

                      {quantity > 0 && (
                        <p className="text-green-800 font-bold mt-3 text-sm">
                          Subtotal: ₹{Number(ticket.price) * quantity}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Booking Form and Summary */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* Booking Details */}
            <div className="lg:col-span-3 bg-white rounded-3xl shadow-lg p-7 md:p-10">
              <p className="text-green-700 font-bold uppercase tracking-widest text-sm">
                Your Information
              </p>
              <h2 className="text-3xl font-extrabold text-green-950 mt-2 mb-8">
                Booking Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="10 digit mobile number"
                      pattern="[0-9]{10}"
                      maxLength="10"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">
                      Visit Date
                    </label>
                    <input
                      type="date"
                      name="visitDate"
                      min={today}
                      value={form.visitDate}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block font-semibold text-gray-700 mb-2">
                      Time Slot
                    </label>
                    <select
                      name="timeSlot"
                      value={form.timeSlot}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                    >
                      <option value="">Choose Visit Time</option>
                      <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
                      <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
                      <option value="01:00 PM - 03:00 PM">01:00 PM - 03:00 PM</option>
                      <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || fetching || selectedTickets.length === 0}
                  className="w-full bg-green-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition disabled:opacity-50"
                >
                  {loading ? "Booking..." : "Confirm Booking →"}
                </button>
              </form>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-2">
              <div className="bg-green-950 text-white rounded-3xl p-7 md:p-8 sticky top-24">
                <p className="text-lime-300 uppercase tracking-widest text-sm font-bold">
                  Your Selection
                </p>
                <h2 className="text-2xl font-extrabold mt-2 mb-7">
                  Booking Summary
                </h2>

                {selectedTickets.length === 0 ? (
                  <p className="text-green-200">
                    Select tickets to see your booking summary.
                  </p>
                ) : (
                  <div className="space-y-5">
                    {selectedTickets.map((ticket) => (
                      <div
                        key={ticket._id}
                        className="flex justify-between gap-3 border-b border-green-800 pb-4"
                      >
                        <div>
                          <p className="font-bold">{getTicketName(ticket)}</p>
                          <p className="text-green-200 text-sm mt-1">
                            ₹{ticket.price} × {quantities[ticket._id]}
                          </p>
                        </div>
                        <p className="font-bold">
                          ₹{Number(ticket.price) * Number(quantities[ticket._id])}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="border-t border-green-700 mt-7 pt-6 space-y-3">
                  <div className="flex justify-between text-green-100">
                    <span>Total Tickets</span>
                    <span>{totalQuantity}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total Amount</span>
                    <span className="text-3xl font-extrabold text-lime-300">
                      ₹{totalAmount}
                    </span>
                  </div>
                </div>

                <p className="text-green-200 text-xs mt-7 leading-5">
                  Your booking details will be saved after you confirm your booking.
                </p>
              </div>
            </div>

          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Tickets;