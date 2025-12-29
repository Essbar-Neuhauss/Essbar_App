import styles from './ErrorActions.module.css'
import {backOneStep} from "../../../../shared/utils/backOneStep.tsx";

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
            <button type="button" className={styles.secondary} onClick={() => backOneStep()}>
                Eine Seite zurück
            </button>
        </div>
    )
}