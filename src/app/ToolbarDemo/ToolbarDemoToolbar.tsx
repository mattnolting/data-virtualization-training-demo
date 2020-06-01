import * as React from 'react';
import {useState} from 'react';
import {
  Button,
  DataToolbar,
  DataToolbarContent,
  DataToolbarGroup,
  DataToolbarItem,
  DataToolbarToggleGroup,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownToggleCheckbox,
  KebabToggle,
  OverflowMenu,
  OverflowMenuControl,
  OverflowMenuContent,
  OverflowMenuGroup,
  OverflowMenuItem,
  OverflowMenuDropdownItem,
  Pagination,
  Select,
  SelectOption,
  SelectVariant
} from '@patternfly/react-core';
import {
  CloneIcon,
  CogIcon,
  FilterIcon,
  TimesIcon,
  ToolboxIcon,
  SlidersHIcon
} from '@patternfly/react-icons';

import { ToolbarDemoTablePagination } from './ToolbarDemoTablePagination';

const ToolbarDemoToolbar = () => {
  const [bulkSelectState, setBulkSelect] = useState(false);
  const [statusFilterState, setStatusFilter] = useState(false);
  const [systemFilterState, setSystemFilter] = useState(false);
  const [overflowToggleState, setOverflowState] = useState(false);
  const [overflowToggleState2, setOverflowState2] = useState(false);

  const bulkSelectItems = [
    <DropdownItem key="bulk-1" component="button">Action 1</DropdownItem>,
    <DropdownItem key="bulk-2" component="button">Action 2</DropdownItem>
  ];

  const overflowMenuItems = [
    <OverflowMenuDropdownItem key="overflow-1" isShared>Setting 1</OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem key="overflow-1" isShared>Setting 2</OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem key="overflow-3" isShared>Setting 3</OverflowMenuDropdownItem>,
  ];

  const overflowMenuItems2 = [
    <OverflowMenuDropdownItem key="overflow-4" isShared>Action 1</OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem key="overflow-5" isShared>Action 2</OverflowMenuDropdownItem>,
  ];

  const statusFilterOptions = [
    { value: 'Status', disabled: false, isPlaceholder: true },
    { value: 'A', disabled: false },
    { value: 'B', disabled: false },
  ];

  const systemFilterOptions = [
    { value: 'System', disabled: false, isPlaceholder: true },
    { value: 'A', disabled: false },
    { value: 'B', disabled: false },
  ];

  /*
  // Breakpoint mods
  <DataToolbarItem
    breakpointMods={[
      {modifier: 'spacer-none'},
      {modifier: 'spacer-sm', breakpoint: 'md'},
      {modifier: 'spacer-md', breakpoint: 'lg'},
      {modifier: 'spacer-lg', breakpoint: 'xl'}
    ]}
  > */

  const overflowMenu = (
    <OverflowMenu breakpoint="lg">
      <OverflowMenuContent>
        <OverflowMenuGroup groupType="icon">
          <OverflowMenuItem>
            <Button variant="plain" aria-label="Action 1">
              <CloneIcon />
            </Button>
          </OverflowMenuItem>
          <OverflowMenuItem>
            <Button variant="plain" aria-label="Action 2">
              <SlidersHIcon />
            </Button>
          </OverflowMenuItem>
          <OverflowMenuItem>
            <Button variant="plain" aria-label="Action 3">
              <ToolboxIcon />
            </Button>
          </OverflowMenuItem>
        </OverflowMenuGroup>
      </OverflowMenuContent>
      <OverflowMenuControl>
        <Dropdown
          isPlain
          onSelect={() => setOverflowState(!overflowToggleState)}
          toggle={
            <DropdownToggle iconComponent={null} onToggle={(overflowToggleState) => setOverflowState(overflowToggleState)}>
              <CogIcon />
            </DropdownToggle>
          }
          isOpen={overflowToggleState}
          dropdownItems={overflowMenuItems}
        />
      </OverflowMenuControl>
    </OverflowMenu>
  )

  const overflowMenu2 = (
    <OverflowMenu breakpoint="md">
      <OverflowMenuContent>
        <OverflowMenuGroup groupType="button">
          <OverflowMenuItem>
            <Button variant="primary">Action 1</Button>
          </OverflowMenuItem>
          <OverflowMenuItem>
            <Button variant="secondary">Action 2</Button>
          </OverflowMenuItem>
        </OverflowMenuGroup>
      </OverflowMenuContent>
      <OverflowMenuControl>
        <Dropdown
          isPlain
          onSelect={() => setOverflowState2(!overflowToggleState2)}
          toggle={
            <KebabToggle
              onToggle={(overflowToggleState2) => setOverflowState2(overflowToggleState2)}
            />
          }
          isOpen={overflowToggleState2}
          dropdownItems={overflowMenuItems2}
        />
      </OverflowMenuControl>
    </OverflowMenu>
  )

  const items = (
    <React.Fragment>
      <DataToolbarItem>
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
      <DataToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint='xl'>
        <DataToolbarGroup variant="filter-group">
          <DataToolbarItem>
            <Select
              variant={SelectVariant.single}
              aria-label="Select Input"
              onToggle={(statusFilterState) => setStatusFilter(statusFilterState)}
              onSelect={() => setStatusFilter(statusFilterState)}
            >
              {statusFilterOptions.map((option, index) => (
                <SelectOption
                  isDisabled={option.disabled}
                  key={index}
                  value={option.value}
                />
              ))}
            </Select>
          </DataToolbarItem>
          <DataToolbarItem>
            <Select
              variant={SelectVariant.single}
              aria-label="Select Input"
              onToggle={(systemFilterState) => setSystemFilter(systemFilterState)}
              onSelect={() => setSystemFilter(systemFilterState)}
            >
              {systemFilterOptions.map((option, index) => (
                <SelectOption
                  isDisabled={option.disabled}
                  key={index}
                  value={option.value}
                />
              ))}
            </Select>
          </DataToolbarItem>
        </DataToolbarGroup>
      </DataToolbarToggleGroup>
      <DataToolbarItem variant="overflow-menu">
        {overflowMenu}
      </DataToolbarItem>
      <DataToolbarItem variant="overflow-menu">
        {overflowMenu2}
      </DataToolbarItem>
      <DataToolbarItem variant="pagination">
        <ToolbarDemoTablePagination compact="true" />
      </DataToolbarItem>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <DataToolbar collapseListedFiltersBreakpoint='xl'>
        <DataToolbarContent>{items}</DataToolbarContent>
      </DataToolbar>
      <Divider />
    </React.Fragment>
  );
}

export {ToolbarDemoToolbar};
