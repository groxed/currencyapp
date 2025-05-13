import { Currency } from '../interfaces/Currency'
import { CurrencyDTO } from '../interfaces/CurrencyDTO'
import { mapCurrencyDTOToCurrency } from './mapCurrencyDTOToCurrency'

export const mapCurrencyDataByCode = (
    code: string,
    data: CurrencyDTO[]
): Currency => {
    const dataByCode = data.find((item) => item.cc === code)
    return mapCurrencyDTOToCurrency(dataByCode!)
}
