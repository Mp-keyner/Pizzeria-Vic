import Image from "next/image";
import styles from "../styles/CartPizza.module.css";
import Link from "next/link";

const CartPizza = ({ src, title, descrip, price, id }) => {
  return (
    <div className={styles.container}>
      <Link href={`http://localhost:3000/product/${id}`}>
        <Image src={src} alt="" width="300" height="300" />
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>
          <span>{price}</span>
        </div>
        <p className={styles.desc}>{descrip}</p>
      </Link>
    </div>
  );
};

export default CartPizza;
