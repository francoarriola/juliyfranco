import React from "react";
import Styles from "./index.module.scss";

const Gifts = () => {
  return (
    <div className={Styles["container"]}>
      <div className={Styles["container-img"]}>
        <div className={Styles["img-mercadopago"]} alt="foto" fluid />
        <h3>Alias: NOS.VAMOS.A.LA.MIERDA</h3>
        <h4>Juliana Alejandra Romero</h4>
      </div>
      <div>
        <div className={Styles["img-santander"]} alt="foto" fluid />
        <h3>Alias: NOS.VAMOS.A.LA.MIERDA</h3>
        <h4>Juliana Alejandra Romero</h4>
      </div>
      <div>
        <div className={Styles["img-frances"]} alt="foto" fluid />
        <h3>Alias: NOS.VAMOS.A.LA.MIERDA</h3>
        <h4>Juliana Alejandra Romero</h4>
      </div>
    </div>
  );
};

export default Gifts;
