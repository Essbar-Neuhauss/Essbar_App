import styles from './ErrorTitle.module.css'

export function ErrorTitle() {
  return (
    <header className={styles.header}>
      <p className={styles.kicker}>Seite nicht gefunden</p>
      <p className={styles.code}>404</p>
      <p className={styles.subtitle}>
        Die angeforderte Seite existiert hier nicht mehr oder wurde verschoben.
      </p>
    </header>
  )
}
