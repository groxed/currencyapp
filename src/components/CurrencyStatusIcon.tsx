import DownArrow from '@mui/icons-material/South'
import UpArrow from '@mui/icons-material/North'
import Neutral from '@mui/icons-material/Remove'

type CurrencyStatusIconProps = {
    previousValue: number
    currentValue: number
}

export const CurrencyStatusIcon = (props: CurrencyStatusIconProps) => {
    return (
        <>
            {props.previousValue < props.currentValue ? (
                <UpArrow color="error" />
            ) : props.previousValue > props.currentValue ? (
                <DownArrow color="success" />
            ) : (
                <Neutral color="disabled" />
            )}
        </>
    )
}
