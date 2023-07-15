import Image from 'next/image'
import styles from '../styles/CartPizza.module.css'

const CartPizza = () => {
    return (
        <div className={styles.container}>
            <a href="http://localhost:3000/product/213">
                <Image src="/img/pizza-cart.png" alt='' width='400' height='300' />
                <h1 className={styles.title}>FIORI DI ZUCCA</h1>
                <div className={styles.price}>
                    <span>$19.90</span>
                </div>
                <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit dolorum velit nesciunt quaerat doloremque doloribus numquam nesciunt adipisci.</p>
            </a>
        </div>
    )
}

export default CartPizza
