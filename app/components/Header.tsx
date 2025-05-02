"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-orange-600 text-3xl font-bold">⟳</div>
          <span className="font-bold text-lg sm:text-xl">PEPTIDE</span>
          <span className="text-lg sm:text-xl text-gray-500">SCIENCES</span>
        </Link>

        {/* Desktop Search */}
        <div className="hidden lg:flex w-1/2">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-[#c4c4c4] rounded-lg focus:outline-none"
            />
            <FaSearch className="absolute top-2.5 left-3 text-gray-500" />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 ">
          <Link href="/sign-in" className="items-center gap-2 hidden lg:flex">
            <FaUser className="text-xl" />
            <span>Sign in</span>
          </Link>
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="lg:hidden cursor-pointer"
          >
            <FaSearch className="text-xl" />
          </button>
          <Link href="/cart" className="flex items-center gap-2">
            <FaShoppingCart className="text-xl" />
            <span className="hidden lg:inline">My Cart</span>
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden cursor-pointer"
          >
            {menuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      {searchOpen && (
        <div className="px-4 pb-3 lg:hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none"
          />
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden lg:block text-sm pt-8">
        <div className="container mx-auto flex justify-between">
          <div className="flex space-x-8">
            <Link href="/all-peptides">All Peptides</Link>
            <Link href="/popular-peptides">Popular Peptides</Link>
            <Link href="/bundle-save">Bundle & Save</Link>
            <Link href="/peptide-research">Peptide Research</Link>
            <Link href="/peptide-info">Peptide Information</Link>
          </div>
          <div className="flex space-x-6">
            <Link href="/about-us">Our Company</Link>
            <Link href="/faq">Contact Us</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
