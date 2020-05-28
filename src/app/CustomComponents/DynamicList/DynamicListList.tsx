import React from 'react';
import {} from '@patternfly/react-core';

const DynamicListList = (props) => {
  const id = 'app-list-' + props.type.toLowerCase();

  return (
    <React.Fragment>
      <span className={'app-c-dynamic-list__label '} id={id} aria-hidden="true">{props.type}</span>
      <ul className="app-c-dynamic-list__list" aria-labelledby={id}>
        {props.children}
      </ul>
    </React.Fragment>
  );
};

export {DynamicListList};
