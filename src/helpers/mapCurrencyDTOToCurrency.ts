import { Currency } from '../interfaces/Currency'
import { CurrencyDTO } from '../interfaces/CurrencyDTO'

export const mapCurrencyDTOToCurrency = (
    currencyDTO: CurrencyDTO
): Currency => {
    return {
        name: currencyDTO.txt,
        value: currencyDTO.rate,
        code: currencyDTO.cc,
    }
}
