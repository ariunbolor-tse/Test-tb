// input.tsx
import React from "react";

type InputProps = {
  placeholder: string;
  onChange: (value: number) => void;
};

export const Input: React.FC<InputProps> = ({ placeholder, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      onChange(value);
    }
  };

  return (
    <input
      className="p-2 outline-none border border-blue-400 rounded-lg"
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
};
