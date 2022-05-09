import React, { useState } from 'react'
import styles from '../../styles/Product.module.css'
import Image from 'next/image'

const Product = () => {

    const [size, setSize] = useState(0)
    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "CAMPAGNOLA",
        price: [147500, 128275, 180600],
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non facilis quae excepturi, enim deleniti dolorem? Reiciendis non, eum sunt rem amet facere libero soluta tempore veniam. Assumenda, facilis. Fuga, itaque.",
    }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} alt="" layout="fill" objectFit="contain"/>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price}>Rp{pizza.price[size]}</span>
            <p className={styles.desc}>{pizza.desc}</p>
              <h3 className={styles.choose}>Choose the size</h3>
              <div className={styles.sizes}>
                  <div className={styles.size} onClick={()=>setSize(0)}>
                    <Image src="/img/size.png" alt="" layout="fill" objectFit="contain" />
                    <span className={styles.number}>Small</span>  
                  </div>
                  <div className={styles.size} onClick={()=>setSize(1)}>
                    <Image src="/img/size.png" alt="" layout="fill" objectFit="contain" />
                    <span className={styles.number}>Medium</span>  
                  </div>
                  <div className={styles.size} onClick={()=>setSize(2)}>
                    <Image src="/img/size.png" alt="" layout="fill" objectFit="contain" />
                    <span className={styles.number}>Large</span>  
                  </div>
              </div>
              <h3 className={styles.choose}>Choose additional ingredients</h3>
              <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input type="checkbox" name="double" id="double" className={styles.checkbox} />
                    <label htmlFor="double">Double Ingredients</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" name="cheese" id="cheese" className={styles.checkbox} />
                    <label htmlFor="cheese">Extra cheese</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" name="spicy" id="spicy" className={styles.checkbox} />
                    <label htmlFor="cheese">Spicy Sauce</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" name="garlic" id="garlic" className={styles.checkbox} />
                    <label htmlFor="cheese">Garlic Sauce</label>
                </div>
            </div>
            <div className="add">
                <input type="number" defaultValue={1} className={styles.quantity}/>
                <button className={styles.button}>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product