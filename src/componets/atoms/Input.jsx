import React from 'react';
import './Input.css';

const Input = ({ label, type, value, onChange }) => (
  <div className="input-container">
    <label>
      {label}
      <input type={type} value={value} onChange={onChange} />
    </label>
  </div>
);

export default Input;
