import Image from "next/image";
import styles from "styles/Order.module.css";

const Order = () => {
  const status = 0;
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          <div className={styles.row}>
            <table className={styles.table}>
              <tbody className={styles.tbody}>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Address</th>
                  <th>Total</th>
                </tr>
                <tr className={styles.Curso}>
                  <td>
                    <span className={styles.id}>123456</span>
                  </td>
                  <td>
                    <span className={styles.name}>John Doe</span>
                  </td>
                  <td>
                    <span className={styles.address}>Elton st. 212-33 LA</span>
                  </td>
                  <td>
                    <span className={styles.total}>$39.80</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.row}>
            <div className={statusClass(0)}>
              <Image
                src={"/img/paid_white.png"}
                alt=".."
                width={30}
                height={30}
              />
              <span>Preparing</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src={"/img/checked.png"}
                  alt=".."
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className={statusClass(1)}>
              <Image
                src={"/img/bake_white.png"}
                alt=".."
                width={30}
                height={30}
              />
              <span>Payment</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src={"/img/checked.png"}
                  alt=".."
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className={statusClass(2)}>
              <Image
                src={"/img/pedido_white.png"}
                alt=".."
                width={30}
                height={30}
              />
              <span>Payment</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src={"/img/checked.png"}
                  alt=".."
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className={statusClass(3)}>
              <Image
                src={"/img/entrega_white.png"}
                alt=".."
                width={30}
                height={30}
              />
              <span>Payment</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src={"/img/checked.png"}
                  alt=".."
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
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
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
