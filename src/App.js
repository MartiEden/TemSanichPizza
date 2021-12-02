import React from 'react';

import { Header, ThankYouPage } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/thankyou" component={ThankYouPage} exact />
      </div>
    </div>
  );
}

export default App;
