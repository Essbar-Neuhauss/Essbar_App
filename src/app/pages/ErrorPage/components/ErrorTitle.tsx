import styles from './ErrorTitle.module.css'

export function ErrorTitle() {
    return (
        <header className={styles.header}>
            <p className={styles.kicker}>Diese Sonnenblume hat sich verirrt.
                <br/>Lassen Sie uns zurück zur Speisekarte gehen.</p>
        </header>
    )
}