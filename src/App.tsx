import { MainPage } from './pages/MainPage'
import { Menu } from './components/Menu'
import { ModeSwitch } from './components/ModeSwitch'
import { createTheme, ThemeProvider } from '@mui/material'
import { Container } from './components/common/Container'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GraphPage } from './pages/GraphPage'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const theme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#355e3b',
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: '#36454f',
                },
            },
        },
    },
})

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Container>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="graph" element={<GraphPage />} />
                        </Routes>
                        <Menu />
                        <ModeSwitch />
                    </Container>
                </LocalizationProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
