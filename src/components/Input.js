import React from 'react';

const Input = ({ type, label,name, value, onChange, error,className }) => {
    return (
      <div>
        <label>{label}</label>
        <input type={type} name={name} value={value} onChange={onChange} className={className} />
        {error && <p className='error'>{error}</p>}
      </div>
    );
  };
  
  export default Input;