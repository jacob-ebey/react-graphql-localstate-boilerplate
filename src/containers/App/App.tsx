import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles'

import { drawerWidth } from '../../components/Drawer';
import { AppQuery } from '../../types';
import Drawer from '../Drawer';
import Toolbar from '../Toolbar';
import Routes from '../../Routes';


const AppQueryGQL = loader('./AppQuery.graphql');

const App: React.FC = () => {
  const classes = useStyles();
  const { data } = useQuery<AppQuery>(AppQueryGQL);

  const drawerOpen = !!data && !!data.drawer.open;

  return (
    <div className={classes.wrapper}>
      <Drawer />
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen,
        })}
      >
        <Toolbar />
        <Routes />
      </div>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flex: 1,
    marginTop: theme.mixins.toolbar.minHeight,
    '@media (min-width:0px) and (orientation: landscape)': {
      marginTop: 48
    },
    '@media (min-width:600px)': {
      marginTop: 64
    }
  },
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  contentShift: {
    '@media (min-width:600px)': {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      })
    }
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      height: '0.2em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    },
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  }
}));

export default App;
