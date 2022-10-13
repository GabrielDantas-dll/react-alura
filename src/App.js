import { Banner } from "./components/Banner/Banner";
import { Formulario } from "./components/Formulario/Formulario";
import { useState } from "react";

function App() {
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
        aoColaboradorAdicionado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
    </div>
  );
}

export default App;
