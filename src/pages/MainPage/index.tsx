import { useEffect, useState } from 'react'
import { Currency } from '../../interfaces/Currency'
import { CurrencyDisplay } from '../../components/CurrencyDisplay'
import { fetchCurrencyData } from '../../helpers/fetchCurrencyData'
import { getYesterdaysDate } from '../../helpers/dateUtils'
import './index.css'

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
