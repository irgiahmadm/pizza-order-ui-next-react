import React from 'react'
import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image'
const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/img/pizza.png" alt="Pizza" width="500" height="500" />
        <h1 className={styles.title}>Pizza Mantep abiez</h1>  
        <div className={styles.price}>Rp 147.250</div>  
        <p className={styles.desc}> lorem ipsum dolor sit amet, consectetur adipiscing</p>  
    </div>
  )
}

export default PizzaCard