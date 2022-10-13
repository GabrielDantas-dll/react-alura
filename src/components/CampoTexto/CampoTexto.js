import "./CampoTexto.css";
import { useState } from "react";

export const CampoTexto = (props) => {
  const [valor, setValor] = useState();

  const aoDigitado = (e) => {
    props.aoAlterado(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};
