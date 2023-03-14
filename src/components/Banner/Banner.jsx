import React from "react";
import styles from "./Banner.module.css"
import SaloonTools from "../../assests/salontools.png"
import Cutting from "../../assests/cutting.png"

export default function Banner() {

  return (<div className={styles.banner}>
    <div className={styles.cut} ><img src={Cutting} alt="cutting" /></div>
    <div ><label className={styles.cutHeading}>Haircut at Home - Men</label>
      <button className={styles.star}>⭐ 4.2/5</button>
    </div>
    <div className={styles.title}>
      <label className={styles.up}>UP TO</label>
      <label className={styles.off}>50% Off</label>
      <label className={styles.on}>on Haircutting</label>
<div>

      <div className="tools"><img src={SaloonTools} alt="saloontools" /></div>
      </div>
    </div>
  </div>)

}