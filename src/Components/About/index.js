import React from "react";
import Styles from "./index.module.scss";
import Card from "react-bootstrap/Card";
const About = () => {
  return (
    <div className={Styles["fondo"]}>
      <div className={Styles["container-about"]}>
        <Card className={Styles["card"]}>
          <Card.Body className={Styles["card-body"]}>
            <Card.Title className={Styles["card-title"]}>Juli</Card.Title>
            <Card.Subtitle className={Styles["card-subtitle"]}>
              Una propuesta, un si
            </Card.Subtitle>
            <Card.Text className={Styles["card-text"]}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.loremome quick example text to build on
              the card title and make up the bulk of the card's content.loremome
              quick example text to build on the card title and make up the bulk
              of the card's content.lorem
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={Styles["card"]}>
          <Card.Body className={Styles["card-body"]}>
            <Card.Title className={Styles["card-title"]}>Franco</Card.Title>
            <Card.Subtitle className={Styles["card-subtitle"]}>
              Un viaje, una vida
            </Card.Subtitle>
            <Card.Text className={Styles["card-text"]}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. content.loremome quick example text to
              build on the card title and make up the bulk of the card's
              content.loremome quick example text to build on the card title and
              make up the bulk of the card's content.lorem
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default About;
