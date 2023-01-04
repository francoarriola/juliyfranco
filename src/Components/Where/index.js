import React from "react";
import Styles from "./index.module.scss";
// import ScrollReveal from "scrol";
// import Image from "react-bootstrap/Image";
const Where = () => {
  // ScrollReveal().reveal(".tagline", {
  //   delay: 300,
  //   reset: true,
  //   desktop: true,
  //   mobile: true,

  //   useDelay: "always",
  // });
  return (
    <div className={Styles["container"]}>
      {/* <div className={Styles["img"]}>
        <Image fluid="true"></Image>
      </div> */}
      <div className={Styles["desc"]}>
        <h1 class="tagline">Querida Familia y Amigos</h1>
        <p class="tagline">
          Nos <strong>casamos y nos despedimos</strong> de toda la gente que
          elegimos llevar en nuestros corazones. <br />
          Esta invitacion es especial porque festejar junto a ustedes seria un
          gran regalo.
          <br /> La fiesta sera el <strong> 18 de febrero.</strong>
          <br /> Se busca pastor aunque sea Aleman :).
          <br /> Codigo de vestimenta: Como te sientas comodo y L-Gante :)
          <br />
          Muchas ganas de Bailar hasta que las velas no ardan.
        </p>
      </div>
    </div>
  );
};

export default Where;
