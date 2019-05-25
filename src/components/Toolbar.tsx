import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MuiToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import { drawerWidth } from './Drawer';

export interface ToolbarProps {
  drawerOpen?: boolean;
  title: string;
  onOpenDrawer?(): void;
}

const Toolbar: React.FC<ToolbarProps> = ({ title, drawerOpen, onOpenDrawer }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen,
        })}
      >
        <MuiToolbar>
          {!drawerOpen && (
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" onClick={onOpenDrawer}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </MuiToolbar>
      </AppBar>
    </React.Fragment>
  )
}

const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  appBarShift: {
    '@media (min-width:600px)': {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      })
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

export default Toolbar
