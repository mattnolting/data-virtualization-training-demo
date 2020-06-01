import * as React from 'react';
import {
  Pagination,
  PaginationVariant
} from '@patternfly/react-core';

class ToolbarDemoTablePagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
    this.onSetPage = (_event, pageNumber) => {
      this.setState({
        page: pageNumber
      });
    };
    this.onPerPageSelect = (_event, perPage) => {
      this.setState({
        perPage
      });
    };
  }

  render() {
    return (
      <Pagination
        itemCount={37}
        perPage={this.state.perPage}
        page={this.state.page}
        variant={PaginationVariant.bottom}
        onSetPage={this.onSetPage}
        onPerPageSelect={this.onPerPageSelect}
        isCompact={this.props.compact}
      />
    );
  }
}

export { ToolbarDemoTablePagination };
