import styles from './ErrorActions.module.css'

const backOneStep = () => {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    window.location.assign('/')
  }
}

export function ErrorActions() {
  return (
    <div className={styles.actions}>
      <button
        type="button"
        className={styles.primary}
        onClick={() => window.location.assign('/')}
      >
        Zur Startseite
      </button>
      <button type="button" className={styles.secondary} onClick={backOneStep}>
        Eine Seite zurück
      </button>
    </div>
  )
}
