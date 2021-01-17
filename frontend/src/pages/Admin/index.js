import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Navigator from './Navigator';
import Content from './Content';
import Header from './Header';
import Copyright from "../../components/Utils/Copyright"
import { theme, drawerWidth, useStyles } from "../../components/Admin/adminThemes"
import SwipeableViews from 'react-swipeable-views';
import TabPanel from "../../components/TabContainer/TabPanel"
import UsersList from './UsersList';
import UserProfile from "./UserProfile"


function Paperbase() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator PaperProps={{ style: { width: drawerWidth } }} />
          </Hidden>
        </nav>
        <div className={classes.app}>
          <Header onDrawerToggle={handleDrawerToggle} value={value} setValue={setValue} />
          <main className={classes.main}>

            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={value}
              onChangeIndex={(index) => setValue(index)}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <UsersList setValue={setValue} />

              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <UserProfile />
              </TabPanel>
            </SwipeableViews>
          </main>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Paperbase;