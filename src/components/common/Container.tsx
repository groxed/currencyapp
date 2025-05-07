import { styled } from '@mui/material'

export const Container = styled('div')(({ theme }) => [
    {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        height: '100vh',
    },
])
