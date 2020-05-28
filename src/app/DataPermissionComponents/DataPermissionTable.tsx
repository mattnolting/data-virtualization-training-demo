import * as React from 'react';
import './data-permission-table.scss';
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

import { DynamicList } from '../CustomComponents/DynamicList/DynamicList';
import { DynamicListList } from '../CustomComponents/DynamicList/DynamicListList';
import { DynamicListItem } from '../CustomComponents/DynamicList/DynamicListItem';

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
                <DynamicList>
                  <DynamicListList type="Developer">
                    <DynamicListItem text="Read" />
                    <DynamicListItem text="Edit" />
                    <DynamicListItem text="Delete" />
                  </DynamicListList>
                </DynamicList>
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
          parent: 2,
          fullWidth: true,
          noPadding: true,
          dataLabel: '',
          cells: [{
            title: NestedTable()
          }]
        }
        //   parent: 3,
        //   fullWidth: true,
        //   cells: [{
        //     props: {
        //       colSpan: 5,
        //       className: 'pf-m-no-padding'
        //     },
        //     title:
        //     title: NestedTable()
        //   }]
        // },
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
    // {this.props.propInQuestion ? <a href="#">link</a> : null}
    if (rowData.parent) {
      return null;
    } else {
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

// class DataPermissionTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       columns: [
//         {
//           title: 'Repositories',
//           transforms: [cellWidth(15), sortable]
//         },
//         'Branches',
//         { title: 'Pull requests' },
//         'Workspaces',
//         {
//           title: 'Last Commit',
//           transforms: [textCenter],
//           cellTransforms: [textCenter]
//         }
//       ],
//       rows: [
//         {
//           cells: ['one', 'two', 'three', 'four', 'five']
//         },
//         {
//           cells: [
//             {
//               title: <div>one - 2</div>,
//               props: { title: 'hover title', colSpan: 3 }
//             },
//             'four - 2',
//             'five - 2'
//           ]
//         },
//         {
//           cells: [
//             'one - 3',
//             'two - 3',
//             'three - 3',
//             'four - 3',
//             {
//               title: 'five - 3 (not centered)',
//               props: { textCenter: false }
//             }
//           ]
//         }
//       ]
//     };
//   }

//   render() {
//     const { columns, rows } = this.state;

//     return (
//       <Table aria-label="Simple Table" cells={columns} rows={rows}>
//         <TableHeader />
//         <TableBody />
//       </Table>
//     );
//   }
// }

export { DataPermissionTable };