import * as React from 'react';
import useRouter from 'use-react-router';
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
  readonly activePartyCount: number;
  readonly open?: boolean;
  readonly title: string;
  onClose?(): void;
}

export const drawerWidth = 250;

const Drawer: React.FC<DrawerProps> = ({ activePartyCount, open, onClose, title }) => {
  const classes = useStyles();
  const router = useRouter();

  const navigateTo = React.useCallback((to: string) => () => {
    router.history.push(to);
  }, [router]);

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
          <ListItem button onClick={navigateTo('/pokemon')}>
            <ListItemText>Pokemon</ListItemText>
          </ListItem>

          <ListItem button onClick={navigateTo('/party')}>
            <ListItemText>My Party ({activePartyCount})</ListItemText>
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
