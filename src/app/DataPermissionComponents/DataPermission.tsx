import * as React from 'react';
import { DataPermissionDataToolbar } from './DataPermissionDataToolbar';
import { DataPermissionTable } from './DataPermissionTable';
import {
  Divider
} from '@patternfly/react-core';

const DataPermission = () => {
  return (
    <React.Fragment>
      <DataPermissionDataToolbar/>
      <Divider/>
      <DataPermissionTable/>
    </React.Fragment>
  )
};

export { DataPermission };
