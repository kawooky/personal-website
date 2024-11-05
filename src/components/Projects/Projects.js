// src/components/Projects.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import styles from "./Projects.module.css";
import { projects } from "./projectsData"; // Adjust the path as necessary

export const Projects = () => (
  <div className={styles.projects}>
    <Container className="my-2">
      <h2 className="text-center mb-4">Projects</h2>

      {/* Featured Projects Section */}
      <div className="mb-4">
        <Row className="mb-4">
          {/* Full-width Card for Featured Projects */}
          {projects.slice(0, 3).map((project, index) => (
            <Col key={index} md={12} className="mb-3">
              <Card className="mb-4" style={{ backgroundColor: "#e7f1ff" }}>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="technologies mb-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="badge bg-secondary me-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3">
                    {project.links.map((link, i) => (
                      <Button
                        key={i}
                        variant="outline-primary"
                        href={link.url}
                        target="_blank"
                        className="me-2 mb-2"
                      >
                        {link.label}
                      </Button>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Remaining Projects Section in Columns */}
      <Row>
        {projects.slice(3).map((project, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4" style={{ minHeight: "200px" }}>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="technologies mb-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="badge bg-secondary me-1">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-3">
                  {project.links.map((link, i) => (
                    <Button
                      key={i}
                      variant="outline-primary"
                      href={link.url}
                      target="_blank"
                      className="me-2 mb-2"
                    >
                      {link.label}
                    </Button>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default Projects;
