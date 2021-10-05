import { ThemeProvider } from 'styled-components';

const theme = {
  primaryColors: {
    blue: '#1e5d84',
    lightBlue: '#5d92b8',
    pink: '#f2c4c4',
    red: '#d2322e',
    lightGrey: '#f7f5f3',
    darkGrey: '#9c9896',
  },
  secondaryColors: {
    powderWhite: '#FFFDF9',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#36313D',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
