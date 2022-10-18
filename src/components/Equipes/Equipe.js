import { Colaborador } from "../Colaborador/Colaborador";
import "./Equipe.css";

export const Equipe = (props) => {
  return (
    <section
      className="equipe"
      style={{ backgroundColor: props.corSecundaria }}
    >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            image={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  );
};
