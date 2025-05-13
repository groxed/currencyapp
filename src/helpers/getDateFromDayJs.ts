import { Dayjs } from 'dayjs'

export const getDateFromDayJs = (value?: Dayjs | null) => {
    return value?.toDate()
}
