import "./App.css";
import About from "./components/About";

function App() {
  const listados = "Listados en React";
  // Consulta
  const comentarios = [
    { id: 1, texto: "La consciencia es el Universo intentando entenderse" },
    {
      id: 2,
      texto: "La inteligencia es un hecho emergente de actividad cerebral",
    },
    {
      id: 3,
      texto:
        "Inteligencia militar son dos términos absolutamente contradictorios",
    },
    { id: 4, texto: "Putin es un pu..." },
  ];

  const mensaje = "Somos nosotras";
  const mensaje2 = "Prueba de props";

  return (
    <div>
      <h1>{listados}</h1>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario.id}>{comentario.texto}</li>
        ))}
      </ul>
      <About mensaje={mensaje} mensajeDos={mensaje2} />
    </div>
  );
}

export default App;

// JSX - JavaScript and HTML
// props
