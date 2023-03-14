import React from "react";
import styles from "./Offer.module.css"


export default function Offer(){

return(<div className={styles.offer}>
  <div>
<p className={styles.offertitle} > Offers</p></div>
  <div>
  <p className={styles.avl} > 2 Offers</p></div>
  
  <div ><input className={styles.coupon} type="text" placeholder="Apply Coupon Code"/></div>



</div>)
  
}