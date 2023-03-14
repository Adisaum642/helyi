import React from "react";
import styles from "./Navbar.module.css"
import Logo from "./Logo/Logo"
import Profile from "./Profile/Profile";
import Category from "./Category/Category"
import Search from "./Search/Search"

export default function Navbar(){


return ( <div className={styles.nav}>
  
<Logo/>
<Search/>
<Category>Helyi for Franchise</Category>
  <Category>Helyi for Partner</Category>
  <Category>Helyi for Merchant</Category>
  <Category>Helyi SMART</Category>
  <Category>Contact Us</Category>
<Profile/>
</div>


  
)
}