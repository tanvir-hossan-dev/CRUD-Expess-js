import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import getData from "../../Redux/actions/getData";
import { Row, Col, Container } from "react-bootstrap";
import CardItem from "./carditem/CardItem";

const Cards = () => {
  const dispatch = useDispatch();
  const cardData = useSelector((item) => item.cardReducers);
  useEffect(() => {
    const userData = async () => {
      const { data } = await axios.get("http://localhost:4000/api/v1/card");
      dispatch(getData(data));
    };
    userData();
  }, []);

  return !cardData.length ? (
    <h1>Loading...</h1>
  ) : (
    <>
      {" "}
      <Container>
        <Row>
          {cardData.map((item) => (
            <Col key={item._id} style={{ marginTop: "10px" }} lg={4}>
              <CardItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Cards;
