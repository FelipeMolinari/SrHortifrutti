import React, { ElementType, ReactNode } from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';

import AuthLayout from '../_layouts/auth';
import DashBoardLayout from '../_layouts/dashboard';

interface CustomRoute extends Omit<RouteProps, 'component'> {
  component: ElementType;
  isPrivate?: boolean;
}

const RouteWrapper: React.FC<CustomRoute> = ({
  component: Component,
  isPrivate,
  path,
  ...rest
}) => {
  const signed = false;
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DashBoardLayout : AuthLayout;
  return (
    <Route
      path={path}
      {...rest}
      render={(props: RouteComponentProps<{}>) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};
export default RouteWrapper;
