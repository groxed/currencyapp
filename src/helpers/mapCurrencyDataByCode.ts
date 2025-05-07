import { Currency } from "../interfaces/Currency";
import { CurrencyDTO } from "../interfaces/CurrencyDTO";

export const mapCurrencyDataByCode = (code: string, data: CurrencyDTO[]): Currency => {
    const dataByCode = data.find((item)=>item.cc === code);

    return {
        name: dataByCode!.txt,
        code: dataByCode!.cc,
        value: dataByCode!.rate
    }
}