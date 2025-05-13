import { DatePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'
import { useEffect, useState } from 'react'
import { getDateFromDayJs } from '../helpers/getDateFromDayJs'
import { styled } from '@mui/material'

import './DatePickers.css'

const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
    '.MuiPickersToolbar-root': {
        color: theme.palette.text.primary,
        borderColor: theme.palette.text.primary,
    },
    '.MuiInputLabel-root.Mui-focused': {
        color: theme.palette.text.primary,
    },
}))

type StartEndDatePickersProps = {
    onSetStartDate: (date?: Date) => void
    onSetEndDate: (date?: Date) => void
}

export const StartEndDatePickers = (props: StartEndDatePickersProps) => {
    const [pickerStartDate, setPickerStartDate] = useState<Dayjs | null>()
    const [pickerEndDate, setPickerEndDate] = useState<Dayjs | null>()

    useEffect(() => {
        props.onSetStartDate(getDateFromDayJs(pickerStartDate))
        props.onSetEndDate(getDateFromDayJs(pickerEndDate))
    }, [pickerStartDate, pickerEndDate])

    return (
        <div className="date-pickers-container">
            <div className="pickers">
                <StyledDatePicker
                    label="Дата початку"
                    value={pickerStartDate}
                    onChange={setPickerStartDate}
                />
                <StyledDatePicker
                    label="Кінцева дата"
                    value={pickerEndDate}
                    onChange={setPickerEndDate}
                />
            </div>
        </div>
    )
}
