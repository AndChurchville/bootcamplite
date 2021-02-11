import React from 'react';
import {Link} from 'react-router-dom';
// import { Nav, NavContainer, NavLogo } from './Header.elements';
import {AppBar, Toolbar, Typography, Container, makeStyles} from '@material-ui/core';
import {List, ListItem, ListItemText} from '@material-ui/core';


const useStyles = makeStyles({
    nameLogo: {
        fontSize: '2rem',
        color: 'white'
    },
    navbarContainerFlex: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    navDisplayFlex: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    linkText: {
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: '#fff'
    }
});


const navItems = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Lessons',
        path: '/lessons'
    },
    
]
const Header = () => {
    const classes = useStyles()
    return (
        <>
        <AppBar position='static'>
            <Toolbar>
                <Container maxWidth='md' className={classes.navbarContainerFlex}>
                <Typography className={classes.nameLogo}>
                    BootCamp Lite
                </Typography>
                <List 
                component='navbar' 
                aria-labelledby='main navigation'
                className={classes.navDisplayFlex} >
                    {navItems.map(({title, path}) => (
                        <Link to={path} key={title} className={classes.linkText}>
                            <ListItem button>
                                <ListItemText primary={title} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                </Container>
            </Toolbar>
        </AppBar>
        </>
    )
}




export default Header;


