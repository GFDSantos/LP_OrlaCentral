import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import SobreEmpreendimento from "./sections/SobreEmpreendimento/SobreEmpreendimento";
import Diferenciais from "./sections/Diferenciais/Diferenciais";
import Galeria from "./sections/Galeria/Galeria";
import Plantas from "./sections/Plantas/Plantas";
import Localizacao from "./sections/Localizacao/Localizacao";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import Footer from "./components/Footer/Footer";
import Formulario from "./sections/Formulario/Formulario";
import SimuFormulario from "./sections/SimuFormulario/SimuFormulario";

function App() {
  const [formularioAberto, setFormularioAberto] =
    useState(false);

  const [simulacaoAberta, setSimulacaoAberta] =
    useState(false);
  return (
    <>
      <Navbar
        abrirFormulario={() =>
          setFormularioAberto(true)
        }
        abrirSimulacao={() =>
          setSimulacaoAberta(true)
        }
      />
      <Formulario
        aberto={formularioAberto}
        fecharFormulario={() =>
          setFormularioAberto(false)
        }
      />
      <SimuFormulario
        aberto={simulacaoAberta}
        fecharFormulario={() =>
          setSimulacaoAberta(false)
        }
      />
      <Hero
        abrirFormulario={() =>
          setFormularioAberto(true)
        }
      />
      <SobreEmpreendimento />
      <Diferenciais />
      <Galeria />
      <Plantas />
      <Localizacao />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;