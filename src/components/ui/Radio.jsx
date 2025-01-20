import React from "react";

const Radio = ({ options, selectedValue, onChange, className = "" }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
         
          <div className="relative flex items-center">
   
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedValue === option.value
                  ? "border-green-500" 
                  : "border-gray-300" 
              }`}
            >
              {selectedValue === option.value && (
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              )}
            </div>
          </div>
          <span className="text-black font-bold text-lg">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;