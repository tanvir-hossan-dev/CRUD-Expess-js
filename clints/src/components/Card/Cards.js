import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import getData from "../../Redux/actions/getData";
import { Card, Row, Col, Container, Button, Modal } from "react-bootstrap";
import UpdateForm from "../UpdateForm/UpdateForm";

const Cards = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const cardData = useSelector((item) => item.cardReducers);
  useEffect(() => {
    const userData = async () => {
      const { data } = await axios.get("http://localhost:4000/api/v1/card");
      dispatch(getData(data));
    };
    userData();
  }, []);

  const handleDelete = async (id) => {
    // await axios.delete(`http://localhost:4000/api/v1/card/${id}`);
    console.log(id);
  };

  return !cardData.length ? (
    <h1>Loading...</h1>
  ) : (
    <>
      {" "}
      <Container>
        <Row>
          {cardData.map((item) => (
            <Col key={item._id} style={{ marginTop: "10px" }} lg={4}>
              <Card>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {item.name}
                  </Card.Subtitle>
                  <Card.Text>{item.learn}</Card.Text>
                  <Button type="submit" onClick={handleShow}>
                    Update
                  </Button>
                  <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton></Modal.Header>
                    <UpdateForm item={item._id} handleClose={handleClose} />
                  </Modal>
                  <Button
                    style={{ marginLeft: "10px" }}
                    variant="danger"
                    type="submit"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Cards;
