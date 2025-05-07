import { CurrencyDTO } from '../interfaces/CurrencyDTO'
import { fetchData } from './fetchData'
import { getDateString } from './dateUtils'
import { mapCurrencyDataByCode } from './mapCurrencyDataByCode'

const getCurrencyRequestParams = (date?: Date) => {
    let params = 'json'

    if (date) {
        const dateString = getDateString(date)
        params = `date=${dateString}&${params}`
    }

    return params
}

export const fetchCurrencyData = async (
    currencyCodes: string[],
    date?: Date
) => {
    const params = getCurrencyRequestParams(date)

    const currencyData = await fetchData<CurrencyDTO[]>(
        `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?${params}`
    )

    const mappedCurrencies = currencyCodes.map((code) =>
        mapCurrencyDataByCode(code, currencyData)
    )
    return mappedCurrencies
}
