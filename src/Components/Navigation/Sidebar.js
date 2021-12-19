import React from 'react'
import { Collapse, Divider, List, ListItem, ListItemText } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

function SidebarItem({ depthStep = 10, depth = 0, expanded, item, ...rest }) {
    const [collapsed, setCollapsed] = React.useState(true);
    const { label, items, Icon, onClick: onClickProp } = item;
  
    function toggleCollapse() {
      setCollapsed(prevValue => !prevValue);
    }
  
    function onClick(e) {
      if (Array.isArray(items)) {
        toggleCollapse();
      }
      if (onClickProp) {
        onClickProp(e, item);
      }
    }
  
    let expandIcon;
  
    if (Array.isArray(items) && items.length) {
      expandIcon = !collapsed ? (
        <ExpandLess
          className={
            "sidebar-item-expand-arrow" + " sidebar-item-expand-arrow-expanded"
          }
        />
      ) : (
        <ExpandMore className="sidebar-item-expand-arrow" />
      );
    }
  
    return (
      <>
        <ListItem
          className="sidebar-item"
          onClick={onClick}
          button
          dense
          {...rest}
        >
          <div
            style={{ paddingLeft: depth * depthStep }}
            className="sidebar-item-content"
          >
            {Icon && <Icon className="sidebar-item-icon" fontSize="medium" />}
            <div className="sidebar-item-text">{label}</div>
          </div>
          {expandIcon}
        </ListItem>
        <Collapse in={!collapsed} timeout="auto" unmountOnExit>
          {Array.isArray(items) ? (
            <List disablePadding dense>
              {items.map((subItem, index) => (
                <React.Fragment key={`${subItem.name}${index}`}>
                  {subItem === "divider" ? (
                    <Divider style={{ margin: "6px 0" }} />
                  ) : (
                    <SidebarItem
                      depth={depth + 2}
                      depthStep={depthStep}
                      item={subItem}
                    />
                  )}
                </React.Fragment>
              ))}
            </List>
          ) : null}
        </Collapse>
      </>
    );
  }
  
  function Sidebar({ items, depthStep, depth, expanded }) {
    return (
      <div className="sidebar">
        <List disablePadding dense>
          {items.map((sidebarItem, index) => (
            <React.Fragment key={`${sidebarItem.name}${index}`}>
              {sidebarItem === "divider" ? (
                <Divider style={{ margin: "6px 0" }} />
              ) : (
                <SidebarItem
                  depthStep={depthStep}
                  depth={depth}
                  expanded={expanded}
                  item={sidebarItem}
                />
              )}
            </React.Fragment>
          ))}
        </List>
      </div>
    );
  }
  
  export default Sidebar;