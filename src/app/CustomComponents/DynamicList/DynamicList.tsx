import React from 'react';
import './dynamic-list.scss';

// const DynamicList = ({ content, ...props }) => {
const DynamicList = (props) => {

  return (
    <div className={"app-c-dynamic-list " + props.className}>
      {props.children}
    </div>
  );
};

export {DynamicList};
