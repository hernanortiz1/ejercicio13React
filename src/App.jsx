import Formulario from "./components/Formulario";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../src/img/clima.png"

function App() {
  return(
    <>
      <main className="bg-primary-subtle">
        <div className="my-3 text-center fw-bold shadow py-3 bg-white d-flex justify-content-center align-items-center">
          <h1 className="me-3">
          Clima
        </h1>
        <img src={logo} alt="logo del clima" className="imgLogo"/>
        </div>
        
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
