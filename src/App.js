import React from 'react';
import { Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Albums from './pages/Albums';

import AlbumStore from "./store/AlbumStore";

const App = () => {
  return (
    <>
      <AlbumStore>
        <Route path="/" component={SignIn} exact={true} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/albums" component={Albums} />
      </AlbumStore>
    </>
  );
};

export default App;
