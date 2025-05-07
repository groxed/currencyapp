const getFormattedDateValue = (value: number) => {
    const stringValue = value.toString()
    return stringValue.length > 1 ? stringValue : `0${stringValue}`
}

export const getDateString = (date: Date) => {
    const year = date.getFullYear().toString()
    const month = getFormattedDateValue(date.getMonth() + 1)
    const day = getFormattedDateValue(date.getDate())

    return year + month + day
}

export const getYesterdaysDate = () => {
    const date = new Date()
    date.setDate(date.getDate() - 1)

    return date
}
