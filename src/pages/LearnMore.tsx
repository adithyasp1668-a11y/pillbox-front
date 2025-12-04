// src/pages/LearnMore.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LearnMore() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-6 py-10 max-w-3xl mx-auto">

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-6">
        About PillBox
      </h1>

      <p className="text-center text-gray-500 mb-10">
        Smart, Safe & Simple Medication Assistant
      </p>

      {/* SECTION 1 */}
      <h2 className="text-2xl font-bold text-gray-800 mb-3">🩺 What is PillBox?</h2>
      <p className="text-gray-700 leading-relaxed">
        PillBox is a smart medicine reminder and organizer designed to help
        people take medications on time using a simple, compartment-based
        system with smart alerts.
      </p>

      <ul className="list-disc pl-6 mt-3 text-gray-700">
        <li>Elderly users</li>
        <li>Patients with long-term medication</li>
        <li>Caregivers & families</li>
      </ul>

      <p className="text-gray-700 mt-3">
        Focused on: <strong>Simplicity, Safety, Reliability</strong>
      </p>

      {/* SECTION 2 */}
      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-3">🔄 How PillBox Works</h2>
      <ol className="list-decimal pl-6 text-gray-700 leading-relaxed space-y-2">
        <li>Add a medicine with name + time.</li>
        <li>Select a compartment.</li>
        <li>PillBox schedules smart alerts.</li>
        <li>Track upcoming and missed doses easily.</li>
      </ol>

      <p className="mt-3 text-gray-700">
        ✔ No complex setup  
        ✔ Easy for elderly  
        ✔ Very user-friendly  
      </p>

      {/* SECTION 3 */}
      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-3">⭐ Key Features</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>Multiple medicine compartments</li>
        <li>Smart dose reminders</li>
        <li>Easy reset per compartment</li>
        <li>Upcoming dose tracking</li>
        <li>Clean, elderly-friendly UI</li>
        <li>Offline support</li>
        <li>Mobile + Desktop friendly</li>
      </ul>

      {/* SECTION 4 */}
      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-3">💡 Why PillBox is Different</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>Designed like a real physical pill box</li>
        <li>Supports IoT hardware integration (ESP32 ready)</li>
        <li>Minimal steps – clean interface</li>
        <li>Helps reduce missed doses & health risks</li>
      </ul>

      <p className="italic text-gray-600 mt-2">
        “Most reminder apps are complex. PillBox is simple, practical, and reliable.”
      </p>

      {/* SECTION 5 */}
      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-3">🔮 Future Enhancements</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>Mobile notifications</li>
        <li>Voice reminders (Alexa/Google)</li>
        <li>Caregiver monitoring access</li>
        <li>Emergency alert contacts</li>
        <li>Medicine history tracking</li>
        <li>Smart Bluetooth/WiFi pill box hardware</li>
      </ul>

      {/* SECTION 6 */}
      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-3">⚠️ Safety Note</h2>
      <p className="text-gray-700 leading-relaxed">
        PillBox helps with reminders but does NOT replace medical advice.
        Always follow your doctor’s prescription and dosage instructions.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-10 mb-16">
        <button
          onClick={() => navigate("/home")}
          className="px-8 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Get Started
        </button>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-white border border-blue-600 text-blue-600 rounded-xl text-lg font-semibold shadow hover:bg-blue-50 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
}
