export default function formatDate(isoString: string) {
    const date = new Date(isoString);
    return date.toLocaleString('en-GB', {
        year: 'numeric',
        month: 'short', 
        day: 'numeric'
    });
}