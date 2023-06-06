import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GlobalStyle } from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import { ColorsTheme } from './styles/colorTheme.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={ColorsTheme}>
        <App />
    </ThemeProvider>
        
  </React.StrictMode>,
)
