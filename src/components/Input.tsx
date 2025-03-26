import React from 'react';
import styled from 'styled-components';

interface InputProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ id, name, value, onChange, label, type = "text", required = false }) => {
  return (
    <StyledWrapper>
      <div className="group">
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          type={type}
          className="input"
          placeholder=" " // Necesario para el efecto de etiqueta
        />
        <span className="highlight" />
        <span className="bar" />
        <label htmlFor={id}>{label}</label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .group {
    position: relative;
  }

  .input {
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #515151;
    background: rgba(255, 255, 255, 0.2); /* Fondo ligeramente opaco para el input */
    backdrop-filter: blur(8px); /* Efecto de difuminado (similar al vidrio esmerilado) */
    transition: border-color 0.3s ease;
  }

  .input:focus {
    outline: none;
  }

  /* Estilo para el placeholder */
  .input::placeholder {
    color: #1A2438; /* Tono para el placeholder */
  }

  label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 12px; /* Ajusta la posición original de la etiqueta */
    transition: 0.2s ease all;
  }

  .input:focus ~ label,
  .input:valid ~ label {
    top: -8px; /* Reduce la distancia que sube la etiqueta */
    font-size: 14px;
    color: #1a202c; /* bg-gray-900 */
  }

  .bar {
    position: relative;
    display: block;
    width: 100%;
  }

  .bar:before,
  .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #1a202c; /* bg-gray-900 */
    transition: 0.2s ease all;
  }

  .bar:before {
    left: 50%;
  }

  .bar:after {
    right: 50%;
  }

  .input:focus ~ .bar:before,
  .input:focus ~ .bar:after {
    width: 50%;
  }

  .highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  .input:focus ~ .highlight {
    animation: inputHighlighter 0.3s ease;
  }

  @keyframes inputHighlighter {
    from {
      background: #1a202c; /* bg-gray-900 */
    }
    to {
      width: 0;
      background: transparent;
    }
  }
`;

export default Input;
