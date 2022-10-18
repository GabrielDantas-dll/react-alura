import { Banner } from "./components/Banner/Banner";
import { Formulario } from "./components/Formulario/Formulario";
import { useState } from "react";
import { Equipe } from "./components/Equipes/Equipe";

function App() {
  const equipes = [
    {
      nome: "Programação",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Front-end",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },
    {
      nome: "Data Sciense",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
    },
    {
      nome: "Devops",
      corPrimaria: "#e06b6f",
      corSecundaria: "#fde7e8",
    },
    {
      nome: "UX e Desing",
      corPrimaria: "#d86ebf",
      corSecundaria: "#eae9f5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#ffb405",
      corSecundaria: "#fff5d9",
    },
    {
      nome: "Inovação e gestão",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaboradores);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        equipes={equipes.map((equipe) => equipe.nome)}
        aoColaboradorAdicionado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />

      {equipes.map((equipe) => (
        <Equipe
          nome={equipe.nome}
          key={equipe.nome}
          corPrimaria={equipe.corPrimaria}
          corSecundaria={equipe.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === equipe.nome
          )}
        />
      ))}
    </div>
  );
}

export default App;
