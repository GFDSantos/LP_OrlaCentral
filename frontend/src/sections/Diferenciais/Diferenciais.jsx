import "./Diferenciais.css";

const itens = [
  "🌅 Localização Beira-Mar",
  "🏖️ Rooftop Exclusivo",
  "🎉 Espaço Luau",
  "💻 Coworking",
  "🏓 Beach Tennis",
  "🐶 Pet Care & Pet Place",
  "🛒 Easy Market",
  "📦 Espaço Delivery"
];

function Diferenciais() {
  return (
    <section className="diferenciais">
      <h2>
        Diferenciais do Condomínio
      </h2>

      <div className="diferenciais-grid">
        {itens.map((item, index) => (
          <div
            key={index}
            className="diferencial-card"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Diferenciais;