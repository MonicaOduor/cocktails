import React from 'react'
import Home from './components/Home'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './App.css'

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 500
  }
})
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}
