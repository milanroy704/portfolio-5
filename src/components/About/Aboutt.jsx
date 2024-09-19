import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'
const Aboutt = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="Siiting with laptop" />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
            <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>I am Frntend Developer and I make Responsive and Custoized Sites</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server" />
            <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>I am Backend Developer and Experiencded and Making API </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Ui" />
            <div className={styles.aboutItemText}>
            <h3>UI/UX Designer</h3>
            <p>I am UI/UX Designer i design User innteractive site and which you think i designed that </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Aboutt