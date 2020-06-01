import React from 'react';

const DynamicListItem = (props) => {
  return (
    <li className={'app-c-dynamic-list__item ' + props.text} key={props.text}>
      {props.text}
    </li>
  );
};

export {DynamicListItem};
