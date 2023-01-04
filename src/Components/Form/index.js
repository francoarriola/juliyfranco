import React, { useState, useRef } from "react";
import Styles from "./index.module.scss";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";

const Forms = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState(false);
  const [mostrarForm, setMostrarForm] = useState(false);
  const form = useRef();

  function enviarEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_crlu8t4",
        "template_xh9fnk8",
        form.current,
        "WCPhhofnn0vZwn7Na"
      )
      .then(
        (res) => {
          console.log(res);
          setShowMessage(true);
        },
        (err) => {
          console.log(err);
          setError(true);
        }
      );
  }

  const handleClick = () => {
    setMostrarForm((mostrarForm) => !mostrarForm);
  };
  return (
    <div className={Styles["container"]}>
      <div className={Styles["container-card"]}>
        {!mostrarForm ? (
          <Card className={Styles["card"]}>
            <Card.Body className={Styles["card-body"]}>
              <Card.Title className={Styles["card-title"]}>
                Confirmacion de Asistencia
              </Card.Title>

              <Button
                className={Styles["button"]}
                onClick={() => handleClick()}
              >
                CONFIRMAR
              </Button>
            </Card.Body>
          </Card>
        ) : (
          <Form ref={form} onSubmit={enviarEmail} className={Styles["form"]}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tu Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tu nombre"
                name="user_name"
                required
                className={Styles["input"]}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tu Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="mail@ejemplo.com"
                name="user_email"
                required
                className={Styles["input"]}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tu Whatsapp</Form.Label>
              <Form.Control
                type="number"
                name="wpp"
                required
                className={Styles["input"]}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                Coloca nombre y apellido de cada Asistente
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                required
                className={Styles["input"]}
              />
            </Form.Group>
            <div className={Styles["buttonsgroup"]}>
              {!showMessage ? (
                <Button
                  className={Styles["button2"]}
                  type="submit"
                  value="Send"
                >
                  ENVIAR
                </Button>
              ) : (
                " "
              )}
            </div>
            {showMessage ? (
              <div className={Styles["alert"]} role="alert">
                Confirmacion Enviada Correctamente!!
              </div>
            ) : (
              " "
            )}
            {error ? (
              <div className={Styles["alertrojo"]} role="alert">
                Tu Confirmacion no pudo ser enviada.
              </div>
            ) : (
              ""
            )}
          </Form>
        )}
      </div>
    </div>
  );
};

export default Forms;
