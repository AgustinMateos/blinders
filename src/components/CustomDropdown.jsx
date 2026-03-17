// CustomDropdown.jsx (o pegalo directo en Contacto)
import React, { useState, useRef, useEffect } from "react";

const CustomDropdown = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar al clickear afuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value) || { label: placeholder };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger / Botón visible */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
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
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Lista de opciones (dropdown) */}
      {isOpen && (
        <div
          className="
            absolute z-10 mt-1 w-full 
            bg-[#0f0f0f] border border-gray-600 
            rounded-lg shadow-xl max-h-60 overflow-auto
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
                ${value === option.value 
                  ? "bg-red-900/30 text-red-300" 
                  : "text-white hover:bg-gray-800/50"}
                transition-colors
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