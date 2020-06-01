import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant,
  SortByDirection
} from '@patternfly/react-table';

import {
  Flex,
  FlexItem,
  FlexModifiers,
  TextContent,
  Title,
  Text,
  Grid,
  GridItem
} from '@patternfly/react-core';

import { HiddenTableHeader } from '../CustomComponents/HiddenTableHeader/HiddenTableHeader';
import { DynamicList } from '../CustomComponents/DynamicList/DynamicList';
import { DynamicListList } from '../CustomComponents/DynamicList/DynamicListList';
import { DynamicListItem } from '../CustomComponents/DynamicList/DynamicListItem';

class ToolbarDemoTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        'Category',
        'Branch',
        'Code',
        'Workspaces',
        'Custom component',
        {
          dataLabel: 'Link header',
          title: <HiddenTableHeader title="Links" />
        }
      ],
      rows: [
        {
          cells: [
            {
              title:
                <React.Fragment>
                  <div>Node 1</div>
                  <a href="#" target="_blank">siemer/test-space</a>
                </React.Fragment>,
            },
            '10',
            '25',
            '5',
            {
              title:
                <DynamicList className="">
                  <DynamicListList type="Role" id="dynamic-list-1">
                    <DynamicListItem text="Read" />
                    <DynamicListItem text="Edit" />
                    <DynamicListItem text="Delete" />
                  </DynamicListList>
                </DynamicList>,
              props: {
                className: 'app-custom-cell',
              }
            },
            {
              title:
                <a href="#">Action</a>
            }
          ]
        },
        {
          cells: [
            {
              title:
                <React.Fragment>
                  <div>Node 2</div>
                  <a href="#" target="_blank">siemer/test-space</a>
                </React.Fragment>,
              props: {
                className: 'app-special-cell',
                dataLabel: '',
              }
            },
            '10',
            '25',
            '5',
            {
              title:
              // breakpointMods={[
              //   {modifier: 'spacer-none'},
              //   {modifier: 'spacer-sm', breakpoint: 'md'},
              //   {modifier: 'spacer-md', breakpoint: 'lg'},
              //   {modifier: 'spacer-lg', breakpoint: 'xl'}
              // ]}>
                // <DynamicList className="app-m-update-on-lg app-m-inline-on-md">
                // <DynamicList className="">
                //   <DynamicListList type="Role" id="dynamic-list-2">
                //     <DynamicListItem text="Read" />
                //     <DynamicListItem text="Edit" />
                //     <DynamicListItem text="Delete" />
                //   </DynamicListList>
                // </DynamicList>,
                // <GridItem md={6} span={3} rowSpan={2}>
                <Grid md={12} lg={6} xl2={6} gutter="md">
                  <GridItem>
                    <TextContent>
                      <Title headingLevel="h3" size="md">Column 1</Title>
                      <Text>Lorem ipsum</Text>
                    </TextContent>
                  </GridItem>
                  <GridItem>
                    <TextContent>
                      <Title headingLevel="h3" size="md">Column 1</Title>
                      <Text>Lorem ipsum</Text>
                    </TextContent>
                  </GridItem>
                </Grid>,
                // <Flex>
                //   <Flex breakpointMods={[
                //     {modifier: FlexModifiers['flex-1']},
                //     {modifier: 'column'},
                //     {modifier: 'row', breakpoint: 'xl'},
                //     {modifier: FlexModifiers["space-items-none"]}
                //   ]}>
                //     <FlexItem>
                //       <Title headingLevel="h3" size="md">Column 1</Title>
                //     </FlexItem>
                //     <FlexItem>
                //       <Text>Lorem ipsum</Text>
                //     </FlexItem>
                //   </Flex>
                //   <Flex breakpointMods={[
                //     {modifier: FlexModifiers['flex-1']},
                //     {modifier: 'column'},
                //     {modifier: 'row', breakpoint: 'xl'},
                //     {modifier: FlexModifiers["space-items-none"]}
                //   ]}>
                //     <FlexItem>
                //       <Title headingLevel="h3" size="md">Column 2</Title>
                //     </FlexItem>
                //     <FlexItem>
                //       <Text>Lorem ipsum</Text>
                //     </FlexItem>
                //   </Flex>
                // </Flex>,
              props: {
                className: 'app-custom-cell',
              }
            },
            {
              title:
                <a href="#">Action</a>
            }
          ]
        },
        {
          cells: [
            {
              title:
                <React.Fragment>
                  <div>Node 3</div>
                  <a href="#" target="_blank">siemer/test-space</a>
                </React.Fragment>,
              props: {
                className: 'app-special-cell',
                dataLabel: '',
              }
            },
            '10',
            '25',
            '5',
            {
              title:
                // <DynamicList className="app-m-update-on-lg app-m-inline-on-md">
                <DynamicList className="">
                  <DynamicListList type="Role" id="dynamic-list-3">
                    <DynamicListItem text="Read" />
                    <DynamicListItem text="Edit" />
                    <DynamicListItem text="Delete" />
                  </DynamicListList>
                </DynamicList>,
              props: {
                className: 'app-custom-cell',
              }
            },
            {
              title:
                <a href="#">Action</a>
            }
          ]
        },
      ],
      sortBy: {}
    };
    this.onSort = this.onSort.bind(this);
  }

  onSort(_event, index, direction) {
    const sortedRows = this.state.rows.sort((a, b) => (a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0));
    this.setState({
      sortBy: {
        index,
        direction
      },
      rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse()
    });
  }

  render() {
    const { columns, rows, sortBy } = this.state;

    return (
      <Table
        aria-label="Simple Table"
        cells={columns}
        rows={rows}
        sortBy={sortBy}
        onSort={this.onSort}
        variant={TableVariant.compact}
        gridBreakPoint='grid-lg'
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}

export { ToolbarDemoTable };