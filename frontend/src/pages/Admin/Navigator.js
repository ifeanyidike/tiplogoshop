import React, { useState } from 'react';
import { DrawerContainer } from "../../styles/AdminStyles"
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom"
import { useStyles } from "../../components/Admin/adminThemes"
import { categories } from '../../components/Admin/adminUtils';
import { useHistory, useLocation } from "react-router-dom"


function Navigator(props) {
  const [active, setActive] = useState(false)
  const classes = useStyles();
  const { ...other } = props;
  const location = useLocation()
  const splittedPath = location.pathname.split(/\//)
  const path = splittedPath[splittedPath.length - 1]

  return (
    <DrawerContainer>
      <Drawer variant="permanent" {...other}>
        <List disablePadding>
          <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
            Paperbase
        </ListItem>
          <ListItem className={clsx(classes.item, classes.itemCategory)}>
            <ListItemIcon className={classes.itemIcon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.itemPrimary,
              }}
            >
              Project Overview
          </ListItemText>
          </ListItem>
          {categories.map(({ id, children }) => (
            <React.Fragment key={id}>
              <ListItem className={classes.categoryHeader}>
                <ListItemText
                  classes={{
                    primary: classes.categoryHeaderPrimary,
                  }}
                >
                  {id}
                </ListItemText>
              </ListItem>
              {children.map(({ id: childId, icon, href }) => (
                <Link to={`/admin/${href}`} key={childId}>
                  <ListItem
                    button
                    className={clsx(classes.item, active && classes.itemActiveItem)}
                    style={{ color: path === href && '#4fc3f7' }}
                  >
                    <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.itemPrimary,
                      }}
                    >
                      {childId}
                    </ListItemText>
                  </ListItem>
                </Link>
              ))}

              <Divider className={classes.divider} />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </DrawerContainer>
  );
}


export default Navigator;