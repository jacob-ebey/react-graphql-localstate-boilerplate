import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export interface DrawerProps {
  readonly open?: boolean;
  onClose?(): void;
}

const Drawer: React.FC<DrawerProps> = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <MuiDrawer
      open={open}
      onClose={onClose}
    >
      <div className={classes.root}>
        <List>
          <ListItem button>
            <ListItemText>Menu Item 1</ListItemText>
          </ListItem>
        </List>
      </div>
    </MuiDrawer>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 250,
  }
}));

export default Drawer;
