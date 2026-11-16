// import React, { useState, useEffect } from "react";
// import { NavLink, Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const [user, setUser] = useState(() => {
//     return JSON.parse(sessionStorage.getItem("wildoraUser") || "null");
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 30);
//     };

//     const updateUser = () => {
//       setUser(
//         JSON.parse(sessionStorage.getItem("wildoraUser") || "null")
//       );
//     };

//     window.addEventListener("scroll", onScroll);
//     window.addEventListener("authChanged", updateUser);
//     window.addEventListener("storage", updateUser);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("authChanged", updateUser);
//       window.removeEventListener("storage", updateUser);
//     };
//   }, []);

//   // Logout
//   const handleLogout = () => {
//     sessionStorage.removeItem("wildoraToken");
//     sessionStorage.removeItem("wildoraUser");

//     setUser(null);
//     setOpen(false);

//     window.dispatchEvent(new Event("authChanged"));
//     navigate("/");
//   };

//   // Base links (badha mate)
//   const links = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Animals", path: "/animals" },
//     { name: "Contact", path: "/contact" },
//   ];

//   // 🔥 Login pachi j ShowTickets link
//   const userLinks = user
//     ? [{ name: "My Tickets", path: "/my-tickets" }]
//     : [];

//   return (
//     <nav
//       className={`sticky top-0 z-50 transition-all duration-500 ${
//         scrolled
//           ? "bg-forest-dark/95 backdrop-blur-xl shadow-xl py-2"
//           : "bg-linear-to-r from-forest to-forest-light py-4"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-3 group">
//           <span className="text-4xl group-hover:rotate-12 transition-transform">
//             🐾
//           </span>

//           <div>
//             <h1 className="text-3xl font-black text-white tracking-tight">
//               Wildora<span className="text-yellow-400">.</span>
//             </h1>

//             <p className="text-[9px] tracking-[3px] text-green-100 uppercase">
//               Explore The Wild
//             </p>
//           </div>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center gap-1">
//           {[...links, ...userLinks].map((link) => (
//             <NavLink
//               key={link.path}
//               to={link.path}
//               className={({ isActive }) =>
//                 `relative px-4 py-3 font-semibold rounded-full transition-all duration-300 ${
//                   isActive
//                     ? "text-yellow-400"
//                     : "text-white hover:text-yellow-400"
//                 }`
//               }
//             >
//               {({ isActive }) => (
//                 <>
//                   {link.name}

//                   <span
//                     className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-yellow-400 rounded-full transition-all duration-300 ${
//                       isActive ? "w-6" : "w-0"
//                     }`}
//                   />
//                 </>
//               )}
//             </NavLink>
//           ))}
//         </div>

//         {/* Desktop Buttons */}
//         <div className="hidden lg:flex items-center gap-3">
//           {user ? (
//             <>
//               <span className="text-white font-semibold">
//                 Hi, {user.name}
//               </span>

//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 text-white px-6 py-3 rounded-full font-bold hover:bg-red-600 transition-all"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <Link
//               to="/login"
//               className="bg-yellow-400 text-forest-dark px-6 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-300 hover:-translate-y-1 transition-all"
//             >
//               Book Now ↗
//             </Link>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden text-3xl text-white w-10 h-10 flex items-center justify-center"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle menu"
//           aria-expanded={open}
//         >
//           {open ? "×" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <div
//         className={`lg:hidden overflow-hidden transition-all duration-500 ${
//           open ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="flex flex-col px-6 py-5 gap-2 bg-forest-dark/95">

//           {[...links, ...userLinks].map((link) => (
//             <NavLink
//               key={link.path}
//               to={link.path}
//               onClick={() => setOpen(false)}
//               className={({ isActive }) =>
//                 `py-3 px-5 rounded-xl font-semibold transition ${
//                   isActive
//                     ? "bg-yellow-400 text-forest-dark"
//                     : "text-white hover:bg-white/10"
//                 }`
//               }
//             >
//               {link.name}
//             </NavLink>
//           ))}

//           {/* Mobile Buttons */}
//           <div className="flex gap-3 mt-3">
//             {user ? (
//               <>
//                 <span className="flex-1 text-center py-3 text-white font-semibold">
//                   Hi, {user.name}
//                 </span>

//                 <button
//                   onClick={handleLogout}
//                   className="flex-1 py-3 bg-red-500 text-white rounded-full font-bold"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <Link
//                 to="/login"
//                 onClick={() => setOpen(false)}
//                 className="w-full text-center py-3 bg-yellow-400 text-forest-dark rounded-full font-bold"
//               >
//                 Book Now ↗
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [user, setUser] = useState(() => {
    return JSON.parse(sessionStorage.getItem("wildoraUser") || "null");
  });

  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    const updateUser = () => {
      setUser(
        JSON.parse(sessionStorage.getItem("wildoraUser") || "null")
      );
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("authChanged", updateUser);
    window.addEventListener("storage", updateUser);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("authChanged", updateUser);
      window.removeEventListener("storage", updateUser);
    };
  }, []);

  // Logout
  const handleLogout = () => {
    sessionStorage.removeItem("wildoraToken");
    sessionStorage.removeItem("wildoraUser");

    setUser(null);
    setOpen(false);

    window.dispatchEvent(new Event("authChanged"));
    navigate("/");
  };

  // Base links (badha mate)
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Animals", path: "/animals" },
    { name: "Contact", path: "/contact" },
  ];

  // 🔥 Login pachi j ShowTickets link
  const userLinks = user
    ? [{ name: "My Tickets", path: "/my-tickets" }]
    : [];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-forest-dark/95 backdrop-blur-xl shadow-xl py-2"
          : "bg-linear-to-r from-forest to-forest-light py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <span className="text-4xl group-hover:rotate-12 transition-transform">
            🐾
          </span>

          <div>
            <h1 className="text-3xl font-black text-white tracking-tight">
              Wildora<span className="text-yellow-400">.</span>
            </h1>

            <p className="text-[9px] tracking-[3px] text-green-100 uppercase">
              Explore The Wild
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {[...links, ...userLinks].map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-3 font-semibold rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-yellow-400 rounded-full transition-all duration-300 ${
                      isActive ? "w-6" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <>
              <span className="text-white font-semibold">
                Hi, {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-6 py-3 rounded-full font-bold hover:bg-red-600 transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-yellow-400 text-forest-dark px-6 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-300 hover:-translate-y-1 transition-all"
            >
              Book Now ↗
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl text-white w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-5 gap-2 bg-forest-dark/95">

          {[...links, ...userLinks].map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-3 px-5 rounded-xl font-semibold transition ${
                  isActive
                    ? "bg-yellow-400 text-forest-dark"
                    : "text-white hover:bg-white/10"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Buttons */}
          <div className="flex gap-3 mt-3">
            {user ? (
              <>
                <span className="flex-1 text-center py-3 text-white font-semibold">
                  Hi, {user.name}
                </span>

                <button
                  onClick={handleLogout}
                  className="flex-1 py-3 bg-red-500 text-white rounded-full font-bold"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="w-full text-center py-3 bg-yellow-400 text-forest-dark rounded-full font-bold"
              >
                Book Now ↗
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;