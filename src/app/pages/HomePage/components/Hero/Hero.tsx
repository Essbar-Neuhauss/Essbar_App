import styles from './Hero.module.css'

export function Hero() {
    return (
        <section className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.badge}>Catering</div>
            <h1 id="hero-title" className={styles.title}>
                <span>München&apos;s</span>
                <span className={styles.accent}>Premium</span>
                <span>Catering</span>
            </h1>
            <p className={styles.subtitle}>Event anfragen</p>
        </section>
    )
}
