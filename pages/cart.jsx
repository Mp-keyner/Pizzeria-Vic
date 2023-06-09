import Image from 'next/image'
import styles from '../styles/Cart.module.css'

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr>
                        <th>Products</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
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
                    <tr>
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
                    <tr>
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
                    <tr>
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
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal: </b>$79.60
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount: </b>$0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>$79.60
                    </div>
                    <button className={styles.button}>CHECKOU NOW!</button>
                </div>
            </div>

        </div>
    )
}

export default Cart