import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import InsertPass from './pages/InsertPass';
import Enter from './pages/Enter';
import RecoverPass from './pages/RecoverPass';
import Login from './pages/Login';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login"  component={Login} />
        <Route path="/enter" component={Enter} />
        <Route path="/recoverPass" component={RecoverPass} />
        <Route path="/insertPass"  component={InsertPass} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routers;