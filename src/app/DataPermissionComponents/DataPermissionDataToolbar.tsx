import * as React from 'react';
import {useState} from 'react';
import {
  Button,
  ButtonVariant,
  DataToolbar,
  DataToolbarContent,
  DataToolbarFilter,
  DataToolbarGroup,
  DataToolbarItem,
  DataToolbarToggleGroup,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownToggleCheckbox,
  InputGroup,
  KebabToggle,
  OverflowMenu,
  OverflowMenuControl,
  OverflowMenuContent,
  OverflowMenuGroup,
  OverflowMenuItem,
  OverflowMenuDropdownItem,
  Pagination,
  PaginationVariant,
  TextInput
} from '@patternfly/react-core';
import {
  // CaretDownIcon,
  SearchIcon,
  // SortAlphaDownIcon,
  FilterIcon
} from '@patternfly/react-icons';

const DataPermissionDataToolbar = () => {
  const [bulkSelectState, setBulkSelect] = useState(false);
  const [nameSearchState, setNameSearchState] = useState(false);
  const [overflowToggleState, setOverflowState] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  const bulkSelectItems = [
    <DropdownItem key="bulk-1" component="button">Action 1</DropdownItem>,
    <DropdownItem key="bulk-2" component="button">Action 2</DropdownItem>
  ];

  const nameSearchItems = [
    <DropdownItem key="search-item-1" component="button">Location</DropdownItem>,
    <DropdownItem key="search-item-2" component="button">Name</DropdownItem>,
    <DropdownItem key="search-item-3" component="button">Status</DropdownItem>
  ];

  const overflowMenuItems = [
    <OverflowMenuDropdownItem key="overflow-1" isShared>Set permission</OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem key="overflow-1" isShared>Clear permission</OverflowMenuDropdownItem>,
  ];

  const overflowMenu = (
    <OverflowMenu breakpoint="xl">
      <OverflowMenuContent>
        <OverflowMenuGroup groupType="button">
          <OverflowMenuItem>
            <Button variant="primary" isDisabled="true">Set permissions</Button>
          </OverflowMenuItem>
          <OverflowMenuItem>
            <Button variant="secondary" isDisabled="true">Clear permissions</Button>
          </OverflowMenuItem>
        </OverflowMenuGroup>
      </OverflowMenuContent>
      <OverflowMenuControl>
        <Dropdown
          isPlain
          onSelect={() => setOverflowState(!overflowToggleState)}
          toggle={
            <KebabToggle
              onToggle={(overflowToggleState) => setOverflowState(overflowToggleState)}
            />}
          isOpen={overflowToggleState}
          dropdownItems={overflowMenuItems}
        />
      </OverflowMenuControl>
    </OverflowMenu>
  )

  const items = (
    <React.Fragment>
      <DataToolbarItem variant="bulk-select">
        <Dropdown
          onSelect={() => setBulkSelect(!bulkSelectState)}
          toggle={(
            <DropdownToggle
              id="bulk-select-toggle"
              onToggle={(bulkSelectState) => setBulkSelect(bulkSelectState)}
              splitButtonItems={[
                <DropdownToggleCheckbox
                  id="example-checkbox-1"
                  key="split-checkbox"
                  aria-label="Select all"
                />
              ]}
            />
          )}
          isOpen={bulkSelectState}
          dropdownItems={bulkSelectItems}
        />
      </DataToolbarItem>
      <DataToolbarToggleGroup breakpoint="xl" toggleIcon={<FilterIcon />}>
        <DataToolbarGroup variant="filter-group">
          <DataToolbarItem>
            <Dropdown
              onSelect={() => setNameSearchState(!nameSearchState)}
              toggle={
                <DropdownToggle
                  onToggle={(nameSearchState) => setNameSearchState(nameSearchState)}
                  style={{width: '100%'}}>
                  <FilterIcon /> Name
                  {/* {currentCategory} */}
                </DropdownToggle>
              }
              isOpen={nameSearchState}
              dropdownItems={nameSearchItems}
              style={{ width: '100%' }}
            ></Dropdown>
          </DataToolbarItem>
          <DataToolbarItem>
            <InputGroup>
              <TextInput name="textInput1" id="textInput1" type="search" aria-label="search input example" />
              <Button variant={ButtonVariant.control} aria-label="search button for search input">
                <SearchIcon />
              </Button>
            </InputGroup>
          </DataToolbarItem>
        </DataToolbarGroup>
      </DataToolbarToggleGroup>
      <DataToolbarItem variant="overflow-menu">
        {overflowMenu}
      </DataToolbarItem>
      <DataToolbarItem variant="pagination">
        <Pagination
          itemCount={2}
          page={1}
          perPage={20}
          widgetId={`pagination-options-menu-bottom`}
          isCompact
        />
      </DataToolbarItem>
    </React.Fragment>
  );

  return (
    <DataToolbar id="app-data-toolbar" collapseListedFiltersBreakpoint='xl'>
      <DataToolbarContent>{items}</DataToolbarContent>
    </DataToolbar>
  );
}

export {DataPermissionDataToolbar};
