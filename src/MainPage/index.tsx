import { use, useEffect, useState } from 'react'
import { fetchData } from '../helpers/fetchData'
import { Currency } from '../interfaces/Currency'
import { mapCurrencyDataByCode } from '../helpers/mapCurrencyDataByCode'
import { CurrencyDTO } from '../interfaces/CurrencyDTO'
import { CurrencyDisplay } from '../components/CurrencyDisplay'
import './index.css'
import { fetchCurrencyData } from '../helpers/fetchCurrencyData'
import { getYesterdaysDate } from '../helpers/dateUtils'

export const MainPage = () => {
    const [currencies, setCurrencies] = useState<Currency[]>([])
    const [yesterdayCurrencies, setYesterdayCurrencies] = useState<Currency[]>(
        []
    )

    useEffect(() => {
        fetchCurrencyData(['USD', 'EUR'], new Date()).then((data) => {
            setCurrencies(data)
        })
        fetchCurrencyData(['USD', 'EUR'], getYesterdaysDate()).then((data) => {
            setYesterdayCurrencies(data)
        })
    }, [])

    return (
        <div className="main-container">
            {currencies.map((currency) => (
                <CurrencyDisplay
                    currency={currency}
                    yesterdaysCurrency={yesterdayCurrencies.find(
                        (item) => item.code === currency.code
                    )}
                />
            ))}
        </div>
    )
}
