/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { CoffeeShop } from './containers/CoffeeShop';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CoffeeShop} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
