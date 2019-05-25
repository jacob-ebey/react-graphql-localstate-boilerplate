import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import MuiDrawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';

export interface DrawerProps {
  readonly open?: boolean;
  readonly title: string;
  onClose?(): void;
}

export const drawerWidth = 250;

const Drawer: React.FC<DrawerProps> = ({ open, onClose, title }) => {
  const classes = useStyles();

  return (
    <MuiDrawer
      variant="persistent"
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <div className={classes.root}>
      <List>
          <ListItem>
            <ListItemText>{title}</ListItemText>
            <ListItemSecondaryAction>
              <IconButton onClick={onClose}><CloseIcon /></IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        
        <Divider />
        
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
    minWidth: drawerWidth,
    maxWidth: drawerWidth
  }
}));

export default Drawer;
