import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headerTitle: {
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  headerTitleText: {
    textDecoration: 'none',
    color: '#fff',
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography 
            className={classes.headerTitle}
            variant="h6" 
            color="inherit"
          >
            <Link 
              className={classes.headerTitleText}
              to={{pathname: '/'}}
            >
              Teste - Simples Dental
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;