import styles from '../styles/Cart.module.css'
import ProductCart from '@/components/ProductCart'

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tbody className={styles.tbody}>
                        <tr>
                            <th>Products</th>
                            <th>Name</th>
                            <th>Extras</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        <ProductCart />
                        <ProductCart />
                        <ProductCart />
                    </tbody>
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