import { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import { MenuItem } from './MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import { Box } from '@mui/material'

import './index.css'

const items = [
    { label: 'Головна', icon: <HomeIcon fontSize="large" />, path: '/' },
    {
        label: 'Графік',
        icon: <LeaderboardIcon fontSize="large" />,
        path: '/graph',
    },
]

export const Menu = () => {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false)

    const onArrowPress = () => {
        setIsMenuExpanded((prev) => !prev)
    }

    return (
        <Box
            className={`menu ${isMenuExpanded ? 'expanded' : ''}`}
            bgcolor="primary.main"
        >
            <div className="menu-items">
                {items.map((item) => (
                    <MenuItem
                        label={item.label}
                        icon={item.icon}
                        path={item.path}
                        isMenuExpanded={isMenuExpanded}
                    />
                ))}
            </div>
            <span className="menu-icon" onClick={onArrowPress}>
                <MenuIcon fontSize="large" className="icon" />
            </span>
        </Box>
    )
}
