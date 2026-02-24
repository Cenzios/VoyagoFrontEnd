"use client";

import { useState, useEffect } from "react";
import { User } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Steps", href: "#steps" },
    { name: "Book Car", href: "#fleet" },
    { name: "Why Choose Us", href: "#why-choose" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact Us", href: "#get-in-touch" },
  ];

  // Scroll detection - resets when pathname changes
  useEffect(() => {
    // Reset scroll state for non-home pages
    if (pathname !== "/") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsScrolled(false);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.7);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleProfileClick = () => {
    router.push("/profile");
  };

  const handleNavClick = (href: string) => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navbarClass =
    pathname !== "/"
      ? "backdrop-blur-md bg-gray-900/90 border border-gray-700 shadow-lg"
      : isScrolled
      ? "backdrop-blur-md bg-gray-900/90 border border-gray-700 shadow-lg"
      : "backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg";

  const textColorClass =
    pathname !== "/"
      ? "text-gray-100 hover:text-[#f5a623]"
      : isScrolled
      ? "text-gray-100 hover:text-[#f5a623]"
      : "text-white hover:text-[#f5a623]";

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[80%] rounded-2xl transition-all duration-500 ${navbarClass}`}
    >
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image src="/logo.png" alt="logo" width={160} height={40} priority />
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`text-[16px] font-medium transition-all duration-300 ${textColorClass}`}
            >
              {link.name}
            </button>
          ))}

          <User
            onClick={handleProfileClick}
            className={`w-5 h-5 cursor-pointer transition-colors duration-300 ${textColorClass}`}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
