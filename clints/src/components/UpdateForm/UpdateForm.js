import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

const UpdateForm = ({ item, handleClose }) => {
  // const cardData = useSelector((item) => item.cardReducers);
  const [title, setTitle] = useState(item.title || "");
  const [name, setName] = useState(item.name || "");
  const [learn, setLearn] = useState(item.learn || "");

  console.log(item);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(item);
    try {
      const { data } = await axios
        .patch(`http://localhost:4000/api/v1/card/${item._id}`, {
          title,
          name,
          learn,
        })
        .then(() => {
          setTitle("");
          setName("");
          setLearn("");
          handleClose();
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Form
      style={{ background: "#f5f5f5", padding: "30px", borderRadius: "4px" }}
    >
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Learn"
          value={learn}
          onChange={(e) => setLearn(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default UpdateForm;
