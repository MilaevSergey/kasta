import React from 'react';
import { GlobalStyle } from './components/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/theme';
import { Route } from './route';
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Route />
    </ThemeProvider>
  );
};
