import Formulario from "./components/Formulario";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return(
    <>
      <main className="bg-primary-subtle">
        <h1 className="my-3 text-center fw-bold shadow py-3 bg-white">
          Clima
        </h1>
        <div>
          <Formulario />
        </div>
      </main>
      <footer className="bg-dark text-light text-center py-3">
        &copy; Todos los derechos reservados
      </footer>
    </>
  );
}
export default App;
