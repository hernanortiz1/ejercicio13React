import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const Clima = () => {
  return (
    <div>
      <div className="text-center bg-white rounded-3 p-3 container ">
        <Row className="mb-3 ">
          <Form.Group as={Col} md="6" className="d-flex flex-column">
            <Form.Label>Pais, ciudad</Form.Label>
            <img src="" alt="Icono clima" />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <div className="d-flex flex-column text-start">
              <Form.Label>Temperatura</Form.Label>
              <Form.Label>Sensación térmica</Form.Label>
              <Form.Label>Algo de nubes</Form.Label>
              <Form.Label>Humedad</Form.Label>
              <Form.Label>nubosidad</Form.Label>
            </div>
          </Form.Group>
        </Row>
      </div>
    </div>
  );
};

export default Clima;
