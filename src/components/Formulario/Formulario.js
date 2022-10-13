import { Botao } from "../Botao/Botao";
import { CampoTexto } from "../CampoTexto/CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa/ListaSuspensa";
import { useState } from "react";
import "./Formulario.css";

export const Formulario = (props) => {
  const times = [
    "Programação",
    "Front-end",
    "Data Sciense",
    "Devops",
    "UX e Desing",
    "Mobile",
    "Inovação e gestão",
  ];

  const [nome, setNome] = useState();
  const [cargo, setCargo] = useState();
  const [imagem, setImagem] = useState();
  const [time, setTime] = useState();

  const aoSalvar = (e) => {
    e.preventDefault();
    props.aoColaboradorAdicionado({
      nome,
      cargo,
      imagem,
      time,
    });
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Coloque sua imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};
