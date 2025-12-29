export function backOneStep(fallback: string = "/"): void {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.assign(fallback);
    }
}
