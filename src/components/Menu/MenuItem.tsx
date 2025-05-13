import { ReactNode } from 'react'
import { Typography, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './MenuItem.css'

type MenuItemProps = {
    label: string
    icon: ReactNode
    path: string
    isMenuExpanded: boolean
}

export const MenuItem = (props: MenuItemProps) => {
    const navigate = useNavigate()

    const isDarkTheme = useTheme().palette.mode === 'dark'

    return (
        <div
            className={`menu-item ${isDarkTheme ? 'dark' : ''} ${props.isMenuExpanded ? 'expanded' : ''}`}
            onClick={
                props.isMenuExpanded ? () => navigate(props.path) : undefined
            }
        >
            {props.icon}
            <Typography variant="h4">{props.label}</Typography>
        </div>
    )
}
