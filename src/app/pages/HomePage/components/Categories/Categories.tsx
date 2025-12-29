import styles from './Categories.module.css'

const items = [
    {title: 'Bildergalerie'},
    {title: 'Events'},
    {title: 'Geschichte'},
    {title: 'Getränke'},
    {title: 'Referenzen', icon: '🌻'},
    {title: 'Sozial Media'},
]

export function Categories() {
    return (
        <section className={styles.section} aria-label="Schnellzugriff">
            <div className={styles.grid}>
                {items.map((item) => (
                    <a key={item.title} className={styles.card} href="#">
                        <div className={styles.avatar} aria-hidden="true">
                            {item.icon ?? (
                                <span className={styles.avatarText}>EB</span>
                            )}
                        </div>
                        <span className={styles.label}>{item.title}</span>
                    </a>
                ))}
            </div>
        </section>
    )
}
