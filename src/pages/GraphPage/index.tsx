import { useState } from 'react'
import { StartEndDatePickers } from '../../components/DatePickers'
import { Button, Typography } from '@mui/material'
import WarningIcon from '@mui/icons-material/WarningAmber'

import './index.css'
import { fetchCurrencyDataForPeriod } from '../../helpers/fetchCurrencyDataForPeriod'

export const GraphPage = () => {
    const [startDate, setStartDate] = useState<Date>()
    const [endDate, setEndDate] = useState<Date>()

    const [isShowValidationError, setIsShowValidationError] = useState(false)
    const [validationErrorMessage, setValidationErrorMessage] = useState('')

    const validateDateInputs = () => {
        if (!startDate || !endDate) {
            setValidationErrorMessage('Оберіть дату')
            return false
        }
        if (endDate.getTime() < startDate.getTime()) {
            setValidationErrorMessage(
                'Початкова дата не може бути більшою за кінцеву'
            )
            return false
        }

        setValidationErrorMessage('')
        return true
    }

    const handleSubmitButtonPress = () => {
        const areInputsValid = validateDateInputs()
        setIsShowValidationError(!areInputsValid)

        if (areInputsValid) {
            fetchCurrencyDataForPeriod('USD', startDate!, endDate!)
        }
    }

    const onDatePickerChange = () => {
        setIsShowValidationError(false)
    }
    const onSetEndDate = (date?: Date) => {
        onDatePickerChange()
        setEndDate(date)
    }
    const onSetStartDate = (date?: Date) => {
        onDatePickerChange()
        setStartDate(date)
    }

    return (
        <div className="graph-container">
            <div className="date-pickers-section">
                <div className="date-pickers">
                    <StartEndDatePickers
                        onSetEndDate={onSetEndDate}
                        onSetStartDate={onSetStartDate}
                    />
                    {isShowValidationError && (
                        <Typography
                            className="date-pickers-validation-error"
                            color="error"
                        >
                            <WarningIcon />
                            {validationErrorMessage}
                        </Typography>
                    )}
                </div>
                <Button
                    variant="contained"
                    sx={{ p: 2 }}
                    onClick={handleSubmitButtonPress}
                >
                    Готово
                </Button>
            </div>
        </div>
    )
}
