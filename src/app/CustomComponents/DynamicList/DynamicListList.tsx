import React from 'react';

const DynamicListList = (props) => {
  // const id = 'app-list-' + props.type.toLowerCase();

  return (
    <React.Fragment>
      <span className={'app-c-dynamic-list__label '} id={props.id} aria-hidden="true">{props.type}</span>
      <ul className="app-c-dynamic-list__list" aria-labelledby={props.id}>
        {props.children}
      </ul>
    </React.Fragment>
  );
};

export {DynamicListList};
