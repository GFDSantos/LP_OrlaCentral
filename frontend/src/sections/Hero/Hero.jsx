import "./Hero.css";
import empreendimento from "../../data/empreendimento";

function Hero({
  abrirFormulario
}) {
  return (

    <section className="hero">
      <div className="hero-content">
        <h1>
          {empreendimento.nome}
        </h1>
        <p>
          {empreendimento.headline}
        </p>
        <span>
          {empreendimento.subtitulo}
        </span>
     </div>
      <div className="hero-image">
        <img
          src={empreendimento.heroImagem}
          alt={empreendimento.nome}
        />
      </div>
    </section>
  );
}

export default Hero;