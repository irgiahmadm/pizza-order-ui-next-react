import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="contain" alt="background" layout="fill"/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h1 className={styles.motto}>
            OH YES, DELICIOSO NUMERO UNO
          </h1>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            Jl.Uhu Aha
            <br /> Bandung, 4027
            <br /> (022) 837-3131
          </p>
          <p className={styles.text}>
            Jl.Kulakuki
            <br /> Bandung, 4027
            <br /> (022) 837-3131
          </p>
          <p className={styles.text}>
            Jl.Pokelen
            <br /> Bandung, 4027
            <br /> (022) 837-3131
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer