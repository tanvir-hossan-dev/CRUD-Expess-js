import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const CardForm = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [learn, setLearn] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios
        .post("http://localhost:4000/api/v1/card", {
          title,
          name,
          learn,
        })
        .then(() => {
          setTitle("");
          setName("");
          setLearn("");
        });
      console.log(data);
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

export default CardForm;
