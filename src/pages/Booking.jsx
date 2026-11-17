
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Booking() {
  const navigate = useNavigate();

  const loggedInUser = JSON.parse(sessionStorage.getItem("wildoraUser") || "null");
  const token = sessionStorage.getItem("wildoraToken");

  const [form, setForm] = useState({
    name: loggedInUser?.name || "",
    email: loggedInUser?.email || "",
    phone: loggedInUser?.phone || "",
    visitDate: "",
    timeSlot: "",
  });

  // ટિકિટની સંખ્યા સ્ટોર કરવા માટેનું સ્ટેટ
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(false);

  // ટિકિટના પ્રકારો અને ભાવ
  const ticketTypes = [
    { id: "infant", name: "Infant Ticket", price: 0, ageGroup: "0-3 years", icon: "🍼" },
    { id: "child", name: "Child Ticket", price: 100, ageGroup: "3-12 years", icon: "🧒" },
    { id: "adult", name: "Adult Ticket", price: 200, ageGroup: "12-59 years", icon: "🧑" },
    { id: "senior", name: "Senior Ticket", price: 120, ageGroup: "60+ years", icon: "👴" },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleQuantity = (id, value) => {
    const quantity = Math.max(0, Math.min(10, Number(value) || 0));
    setQuantities((prev) => ({ ...prev, [id]: quantity }));
  };

  // કુલ ટિકિટ અને રકમની ગણતરી
  const selectedTickets = ticketTypes.filter((t) => Number(quantities[t.id] || 0) > 0);
  
  const totalQuantity = selectedTickets.reduce(
    (sum, t) => sum + Number(quantities[t.id]),
    0
  );

  const totalAmount = selectedTickets.reduce(
    (sum, t) => sum + Number(quantities[t.id]) * Number(t.price),
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    // લોગિન ચેક
    if (!loggedInUser || !token) {
      toast.error("Please login first to book tickets.");
      navigate("/login");
      return;
    }
    // વેલિડેશન
    if (totalQuantity === 0) {
      toast.warning("Please select at least one ticket.");
      return;
    }
    if (!form.name || !form.email || !form.phone || !form.visitDate || !form.timeSlot) {
      toast.warning("Please fill all required details.");
      return;
    }
    if (!/^[0-9]{10}$/.test(form.phone)) {
      toast.error("Please enter a valid 10 digit mobile number.");
      return;
    }

    setLoading(true);

    try {
      // બેકએન્ડમાં મોકલવા માટે ડેટા તૈયાર કરો (Number() નો ઉપયોગ કરીને NaN અટકાવ્યું છે)
      const ticketItems = selectedTickets.map((t) => {
        const qty = Number(quantities[t.id]) || 0;
        const price = Number(t.price) || 0;
        return {
          category: t.name,
          quantity: qty,
          subtotal: qty * price,
        };
      });

      const bookingData = {
        userId: loggedInUser._id,
        bookingDate: form.visitDate,
        timeSlot: form.timeSlot,
        ticketItems: ticketItems,
        guestInfo: {
          fullName: form.name,
          email: form.email,
          mobile: form.phone,
        },
        totalAmount: Number(totalAmount),
      };

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
        toast.success("🎉 Booking Confirmed successfully!");
        // બુકિંગ સફળ થાય તો 1.5 સેકન્ડ પછી My Tickets પેજ પર મોકલો
        setTimeout(() => {
          navigate("/my-tickets");
        }, 1500);
      } else {
        toast.error(data.message || "Booking failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Backend connection failed!");
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

        {/* હીરો સેક્શન */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-950 via-green-800 to-green-700 py-20 px-6 text-white">
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
          <div className="absolute -right-16 -bottom-24 text-[220px] opacity-10">🦁</div>
        </section>

        {/* એજ ઇન્ફોર્મેશન */}
        <section className="max-w-7xl mx-auto px-6 pt-14">
          <div className="bg-white rounded-3xl shadow-md p-7 md:p-10 border border-green-100">
            <div className="text-center mb-8">
              <p className="text-green-700 font-bold uppercase tracking-widest text-sm">Before Booking</p>
              <h2 className="text-3xl font-extrabold text-green-950 mt-2">Age Information</h2>
              <p className="text-gray-500 mt-2">Please check the age categories before selecting tickets.</p>
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

        {/* ટિકિટ સિલેક્શન */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
            <div>
              <p className="text-green-700 font-bold uppercase tracking-widest text-sm">Select Your Tickets</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-green-950 mt-2">Available Ticket Types</h2>
            </div>
            <div className="bg-green-900 text-white px-6 py-3 rounded-full">
              Selected: {totalQuantity} Tickets
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ticketTypes.map((ticket) => {
              const quantity = Number(quantities[ticket.id] || 0);
              return (
                <div
                  key={ticket.id}
                  className={`bg-white rounded-2xl p-4 shadow-md border-2 transition duration-300 ${
                    quantity > 0 ? "border-green-700 shadow-xl" : "border-transparent hover:border-green-200 hover:-translate-y-1"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center text-2xl">{ticket.icon}</div>
                    {quantity > 0 && <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">Selected ✓</span>}
                  </div>
                  <h3 className="text-xl font-extrabold text-green-950 mt-4">{ticket.name}</h3>
                  <p className="text-gray-500 mt-2 min-h-10 text-sm">Zoo entry ticket for {ticket.ageGroup}</p>
                  <div className="mt-3">
                    <span className="text-2xl font-extrabold text-green-800">₹{ticket.price}</span>
                    <span className="text-gray-500 ml-1 text-sm">/ person</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Age Group: {ticket.ageGroup}</p>
                  <div className="border-t border-gray-100 mt-4 pt-4">
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Number of Tickets</label>
                    <div className="flex items-center justify-between gap-3">
                      <button type="button" onClick={() => handleQuantity(ticket.id, quantity - 1)} disabled={quantity === 0} className="w-9 h-9 rounded-lg bg-green-100 text-green-900 font-bold text-xl disabled:opacity-40">−</button>
                      <span className="text-lg font-bold text-green-950">{quantity}</span>
                      <button type="button" onClick={() => handleQuantity(ticket.id, quantity + 1)} disabled={quantity >= 10} className="w-9 h-9 rounded-lg bg-green-900 text-white font-bold text-xl disabled:opacity-40">+</button>
                    </div>
                    {quantity > 0 && <p className="text-green-800 font-bold mt-3 text-sm">Subtotal: ₹{Number(ticket.price) * quantity}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* બુકિંગ ફોર્મ અને સમરી */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            <div className="lg:col-span-3 bg-white rounded-3xl shadow-lg p-7 md:p-10">
              <p className="text-green-700 font-bold uppercase tracking-widest text-sm">Your Information</p>
              <h2 className="text-3xl font-extrabold text-green-950 mt-2 mb-8">Booking Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">Full Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter full name" required className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" />
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">Email Address</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter email address" required className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" />
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">Mobile Number</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="10 digit mobile number" pattern="[0-9]{10}" maxLength="10" required className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" />
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-2">Visit Date</label>
                    <input type="date" name="visitDate" min={today} value={form.visitDate} onChange={handleChange} required className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-semibold text-gray-700 mb-2">Time Slot</label>
                    <select name="timeSlot" value={form.timeSlot} onChange={handleChange} required className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600">
                      <option value="">Choose Visit Time</option>
                      <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
                      <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
                      <option value="01:00 PM - 03:00 PM">01:00 PM - 03:00 PM</option>
                      <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM</option>
                    </select>
                  </div>
                </div>
                <button type="submit" disabled={loading || totalQuantity === 0} className="w-full bg-green-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition disabled:opacity-50">
                  {loading ? "Booking..." : "Confirm Booking →"}
                </button>
              </form>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-green-950 text-white rounded-3xl p-7 md:p-8 sticky top-24">
                <p className="text-lime-300 uppercase tracking-widest text-sm font-bold">Your Selection</p>
                <h2 className="text-2xl font-extrabold mt-2 mb-7">Booking Summary</h2>

                {selectedTickets.length === 0 ? (
                  <p className="text-green-200">Select tickets to see your booking summary.</p>
                ) : (
                  <div className="space-y-5">
                    {selectedTickets.map((ticket) => (
                      <div key={ticket.id} className="flex justify-between gap-3 border-b border-green-800 pb-4">
                        <div>
                          <p className="font-bold">{ticket.name}</p>
                          <p className="text-green-200 text-sm mt-1">₹{ticket.price} × {quantities[ticket.id]}</p>
                        </div>
                        <p className="font-bold">₹{Number(ticket.price) * Number(quantities[ticket.id])}</p>
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
                    <span className="text-3xl font-extrabold text-lime-300">₹{totalAmount}</span>
                  </div>
                </div>
                <p className="text-green-200 text-xs mt-7 leading-5">Your booking details will be saved after you confirm your booking.</p>
              </div>
            </div>

          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Booking;