import { Button, Col, Form, Row } from "react-bootstrap";
import Clima from "./Clima";

const Formulario = () => {
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
