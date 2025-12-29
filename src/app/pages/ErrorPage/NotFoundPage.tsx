import {ErrorActions} from './components/ErrorActions'
import {ErrorDetails} from './components/ErrorDetails'
import {ErrorTitle} from './components/ErrorTitle'
import styles from './NotFoundPage.module.css'

const backgroundImage = 'src/assets/images/errorPage.png'

export function NotFoundPage() {
    return (
        <div
            className={styles.page}
            style={{backgroundImage: `url(${backgroundImage})`}}
            role="main"
        >
            <div className={styles.overlay} aria-hidden="true"/>
            <section className={styles.content} aria-label="Seite nicht gefunden">
                <ErrorTitle/>
                <ErrorDetails/>
                <ErrorActions/>
            </section>
        </div>
    )
}