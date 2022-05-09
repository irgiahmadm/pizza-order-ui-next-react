import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>The best pizza in town</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maiores molestias sit corporis molestiae repellendus veniam atque similique nihil! Voluptates, tempore iste. Tenetur libero provident exercitationem quam alias vel saepe.</p>
        <div className={styles.wrapper}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
        </div>
    </div>
    
  )
}

export default PizzaList