/**
 * This function formats the date to a human-readable format using the user's locale.
 * @param date {string} - the date to format
 * @returns {string} - the formatted date
 */
export const formatDate = (date: string): string => {
    const userLocale = navigator.language
    return new Date(date).toLocaleDateString(userLocale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

/**
 * This function sets the theme attribute on the runners.
 * @param t {string} - the theme to set
 * @returns {void}
 */
export const handleRunnerTheme = (t: string): void => {
    const runnerTheme = t === "black" ? "dark" : "light";
    const runners = document.getElementsByClassName("runner")
    Array.from(runners).forEach((runner) => {
        runner.setAttribute("data-theme", runnerTheme)
    });
    document.getElementById("footer")?.setAttribute("data-theme", runnerTheme)
}
/**
 * This function sets the theme attribute on the html element and the substack embed
 * @param t {string} - the theme to set
 * @returns {void}
 */
export const handleTheme = (t: string): void => {
    // set the theme attribute on the html element
    Array.from(document.getElementsByTagName("html")).forEach((html) => {
        html.setAttribute("data-theme", t)
    });
    // set the theme attribute on the substack embed
    document.getElementById("substack-embed")?.setAttribute("data-theme", t)
    // set the theme attribute on the runners
    handleRunnerTheme(t)
}