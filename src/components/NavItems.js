import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingIcon from '@material-ui/icons/ShoppingBasket';
import MoneyIcon from '@material-ui/icons/Money';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Info';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NavItems(props) {
    return (
        <React.Fragment>
            <Divider />
            <List>
                {/*
                <ListItem button key={0} component={Link} to="/">
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary={"Shop"} />
                    <Redirect to="/" />
                </ListItem>
                */}

                <ListItem button key={1} component={Link} to="/shop">
                    <ListItemIcon>
                        <ShoppingIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Shop for Others"} />
                    <Redirect to="/" />
                </ListItem>

                <ListItem button key={2} component={Link} to="/buy">
                    <ListItemIcon>
                        <MoneyIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Buy for Yourself"} />
                </ListItem>

            </List>
            <Divider />
            <List>
                {/*
                <ListItem button key={0} component={Link} to="/">
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary={"Shop"} />
                    <Redirect to="/" />
                </ListItem>
                */}

                <ListItem button key={1} component={Link} to="/home">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Home"} />
                    <Redirect to="/" />
                </ListItem>

                <ListItem button key={2} component={Link} to="/about">
                    <ListItemIcon>
                        <AboutIcon />
                    </ListItemIcon>
                    <ListItemText primary={"About"} />
                </ListItem>

            </List>
            <Divider />
            

        </React.Fragment>
    );
}

export default NavItems;