import { Button, Col, Form, Row } from "react-bootstrap";
import Clima from "./Clima";
import { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import Swal from "sweetalert2";

const Formulario = () => {
   const [pais, setPais] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [clima, setClima] = useState([]);
    const [mostrarSpinner, setMostrarSpinner] = useState(false);
  

  const obtenerClima = async () => {
    if (pais === "" || ciudad === "") {
      Swal.fire({
        icon: "error",
        title: "Ingrese Pais y ciudad",
        text: "Ingrese Pais y ciudad, por último consultar",
      });
      return;
    }

    try {
      setMostrarSpinner(true);
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=026b51c14f1835bd462133b357c41c2f&units=metric&lang=es`
      );

      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        console.log(datos.results);
        setClima(datos.results);
        setMostrarSpinner(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <section className="p-3 border rounded-3 bg-white container">
        <Form.Group>
          
          <div className="d-md-flex align-items-center gap-2 my-2">
            <Form.Label className="fs-5 fw-bold">Pais</Form.Label>
            <Form.Control required type="text" placeholder="Ingrese pais" />

            <Form.Label className="fs-5 fw-bold ms-md-4">Ciudad</Form.Label>
            <Form.Control required type="text" placeholder="Ingrese ciudad" />
            <div className="mt-3 mt-md-0 text-center">
              <Button>Consultar</Button>
            </div>
          </div>
        </Form.Group>
      </section>

      <section className="mt-4">
        <Clima/>
      </section>
    </div>
  );
};

export default Formulario;
