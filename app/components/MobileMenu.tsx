"use client";

import Link from "next/link";
import { FaUser } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: Props) {
  return (
    <div
      className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out h-fit
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 ">
        <div className="flex items-center space-x-2">
          <div className="text-orange-600 text-3xl font-bold">⟳</div>
          <span className="font-bold text-xl">PEPTIDE</span>
          <span className="text-xl text-gray-500">SCIENCES</span>
        </div>
        <button onClick={onClose} className="text-2xl cursor-pointer">
          ✕
        </button>
      </div>

      <div className="p-4 space-y-1">
        <div className="flex items-center justify-between border-b border-gray-200 py-3">
          <div className="flex items-center space-x-2 font-semibold">
            <FaUser />
            <span>Account</span>
          </div>
          <Link
            href="/signin"
            className="border px-4 py-1 rounded hover:bg-gray-100 text-sm"
            onClick={onClose}
          >
            Sign In
          </Link>
        </div>

        {[
          ["All Peptides", "/all-peptides"],
          ["Popular Peptides", "/popular-peptides"],
          ["Bundle & Save", "/bundle-save"],
          ["Peptide Research", "/peptide-research"],
          ["Peptide Information", "/peptide-info"],
          ["Our Company", "/our-company"],
          ["Contact Us", "/contact-us"],
        ].map(([label, href]) => (
          <Link
            key={label}
            href={href}
            onClick={onClose}
            className="block border-b last:border-0 border-gray-200 py-3 hover:bg-gray-50"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
