import Image from 'next/image'
import styles from '../styles/Footer.module.css'
import Linkedin from './Linked'
import Instagram from './Instagram'
import Facebook from './Facebook'
import Github from './Github'

const Pie = () => {
    return (<>
        <footer className={styles.siteFooter}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.acerca}>
                        <h6>Acerca de</h6>
                        <p>estamos comprometidos con ofrecer los mejores sabores y la mejor calidad en nuestras pizzas. En nuestra página web puedes consultar nuestro menú completo y realizar tu pedido en línea desde la comodidad de tu hogar. También puedes visitarnos en nuestro local y disfrutar de una experiencia única. ¡Gracias por elegirnos y esperamos verte pronto!</p>


                    </div>

                    <div className={styles.boostrapUno}> {/*  className="col-xs-6 col-md-3 p-1"*/}
                        <h6>FIND OUR RESTAURANTS</h6>
                        <ul className={`${styles.footerLinks} ${styles.space}`}>
                            <div>
                                <h2>1654 R. Don Road #304</h2>
                                <p>NewYork, 85022</p>
                                <p>(302) 567-543</p>
                            </div>
                            <div>
                                <h2>1654 R. Don Road #304</h2>
                                <p>NewYork, 85022</p>
                                <p>(302) 567-543</p>
                            </div>
                            <div>
                                <h2>1654 R. Don Road #304</h2>
                                <p>NewYork, 85022</p>
                                <p>(302) 567-543</p>
                            </div>
                        </ul>
                    </div>

                    <div className={styles.column}>{/*  className="col-xs-6 col-md-3"> */}
                        <h6>WORKING HOURS</h6>
                        <ul className={`${styles.footerLinks} ${styles.space}`}>
                            <div>
                                <h2>MONDAY UNTIL FRIDAY</h2>
                                <p>9:00 - 22:00</p>
                            </div>
                            <div>
                                <h2>SATURDAY - SUNDAY</h2>
                                <p>12:00 - 24:00</p>
                            </div>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className={styles.footerIco}>
                <div className={styles.footerIcon}>
                    <div className={styles.col}> {/*className="col-md-8 col-sm-6 col-xs-12"*/}
                        <p className={styles.copyrightText}><span className={styles.vic}>VIC</span> &copy; 2023 Todos los derechos reservados por
                            <a className={styles.navLink} href="#"> Keyner Oswaldo Dela hoz Hincapie</a>.
                        </p>
                    </div>

                    <div className={styles.colmd}> {/*className="col-md-4 col-sm-6 col-xs-12"*/}
                        <ul className={styles.socialIcons}>
                            <li>
                                <Facebook color="#f8ac47" red='facebook' />
                            </li>
                            <li>
                                <Github color="#f8ac47" red='twitter' />
                            </li>
                            <li>
                                <Linkedin color="#f8ac47" red='linkedin' />
                            </li>
                            <li>
                                <Instagram color="#f8ac47" red='dribbble' />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer >

    </>)
}

export default Pie