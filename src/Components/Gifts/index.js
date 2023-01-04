import React from "react";
import Styles from "./index.module.scss";
// import ScrollReveal from "scrollreveal";

const Gifts = () => {
  // ScrollReveal().reveal(".containeragregado", {
  //   delay: 300,
  //   reset: true,
  //   desktop: true,
  //   mobile: true,

  //   useDelay: "always",
  // });

  return (
    <div className={Styles["container"]}>
      <div className={Styles["containeragregado"]}>
        <div>
          <p>
            En marzo partimos con el sueño de hacer nuestras vidas juntos en
            Portugal y para ello necesitamos Dinero, porque Salud y Amor...nos
            sobra.
            <br />
            ¿Nos ayudan con eso que nos faltan?
          </p>
        </div>
        <div className={Styles["container-cuentas"]}>
          <div className={Styles["container-img"]}>
            <div className={Styles["img-mercadopago"]} alt="foto" fluid />
            <h3>Alias: Nos.vamos.a.la.mierd</h3>
            <h4>Franco Sebastian Arriola</h4>
          </div>
          <div className={Styles["container-img2"]}>
            <div className={Styles["img-santander"]} alt="foto" fluid />
            <h3>Alias: fsadev</h3>
            <h4>Franco Sebastian Arriola</h4>
          </div>
          <div className={Styles["container-img3"]}>
            <div className={Styles["img-frances"]} alt="foto" fluid />
            <h3>Alias: nosfuimosaportugal</h3>
            <h3>CBU: 0170068840000034523146</h3>
            <h4>Juliana Alejandra Romero</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
