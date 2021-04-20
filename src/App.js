import React from 'react';
import { Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Albums from './pages/Albums';

const App = () => {
  return (
    <div>
      <Route path="/" component={SignIn} exact={true} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/albums" component={Albums} />
    </div>
  );
};

export default App;
