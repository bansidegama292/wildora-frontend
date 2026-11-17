
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const CATEGORY_META = {
  child: { emoji: "🐣", label: "Child", tint: "from-pink-400 to-rose-400", img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=80" },
  adult: { emoji: "🦁", label: "Adult", tint: "from-amber-400 to-orange-400", img: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&q=80" },
  senior: { emoji: "🦒", label: "Senior", tint: "from-purple-400 to-indigo-400", img: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=600&q=80" },
  student: { emoji: "🦓", label: "Student", tint: "from-sky-400 to-cyan-400", img: "https://images.unsplash.com/photo-1526095179574-86e545346ae6?w=600&q=80" },
  foreign: { emoji: "🐘", label: "Foreign", tint: "from-teal-400 to-emerald-400", img: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600&q=80" },
  default: { emoji: "🎟️", label: "Pass", tint: "from-emerald-400 to-lime-400", img: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&q=80" },
};

const getMeta = (cat = "") => {
  const k = Object.keys(CATEGORY_META).find((key) => cat.toLowerCase().includes(key));
  return CATEGORY_META[k || "default"];
};

function ShowTickets() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMyBookings();
  }, []);

  const fetchMyBookings = async () => {
    try {
      const user = JSON.parse(sessionStorage.getItem("wildoraUser") || "null");
      const token = sessionStorage.getItem("wildoraToken");

      if (!user || !user._id || !token) {
        toast.error("Please login first");
        navigate("/login");
        return;
      }

      const response = await fetch("http://localhost:5000/api/bookings/all", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to fetch bookings");

      // 🔥 ફિલ્ટર લોજિક સુધારેલું છે
      const myBookings = (data.bookings || []).filter((b) => {
        const bookingUserId = typeof b.userId === "object" ? b.userId?._id : b.userId;
        return bookingUserId === user._id;
      });

      setBookings(myBookings);
    } catch (e) {
      toast.error(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const totalQty = (items = []) =>
    items.reduce((s, i) => s + (Number(i.quantity) || 0), 0);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f7f6f2] py-14 px-4">
          <ToastContainer position="top-right" theme="light" />

      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-bold tracking-[0.3em] text-emerald-700 uppercase mb-3">
            Wildora Zoo · Passes
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-black text-stone-900 leading-none">
            Your Tickets,
            <br />
            <span className="text-emerald-700 italic">beautifully kept.</span>
          </h1>
          <div className="mt-6 h-1 w-24 bg-emerald-700 rounded-full" />
        </div>

        {loading ? (
          <div className="flex items-center gap-3 text-stone-500">
            <div className="w-5 h-5 border-2 border-stone-300 border-t-emerald-700 rounded-full animate-spin" />
            Loading passes…
          </div>
        ) : bookings.length === 0 ? (
          <div className="border-2 border-dashed border-stone-300 rounded-3xl p-16 text-center">
            <div className="text-7xl mb-4">🦓</div>
            <h2 className="text-2xl font-serif font-bold text-stone-800">No passes yet</h2>
            <p className="text-stone-500 mt-2">The zoo is waiting. Book your first visit.</p>
            <button
              onClick={() => navigate("/booking")}
              className="mt-8 bg-stone-900 hover:bg-emerald-800 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Book Tickets
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {bookings.map((b, idx) => {
              const qty = totalQty(b.ticketItems);
              const meta = getMeta(b.ticketItems?.[0]?.category);
              return (
                <article key={b._id} className="relative bg-white rounded-[28px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] border border-stone-200/60 overflow-hidden">
                  <span className="absolute -top-6 right-6 text-[120px] font-serif font-black text-stone-100 select-none pointer-events-none leading-none z-10">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="relative grid grid-cols-1 md:grid-cols-[240px_1fr]">
                    <div className="relative min-h-[240px] md:min-h-full overflow-hidden">
                      <img src={meta.img} alt={meta.label} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-emerald-800/60 to-lime-700/70" />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent" />

                      <div className="relative h-full p-8 flex flex-col justify-between text-white">
                        <div>
                          <span className="inline-block px-2.5 py-1 rounded-full bg-white/20 backdrop-blur text-[9px] uppercase tracking-[0.25em] font-bold">
                            Zoo Entry Pass
                          </span>
                          <p className="text-3xl font-serif font-bold mt-3 leading-tight">{meta.label}</p>
                          <p className="text-xs text-emerald-100/90 mt-1 flex items-center gap-1.5">
                            <span>{meta.emoji}</span> Wildora Zoo
                          </p>
                        </div>
                        <div className="mt-6">
                          <p className="text-[10px] uppercase tracking-widest opacity-80">Visitors</p>
                          <p className="text-5xl font-black leading-none">{qty}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-dashed border-stone-200">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Visit Date</p>
                          <p className="text-xl font-serif font-bold text-stone-900 mt-1">
                            {b.bookingDate ? new Date(b.bookingDate).toLocaleDateString("en-IN", { weekday: "short", day: "2-digit", month: "short", year: "numeric" }) : "—"}
                          </p>
                          <p className="text-xs text-stone-500 mt-0.5">Slot · {b.timeSlot || "—"}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Booking</p>
                          <p className="font-mono text-[11px] text-stone-600 mt-1 max-w-[180px] truncate">#{b._id?.slice(-10).toUpperCase()}</p>
                          <span className="inline-block mt-2 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                            {b.bookingStatus || "Pending"}
                          </span>
                        </div>
                      </div>

                      <div className="py-5">
                        <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-3">Passes Included</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                          {b.ticketItems?.map((it, i) => {
                            const m = getMeta(it.category);
                            return (
                              <div key={i} className="flex items-center gap-3">
                                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${m.tint} flex items-center justify-center text-base shrink-0`}>{m.emoji}</div>
                                <div className="min-w-0 flex-1">
                                  <p className="font-semibold text-sm text-stone-800 truncate">{it.category}</p>
                                  <p className="text-[11px] text-stone-500">{it.quantity} × ₹{Math.round((it.subtotal || 0) / (it.quantity || 1))}</p>
                                </div>
                                <p className="text-sm font-bold text-stone-800 shrink-0">₹{it.subtotal}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="pt-5 border-t border-dashed border-stone-200 flex flex-wrap items-end justify-between gap-4">
                        <div className="text-sm">
                          <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Lead Visitor</p>
                          <p className="font-semibold text-stone-800 mt-0.5">{b.guestInfo?.fullName || "—"}</p>
                          <p className="text-xs text-stone-500">{b.guestInfo?.mobile} · {b.guestInfo?.email}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Total</p>
                          <p className="text-3xl font-serif font-black text-emerald-800 leading-none mt-1">₹{b.totalAmount}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative h-0">
                    <div className="absolute left-6 right-6 -top-[1px] border-t-2 border-dashed border-stone-200" />
                    <div className="absolute -left-3 -top-3 w-6 h-6 bg-[#f7f6f2] rounded-full" />
                    <div className="absolute -right-3 -top-3 w-6 h-6 bg-[#f7f6f2] rounded-full" />
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
      <Footer/>
    </>
  );
}

export default ShowTickets;