import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAndroid,
  DiLinux,
  DiDocker,
  DiBitbucket,
  DiGithub,
} from "react-icons/di";
import {
  SiRedis,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiScipy
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="tech-description">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <div className="tech-description">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <div className="tech-description">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div className="tech-description">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="tech-description">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <div className="tech-description">Redis</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <div className="tech-description">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
        <div className="tech-description">Android</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
        <div className="tech-description">Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <div className="tech-description">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
        <div className="tech-description">Github</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <div className="tech-description">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <div className="tech-description">Numpy</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScipy />
        <div className="tech-description">Scipy</div>
      </Col>
    </Row>
  );
}

export default Techstack;
