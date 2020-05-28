import '@patternfly/react-core/dist/styles/base.css';
import * as React from 'react';
import '@app/app.scss';
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
