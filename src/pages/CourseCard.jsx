import React, {useNavigate}from 'react';
import data from "../data";
import {Container, Card, Row, Col, Button} from "react-bootstrap";


const CourseCard = () => {

  const navigate = useNavigate()

  return (
    <Container className="text-center">
      <Row>
      {data.map((a)=> 
        (
          <Col
            className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center" key={a.id} >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={a.img} />
              <Card.Body>
                <Card.Title>{a.name}</Card.Title>
                <Card.Text>{a.text}</Card.Text>
                <Button
                  variant="danger"
                 onClick={()=>navigate(`/courses/${a.name}`)}
                  
                >
                  DETAILS
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )
      )}
      </Row>
    </Container>
  );
};
export default CourseCard