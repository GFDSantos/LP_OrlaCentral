import "./CTA.css";
import empreendimento from "../../data/empreendimento";

function CTA() {
  return (
    <section className="cta">
      <h2>
        Agende agora seu atendimento.
      </h2>

      <p>
        Fale conosco e descubra condições
        especiais de lançamento.
      </p>

      <a
        href={`https://wa.me/${empreendimento.whatsapp}`}
        target="_blank"
        rel="noreferrer"
      >
        Quero Atendimento
     </a>
    </section>
  );
}

export default CTA;