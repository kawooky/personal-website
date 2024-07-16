import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import styles from "./Projects.module.css";
import SLImage from "./social-lift-picture.png";
import { Link } from "react-router-dom";
import NCNImage from "./NCN.png"

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <Col
        md={12}
        className="d-flex flex-column align-items-center justify-content-center py-4"
      >
        <h1>Projects</h1>
      </Col>
      <Container>
        <Row className="d-flex py-4 align-items-center justify-content-center">
          <Col md={4} className="text-start">
            <Card className={styles["project-card"]}>
              <Card.Img
                src={SLImage}
                className="img-fluid"
                alt="Card Image"
                // style={{ width: "200px", height: "auto" }}
              />
              <Card.Body className="">
                <Card.Title>Social Lift</Card.Title>
                <Card.Text>blah blah blah</Card.Text>

                <Link to={`/Home`}>
                  <Button
                    className={`btn btn-primary btn-lg ${styles.buttons}`}
                    variant="primary"
                  >
                    View
                  </Button>
                </Link>
                <Link to={`/Home`}>
                  <Button
                    className={`btn btn-primary btn-lg ${styles.buttons}`}
                    variant="primary"
                  >
                    View
                  </Button>
                </Link>
                <Link to={`/Home`}>
                  <Button
                    className={`btn btn-primary btn-lg ${styles.buttons}`}
                    variant="primary"
                  >
                    View
                  </Button>
                </Link>
                <Link to={`/Home`}>
                  <Button
                    className={`btn btn-primary btn-lg ${styles.buttons}`}
                    variant="primary"
                  >
                    dronoughsroigjspojgpsegj
                  </Button>
                </Link>
                <Link to={`/Home`}>
                  <Button
                    className={`btn btn-primary btn-lg ${styles.buttons}`}
                    variant="primary"
                  >
                    View
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="text-center">
            <h2>About Me</h2>
          </Col>
          <Col md={4} className="text-center">
            <h2>About Me</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
