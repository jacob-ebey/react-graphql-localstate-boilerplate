import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MuiToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

export interface ToolbarProps {
  title: string;
  onOpenDrawer?(): void;
}

const Toolbar: React.FC<ToolbarProps> = ({ title, onOpenDrawer }) => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <MuiToolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" onClick={onOpenDrawer}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
      </MuiToolbar>
    </AppBar>
  )
}

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

export default Toolbar
