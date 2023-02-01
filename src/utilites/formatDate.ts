function formatDate(input: string): string {

    const inputDate = new Date(input);
    if (isValidDate(inputDate)) {
        const month = inputDate.getMonth()
        return `${inputDate.getDate()}.${month > 9 ? month + 1 : "0" + (month + 1)}`
    }
    return '--.--'
}

function isValidDate(d: Date) {
    return !isNaN(d.getTime())
}

export default formatDate;
