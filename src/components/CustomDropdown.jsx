// src/app/contacto/CustomDropdown.jsx  (o donde prefieras colocarlo)

"use client"; // Necesario porque usa useState y useEffect

import React, { useState, useRef, useEffect } from "react";

const CustomDropdown = ({
  options = [],
  value = "",
  onChange = () => {},
  placeholder = "Selecciona una opción",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar al hacer click afuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOption = options.find((opt) => opt.value === value) || {
    label: placeholder,
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          w-full px-4 py-3 
          bg-black/40 
          border border-gray-600 
          rounded-lg 
          text-white text-base text-left
          focus:outline-none 
          focus:border-red-600
          focus:ring-1 focus:ring-red-600/50 
          transition-all duration-200
          flex items-center justify-between
        "
      >
        <span className={value ? "text-white" : "text-gray-500"}>
          {selectedOption.label}
        </span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="
            absolute z-50 mt-1 w-full 
            bg-[#0f0f0f] border border-gray-600 
            rounded-lg shadow-2xl max-h-60 overflow-y-auto
          "
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`
                w-full px-4 py-3 text-left text-base
                transition-colors duration-150
                ${value === option.value
                  ? "bg-red-900/30 text-red-300 font-medium"
                  : "text-white hover:bg-gray-800/70"}
              `}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;