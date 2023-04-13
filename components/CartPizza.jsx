import Image from 'next/image'
import styles from '../styles/CartPizza.module.css'

const CartPizza = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza-cart.png" alt='' width='400' height='300' />
            <h1 className={styles.title}>FIORI DI ZUCCA</h1>
            <span className={styles.price}>$19.90</span>
            <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit dolorum velit nesciunt quaerat doloremque doloribus numquam nesciunt adipisci.</p>
        </div>
    )
}

export default CartPizza
