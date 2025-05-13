import { CurrencyDTO } from '../interfaces/CurrencyDTO'
import { getDateString } from './dateUtils'
import { fetchData } from './fetchData'
import { mapCurrencyDTOToCurrency } from './mapCurrencyDTOToCurrency'

const getCurrencyForPeriodRequestParams = (
    currencyCode: string,
    startDate: Date,
    endDate: Date
) => {
    const startDateString = getDateString(startDate)
    const endDateString = getDateString(endDate)
    return `start=${startDateString}&end=${endDateString}&valcode=${currencyCode}&json`
}

export const fetchCurrencyDataForPeriod = async (
    currencyCode: string,
    startDate: Date,
    endDate: Date
) => {
    const params = getCurrencyForPeriodRequestParams(
        currencyCode,
        startDate,
        endDate
    )

    const currencyData = await fetchData<CurrencyDTO[]>(
        `https://bank.gov.ua/NBU_Exchange/exchange_site?${params}`
    )

    const mappedCurrencies = currencyData.map(mapCurrencyDTOToCurrency)
    return mappedCurrencies
}
