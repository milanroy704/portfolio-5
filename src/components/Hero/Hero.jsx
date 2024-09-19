import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contents}>
        <h1 className={styles.title}>Hi I'm Milan</h1>
        <p className={styles.description}>I am Full Stack Web Developer using React and Node js. Still  Have you Any Doubght then Feel Free to ask me or Contact me </p>
        <a className={styles.contactBtn} href="mailto:milanraj742003@gmail.com">Contact Me</a>
      </div>
      <img src={getImageUrl('hero/hero.jpeg')} alt="Hero Image" className={styles.heroImg} />
      <div className={styles.Topblur}/>
      <div className={styles.Bottomblur}/>

    </section>
  )
}

export default Hero