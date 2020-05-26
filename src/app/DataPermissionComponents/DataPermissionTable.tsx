import * as React from 'react';
import './data-permission-table.scss';
// import { useState } from 'react';
// import { useEffect, useState } from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant,
  SortByDirection,
  cellWidth,
  cellActions,
  expandable,
  emptyTD,
  headerCol,
  sortable,
  textCenter
} from '@patternfly/react-table';

// import {
//   scopeColTransformer,
//   selectable,
//   cellActions,
//   emptyCol,
//   mapProps,
//   collapsible,
//   emptyTD,
//   expandedRow,
//   parentId,
//   editable
// } from './transformers';

import {
  Checkbox,
  Chip,
  ChipGroup
} from '@patternfly/react-core';

function NestedTable() {
  return (
    <Table
      aria-label="Nested table"
      variant={TableVariant.compact}
      cells = {[
        {
          title: 'Role',
          // transforms: [cellWidth(15)],
          cellTransforms: [headerCol()]
        },
        {
          title: 'Read',
          transforms: [textCenter],
          cellTransforms: [textCenter]
        },
        {
          title: 'Edit',
          transforms: [textCenter],
          cellTransforms: [textCenter]
        },
        {
          title: 'Delete',
          transforms: [textCenter],
          // transforms: [cellWidth(15), textCenter],
          cellTransforms: [textCenter]
        },
        {
          title: 'All access',
          transforms: [textCenter],
          // transforms: [cellWidth(15), textCenter],
          cellTransforms: [textCenter]
        }
      ]}
      rows= {[
        [
          { title: <span>Developer</span> },
          { title:
            <Checkbox
              aria-label="controlled checkbox example"
              id="check-1"
              name="check1"
              className="pf-m-no-label"
            />
          },
          { title:
            <Checkbox
              aria-label="controlled checkbox example"
              id="check-2"
              name="check2"
              className="pf-m-no-label"
            />
          },
          { title:
            <Checkbox
              aria-label="controlled checkbox example"
              id="check-3"
              name="check3"
              className="pf-m-no-label"
            />
          },
          { title:
            <Checkbox
              aria-label="controlled checkbox example"
              id="check-4"
              name="check4"
              className="pf-m-no-label"
            />
          }
        ],
        [
          { title: <span>Sales</span> },
          { title:
            <Checkbox
              aria-label="controlled checkbox example"
              id="check-5"
              name="check5"
              className="pf-m-no-label"
            />
          },
          { title:
            <Checkbox
              aria-label="controlled checkbox example"
              id="check-6"
              name="check6"
              className="pf-m-no-label"
            />
          },
          { title:
            <Checkbox
              aria-label="controlled checkbox example"
              id="check-7"
              name="check7"
              className="pf-m-no-label"
            />
          },
          { title:
            <Checkbox
              aria-label="controlled checkbox example"
              id="check-8"
              name="check8"
              className="pf-m-no-label"
            />
          }
        ],
        [
          { title: <span>Design</span> },
          { title:
            <Checkbox
              aria-label="controlled checkbox example"
              id="check-9"
              name="check9"
              className="pf-m-no-label"
            />
          },
          { title:
            <Checkbox
              aria-label="controlled checkbox example"
              id="check-10"
              name="check10"
              className="pf-m-no-label"
            />
          },
          { title:
            <Checkbox
              aria-label="controlled checkbox example"
              id="check-11"
              name="check11"
              className="pf-m-no-label"
            />
          },
          { title:
            <Checkbox
              aria-label="controlled checkbox example"
              id="check-12"
              name="check12"
              className="pf-m-no-label"
            />
          }
        ],
      ]}>
      <TableHeader />
      <TableBody />
    </Table>
  );
}


// function CreateNestedTable = () => {
//   const listItems = ['Developer', 'Sales', 'Design'];

//   listItems.map((item, index) => {
//     console.log(item, index);
//   })
// }

class DataPermissionTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'View name',
          id: 'view-name',
          cellFormatters: [expandable],
          transforms: [sortable]
        },
        'Permissions',
        {
          title: 'Last update',
          transforms: [sortable]
        },
        {
          dataLabel: 'testing',
          className: 'pf-m-fit-content',
          // title: <span class="pf-u-screen-reader">Edit</span>
          title: 'Edit',
          props: {
            className: 'pf-m-fit-content'
          }

        }
        // ,
        // '',
        // ''
        // {
        //   title: <span class="pf-u-screen-reader">Actions column</span>,
        //   props: {
        //     'data-label': 'Actions column',
        //     colSpan: 6,
        //     className: 'pf-m-no-padding'
        //   }
        // }
      ],
      rows: [
        {
          isOpen: true,
          cells: [
            'Contact',
            {
              title:
                <ChipGroup
                  categoryName="Category"
                  className="app-m-inline">
                  <span class="pf-c-chip-group__label" aria-hidden="true" id="pf-random-id-15">Category one</span>
                  <Chip key="chip" isReadOnly>
                    test 1
                  </Chip>
                  <Chip key="chip" isReadOnly>
                    test 2
                  </Chip>
                  <Chip key="chip" isReadOnly>
                    test 3
                  </Chip>
                </ChipGroup>
            },
            'Date',
            {
              title:
                <button>test</button>
            }
          ]
        },
        {
          parent: 0,
          fullWidth: true,
          noPadding: true,
          dataLabel: '',
          cells: [{
            props: {
              // dataLabel: ''
            },
            // props: {
            //   colSpan: 6,
            //   className: 'pf-m-no-padding',
            //   'data-label': ''},
            // props: {
            //   colSpan: 6,
            //   className: 'pf-m-no-padding',
            //   'data-label': ''},
            title: NestedTable()
              // <Table
              //   aria-label="Nested table"
              //   variant={TableVariant.compact}
              //   cells = {[
              //     {
              //       title: 'Role',
              //       transforms: [cellWidth(15)],
              //       cellTransforms: [headerCol()]
              //     },
              //     {
              //       title: 'Read',
              //       transforms: [cellWidth(15), textCenter],
              //       cellTransforms: [textCenter]
              //     },
              //     {
              //       title: 'Edit',
              //       transforms: [cellWidth(15), textCenter],
              //       cellTransforms: [textCenter]
              //     },
              //     {
              //       title: 'Delete',
              //       transforms: [cellWidth(15), textCenter],
              //       cellTransforms: [textCenter]
              //     },
              //     {
              //       title: 'All access',
              //       transforms: [cellWidth(15), textCenter],
              //       cellTransforms: [textCenter]
              //     },
              //     {
              //       title: '',
              //       props: { component: 'td' }
              //     }
              //   ]}
              //   rows= {[
              //     [
              //       { title: <span>Developer</span> },
              //       { title:
              //         <Checkbox
              //           aria-label="controlled checkbox example"
              //           id="check-1"
              //           name="check1"
              //           className="pf-m-no-label"
              //         />
              //       },
              //       { title:
              //         <Checkbox
              //           aria-label="controlled checkbox example"
              //           id="check-2"
              //           name="check2"
              //           className="pf-m-no-label"
              //         />
              //       },
              //       { title:
              //         <Checkbox
              //           aria-label="controlled checkbox example"
              //           id="check-3"
              //           name="check3"
              //           className="pf-m-no-label"
              //         />
              //       },
              //       { title:
              //         <Checkbox
              //           aria-label="controlled checkbox example"
              //           id="check-4"
              //           name="check4"
              //           className="pf-m-no-label"
              //         />
              //       },
              //       ''
              //     ],
              //     [
              //       { title: <span>Sales</span> },
              //       { title:
              //         <Checkbox
              //           aria-label="controlled checkbox example"
              //           id="check-5"
              //           name="check5"
              //           className="pf-m-no-label"
              //         />
              //       },
              //       { title:
              //         <Checkbox
              //           aria-label="controlled checkbox example"
              //           id="check-6"
              //           name="check6"
              //           className="pf-m-no-label"
              //         />
              //       },
              //       { title:
              //         <Checkbox
              //           aria-label="controlled checkbox example"
              //           id="check-7"
              //           name="check7"
              //           className="pf-m-no-label"
              //         />
              //       },
              //       { title:
              //         <Checkbox
              //           aria-label="controlled checkbox example"
              //           id="check-8"
              //           name="check8"
              //           className="pf-m-no-label"
              //         />
              //       },
              //       ''
              //     ],
              //     [
              //       { title: <span>Design</span> },
              //       { title:
              //         <Checkbox
              //           aria-label="controlled checkbox example"
              //           id="check-9"
              //           name="check9"
              //           className="pf-m-no-label"
              //         />
              //       },
              //       { title:
              //         <Checkbox
              //           aria-label="controlled checkbox example"
              //           id="check-10"
              //           name="check10"
              //           className="pf-m-no-label"
              //         />
              //       },
              //       { title:
              //         <Checkbox
              //           aria-label="controlled checkbox example"
              //           id="check-11"
              //           name="check11"
              //           className="pf-m-no-label"
              //         />
              //       },
              //       { title:
              //         <Checkbox
              //           aria-label="controlled checkbox example"
              //           id="check-12"
              //           name="check12"
              //           className="pf-m-no-label"
              //         />
              //       },
              //       ''
              //     ],
              //   ]}>
              //   <TableHeader />
              //   <TableBody />
              // </Table>
            }
          ]
        },
        {
          isOpen: false,
          cells: ['parent - 2', 'two', 'three', 'four']
        },
        {
          parent: 3,
          fullWidth: true,
          cells: [{
            props: {
              colSpan: 5,
              className: 'pf-m-no-padding'
            },
            title:
              <Table
                aria-label="Nested table"
                variant={TableVariant.compact}

                rows= {[
                  ['one', 'two', 'three', 'four', 'five'],
                  ['one', 'two', 'three', 'four', 'five'],
                  ['one', 'two', 'three', 'four', 'five']
                ]}
                cells = {[
                  { title: 'Header one cell' },
                  'second header',
                  'third header'
                ]}
                >
              </Table>
          }]
        },
      ],
      sortBy: {},
      readonlychip: {
        name: 'Read-only Chip'
      }
    };
    this.onSort = this.onSort.bind(this);
    this.onCollapse = this.onCollapse.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
  }

  // CreateNestedTable();

  onCollapse(event, rowKey, isOpen) {
    console.log(this.state);
    const { rows } = this.state;
    /**
     * Please do not use rowKey as row index for more complex tables.
     * Rather use some kind of identifier like ID passed with each row.
     */
    rows[rowKey].isOpen = isOpen;
    this.setState({
      rows
    });
  }

  onSelect(event, isSelected, rowId) {
    let rows;
    if (rowId === -1) {
      rows = this.state.rows.map(oneRow => {
        oneRow.selected = isSelected;
        return oneRow;
      });
    } else {
      rows = [...this.state.rows];
      rows[rowId].selected = isSelected;
    }
    this.setState({
      rows
    });
  }

  toggleSelect(checked) {
    this.setState({
      canSelectAll: checked
    });
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

  actionResolver(rowData, { rowIndex }) {
    if (rowIndex === 1) {
      return null;
    }

    return [
      {
        title: 'Some action',
        onClick: (event, rowId, rowData, extra) =>
          console.log(`clicked on Some action, on row ${rowId} of type ${rowData.type}`)
      },
      {
        title: <div>Another action</div>,
        onClick: (event, rowId, rowData, extra) =>
          console.log(`clicked on Another action, on row ${rowId} of type ${rowData.type}`)
      },
    ];
  }

  render() {
    const { columns, rows, sortBy } = this.state;

    return (
      <Table
        aria-label="Collapsible table"
        className="sy-data-permissions-table"
        rows={rows}
        cells={columns}
        actionResolver={this.actionResolver}
        sortBy={}
        gridBreakPoint='grid-xl'
        onSort={this.onSort}
        onSelect={this.onSelect}
        onCollapse={this.onCollapse}
        >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}

export { DataPermissionTable };