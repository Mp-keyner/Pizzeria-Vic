import React from 'react'
import Image from 'next/image'
import styles from '../styles/Cart.module.css'

const ProductCart = () => {
    return (
        <tr className={styles.Curso}>
            <td>
                <div className={styles.imgContainer}>
                    <Image src={'/img/pizza-Product.jpg'} alt='' layout='fill' />
                </div>
            </td>
            <td>
                <span className={styles.name}>CORALZO</span>
            </td>
            <td>
                <span className={styles.estras}>
                    Double ingredients, spicy sauce
                </span>
            </td>
            <td>
                <span className={styles.price}>$19.90</span>
            </td>
            <td>
                <span className={styles.quantity}>2</span>
            </td>
            <td>
                <span className={styles.total}>$39.80</span>
            </td>
        </tr>
    )
}

export default ProductCart
