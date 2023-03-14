import React from "react";
import styles from "./Package.module.css"
import PackageDetail from "./PackageDetail/PackageDetail"
import Offer from "./Offer/Offer"



export default function Package() {

  return (<div className={styles.package}>
{/*     <lable className={styles.packageTitle}>Package</lable> */}
     <PackageDetail>Package</PackageDetail>
<PackageDetail/>
    <PackageDetail/>
    <PackageDetail/>
    <PackageDetail>Haircut for Men & Kids</PackageDetail>
    <PackageDetail/>
    <PackageDetail/>
    
    <Offer />

  </div>)

}