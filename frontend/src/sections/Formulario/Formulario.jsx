import "./Formulario.css";
import { useState } from "react";
import empreendimento from "../../data/empreendimento";

function Formulario({
  aberto,
  fecharFormulario
}) {
  const [nome, setNome] =
    useState("");
  const [telefone, setTelefone] =
    useState("");
  const [email, setEmail] =
    useState("");
  function enviarWhatsApp() {
    const mensagem = `
Olá! Tenho interesse no empreendimento ${empreendimento.nome}.
Nome: ${nome}
Telefone: ${telefone}
E-mail: ${email}
`;
    const link =
`https://wa.me/${empreendimento.whatsapp}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, "_blank");
    /* FECHA MODAL */
    fecharFormulario();
    /* LIMPA CAMPOS */
    setNome("");
    setTelefone("");
    setEmail("");
  }
  if (!aberto) return null;
  return (
    <div
      className="formulario-overlay"
      onClick={fecharFormulario}
    >
      <div
        className="formulario-container"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <button
          className="fechar-btn"
          onClick={fecharFormulario}
        >
          Fechar Formulário
        </button>

        <h2>
          Solicite Atendimento
        </h2>

        <p>
          Preencha os dados e fale
          com um especialista.
        </p>

        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) =>
            setNome(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Seu telefone"
          value={telefone}
          onChange={(e) =>
            setTelefone(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <button
          className="enviar-btn"
          onClick={enviarWhatsApp}
          disabled={
          !nome.trim() ||
          !telefone.trim() ||
          !email.trim()
  }
>
  Enviar
</button>
      </div>
    </div>
  );
}

export default Formulario;