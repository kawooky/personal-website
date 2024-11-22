import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import YoussefImage from "./10442350_8503992191299832-modified.png";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { projects } from "../Projects/projectsData.js"; // Import the projects array

const Home = () => {
  const topProjects = projects.slice(0, 3);

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={`${styles.hero} bg-light text-dark py-5`}>
        <Container className="text-center">
          <Row className="my-4 align-items-center">
            <Col md={6} className="mx-auto">
              <h1 className={styles.heroTitle}>Youssef Kawook</h1>
              <p className={styles.heroSubtitle}>
                Full Stack Developer based in Leeds, UK.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-4">Technical Skills</h2>
          {[
            {
              title: "Programming Languages",
              skills: ["JavaScript", "TypeScript", "Python", "Java"],
            },
            {
              title: "Web Development Technologies",
              skills: [
                "HTML",
                "CSS",
                "Bootstrap",
                "React",
                "React Native",
                "APIs",
              ],
            },
            {
              title: "Tools and Technologies",
              skills: ["AWS", "RStudio", "Git", "Maven"],
            },
            {
              title: "Databases",
              skills: [
                "SQL",
                "NoSQL",
                "Snowflake",
                "Firebase",
                "Database Schema",
              ],
            },
            {
              title: "Methodologies and Practices",
              skills: ["Agile", "Scrum", "DevOps", "OOP", "TDD", "BDD"],
            },
            {
              title: "Testing",
              skills: ["WebDriver", "JUnit", "Cucumber", "Jest", "Postman"],
            },
          ].map((category, index) => (
            <Row key={index} className="my-3">
              <Col md={4}>
                <h5 className="text-dark">{category.title}</h5>
              </Col>
              <Col md={8} className={styles.skillList}>
                {category.skills.map((skill, i) => (
                  <span key={i} className={`badge ${styles.skillTag}`}>
                    {skill}
                  </span>
                ))}
              </Col>
            </Row>
          ))}
        </Container>
      </section>

      {/* Experience Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-left mb-4">Coding Experience</h2>
          <Row className="justify-content-center align-items-center">
            <Col md={9} className="text-left">
              {" "}
              {/* Added text-center here */}
              <ul className={styles.experienceList}>
                <li>
                  <strong>Corecom Technology Academy:</strong> Solo backend and
                  frontend projects developed for Corecom Technology.
                </li>
                <li>
                  Assistant trainer for Test Automation cohorts, explaining
                  concepts, debugging, and providing code advice.
                </li>
                <li>
                  Courses in SQL, data warehousing with Snowflake, and Java
                  development.
                </li>
                <li>
                  <strong>University of Leeds:</strong> First-Class Honors in
                  Mathematics, dissertation in Computational Applied Mathematics
                  using Python.
                </li>
                <li>
                  <strong>Northcoders:</strong> Full-time, 3-month software
                  development bootcamp focused on JavaScript.
                </li>
                <li>
                  <strong>AWS QA Certificates:</strong> AWS Technical
                  Essentials, AWS Fundamentals, DevOps Fundamentals, and Cloud
                  Literacy.
                </li>
                <li>
                  <strong>Personal projects:</strong> Some of which can be found
                  on the projects page.
                </li>
              </ul>
            </Col>
            <Col md={3} className="text-center">
              <img
                src={YoussefImage}
                className={`${styles.profileImage} img-fluid`}
                alt="Youssef Kawook"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-4">Top Projects</h2>
          {topProjects.map((project, index) => (
            <Card
              key={index}
              className="my-5 border-light shadow-sm"
              style={{ backgroundColor: "#e7f1ff" }}
            >
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <p>
                  <strong>Technologies:</strong>{" "}
                  {project.technologies.join(", ")}
                </p>
                <div>
                  {project.links.map((link, i) => (
                    <Button
                      key={i}
                      variant="outline-primary"
                      href={link.url}
                      className="m-2"
                      target="_blank"
                    >
                      {link.label}
                    </Button>
                  ))}
                </div>
              </Card.Body>
            </Card>
          ))}

          <div className="text-center mt-4">
            <Link to="/Projects">
              <Button variant="outline-primary" size="lg">
                View More
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
