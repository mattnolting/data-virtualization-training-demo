import * as React from 'react';
import './toolbar-demo.scss';
import {
  Card,
  CardFooter,
  DataToolbar,
  DataToolbarContent,
  DataToolbarItem,
  Flex,
  FlexModifiers,
  FlexItem,
  Label,
  PageSection,
  TextContent,
  Text,
  Title,
} from '@patternfly/react-core';
import { ToolbarDemoTable } from './ToolbarDemoTable';
import { ToolbarDemoToolbar } from './ToolbarDemoToolbar';
import { ToolbarDemoTablePagination } from './ToolbarDemoTablePagination';

const ToolbarDemo: React.FunctionComponent<{}> = () => (
  <React.Fragment>
    <PageSection variant="light">
      <Flex>
        <FlexItem breakpointMods={[{modifier: FlexModifiers['flex-1']}]} className="pf-m-flex-1">
          <TextContent>
            <Title headingLevel="h1" size="xl">Data table toolbar demo</Title>
            <Text>Below is an example of a data table with a custom component.</Text>
          </TextContent>
        </FlexItem>
        <FlexItem>
          <Label color="cyan">
            v 1.1
          </Label>
        </FlexItem>
      </Flex>
    </PageSection>
    <PageSection>
      <Card>
        <ToolbarDemoToolbar />
        <ToolbarDemoTable />
        <DataToolbar>
          <DataToolbarContent>
            <DataToolbarItem variant="pagination">
              <ToolbarDemoTablePagination />
            </DataToolbarItem>
          </DataToolbarContent>
        </DataToolbar>
      </Card>
    </PageSection>
  </React.Fragment>
)

export { ToolbarDemo };
