import React from "react";
import styles from "./FooterBanner.module.css"
import Dummy from "./../../assests/dummy.png"
import Store from "./../../assests/store.png"

export default function FooterBanner(){

return(
  <div className={styles.footerbanner}>
  <div className={styles.dummy}><img src={Dummy} alt="mobile" /></div>
 <p className={styles.now}>Get Started Now!</p>
  <p className={styles.column}>Join Helyi and be a part of this revolution where we connect small towns in India!</p>
  <img className={styles.stores}src={Store} alt="store"/>
  </div>
)
  
}