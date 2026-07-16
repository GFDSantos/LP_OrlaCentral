import "./SimuFormulario.css";
import { useState } from "react";
import empreendimento from "../../data/empreendimento";

function SimuFormulario({
  aberto,
  fecharFormulario
}) {

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  function enviarWhatsApp() {
    const mensagem = `Olá!

Gostaria de solicitar uma simulação de financiamento.

Empreendimento:
${empreendimento.nome}
Nome:
${nome}
Telefone:
${telefone}
E-mail:
${email}

Aguardo contato para receber as orientações sobre a documentação necessária e iniciar minha análise de crédito.`;

    const link =
      `https://wa.me/${empreendimento.whatsapp}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
    fecharFormulario();
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
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="voltar-btn"
          onClick={fecharFormulario}
        >
          ← Voltar
        </button>

        <h2>
          Solicite sua Simulação
        </h2>

        <p>
          Informe seus dados.

          <br /><br />

          Um especialista da Cury fará contato para explicar as
          condições de financiamento, orientar sobre a documentação
          necessária e iniciar sua análise de crédito.
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
          Solicitar Simulação
        </button>
      </div>
    </div>
  );
}

export default SimuFormulario;