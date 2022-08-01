import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import UpdateForm from "../../UpdateForm/UpdateForm";
import axios from "axios";

const CardItem = ({ item }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/api/v1/card/${id}`);
  };
  return (
    <div>
      {" "}
      <Card>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{item.name}</Card.Subtitle>
          <Card.Text>{item.learn}</Card.Text>
          <Button type="submit" onClick={handleShow}>
            Update
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <UpdateForm item={item} handleClose={handleClose} />
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
    </div>
  );
};

export default CardItem;
