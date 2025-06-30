import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const Clima = ({ climaProps }) => {
  return (
    <div>
      <div className="text-center bg-white rounded-3 p-3 container">
        <Row className="m-3 ">
          <Form.Group as={Col} md="6" className="d-flex flex-column shadow rounded-3 py-3">
            <Form.Label>
              Pais: {climaProps.sys?.country || "No encontrado"}, Ciudad:{" "}
              {climaProps.name || "No encontrado"}
            </Form.Label>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={
                  climaProps.weather?.[0]?.icon
                    ? `https://openweathermap.org/img/wn/${climaProps.weather[0].icon}@2x.png`
                    : ""
                }
                alt="Icono clima"
                className="iconoClima"
              />
            </div>

            <Form.Label className="text-capitalize">
              {climaProps.weather?.[0]?.description || "Icono clima"}
            </Form.Label>
          </Form.Group>
          <Form.Group as={Col} md="6" className="py-3">
            <div className="d-flex flex-column text-start  shadow rounded-3 p-3 bg-secondary-subtle">
              <Form.Label className="fw-bold fs-5">
                Temperatura: {climaProps.main?.temp || "No encontrado"}
              </Form.Label>
              <Form.Label className="fw-bold fs-5">
                Sensación térmica: {climaProps.main?.feels_like || "No encontrado"} °C
              </Form.Label>
              <Form.Label className="fw-bold fs-5">
                Humedad: {climaProps.main?.humidity || "No encontrado"} %
              </Form.Label>
              <Form.Label className="fw-bold fs-5">
                Nubosidad: {climaProps.clouds?.all || "No encontrado"} %
              </Form.Label>
              <Form.Label className="fw-bold fs-5">
                Viento: {climaProps.wind?.speed || "No encontrado"} m/s
              </Form.Label>
            </div>
          </Form.Group>
        </Row>
      </div>
    </div>
  );
};

export default Clima;
