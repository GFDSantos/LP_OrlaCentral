import "./Localizacao.css";
import empreendimento from "../../data/empreendimento";

function Localizacao() {
  return (

    <section className="localizacao">
      <div className="localizacao-texto">
        <h2>Localização Estratégica</h2>
      <p>
        "Localização estratégica é ter o dinamismo do Centro e a brisa da orla em um só lugar. Conquiste a praticidade de viver perto de tudo no Orla Central Niterói."
      </p>
      </div>

      <div className="localizacao-imagens">
        {empreendimento.localizacao.map(
          (img, index) => (
          <img
            key={index}
            src={img}
            alt="Localização"
          />
        ))}
      </div>
    </section>
  );
}

export default Localizacao;