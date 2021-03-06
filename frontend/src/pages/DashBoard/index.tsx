import React from 'react';

import { useRouteMatch, Switch, Route } from 'react-router-dom';

import Products from '../Products';
import Home from '../Home';
import AddProduct from '../AddProduct';
import EditProduct from '../EditProduct';
import ProductsContextProvider from '../../contexts/ProductsContext';
import EditUser from '../EditUser';
import Gallery from '../Gallery';

const DashBoard: React.FC = () => {
  let { path } = useRouteMatch();
  return (
    <ProductsContextProvider>
      <Switch>
        <Route exact path={`${path}`} component={Home} />
        <Route exact path={`${path}/products`} component={Products} />
        <Route exact path={`${path}/products/add`} component={AddProduct} />
        <Route exact path={`${path}/products/edit/:id`} component={EditProduct} />
        <Route exact path={`${path}/edit`} component={EditUser} />
        <Route exact path={`${path}/gallery`} component={Gallery} />
        <Route path={`${path}`} component={() => <h1>401</h1>} />
      </Switch>
    </ProductsContextProvider>
  );
};

export default DashBoard;
