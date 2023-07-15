import styles from "../styles/PizzaList.module.css";
import CartPizza from "./CartPizza";

const PizzaList = () => {
  return (
    <div className={styles.container} id="menu">
      <h1 className={styles.title}>LA MEJOR PIZZA DE LA CIUDAD</h1>
      <p className={styles.desc}>
        ¡Prepárate para saborear la mejor pizza de la ciudad! En nuestro
        establecimiento, te ofrecemos una experiencia culinaria única con
        ingredientes frescos y una variedad de sabores que te dejarán deseando
        más. Nuestro secreto radica en la masa perfectamente crujiente, la salsa
        de tomate casera y la combinación experta de quesos de calidad. Cada
        bocado es una explosión de sabor y textura que te transportará a Italia.
        Ven y descubre por qué nuestra pizza es aclamada como la mejor de la
        ciudad. ¡Te garantizamos una experiencia gastronómica inolvidable!
      </p>
      <div className={styles.wrapper}>
        <CartPizza
          src="/img/pizza2.png"
          title="Pizza Margarita"
          descrip="Una clásica pizza con salsa de tomate, mozzarella fresca y albahaca. "
          price="$10.99."
          id="1"
        />
        <CartPizza
          src="/img/pizza7.png"
          title="Pizza Pepperoni"
          descrip="Una pizza irresistible con generosas rodajas de pepperoni y queso derretido"
          price="$12.99."
          id="2"
        />
        <CartPizza
          src="/img/pizza5.png"
          title="Pizza papas francesas"
          descrip="Una combinación tropical de papas francesas en una pizza"
          price="$11.99."
          id="3"
        />
        <CartPizza
          src="/img/pizza4.png"
          title="Pizza Vegetariana"
          descrip="Una opción saludable repleta de verduras frescas como champiñones, pimientos y cebolla. "
          price="$10.99."
          id="4"
        />
        <CartPizza
          src="/img/pizza3.png"
          title="Pizza BBQ Chicken"
          descrip="Jugosos trozos de pollo a la parrilla cubiertos con salsa barbacoa y queso derretido."
          price="$13.99."
          id="5"
        />
        <CartPizza
          src="/img/pizaa8.png"
          title="Pizza Mexicana"
          descrip="Una explosión de sabores con carne molida sazonada, jalapeños, tomates y queso cheddar"
          price="$12.99."
          id="6"
        />
      </div>
    </div>
  );
};

export default PizzaList;
