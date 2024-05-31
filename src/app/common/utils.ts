export function dateToDMonthY(date: Date): string {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}