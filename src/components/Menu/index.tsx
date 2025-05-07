import { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import { MenuItem } from './MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material'

import './index.css'

const items = [
    { label: 'Головна', icon: <HomeIcon fontSize="large" /> },
    { label: 'Графік', icon: <LeaderboardIcon fontSize="large" /> },
]

export const Menu = () => {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false)

    const isDarkTheme = useTheme().palette.mode === 'dark'

    const onArrowPress = () => {
        setIsMenuExpanded((prev) => !prev)
    }

    return (
        <div
            className={`menu ${isMenuExpanded ? 'expanded' : ''} ${isDarkTheme ? 'dark' : ''}`}
        >
            <div className="menu-items">
                {items.map((item) => (
                    <MenuItem label={item.label} icon={item.icon} />
                ))}
            </div>
            <span className="menu-icon" onClick={onArrowPress}>
                <MenuIcon fontSize="large" className="icon" />
            </span>
        </div>
    )
}
