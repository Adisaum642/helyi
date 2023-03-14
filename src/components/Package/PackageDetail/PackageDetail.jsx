import React, { Children } from "react";
import styles from "./PackageDetail.module.css"
import Cutsort from "../../../assests/cutsort.png"

export default function PackageDetail({ children }) {

  return (<div className={styles.packageDetail}>
    <p className={styles.packageTitle}>{children}</p>
    <p className={styles.detail}>Haircut + Shave + Free 10 min head massage</p>
    <div className={styles.ratrev}> <button className={styles.rating}>⭐ &nbsp; 4.2/5</button><span className={styles.reviews}> (23k Reviews)</span></div>

    <div className={styles.primin}><p className={styles.price}> ₹ 365<span className={styles.min}>50 mins</span></p> </div>

    <div className={styles.shave}>Clean Shave/ Moustache Grooming</div>
    <div className={styles.menscut}> Men’s Haircut</div>
<div className={styles.cutsort}><img src={Cutsort} alt="cutting"/></div>
    <button className={styles.add}>Add</button>
  </div>)

}
