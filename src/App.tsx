import './App.css'
import { MainPage } from './MainPage'
import { Menu } from './components/Menu'
import { ModeSwitch } from './components/ModeSwitch'
import { createTheme, ThemeProvider } from '@mui/material'
import { Container } from './components/common/Container'

const theme = createTheme({
    colorSchemes: {
        dark: true,
    },
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <MainPage />
                <Menu />
                <ModeSwitch />
            </Container>
        </ThemeProvider>
    )
}

export default App
