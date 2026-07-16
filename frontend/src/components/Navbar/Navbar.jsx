import "./Navbar.css";
import empreendimento from "../../data/empreendimento";

function Navbar({
  abrirFormulario,
  abrirSimulacao
}) {
  return (
    <header className="navbar">
      <div className="navbar-brand">

        <img
          src={empreendimento.logoCury}
          alt="Cury"
          className="navbar-logo-cury"
        />
        <div className="navbar-divider"></div>
        <img
          src={empreendimento.logoEmpreendimento}
          alt={empreendimento.nome}
          className="navbar-logo-empreendimento"
        />
      </div>
      <div className="navbar-actions">
        <button
          className="navbar-btn-simulacao"
          onClick={abrirSimulacao}
        >
          Solicitar Simulação
        </button>
        <button
          className="navbar-btn-atendimento"
          onClick={abrirFormulario}
        >
          Solicitar Atendimento
        </button>
      </div>
    </header>
  );
}

export default Navbar;