import React from "react";
import Styles from "./index.module.scss";

const Gifts = () => {
  return (
    <div className={Styles["container"]}>
      <div className={Styles["containeragregado"]}>
        <div>
          <p>
            En marzo partimos con el sueño de hacer nuestras vidas juntos en
            Portugal y para ello necesitamos Dinero, porque Salud y Amor...nos
            sobra.
            <br />
            Nos ayudan con eso que nos faltan?
          </p>
        </div>
        <div className={Styles["container-cuentas"]}>
          <div className={Styles["container-img"]}>
            <div className={Styles["img-mercadopago"]} alt="foto" fluid />
            <h3>Alias: NOS.VAMOS.A.LA.MIERDA</h3>
            <h4>Juliana Alejandra Romero</h4>
          </div>
          <div className={Styles["container-img2"]}>
            <div className={Styles["img-santander"]} alt="foto" fluid />
            <h3>Alias: NOS.VAMOS.A.LA.MIERDA</h3>
            <h4>Juliana Alejandra Romero</h4>
          </div>
          <div className={Styles["container-img3"]}>
            <div className={Styles["img-frances"]} alt="foto" fluid />
            <h3>Alias: NOS.VAMOS.A.LA.MIERDA</h3>
            <h4>Juliana Alejandra Romero</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
