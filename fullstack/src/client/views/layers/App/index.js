import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routers from '../../../routers';

import './style/main.sass';

const App = () => {
  return (
    <>
      <Switch>
        {routers.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </>
  );
};

export default App;
