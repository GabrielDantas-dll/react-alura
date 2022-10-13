import "./ListaSuspensa.css";

export const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={(e) => props.aoAlterado(e.target.value)}
        required={props.obrigatorio}
        value={props.value}
      >
        {props.itens.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};
