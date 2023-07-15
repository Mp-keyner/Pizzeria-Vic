import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/404.module.css'

export default function Custom404() {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <p>4</p>
                <Image src={'/img/pizza404.gif'} alt='....' width={200} height={200} />
                <p>4</p>
            </div>
            <h1>Page Not Found</h1>
            <p className={styles.signo}>La página que buscas no existe..</p>
            <Link href="/">
                <p className={styles.button}>Go back to homepage</p>
            </Link>
        </div>
    );
}
