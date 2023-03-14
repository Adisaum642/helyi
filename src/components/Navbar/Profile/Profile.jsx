import React from "react"
import styles from "./Profile.module.css"
import User from "../../../assests/UserCircle.png"
import Wishlist from "../../../assests/Heart.png"
import Cart from "../../../assests/cart.png"


export default function Profile() {

  return (<div className={styles.profile}>

    <div className={styles.user}><img src={Cart} alt="cart" width="35px" /><img src={Wishlist} alt="wishlist" Width="23px" />
      <p className={styles.name}>Tanmay Vatsa</p> </div>

    <div className={styles.bar}><img src={User} alt="user" />
      <i className={styles.arrow}>
      </i></div>




  </div>)

}