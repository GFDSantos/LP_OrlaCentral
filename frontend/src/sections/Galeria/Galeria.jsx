import empreendimento from "../../data/empreendimento";

import "./Galeria.css";

function Galeria() {
  return (
    <section className="galeria">
      <h2>Galeria</h2>
      <div className="galeria-grid">
        {empreendimento.galeria.map((foto, index) => (
          <img
            key={index}
            src={foto}
            alt="Galeria"
          />
        ))}
      </div>
    </section>
  );
}

export default Galeria;