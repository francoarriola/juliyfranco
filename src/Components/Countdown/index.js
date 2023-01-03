import React from "react";
import Styles from "./index.module.scss";
import Countdown from "react-countdown";

const Count = () => {
  return (
    <div className={Styles["container"]}>
      <div className={Styles["counter-text"]}>
        Contando <br />
        los <br />
        dias!!
      </div>
      <Countdown
        date={"2023-02-03T21:00:00"}
        intervalDelay={0}
        precision={0}
        renderer={(props) => (
          <ul className={Styles["container-counter"]}>
            <li className={Styles["li-first"]}>
              {props.days}
              <span className={Styles["dias"]}>Dias</span>
            </li>
            <li className={Styles["li-second"]}>
              {props.hours}
              <span className={Styles["hours"]}>Horas</span>
            </li>
            <li className={Styles["li-third"]}>
              {props.minutes}
              <span className={Styles["minutes"]}>Minutos</span>
            </li>
            <li className={Styles["li-fourth"]}>
              {props.seconds}
              <span className={Styles["seconds"]}>Segundos</span>
            </li>
          </ul>
        )}
      />
    </div>
  );
};

export default Count;
