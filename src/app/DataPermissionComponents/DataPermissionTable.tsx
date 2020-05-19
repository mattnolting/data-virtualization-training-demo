import * as React from 'react';
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
          title: 'Header cell testing',
          cellFormatters: [expandable],
          transforms: [sortable]
        },
        {
          title: 'Branches',
          transforms: [sortable]
        },
        {
          title: 'Pull requests',
          transforms: [sortable]
        },
        'Workspaces',
        {
          title: 'Last Commit'
        }
      ],
      rows: [
        {
          isOpen: true,
          cells: ['one', 'two', 'three', 'four', 'five']
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
                      transforms: [cellWidth(15)]
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
                    ''
                  ]}
                  rows= {[
                    [
                      { title: <span>Developer</span> },
                      { title:
                        <Checkbox
                          aria-label="controlled checkbox example"
                          id="check-1"
                          name="check1"
                        />
                      },
                      { title:
                        <Checkbox
                          aria-label="controlled checkbox example"
                          id="check-2"
                          name="check2"
                        />
                      },
                      { title:
                        <Checkbox
                          isChecked={}
                          onChange={}
                          aria-label="controlled checkbox example"
                          id="check-3"
                          name="check3"
                        />
                      },
                      { title:
                        <Checkbox
                          isChecked={}
                          onChange={}
                          aria-label="controlled checkbox example"
                          id="check-4"
                          name="check4"
                        />
                      },
                    ],
                    ['one', 'two', 'three', 'four', 'five'],
                    ['one', 'two', 'three', 'four', 'five']
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

  render() {
    const { columns, rows, sortBy } = this.state;

    return (
      <Table aria-label="Collapsible table" sortBy={} gridBreakPoint='grid-lg' onSort={this.onSort} onSelect={this.onSelect} onCollapse={this.onCollapse} rows={rows} cells={columns}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}

export { DataPermissionTable };