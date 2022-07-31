import "./App.css";
import CardForm from "./components/Form/CardForm";
import Cards from "./components/Card/Cards";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row style={{ marginTop: "40px" }}>
        <Col lg="8">
          {" "}
          <Cards />{" "}
        </Col>
        <Col lg="4">
          {" "}
          <CardForm />{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
