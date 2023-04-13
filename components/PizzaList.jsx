import styles from '../styles/PizzaList.module.css'
import CartPizza from './CartPizza'

const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius expedita voluptatibus possimus dolorum facilis earum repellat tempore quae sequi aspernatur, ut est repellendus rerum doloremque sapiente minus dicta provident!</p>
            <div className={styles.wrapper}>
                <CartPizza />
                <CartPizza />
                <CartPizza />
                <CartPizza />
                <CartPizza />
                <CartPizza />
                <CartPizza />
                <CartPizza />
                <CartPizza />
            </div>
        </div>

    )
}

export default PizzaList
