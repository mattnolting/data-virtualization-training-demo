import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import '@app/app.scss';
import '@app/app-awesome-theme.scss';
import '@app/app-responsive-classes.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from '@app/AppLayout/AppLayout';
import { AppRoutes } from '@app/routes';

const App: React.FunctionComponent = () => (
  <Router>
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  </Router>
);

export { App };
