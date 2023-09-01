import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export const colorScheme = {
  skyBlue: '#87CEEB',
  aqua: '#00FFFF',
  pastelPink: '#FFB6C1',
  softGreen: '#9ACD32',
  yellowGreen: '#D0EF8D',
  mintGreen: '#98FB98',
  lavender: '#E6E6FA',
  softYellow: '#FFFFE0',
  peach: '#FFDAB9',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colorScheme.skyBlue,
      light: colorScheme.aqua,
      dark: colorScheme.pastelPink
    },
    secondary: {
      main: colorScheme.yellowGreen,
      light: colorScheme.mintGreen,
      dark: colorScheme.softGreen
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'ADLaM-Display',
      '"ADLaM Display"',
    ].join(','),
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
