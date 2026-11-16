// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";

// function Booking() {
//   const navigate = useNavigate();

//   // લોગિન યુઝરની માહિતી
//   const loggedInUser = JSON.parse(sessionStorage.getItem("wildoraUser") || "null");
//   const token = sessionStorage.getItem("wildoraToken");

//   // સ્ટેટ
//   const [form, setForm] = useState({
//     fullName: loggedInUser?.name || "",
//     email: loggedInUser?.email || "",
//     mobile: loggedInUser?.phone || "",
//     visitDate: "",
//     timeSlot: "",
//   });

//   const [tickets, setTickets] = useState({
//     infant: 0,
//     child: 0,
//     adult: 0,
//     senior: 0,
//   });

//   const [loading, setLoading] = useState(false);

//   // ટિકિટના ભાવ
//   const prices = {
//     infant: 0,
//     child: 100,
//     adult: 200,
//     senior: 120,
//   };

//   // ક્વોન્ટિટી બદલવાનું ફંક્શન
//   const handleQuantity = (type, action) => {
//     setTickets((prev) => {
//       const current = prev[type];
//       let newQty = current;
//       if (action === "inc") newQty = Math.min(10, current + 1);
//       if (action === "dec") newQty = Math.max(0, current - 1);
//       return { ...prev, [type]: newQty };
//     });
//   };

//   // ટોટલ ગણતરી
//   const totalTickets =
//     tickets.infant + tickets.child + tickets.adult + tickets.senior;
//   const totalAmount =
//     tickets.infant * prices.infant +
//     tickets.child * prices.child +
//     tickets.adult * prices.adult +
//     tickets.senior * prices.senior;

//   // ફોર્મ સબમિટ
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!loggedInUser || !token) {
//       alert("Please login first to book tickets!");
//       navigate("/login");
//       return;
//     }
//     if (totalTickets === 0) {
//       alert("Please select at least one ticket.");
//       return;
//     }
//     if (!form.visitDate || !form.timeSlot) {
//       alert("Please select visit date and time slot.");
//       return;
//     }

//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       alert("Booking Confirmed successfully!");
//       navigate("/my-tickets");
//     }, 1000);
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-[#f3f7ef] py-16 px-4">
//         <div className="max-w-6xl mx-auto">
          
//           {/* પેજ હેડર */}
//           <div className="text-center mb-12">
//             <h1 className="text-4xl md:text-5xl font-black text-forest-dark mb-3">
//               Book Your Zoo Visit
//             </h1>
//             <p className="text-gray-500">
//               Select your tickets and enjoy an unforgettable wildlife experience.
//             </p>
//           </div>

//           {/* એજ ઇન્ફોર્મેશન કાર્ડ */}
//           <div className="bg-white rounded-3xl p-6 md:p-8 mb-10 shadow-sm border border-gray-100">
//             <div className="text-center mb-6">
//               <p className="text-xs font-bold text-forest-light uppercase tracking-wider">
//                 Before Booking
//               </p>
//               <h2 className="text-2xl font-black text-gray-800 mt-1">
//                 Age Information
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
//                 <div className="text-3xl mb-1">👶</div>
//                 <h3 className="font-bold text-gray-800">Child</h3>
//                 <p className="text-sm text-gray-500">Below 12 years</p>
//               </div>
//               <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
//                 <div className="text-3xl mb-1">🧑</div>
//                 <h3 className="font-bold text-gray-800">Adult</h3>
//                 <p className="text-sm text-gray-500">12 to 59 years</p>
//               </div>
//               <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
//                 <div className="text-3xl mb-1">👴</div>
//                 <h3 className="font-bold text-gray-800">Senior Citizen</h3>
//                 <p className="text-sm text-gray-500">60 years and above</p>
//               </div>
//             </div>
//           </div>

//           {/* 🔥 ટિકિટ સિલેક્શન (ફૂલ વિડ્થ) */}
//           <div className="mb-8">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-2xl font-bold text-gray-800">Select Tickets</h2>
//               <span className="bg-forest-dark text-white px-4 py-1.5 rounded-full text-sm font-bold">
//                 {totalTickets} Selected
//               </span>
//             </div>

//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              
//               {/* Infant */}
//               <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between">
//                 <div className="flex flex-col items-start gap-2">
//                   <span className="bg-pink-100 text-pink-600 p-1.5 rounded-lg text-lg">🍼</span>
//                   <div>
//                     <h3 className="font-bold text-gray-800 text-sm">Infant</h3>
//                     <p className="text-xs text-gray-500">0-3 yrs</p>
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <p className="text-lg font-black text-forest-dark mb-2">₹{prices.infant}</p>
//                   <div className="flex items-center justify-between bg-gray-50 rounded-lg p-1">
//                     <button onClick={() => handleQuantity('infant', 'dec')} className="w-7 h-7 rounded bg-white flex items-center justify-center font-bold shadow-sm hover:bg-gray-100 transition">-</button>
//                     <span className="font-bold text-sm">{tickets.infant}</span>
//                     <button onClick={() => handleQuantity('infant', 'inc')} className="w-7 h-7 rounded bg-forest-light text-white flex items-center justify-center font-bold shadow-sm hover:bg-forest-dark transition">+</button>
//                   </div>
//                 </div>
//               </div>

//               {/* Child */}
//               <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between">
//                 <div className="flex flex-col items-start gap-2">
//                   <span className="bg-blue-100 text-blue-600 p-1.5 rounded-lg text-lg">🧒</span>
//                   <div>
//                     <h3 className="font-bold text-gray-800 text-sm">Child</h3>
//                     <p className="text-xs text-gray-500">3-12 yrs</p>
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <p className="text-lg font-black text-forest-dark mb-2">₹{prices.child}</p>
//                   <div className="flex items-center justify-between bg-gray-50 rounded-lg p-1">
//                     <button onClick={() => handleQuantity('child', 'dec')} className="w-7 h-7 rounded bg-white flex items-center justify-center font-bold shadow-sm hover:bg-gray-100 transition">-</button>
//                     <span className="font-bold text-sm">{tickets.child}</span>
//                     <button onClick={() => handleQuantity('child', 'inc')} className="w-7 h-7 rounded bg-forest-light text-white flex items-center justify-center font-bold shadow-sm hover:bg-forest-dark transition">+</button>
//                   </div>
//                 </div>
//               </div>

//               {/* Adult */}
//               <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between">
//                 <div className="flex flex-col items-start gap-2">
//                   <span className="bg-yellow-100 text-yellow-600 p-1.5 rounded-lg text-lg">🧑</span>
//                   <div>
//                     <h3 className="font-bold text-gray-800 text-sm">Adult</h3>
//                     <p className="text-xs text-gray-500">12-59 yrs</p>
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <p className="text-lg font-black text-forest-dark mb-2">₹{prices.adult}</p>
//                   <div className="flex items-center justify-between bg-gray-50 rounded-lg p-1">
//                     <button onClick={() => handleQuantity('adult', 'dec')} className="w-7 h-7 rounded bg-white flex items-center justify-center font-bold shadow-sm hover:bg-gray-100 transition">-</button>
//                     <span className="font-bold text-sm">{tickets.adult}</span>
//                     <button onClick={() => handleQuantity('adult', 'inc')} className="w-7 h-7 rounded bg-forest-light text-white flex items-center justify-center font-bold shadow-sm hover:bg-forest-dark transition">+</button>
//                   </div>
//                 </div>
//               </div>

//               {/* Senior */}
//               <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between">
//                 <div className="flex flex-col items-start gap-2">
//                   <span className="bg-purple-100 text-purple-600 p-1.5 rounded-lg text-lg">👴</span>
//                   <div>
//                     <h3 className="font-bold text-gray-800 text-sm">Senior</h3>
//                     <p className="text-xs text-gray-500">60+ yrs</p>
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <p className="text-lg font-black text-forest-dark mb-2">₹{prices.senior}</p>
//                   <div className="flex items-center justify-between bg-gray-50 rounded-lg p-1">
//                     <button onClick={() => handleQuantity('senior', 'dec')} className="w-7 h-7 rounded bg-white flex items-center justify-center font-bold shadow-sm hover:bg-gray-100 transition">-</button>
//                     <span className="font-bold text-sm">{tickets.senior}</span>
//                     <button onClick={() => handleQuantity('senior', 'inc')} className="w-7 h-7 rounded bg-forest-light text-white flex items-center justify-center font-bold shadow-sm hover:bg-forest-dark transition">+</button>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* 🔥 બુકિંગ ફોર્મ અને સમરી (સાથે સાથે) */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
//             {/* ડાબી બાજુ: ફોર્મ (૨ કોલમ લે છે) */}
//             <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">Booking Details</h2>
//               <form id="bookingForm" onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
//                   <input type="text" value={form.fullName} onChange={(e) => setForm({...form, fullName: e.target.value})} placeholder="Full Name" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-forest-light" required />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
//                   <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="Email" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-forest-light" required />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-1">Mobile Number</label>
//                   <input type="tel" value={form.mobile} onChange={(e) => setForm({...form, mobile: e.target.value})} placeholder="Mobile Number" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-forest-light" required />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-1">Visit Date</label>
//                   <input type="date" value={form.visitDate} onChange={(e) => setForm({...form, visitDate: e.target.value})} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-forest-light" required />
//                 </div>
//                 <div className="sm:col-span-2">
//                   <label className="block text-sm font-bold text-gray-700 mb-1">Time Slot</label>
//                   <select value={form.timeSlot} onChange={(e) => setForm({...form, timeSlot: e.target.value})} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-forest-light" required>
//                     <option value="">Choose Visit Time</option>
//                     <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
//                     <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
//                     <option value="01:00 PM - 03:00 PM">01:00 PM - 03:00 PM</option>
//                     <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM</option>
//                   </select>
//                 </div>
//               </form>
//             </div>

//             {/* જમણી બાજુ: બુકિંગ સમરી (૧ કોલમ લે છે, સ્ટીકી છે) */}
//             <div className="lg:col-span-1 sticky top-24">
//               <div className="bg-forest-dark text-white rounded-3xl p-6 md:p-8 shadow-xl">
//                 <h2 className="text-2xl font-bold mb-1">Booking Summary</h2>
//                 <p className="text-green-200 text-sm mb-6">Select tickets to see your booking summary.</p>

//                 <div className="space-y-3 mb-6">
//                   {tickets.infant > 0 && <div className="flex justify-between text-sm border-b border-green-800 pb-2"><span>Infant x {tickets.infant}</span><span>₹{tickets.infant * prices.infant}</span></div>}
//                   {tickets.child > 0 && <div className="flex justify-between text-sm border-b border-green-800 pb-2"><span>Child x {tickets.child}</span><span>₹{tickets.child * prices.child}</span></div>}
//                   {tickets.adult > 0 && <div className="flex justify-between text-sm border-b border-green-800 pb-2"><span>Adult x {tickets.adult}</span><span>₹{tickets.adult * prices.adult}</span></div>}
//                   {tickets.senior > 0 && <div className="flex justify-between text-sm border-b border-green-800 pb-2"><span>Senior x {tickets.senior}</span><span>₹{tickets.senior * prices.senior}</span></div>}
//                 </div>

//                 <div className="space-y-4 pt-4 border-t border-green-700">
//                   <div className="flex justify-between items-center text-green-100">
//                     <span>Total Tickets</span>
//                     <span>{totalTickets}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-lg font-bold">Total Amount</span>
//                     <span className="text-3xl font-black text-lime-300">₹{totalAmount}</span>
//                   </div>
//                 </div>

//                 <button 
//                   type="submit" 
//                   form="bookingForm"
//                   disabled={loading || totalTickets === 0}
//                   className="w-full mt-8 bg-lime-400 text-forest-dark py-3.5 rounded-xl font-bold text-lg hover:bg-lime-300 transition disabled:opacity-50"
//                 >
//                   {loading ? "Processing..." : "Confirm Booking →"}
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Booking;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Booking() {
  const navigate = useNavigate();

  // 🔥 લોગિન યુઝરની માહિતી (અહીં _id છે)
  const loggedInUser = JSON.parse(sessionStorage.getItem("wildoraUser") || "null");
  const token = sessionStorage.getItem("wildoraToken");

  const [form, setForm] = useState({
    fullName: loggedInUser?.name || "",
    email: loggedInUser?.email || "",
    mobile: loggedInUser?.phone || "",
    visitDate: "",
    timeSlot: "",
  });

  const [tickets, setTickets] = useState({
    infant: 0,
    child: 0,
    adult: 0,
    senior: 0,
  });

  const [loading, setLoading] = useState(false);

  const prices = {
    infant: 0,
    child: 100,
    adult: 200,
    senior: 120,
  };

  const handleQuantity = (type, action) => {
    setTickets((prev) => {
      const current = prev[type];
      let newQty = current;
      if (action === "inc") newQty = Math.min(10, current + 1);
      if (action === "dec") newQty = Math.max(0, current - 1);
      return { ...prev, [type]: newQty };
    });
  };

  const totalTickets = tickets.infant + tickets.child + tickets.adult + tickets.senior;
  const totalAmount =
    tickets.infant * prices.infant +
    tickets.child * prices.child +
    tickets.adult * prices.adult +
    tickets.senior * prices.senior;

  // 🔥 API કોલ અને userId
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loggedInUser || !token) {
      alert("Please login first to book tickets!");
      navigate("/login");
      return;
    }
    if (totalTickets === 0) {
      alert("Please select at least one ticket.");
      return;
    }
    if (!form.visitDate || !form.timeSlot) {
      alert("Please select visit date and time slot.");
      return;
    }

    setLoading(true);

    const bookingData = {
      // 👇 આ છે તમારો userId (લોગિન કરેલા યુઝરની _id)
      userId: loggedInUser._id, 
      bookingDate: form.visitDate,
      timeSlot: form.timeSlot,
      ticketItems: [
        tickets.infant > 0 && { category: "Infant", quantity: tickets.infant, subtotal: tickets.infant * prices.infant },
        tickets.child > 0 && { category: "Child", quantity: tickets.child, subtotal: tickets.child * prices.child },
        tickets.adult > 0 && { category: "Adult", quantity: tickets.adult, subtotal: tickets.adult * prices.adult },
        tickets.senior > 0 && { category: "Senior", quantity: tickets.senior, subtotal: tickets.senior * prices.senior },
      ].filter(Boolean),
      guestInfo: {
        fullName: form.fullName,
        email: form.email,
        mobile: form.mobile,
      },
      totalAmount: totalAmount,
    };

    try {
      const response = await fetch("http://localhost:5000/api/bookings/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("🎉 Booking Confirmed successfully!");
        navigate("/my-tickets"); 
      } else {
        alert(data.message || "Booking failed");
      }
    } catch (error) {
      console.error(error);
      alert("Backend connection failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f3f7ef] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* પેજ હેડર */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-forest-dark mb-3">
              Book Your Zoo Visit
            </h1>
            <p className="text-gray-500">
              Select your tickets and enjoy an unforgettable wildlife experience.
            </p>
          </div>

          {/* એજ ઇન્ફોર્મેશન કાર્ડ */}
          <div className="bg-white rounded-3xl p-6 md:p-8 mb-10 shadow-sm border border-gray-100">
            <div className="text-center mb-6">
              <p className="text-xs font-bold text-forest-light uppercase tracking-wider">
                Before Booking
              </p>
              <h2 className="text-2xl font-black text-gray-800 mt-1">
                Age Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
                <div className="text-3xl mb-1">👶</div>
                <h3 className="font-bold text-gray-800">Child</h3>
                <p className="text-sm text-gray-500">Below 12 years</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
                <div className="text-3xl mb-1">🧑</div>
                <h3 className="font-bold text-gray-800">Adult</h3>
                <p className="text-sm text-gray-500">12 to 59 years</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
                <div className="text-3xl mb-1">👴</div>
                <h3 className="font-bold text-gray-800">Senior Citizen</h3>
                <p className="text-sm text-gray-500">60 years and above</p>
              </div>
            </div>
          </div>

          {/* ટિકિટ સિલેક્શન */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Select Tickets</h2>
              <span className="bg-forest-dark text-white px-4 py-1.5 rounded-full text-sm font-bold">
                {totalTickets} Selected
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Infant */}
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between">
                <div className="flex flex-col items-start gap-2">
                  <span className="bg-pink-100 text-pink-600 p-1.5 rounded-lg text-lg">🍼</span>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">Infant</h3>
                    <p className="text-xs text-gray-500">0-3 yrs</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-black text-forest-dark mb-2">₹{prices.infant}</p>
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-1">
                    <button onClick={() => handleQuantity('infant', 'dec')} className="w-7 h-7 rounded bg-white flex items-center justify-center font-bold shadow-sm hover:bg-gray-100 transition">-</button>
                    <span className="font-bold text-sm">{tickets.infant}</span>
                    <button onClick={() => handleQuantity('infant', 'inc')} className="w-7 h-7 rounded bg-forest-light text-white flex items-center justify-center font-bold shadow-sm hover:bg-forest-dark transition">+</button>
                  </div>
                </div>
              </div>

              {/* Child */}
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between">
                <div className="flex flex-col items-start gap-2">
                  <span className="bg-blue-100 text-blue-600 p-1.5 rounded-lg text-lg">🧒</span>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">Child</h3>
                    <p className="text-xs text-gray-500">3-12 yrs</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-black text-forest-dark mb-2">₹{prices.child}</p>
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-1">
                    <button onClick={() => handleQuantity('child', 'dec')} className="w-7 h-7 rounded bg-white flex items-center justify-center font-bold shadow-sm hover:bg-gray-100 transition">-</button>
                    <span className="font-bold text-sm">{tickets.child}</span>
                    <button onClick={() => handleQuantity('child', 'inc')} className="w-7 h-7 rounded bg-forest-light text-white flex items-center justify-center font-bold shadow-sm hover:bg-forest-dark transition">+</button>
                  </div>
                </div>
              </div>

              {/* Adult */}
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between">
                <div className="flex flex-col items-start gap-2">
                  <span className="bg-yellow-100 text-yellow-600 p-1.5 rounded-lg text-lg">🧑</span>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">Adult</h3>
                    <p className="text-xs text-gray-500">12-59 yrs</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-black text-forest-dark mb-2">₹{prices.adult}</p>
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-1">
                    <button onClick={() => handleQuantity('adult', 'dec')} className="w-7 h-7 rounded bg-white flex items-center justify-center font-bold shadow-sm hover:bg-gray-100 transition">-</button>
                    <span className="font-bold text-sm">{tickets.adult}</span>
                    <button onClick={() => handleQuantity('adult', 'inc')} className="w-7 h-7 rounded bg-forest-light text-white flex items-center justify-center font-bold shadow-sm hover:bg-forest-dark transition">+</button>
                  </div>
                </div>
              </div>

              {/* Senior */}
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between">
                <div className="flex flex-col items-start gap-2">
                  <span className="bg-purple-100 text-purple-600 p-1.5 rounded-lg text-lg">👴</span>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">Senior</h3>
                    <p className="text-xs text-gray-500">60+ yrs</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-black text-forest-dark mb-2">₹{prices.senior}</p>
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-1">
                    <button onClick={() => handleQuantity('senior', 'dec')} className="w-7 h-7 rounded bg-white flex items-center justify-center font-bold shadow-sm hover:bg-gray-100 transition">-</button>
                    <span className="font-bold text-sm">{tickets.senior}</span>
                    <button onClick={() => handleQuantity('senior', 'inc')} className="w-7 h-7 rounded bg-forest-light text-white flex items-center justify-center font-bold shadow-sm hover:bg-forest-dark transition">+</button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* બુકિંગ ફોર્મ અને સમરી */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Booking Details</h2>
              <form id="bookingForm" onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                  <input type="text" value={form.fullName} onChange={(e) => setForm({...form, fullName: e.target.value})} placeholder="Full Name" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-forest-light" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="Email" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-forest-light" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Mobile Number</label>
                  <input type="tel" value={form.mobile} onChange={(e) => setForm({...form, mobile: e.target.value})} placeholder="Mobile Number" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-forest-light" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Visit Date</label>
                  <input type="date" value={form.visitDate} onChange={(e) => setForm({...form, visitDate: e.target.value})} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-forest-light" required />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Time Slot</label>
                  <select value={form.timeSlot} onChange={(e) => setForm({...form, timeSlot: e.target.value})} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-forest-light" required>
                    <option value="">Choose Visit Time</option>
                    <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
                    <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
                    <option value="01:00 PM - 03:00 PM">01:00 PM - 03:00 PM</option>
                    <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM</option>
                  </select>
                </div>
              </form>
            </div>

            <div className="lg:col-span-1 sticky top-24">
              <div className="bg-forest-dark text-white rounded-3xl p-6 md:p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-1">Booking Summary</h2>
                <p className="text-green-200 text-sm mb-6">Select tickets to see your booking summary.</p>

                <div className="space-y-3 mb-6">
                  {tickets.infant > 0 && <div className="flex justify-between text-sm border-b border-green-800 pb-2"><span>Infant x {tickets.infant}</span><span>₹{tickets.infant * prices.infant}</span></div>}
                  {tickets.child > 0 && <div className="flex justify-between text-sm border-b border-green-800 pb-2"><span>Child x {tickets.child}</span><span>₹{tickets.child * prices.child}</span></div>}
                  {tickets.adult > 0 && <div className="flex justify-between text-sm border-b border-green-800 pb-2"><span>Adult x {tickets.adult}</span><span>₹{tickets.adult * prices.adult}</span></div>}
                  {tickets.senior > 0 && <div className="flex justify-between text-sm border-b border-green-800 pb-2"><span>Senior x {tickets.senior}</span><span>₹{tickets.senior * prices.senior}</span></div>}
                </div>

                <div className="space-y-4 pt-4 border-t border-green-700">
                  <div className="flex justify-between items-center text-green-100">
                    <span>Total Tickets</span>
                    <span>{totalTickets}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total Amount</span>
                    <span className="text-3xl font-black text-lime-300">₹{totalAmount}</span>
                  </div>
                </div>

                <button 
                  type="submit" 
                  form="bookingForm"
                  disabled={loading || totalTickets === 0}
                  className="w-full mt-8 bg-lime-400 text-forest-dark py-3.5 rounded-xl font-bold text-lg hover:bg-lime-300 transition disabled:opacity-50"
                >
                  {loading ? "Processing..." : "Confirm Booking →"}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Booking;