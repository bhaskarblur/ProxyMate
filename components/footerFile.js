import react from "react";
import Image from "next/image";
import styles from '../styles/Footer.module.css'
const FooterFile = () => {
    return(
        <div className={styles.container}>
            <div className={styles.Footer}>
            <h2 className={styles.logoText}>ProxyMate - The Comfort Clicks</h2>
            <h3 className={styles.aboutText}>Our main motive to design this software is to help people tackle hesitancy, social anxiety and loneliness which creeps in as 
            they think about meeting new people</h3>
            </div>
            <ul className={styles.footerList}>
                <li className={styles.footerListLi}>About Us</li>
                <li className={styles.footerListLi}>Privacy Policy</li>
                <li className={styles.footerListLi}>Terms & Conditions</li>
                <li className={styles.footerListLi}>Contact Us</li>
            </ul>
        </div>
    )
}

export default FooterFile;