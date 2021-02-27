import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import GlobalStyles from './components/styled-components/GlobalStyles';
import Router from './components/Router';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Suspense
        fallback={
          <div className="loading">
            <CircularProgress />
          </div>
        }
      >
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}
