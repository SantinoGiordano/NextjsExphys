// components/UpArrow.tsx
"use client";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

const UpArrow = () => {
  return (
    <Link href="./" scroll={true}>
      <button
        className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition z-50"
        aria-label="Back to Top"
      >
        <FaArrowUp size={20} />
      </button>
    </Link>
  );
};

export default UpArrow;
