export const formatDate = (date: string) => {
    const userLocale = navigator.language
    return new Date(date).toLocaleDateString(userLocale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}