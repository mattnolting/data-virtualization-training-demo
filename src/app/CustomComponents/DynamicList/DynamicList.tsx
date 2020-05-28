import React from 'react';
import './dynamic-list.scss';
import {} from '@patternfly/react-core';

// const DynamicList = ({ content, ...props }) => {
const DynamicList = (props) => {

  return (
    <div className="app-c-dynamic-list">
      {props.children}
    </div>
  );
};

export {DynamicList};
