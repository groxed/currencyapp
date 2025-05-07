import { ReactNode } from 'react'
import { Typography, useTheme } from '@mui/material'
import './MenuItem.css'

type MenuItemProps = {
    label: string
    icon: ReactNode
}

export const MenuItem = (props: MenuItemProps) => {
    const theme = useTheme()

    return (
        <div className="menu-item">
            {props.icon}
            <Typography variant="h4">{props.label}</Typography>
        </div>
    )
}
