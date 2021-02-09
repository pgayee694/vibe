import './App.css';
import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, RouteProps, Switch } from 'react-router-dom';
import { LandingPage } from './landingPage/LandingPage';
import { HomePage } from './homePage/HomePage';
import { RedirectPage } from './redirectPage/RedirectPage';
import { Header } from './header/Header';
import { useSelector } from 'react-redux';
import { ClientSelectors } from './state/clientState/ClientSelectors';

export function App() {
  const isLoggedIn = useSelector(ClientSelectors.isLoggedIn);

  return (
    <Box className="App" width="100%" height="100%">
      <VStack height="100%">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/redirect" component={RedirectPage} />
            <Route path="/">
              {isLoggedIn ? <HomePage /> : <LandingPage />}
            </Route>
          </Switch>
        </BrowserRouter>
      </VStack>
    </Box>
  );
}
