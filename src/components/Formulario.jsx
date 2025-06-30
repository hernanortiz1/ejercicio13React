import { Button, Col, Form, Row } from "react-bootstrap";
import Clima from "./Clima";
import { useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import Swal from "sweetalert2";

const Formulario = () => {
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [clima, setClima] = useState(null);
  const [mostrarSpinner, setMostrarSpinner] = useState(false);

  const obtenerClima = async () => {
    if (pais === "" || ciudad === "") {
      Swal.fire({
        icon: "error",
        title: "Ciudad o pais no encontrado",
        text: "Verifica el nombre de la ciudad y el país e intenta nuevamente",
      });
      return;
    }

    try {
      setMostrarSpinner(true);
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=026b51c14f1835bd462133b357c41c2f&units=metric&lang=es`
      );
      const datos = await respuesta.json();
      console.log(datos);

      if (datos.cod === "404") {
        Swal.fire({
          icon: "error",
          title: "Ciudad o país no encontrado",
          text: "Verifica el nombre de la ciudad y el país e intenta nuevamente",
        });
        setMostrarSpinner(false);
        return;
      }
       setClima(datos);
      setMostrarSpinner(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <section className="p-3 border rounded-3 bg-white container">
        <Form.Group>
          <div className="d-md-flex align-items-center gap-2 my-2 text-center">
            <Form.Label className="fs-5 fw-bold">Pais</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese pais"
              required
              value={pais}
              onChange={(e) => setPais(e.target.value.toUpperCase())}
            />

            <Form.Label className="fs-5 fw-bold ms-md-4 mt-3 mt-md-0">Ciudad</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese ciudad"
              required
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
            />
            <div className="mt-3 mt-md-0 text-center">
              <Button
                onClick={obtenerClima}
                variant="primary"
                className="ms-md-2 fs-5 px-3"
              >
                Consultar
              </Button>
            </div>
          </div>
        </Form.Group>
      </section>

      <section className="mt-4">
        {mostrarSpinner ? (
          <div className="my-4 d-flex justify-content-center align-items-center">
            <RingLoader color="#0d6efd" loading={mostrarSpinner} size={100} />
          </div>
        ) : clima === null? (
          <p className="text-center fs-3">No hay datos para mostrar</p>
        ) : (
          <Clima climaProps={clima} />
        )}
      </section>
    </div>
  );
};

export default Formulario;
