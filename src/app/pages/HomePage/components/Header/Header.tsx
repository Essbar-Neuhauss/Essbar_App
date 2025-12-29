import styles from './Header.module.css'

const navLinks = [
    'Catering',
    'Aktuelles',
    'Über uns',
    'Menü',
    'Kontakt',
    'Login',
]

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <span className={styles.brandTop}>Café · Bistro · Bäckerei · Catering</span>
                <span className={styles.brandName}>essBAR</span>
                <span className={styles.brandLocation}>Neuhauss</span>
            </div>
            <nav className={styles.nav} aria-label="Hauptnavigation">
                {navLinks.map((link) => (
                    <a key={link} className={styles.navLink} href="#">
                        {link}
                    </a>
                ))}
            </nav>
        </header>
    )
}
