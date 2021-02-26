import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';

import Router from './components/Router';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Suspense fallback={'Loading...'}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}
