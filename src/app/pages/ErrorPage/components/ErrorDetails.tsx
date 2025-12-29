import styles from './ErrorDetails.module.css'

export function ErrorDetails() {
    return (
        <section className={styles.panel}>

            <p className={styles.copy}>
                Prüfe bitte die URL oder nutze die Buttons, um zurück zur Startseite zu
                springen oder auf die vorige Seite zu gelangen. Wenn das Problem
                weiterhin auftritt, sag uns kurz Bescheid.
            </p>
        </section>
    )
}