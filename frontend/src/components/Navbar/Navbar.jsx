import "./Navbar.css";
import empreendimento from "../../data/empreendimento";

function Navbar({ abrirFormulario }) {
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

      <button
        className="navbar-btn"
        onClick={abrirFormulario}
      >
        Solicitar Atendimento
      </button>

    </header>
  );
}

export default Navbar;