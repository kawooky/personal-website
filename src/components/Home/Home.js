import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import YoussefImage from "./10442350_8503992191299832-modified.png";

export const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <Container fluid className={styles["hero-info-container"]}>
          <Row className={`fluid ${styles["hero-info-container-row"]}`}>
            <Col md={6} className="text-center">
              <h1>Youssef Kawook</h1>
              <h5>A Full Stack Developer currently based in Leeds, UK.</h5>
              <Row className={styles["hero-buttons-row"]}>
                <Col>
                  {/* <Link to="/Menu">
                    <Button
                      className={`m-4 btn btn-primary btn-lg ${styles.buttons}`}
                      variant="primary"
                      href="/Menu"
                    >
                      Menu
                    </Button>
                  </Link>

                  <Link to="/Contact">
                    <Button
                      className={`m-4 btn btn-primary btn-lg ${styles.buttons}`}
                      variant="primary"
                      href="/Contact"
                    >
                      Contact
                    </Button>
                  </Link> */} 
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.about}>
        <Container>
          <Row className="d-flex py-4 align-items-center justify-content-center">
            <Col md={12} className="text-center">
              <h1>About Me</h1>
            </Col>
          </Row>
          <Row className="d-flex py-4 align-items-center justify-content-center">
            <Col
              md={8}
              className="d-flex align-items-center justify-content-center"
            >
              <p>
                In 2021, I graduated from The University of Leeds with a first
                in Mathematics. <br />
                <br />
                February 2023, I completed the Northcoders full-time, 13-week
                software development bootcamp. <br /> <br />
                I'm at the start of my professional career, looking for work
                that will allow me to develop both my technical and soft skills.
                <br /> <br />
                In the distant future, I wish to be an expert of my craft and a
                leader working towards making a positive change.
                <br /> <br />
                Strengths - drive, teamwork and problem solving
                <br /> <br />
                Values - compassion, integrity and development.
                <br /> <br />
                Some of my hobbies away from the screens are runnning, tennis,
                traveling and cooking.
              </p>
            </Col>
            <Col
              md={4}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                src={YoussefImage}
                class="img-fluid"
                alt="Image of Youssef"
              ></img>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.skills}>
        <Container>
          <Row className="d-flex py-4 align-items-center justify-content-center">
            <Col md={9} className="text-center">
              <h2>Skills</h2>
            </Col>
          </Row>
          <Row className="d-flex py-0 align-items-center justify-content-center">
            <Col md={4} className="text-left">
              <h4>Programming Languages:</h4>
            </Col>
            <Col md={8} className={styles["skill-box-container"]}>
              <h3 className={styles["skill-box"]}>JavaScript</h3>
              <h3 className={styles["skill-box"]}>TypeScript</h3>
              <h3 className={styles["skill-box"]}>Python</h3>
              <h3 className={styles["skill-box"]}>Java</h3>
            </Col>
          </Row>
          <Row className="d-flex py-0 align-items-center justify-content-center">
            <Col md={4} className="text-left">
              <h4>Web Development Technologies:</h4>
            </Col>
            <Col md={8} className={styles["skill-box-container"]}>
              <h3 className={styles["skill-box"]}>HTML</h3>
              <h3 className={styles["skill-box"]}>CSS</h3>
              <h3 className={styles["skill-box"]}>Bootstrap</h3>
            </Col>
          </Row>
          <Row className="d-flex py-0 align-items-center justify-content-center">
            <Col md={4} className="text-left">
              <h4>Tools and Technologies:</h4>
            </Col>
            <Col md={8} className={styles["skill-box-container"]}>
              <h3 className={styles["skill-box"]}>Git</h3>
              <h3 className={styles["skill-box"]}>VS Code</h3>
              <h3 className={styles["skill-box"]}>Snowflake</h3>
            </Col>
          </Row>
          <Row className="d-flex py-0 align-items-center justify-content-center">
            <Col md={4} className="text-left">
              <h4>Databases:</h4>
            </Col>
            <Col md={8} className={styles["skill-box-container"]}>
              <h3 className={styles["skill-box"]}>PostgreSQL</h3>
              <h3 className={styles["skill-box"]}>MongoDB </h3>
              <h3 className={styles["skill-box"]}>MySQL </h3>
            </Col>
          </Row>
          <Row className="d-flex py-0 align-items-center justify-content-center">
            <Col md={4} className="text-left">
              <h4>Methodologies and Practices:</h4>
            </Col>
            <Col md={8} className={styles["skill-box-container"]}>
              <h3 className={styles["skill-box"]}>PostgreSQL</h3>
              <h3 className={styles["skill-box"]}>MongoDB </h3>
              <h3 className={styles["skill-box"]}>MySQL </h3>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.projects}>
        <Container>
          <Row className="d-flex py-4 align-items-center justify-content-center">
            <Col md={12} className="text-center">
              <h2>Projects</h2>
            </Col>
          </Row>
          <Row className="d-flex py-4 align-items-center justify-content-center">
            <Col md={12} className="text-center">
              <Link to="/Projects">
                <Button
                  className={`m-4 btn btn-primary btn-lg `}
                  variant="primary"
                  href="/Projects"
                >
                  View More
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
