import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../Landing/Index';

const Pages = () => (
  <div>
    {/* <Layout /> */}
    <div className="container__wrap">
      {/* <Route path="/pages" component={Pages} /> */}
    </div>
  </div>
);

const Router = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/" component={Pages} />
  </Switch>
);

export default Router;
