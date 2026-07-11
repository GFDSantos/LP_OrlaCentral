import "./WhatsAppButton.css";
import empreendimento from "../../data/empreendimento";

function WhatsAppButton() {

  return (
    <a
      className="whatsapp-button"
      href={`https://wa.me/${empreendimento.whatsapp}`}
      target="_blank"
      rel="noreferrer"
    >

      WhatsApp

    </a>

  );

}
export default WhatsAppButton;