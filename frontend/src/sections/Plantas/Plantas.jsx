import "./Plantas.css";
import empreendimento from "../../data/empreendimento";
import { useState } from "react";

function Plantas() {
  const [imagemAtiva, setImagemAtiva] =
    useState(null);
  return (

    <section className="plantas">
      <h2>Plantas</h2>
      <div className="plantas-grid">
        {empreendimento.plantas.map(
          (img, index) => (
          <div
            className="planta-card"
            key={index}
            onClick={() =>
              setImagemAtiva(img)
            }
          >
            <img
              src={img}
              alt={`Planta ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* MODAL */}
      {imagemAtiva && (
        <div
          className="modal-overlay"
          onClick={() =>
            setImagemAtiva(null)
          }
        >
          <img
            src={imagemAtiva}
            alt="Planta ampliada"
          />
        </div>
      )}
    </section>
  );
}

export default Plantas;