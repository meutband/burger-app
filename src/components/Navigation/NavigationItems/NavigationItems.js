import React from 'react';

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/burger-app/" exact>BurgerBuilder</NavigationItem>
        { props.isAuthenticated ? <NavigationItem link="/burger-app/orders">Orders</NavigationItem> : null}
        { !props.isAuthenticated 
            ? <NavigationItem link="/burger-app/auth">Authenticate</NavigationItem>
            : <NavigationItem link="/burger-app/logout">Logout</NavigationItem>
        }
    </ul>
);

export default navigationItems;