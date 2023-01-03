import React from "react";
import Styles from "./index.module.scss";
// import Image from "react-bootstrap/Image";
const Where = () => {
  return (
    <div className={Styles["container"]}>
      {/* <div className={Styles["img"]}>
        <Image fluid="true"></Image>
      </div> */}
      <div className={Styles["desc"]}>
        <h1>Querida Familia y Amigos</h1>
        <p>
          Nos casamos y nos despedimos de toda la gente que elegimos llevar en
          nuestros corazones. <br />
          Esta invitacion es especial porque festejar junto a ustedes seria un
          gran regalo.
          <br /> La fiesta sera en Bonzo el 3 de febrero.
          <br /> A las 21:00hs ceremonia casi religiosa (se busca pastor aunque
          sea Aleman).
          <br /> Codigo de vestimenta: Como te sientas comodo y L-Gante :)
          <br />
          Muchas ganas de Bailar hasta que las velas no ardan.
        </p>
      </div>
    </div>
  );
};

export default Where;
