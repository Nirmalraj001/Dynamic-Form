import React from "react";

const SelectBox = ({ options, value, onChange, error ,className}) => {
  return (
    <div>
      <select value={value} onChange={onChange} className={className}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <span className='error-message'>{error}</span>}
    </div>
  );
};

export default SelectBox;
