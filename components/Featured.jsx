import Image from 'next/image'
import styles from '../styles/Featured.module.css'
import { useState } from 'react'

export const Featured = () => {
    const [index, setIndex] = useState(0)
    const images = [
        "/img/pizza-wrap1.jpg",
        "/img/pizza-wrap2.jpg",
        "/img/pizza-wrap3.jpg",
        "/img/pizza-wrap4.jpg",
    ]
    const handleArrow = (direccion) => {
        if (direccion === "1") {
            setIndex(index !== 0 ? index - 1 : 3)
        }
        if (direccion === "r") {
            setIndex(index !== 3 ? index + 1 : 0)
        }
    }
    console.log(index)
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("1")}>
                <Image src='/img/izquierda.svg' alt='' layout='fill' />
            </div>
            <div className={styles.wrapper} style={{ transform: `translateX(${-100 * index}vW)` }}>
                {images.map((img, i) => (
                    <div className={styles.imgContainer} key={i}>
                        <Image src={img} alt='pizzas' height={800} width={1370} />
                    </div>
                ))}
            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow("r")}>
                <Image src='/img/derecha.svg' alt='' layout='fill' />
            </div>
        </div>
    )
}


