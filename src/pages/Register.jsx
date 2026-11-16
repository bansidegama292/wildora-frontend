import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // પાસવર્ડ જોવા/છુપાવવા માટેની સ્ટેટ
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^[0-9]{10}$/.test(form.phone)) {
      setError("Please enter a valid 10 digit phone number.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match! Please check again.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const { confirmPassword, ...dataToSend } = form;

      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Registration Successful! Please Login.");
        setForm({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/login");
      } else {
        setError(result.message || "Registration Failed");
      }
    } catch (error) {
      console.log("Registration Error:", error);
      setError("Backend connection failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-forest-light focus:border-transparent transition bg-gray-50 focus:bg-white text-gray-800";

  return (
    <>
      <section className="bg-[#f4f7f2] py-16 px-5 relative overflow-hidden min-h-screen">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-lime-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 bg-white rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-white">
          
          <div className="md:col-span-2 relative min-h-[300px] md:min-h-full hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=900"
              alt="Lion"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/40 to-transparent" />
            <div className="absolute bottom-9 left-7 right-7 text-white">
              <p className="text-yellow-400 font-bold tracking-widest text-sm uppercase">
                Welcome to Wildora
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-black leading-tight mt-3">
                Join The Wildora Family
              </h2>
              <p className="mt-3 text-green-100 leading-relaxed text-sm">
                Create your account and start planning your wildlife adventure.
                Explore amazing animals and enjoy an unforgettable zoo experience.
              </p>
            </div>
          </div>

          <div className="md:col-span-3 p-7 md:p-10">
            <div className="flex bg-gray-100 p-1.5 rounded-xl mb-6">
              <button 
                onClick={() => navigate("/login")}
                className="flex-1 py-2.5 rounded-lg font-bold text-gray-500 hover:text-forest-dark transition-all"
              >
                Login
              </button>
              <button className="flex-1 py-2.5 rounded-lg font-bold bg-white text-forest-dark shadow-sm transition-all">
                Register
              </button>
            </div>

            <h1 className="font-display text-3xl font-black text-forest-dark mt-2">
              Create Account
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              Fill in your details to get started with Wildora.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
              
              <div className="sm:col-span-2">
                <label className="block font-bold text-sm text-gray-700 mb-1.5">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  minLength={2}
                  className={inputCls}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-bold text-sm text-gray-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className={inputCls}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-bold text-sm text-gray-700 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit number"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className={inputCls}
                />
              </div>

              {/* Password */}
              <div className="sm:col-span-2">
                <label className="block font-bold text-sm text-gray-700 mb-1.5">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Create a password (min 6 chars)"
                    required
                    minLength={6}
                    className={inputCls}
                  />
                  {/* 🔥 સિમ્પલ આંખનું આઇકોન */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-forest-dark transition"
                  >
                    {showPassword ? (
                      // આંખ ખુલ્લી (Show)
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    ) : (
                      // આંખ બંધ (Hide)
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="sm:col-span-2">
                <label className="block font-bold text-sm text-gray-700 mb-1.5">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                    minLength={6}
                    className={inputCls}
                  />
                  {/* 🔥 સિમ્પલ આંખનું આઇકોન */}
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-forest-dark transition"
                  >
                    {showConfirmPassword ? (
                      // આંખ ખુલ્લી (Show)
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    ) : (
                      // આંખ બંધ (Hide)
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="sm:col-span-2 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-semibold">
                  {error}
                </div>
              )}

              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-forest-dark to-forest-light text-white py-3.5 rounded-xl font-bold text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-60"
                >
                  {loading ? "Creating Account..." : "Create My Account →"}
                </button>
              </div>
            </form>

            <p className="text-center text-gray-500 mt-6 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-forest-dark font-bold hover:underline">
                Login here
              </Link>
            </p>

          </div>
        </div>
      </section>
    </>
  );
}

export default Register;