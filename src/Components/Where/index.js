import React from "react";
import Styles from "./index.module.scss";
import Image from "react-bootstrap/Image";
const Where = () => {
  return (
    <div className={Styles["container"]}>
      <div className={Styles["img"]}>
        <Image fluid="true"></Image>
      </div>
      <div className={Styles["desc"]}>
        <h1>Bonzo</h1>
        <h3>21:00hs</h3>
        <p>
          Bonzo club es un multiespacio ubicao en el corazon de la ciudad de
          Concordia, a 1 cuadra de la plaza principal. Ambientado para lorem
          ipsum.Bonzo club es un multiespacio ubicao en el corazon de la ciudad
          de Concordia, a 1 cuadra de la plaza principal. Ambientado para lorem
          ipsumBonzo club es un multiespacio ubicao en el corazon de la ciudad
          de Concordia, a 1 cuadra de la plaza principal. Ambientado para lorem
          ipsumBonzo club es un multiespacio ubicao en el corazon de la ciudad
          de Concordia, a 1 cuadra de la plaza principal. Ambientado para lorem
          ipsum
        </p>
      </div>
    </div>
  );
};

export default Where;
