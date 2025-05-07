import { Typography } from '@mui/material'
import { Currency } from '../interfaces/Currency'

import './CurrencyDisplay.css'
import { CurrencyStatusIcon } from './CurrencyStatusIcon'

type CurrencyDisplayProps = {
    currency: Currency
    yesterdaysCurrency?: Currency
}

export const CurrencyDisplay = (props: CurrencyDisplayProps) => {
    return (
        <div className="currency-display">
            <div>
                <Typography variant="h6">
                    Курс {props.currency.name} на сьогодні:
                </Typography>
            </div>
            <div className="currency-display-value">
                <Typography variant="h4">{props.currency.value}</Typography>
                {props.yesterdaysCurrency && (
                    <CurrencyStatusIcon
                        previousValue={props.yesterdaysCurrency.value}
                        currentValue={props.currency.value}
                    />
                )}
            </div>
            <div className="currency-display-yesterday">
                (вчора - {props.yesterdaysCurrency?.value})
            </div>
        </div>
    )
}
