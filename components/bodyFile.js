import react from "react";
import Image from "next/image";
import styles from '../styles/Body.module.css'
const BodyFile = () => {
    return(
        <div className={styles.container}>
        <div className={styles.Body}>
        <div className={styles.leftBody}>
        <Image src='/boySamplePicture.png' className={styles.profileImage}  width={480} height={480}></Image>
        <div className={styles.descriptionDiv}>
            <h2 className={styles.profileName} id='profileName'>Abhishek Sharma</h2>
            <h3 className={styles.profileAbout} id='profileAbout'>Lorem ipsum dolor sit amet, kuch b likhdo cuz this is just a dummy text.</h3>
        </div>
        </div>
        <div className={styles.rightBody}>
        <h2 className={styles.interestsHead} >Artists</h2>
        <ul className={styles.artistList}>
            <li className={styles.artistListLi}>
            <Image src='/artistAvatar.png' className={styles.profileImage} width={64} height={64}></Image>
            </li>
            <li className={styles.artistListLi}>
            <Image src='/artistAvatar.png' className={styles.profileImage}  width={64} height={64}></Image>
            </li>
            <li className={styles.artistListLi}>
            <Image src='/artistAvatar2.png' className={styles.profileImage} width={64} height={64}></Image>
            </li>
            <li className={styles.artistListLi}>
            <Image src='/artistAvatar2.png' className={styles.profileImage}  width={64} height={64}></Image>
            </li>
        </ul>
   
        <div className={styles.interestDiv}>
            <h2 className={styles.interestsHead} >Interests</h2>
            <ul className={styles.interestList}>
                <li className={styles.interestListLi}>  
                <h3 className={styles.interestText}>Cooking</h3>
                </li>
                <li className={styles.interestListLi}>
                <h3 className={styles.interestText}>Sports</h3>
                </li>
                <li className={styles.interestListLi}>
                <h3 className={styles.interestText}>Gaming</h3>
                </li>
             
            </ul>
        </div>
        <div className={styles.CtaDiv}>
        <div className={styles.buttonBg1}>
                <Image src='/right.png' className={styles.buttonIcon} width={18} height={18}></Image>
                <h3 className={styles.buttonText}>Yaay</h3>
                </div>
                <div className={styles.buttonBg2}>
                <Image src='/wrong.png' className={styles.buttonIcon} width={18} height={18}></Image>
                <h3 className={styles.buttonText}>Meh</h3>
                </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default BodyFile;