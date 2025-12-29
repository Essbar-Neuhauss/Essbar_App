import {Header} from './components/Header/Header'
import {Hero} from './components/Hero/Hero'
import {Categories} from './components/Categories/Categories'
import styles from './HomePage.module.css'

const backgroundImage = 'src/assets/images/homePage.png'

export function HomePage() {
    return (
        <main
            className={styles.page}
            style={{backgroundImage: `url(${backgroundImage})`}}
            aria-label="Essbar Startseite"
        >
            <div className={styles.overlay} aria-hidden="true"/>
            <div className={styles.inner}>
                <Header/>
                <Hero/>
                <Categories/>
            </div>
        </main>
    )
}
