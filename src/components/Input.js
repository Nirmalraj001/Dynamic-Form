import React from 'react';

const Input = ({ type, label,name, value, onChange, error }) => {
    return (
      <div>
        <label>{label}</label>
        <input type={type} name={name} value={value} onChange={onChange} />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    );
  };
  
  export default Input;