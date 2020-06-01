import React from 'react';
import './hidden-table-header.scss';

const HiddenTableHeader = (props) => {

  return (
    <span className={'app-c-hidden-table-text'}>
      {props.title}
    </span>
  );
};

export {HiddenTableHeader};
