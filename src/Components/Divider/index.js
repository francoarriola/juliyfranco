import React from "react";
import Styles from "./index.module.scss";

function Divider(props) {
  return <div className={Styles["background"]}>{props.message}</div>;
}

export default Divider;
