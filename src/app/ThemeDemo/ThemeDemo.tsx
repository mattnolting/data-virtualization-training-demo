import * as React from 'react';
import {
  Button,
  Flex,
  FlexItem,
  FlexModifiers,
  PageSection,
  Title
} from '@patternfly/react-core';

import { DynamicList } from '../CustomComponents/DynamicList/DynamicList';
import { DynamicListList } from '../CustomComponents/DynamicList/DynamicListList';
import { DynamicListItem } from '../CustomComponents/DynamicList/DynamicListItem';

// breakpointMods={[
//   {modifier: 'spacer-none'},
//   {modifier: 'spacer-sm', breakpoint: 'md'},
//   {modifier: 'spacer-md', breakpoint: 'lg'},
//   {modifier: 'spacer-lg', breakpoint: 'xl'}
// ]}


const ThemeDemo: React.FunctionComponent<{}> = () => (
  <PageSection>
    <Flex
    breakpointMods={[
      {modifier: 'column'},
      {modifier: 'spacer-none'},
    ]}
    >
      <FlexItem>
        <Title headingLevel="h1" size="lg">Check out these themed components!</Title>
      </FlexItem>
      <FlexItem>
        <DynamicList className="">
          <DynamicListList type="Role">
            <DynamicListItem text="Read" />
            <DynamicListItem text="Edit" />
            <DynamicListItem text="Delete" />
          </DynamicListList>
        </DynamicList>
      </FlexItem>
      <FlexItem>
        <div className="app-awesome-component app-m-fancy-on-md app-m-bland-on-lg">This is my awesome app!</div>
      </FlexItem>
      <FlexItem>
        <Button variant="primary">Testing</Button>
      </FlexItem>
    </Flex>
  </PageSection>
)

export { ThemeDemo };

