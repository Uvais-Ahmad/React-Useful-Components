import React from "react";
import styles from "../styles/Total.module.css";
import { useCartConsumer } from "../config/context";

function Navbar() {
  const {total, item} = useCartConsumer();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
    </div>
  );
}

export default Navbar;
