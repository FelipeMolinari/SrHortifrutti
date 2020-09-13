import React from 'react';

import { useRouteMatch, Switch, Route } from 'react-router-dom';

import Products from '../Products';
import Home from '../Home';
import AddProduct from '../AddProduct';
import EditProduct from '../EditProduct';

const DashBoard: React.FC = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`} component={Home} />
      <Route exact path={`${path}/products`} component={Products} />
      <Route exact path={`${path}/products/add`} component={AddProduct} />
      <Route exact path={`${path}/products/edit/:id`} component={EditProduct} />
      <Route path={`${path}`} component={() => <h1>401</h1>} />
    </Switch>
  );
};

export default DashBoard;
