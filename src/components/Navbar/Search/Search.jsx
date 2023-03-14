import React from "react";
import styles from "./Search.module.css"
import MapPin from "../../../assests/MapPin.png"


export default function Search() {
  return (
    <div className={styles.map}>
      <img src={MapPin} alt="map-pin" width="20px" className={styles.img} />
      <input className={styles.field}type="text" placeholder="Select Location" />
      <i className={styles.arrow}>
      </i>
    </div>
  )


}