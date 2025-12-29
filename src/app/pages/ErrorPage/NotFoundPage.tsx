import backgroundImage from '../../../assets/images/errorPage.png'
import styles from './NotFoundPage.module.css'
const featureItems = [
    {label: 'Bildergalerie', type: 'photo', position: '50% 40%'},
    {label: 'Events', type: 'photo', position: '70% 55%'},
    {label: 'Geschichte', type: 'photo', position: '35% 60%'},
    {label: 'Getränke', type: 'photo', position: '55% 52%'},
    {label: 'Referenzen', type: 'sun'},
    {label: 'Sozial Media', type: 'photo', position: '62% 45%'},
]
const primaryLinks = ['Catering', 'Aktuelles', 'Über uns']
const actionLinks = ['Menü', 'Kontakt', 'Login']

export function NotFoundPage() {
    return (
        <div className={styles.page} role="main">
            <header className={styles.topBar}>
                <div className={styles.brandRibbon}>
                    <span className={styles.ribbonTagline}>CAFÉ · BISTRO · BÄCKEREI · CATERING</span>
                    <span className={styles.brandPrimary}>essBAR</span>
                    <span className={styles.brandSecondary}>Neuhaubß</span>
                </div>

                <div className={styles.navigation}>
                    <nav className={styles.primaryLinks} aria-label="Hauptnavigation">
                        {primaryLinks.map((link) => (
                            <a key={link} className={styles.navLink} href="#">
                                {link}
                            </a>
                        ))}
                    </nav>
                    <nav className={styles.actionLinks} aria-label="Nutzeraktionen">
                        {actionLinks.map((link) => (
                            <a key={link} className={styles.actionLink} href="#">
                                {link}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            <section className={styles.hero} aria-label="Essbar Catering Hero">
                <div
                    className={styles.heroImage}
                    style={{backgroundImage: `url(${backgroundImage})`}}
                    aria-hidden="true"
                />
                <div className={styles.heroContent}>
                    <p className={styles.heroOverline}>München&apos;s</p>
                    <p className={styles.heroHeadline}>Premium</p>
                    <p className={styles.heroSubheadline}>Catering</p>
                    <button className={styles.cta} type="button">Event anfragen</button>
                </div>
            </section>

            <nav className={styles.featureNav} aria-label="Schnellzugriff">
                {featureItems.map((item) => (
                    <a key={item.label} className={styles.featureCard} href="#">
                        <span
                            className={`${styles.featureIcon} ${item.type === 'sun' ? styles.sunBadge : ''}`}
                            style={item.type === 'photo'
                                ? {
                                    backgroundImage: `url(${backgroundImage})`,
                                    backgroundPosition: item.position,
                                }
                                : undefined}
                        >
                            {item.type === 'sun' && <span className={styles.sunSeed}>🌻</span>}
                        </span>
                        <span className={styles.featureLabel}>{item.label}</span>
                    </a>
                ))}
            </nav>
        </div>
    )
}
