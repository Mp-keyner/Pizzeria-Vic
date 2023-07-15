import Image from 'next/image'
import styles from '../styles/Navart.module.css'
import Link from 'next/link'

const Navart = () => {

    // if (window.innerWidth < 480) {
    //     return date = '0'
    // } else {
    //     return date = '/img/telephone.png'
    // }

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    {/*  */}
                    {/* <Image src={date} alt='telefonno' width={32} height={32} /> */}
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>234 858 389</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href={'/'}>
                        <li className={styles.listItem}>Homepage</li>
                    </Link>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src='/img/La pizzeria.svg' className='vic' alt='' width={90} height={90} />
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src='/img/pizzacart.svg' alt='' width={45} height={45} />
                    <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    )
}

export default Navart
