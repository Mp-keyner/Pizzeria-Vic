import Image from "next/image";
import styles from "../../styles/Product.module.css";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const [size, setSize] = useState(0);
  const pizza = {
    1: {
      id: 1,
      img: "/img/pizza1.jpg",
      name: "Pizza Margherita",
      price: 9.99,
      desc: "Delicious Margherita pizza with fresh ingredients.",
    },
    2: {
      id: 2,
      img: "/img/pizza2.jpg",
      name: "Pepperoni Pizza",
      price: 10.99,
      desc: "Classic pepperoni pizza with a flavorful kick.",
    },
    3: {
      id: 3,
      img: "/img/pizza3.jpg",
      name: "Vegetarian Pizza",
      price: 11.99,
      desc: "Healthy and tasty vegetarian pizza loaded with veggies.",
    },
  };
  const selectedPizza = pizza[id];
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imContainer}>
          <Image
            src={pizza.img1}
            width={500}
            height={500}
            objectFit="contain"
            alt=""
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{selectedPizza.name}</h1>
        <h1 className={styles.title}>{selectedPizza.name} </h1>
        <span className={styles.price}>{selectedPizza.name}</span>
        <p className={styles.desc}>{selectedPizza.name}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/pizza-size.svg" width={40} height={40} alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/pizza-size.svg" width={50} height={50} alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/pizza-size.svg" width={70} height={70} alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double" className={styles.label}>
              Double ingredients
            </label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese" className={styles.label}>
              Extra cheese
            </label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy" className={styles.label}>
              spicy Sauce
            </label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className={styles.checkbox}
            />
            <label htmlFor="garlic" className={styles.label}>
              Garlic Sause
            </label>
          </div>
        </div>
        <div className={styles.add}>
          <Link href={"/cart"}>
            <button className={styles.button}>Add to cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
