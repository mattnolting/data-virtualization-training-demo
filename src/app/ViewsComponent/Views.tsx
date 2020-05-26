import React, {useState} from 'react';
import {
  Button,
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListItemCells,
  DataListAction,
  DropdownPosition,
  Dropdown,
  DropdownItem,
  KebabToggle
} from '@patternfly/react-core';
import { ViewsDataToolbar } from './ViewsDataToolbar';
import { IconLinkButton } from '../CustomComponents/IconLinkButtonComponent/IconLinkButton';
import { CalendarIcon } from '@patternfly/react-icons';

const Views = () => {

  const [toggle1IsOpen, toggle1SetIsOpen] = useState(false);
  const [toggle2IsOpen, toggle2SetIsOpen] = useState(false);
  const [toggle3IsOpen, toggle3SetIsOpen] = useState(false);

  const onToggle1 = (toggle1IsOpen) => {
    toggle1SetIsOpen(toggle1IsOpen);
  };

  const onToggle2 = (toggle2IsOpen) => {
    toggle2SetIsOpen(toggle2IsOpen);
  };

  const onToggle3 = (toggle3IsOpen) => {
    toggle3SetIsOpen(toggle3IsOpen);
  };

  const listItems = [
    { name: 'contact', state: toggle1IsOpen, setState: onToggle1 },
    { name: 'todo', state: toggle2IsOpen, setState: onToggle2 },
    { name: 'winelist', state: toggle3IsOpen, setState: onToggle3 }
  ];

  return (
    <React.Fragment>
      <ViewsDataToolbar/>
      <DataList className="app__data-list" aria-label="">
      { listItems.map((item, index) =>
        <DataListItem aria-labelledby="">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell isIcon key="icon">
                  <CalendarIcon className="app__icon--md"/>
                </DataListCell>,
                <DataListCell key={`data-list-cell-1` + index}>
                  <span id="">{item.name}</span>
                </DataListCell>,
                <DataListCell key={`data-list-cell-2` + index} isFilled={false} alignRight>
                  <IconLinkButton text="Secured"/>
                </DataListCell>
              ]}
            />
              <DataListAction
                aria-labelledby=""
                id=""
                aria-label="Actions"
              >
                <Dropdown
                  isPlain
                  position={DropdownPosition.right}
                  isOpen={item.state}
                  toggle={<KebabToggle onToggle={item.setState} />}
                  dropdownItems={[
                    <DropdownItem key={ `action` + index } component="button">
                      Action
                    </DropdownItem>
                  ]}
                />
              </DataListAction>
            </DataListItemRow>
          </DataListItem>
        ) }
      </DataList>
    </React.Fragment>
  );
}

export {Views};
