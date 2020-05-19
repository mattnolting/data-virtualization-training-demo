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
  expandable,
  headerCol,
  sortable,
  textCenter
} from '@patternfly/react-table';

import {
  Checkbox
} from '@patternfly/react-core';


// const DataPermissionTableColumns = ["First column", "Second column", "Third column"];

// const handleOnCollapse = (event, rowId, isOpen) => {
//   const collapseRows = [...rows];
//   collapseRows[rowId] = { ...collapseRows[rowId], isOpen };
//   setRows(collapseRows);
// }

// const DataPermissionTableColumns = [
//   {
//     title: 'Header cell',
//     cellFormatters: [expandable]
//   },
//   'Branches',
//   { title: 'Pull requests' },
//   'Workspaces',
//   {
//     title: 'Last Commit'
//   }
// ];

// const DataPermissionTableRows = [

//   {
//     cells: ['one', 'two', 'three', 'four', 'five']
//   },
//   {
//     isOpen: true,
//     cells: ['parent - 1', 'two', 'three', 'four', 'five']
//   },
//   {
//     parent: 1,
//     fullWidth: true,
//     cells: ['child - 1']
//   },
//   {
//     isOpen: false,
//     cells: ['parent - 2', 'two', 'three', 'four', 'five']
//   },
//   {
//     parent: 3,
//     cells: ['child - 2']
//   },
//   {
//     isOpen: false,
//     cells: ['parent - 3', 'two', 'three', 'four', 'five']
//   },
//   {
//     parent: 5,
//     fullWidth: true,
//     noPadding: true,
//     cells: ['child - 3']
//   }
// ];

// // function OnTableCollapse() {
// //   // const [DataPermissionTableRows, isOpen];
// //   rows[rowKey].isOpen = isOpen;
// // }

// const DataPermissionTable = () => {

//   return (
//     <React.Fragment>
//       <Table cells={DataPermissionTableColumns} onCollapse={onCollapse()} rows={DataPermissionTableRows}>
//         <TableHeader />
//         <TableBody />
//       </Table>
//     </React.Fragment>
//   )
// };

// export { DataPermissionTable };

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
          title: '',
          props: {
            component: 'td',
            className: 'test'
          }
        },
        {
          title: '',
          props: {
            component: 'td'
          }
        }
      ],
      rows: [
        {
          isOpen: true,
          cells: ['Contact', 'chips', 'Date', 'button', 'dropdown']
        },
        {
          parent: 0,
          fullWidth: true,
          cells: [
            {
              title:
                <Table
                  aria-label="Nested table"
                  variant={TableVariant.compact}
                  cells = {[
                    {
                      title: 'Role',
                      transforms: [cellWidth(15)],
                      cellTransforms: [headerCol()]
                    },
                    {
                      title: 'Read',
                      transforms: [cellWidth(15), textCenter],
                      cellTransforms: [textCenter]
                    },
                    {
                      title: 'Edit',
                      transforms: [cellWidth(15), textCenter],
                      cellTransforms: [textCenter]
                    },
                    {
                      title: 'Delete',
                      transforms: [cellWidth(15), textCenter],
                      cellTransforms: [textCenter]
                    },
                    {
                      title: 'All access',
                      transforms: [cellWidth(15), textCenter],
                      cellTransforms: [textCenter]
                    },
                    {
                      title: '',
                      props: { component: 'td' }
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
                      },
                      ''
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
                      },
                      ''
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
                      },
                      ''
                    ],
                  ]}
                  >
                  <TableHeader />
                  <TableBody />
                </Table>,
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          isOpen: false,
          cells: ['parent - 2', 'two', 'three', 'four', 'five']
        },
        {
          parent: 3,
          fullWidth: true,
          cells: [
            {
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
                </Table>,
              props: { colSpan: 5, className: 'pf-m-no-padding' }
            }
          ]
        },
      ],
      sortBy: {}
    };
    this.onSort = this.onSort.bind(this);
    this.onCollapse = this.onCollapse.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
  }

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
      <Table aria-label="Collapsible table" className="sy-data-permissions-table" actionResolver={this.actionResolver} sortBy={} gridBreakPoint='grid-lg' onSort={this.onSort} onSelect={this.onSelect} onCollapse={this.onCollapse} rows={rows} cells={columns}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}

export { DataPermissionTable };