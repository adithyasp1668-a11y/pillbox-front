// src/pages/Landing.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center px-6">
      
      {/* Logo */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 drop-shadow-sm">
          PillBox
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Smart Medicine Reminder & Organizer
        </p>
      </div>

      {/* Illustration */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png"
        alt="Medicine Icon"
        className="w-40 mt-10 animate-fade-in"
      />

      {/* Features */}
      <div className="mt-10 space-y-3 text-center text-gray-700">
        <p>✔ Never miss your medicine again</p>
        <p>✔ Smart alerts for every dose</p>
        <p>✔ Organized compartments for easy tracking</p>
      </div>

      {/* Buttons */}
      <div className="mt-10 space-x-4">
        <button
          onClick={() => navigate("/home")}
          className="px-8 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Get Started
        </button>
<button
  onClick={() => navigate("/learn")}
  className="px-8 py-3 bg-white border border-blue-600 text-blue-600 rounded-xl text-lg font-semibold shadow hover:bg-blue-50 transition"
>
  Learn More
</button>

      </div>

      {/* Footer */}
      <p className="mt-10 text-sm text-gray-500">
        Designed for your daily medication safety ❤️
      </p>
    </div>
  );
}
