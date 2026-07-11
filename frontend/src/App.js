import { useState } from "react";
import Hero from "./sections/Hero/Hero";
import Diferenciais from "./sections/Diferenciais/Diferenciais";
import Galeria from "./sections/Galeria/Galeria";
import Plantas from "./sections/Plantas/Plantas";
import Localizacao from "./sections/Localizacao/Localizacao";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import Formulario from "./sections/Formulario/Formulario";
import SobreEmpreendimento from "./sections/SobreEmpreendimento/SobreEmpreendimento";
import Comodidades from "./sections/Comodidades/Comodidades";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {

  const [formularioAberto,
    setFormularioAberto] =
      useState(false);

  return (
    
    <>

      <Navbar
        abrirFormulario={() =>
        setFormularioAberto(true)
      }
      />
      <Formulario

        aberto={formularioAberto}
        fecharFormulario={() =>
          setFormularioAberto(false)
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
      <Comodidades />
      <Plantas />
      <Localizacao />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;