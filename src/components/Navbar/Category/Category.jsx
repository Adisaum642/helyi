import React from "react";
import styles from "./Category.module.css"



export default function Category({ children }){
  return(
<p className={styles.category}>{children}</p>
    )
}