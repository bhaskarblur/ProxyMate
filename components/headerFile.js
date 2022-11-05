import react from "react";
import Image from "next/image";
import styles from '../styles/Header.module.css'
const HeaderFile = () => {
    
    return(
        <div className={styles.container}>
            <div className={styles.Nav}>
        <div className={styles.leftNav}> 
        <div className={styles.logoDiv}>
        <h2 className={styles.logoText}>ProxyMate</h2>
        </div>
        <div className={styles.searchBg}>
    
            <Image src='/searchIcon.svg' className={styles.searchIcon} width={22} height={22}></Image>
            <h3 className={styles.searchText}>Search for friends...</h3>
        </div>
    
        </div>
        <div className={styles.rightNav}>
            <ul className={styles.buttonList}>
                <li className={styles.buttonListLi}>
                <Image src='/heartIcon.svg' className={styles.buttonIcon} width={22} height={22}></Image>
                <h3 className={styles.buttonText}>Counting on you</h3>
                </li>
                <li className={styles.buttonListLi}>
                <Image src='/randomIcon.svg' className={styles.buttonIcon} width={22} height={22}></Image>
                <h3 className={styles.buttonText}>ComfortMail</h3>
                </li>
                <li className={styles.buttonListLi}>
                <Image src='/messageIcon.svg' className={styles.buttonIcon} width={22} height={22}></Image>
                <h3 className={styles.buttonText}>Messages</h3>
                </li>
             
            </ul>
            <div className={styles.avatarDiv}>
                <Image src='/profilePic.png' width={40} height={40}></Image>
                <Image src='/dropdownIcon.svg' className={styles.arrowIcon} width={16} height={16}></Image>
            </div>
        </div>
        </div>
        </div>
       
    )
}

export default HeaderFile;