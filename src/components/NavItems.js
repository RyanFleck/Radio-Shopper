import React from 'react';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import PropTypes from 'prop-types';

function NavItems(props) {
    return (
        <React.Fragment>
        <Divider />
        <List>
            <ListItem button key={0}>
                <ListItemIcon>
                    <ShoppingBasket />
                </ListItemIcon>
                <ListItemText primary={"Shop"} />
            </ListItem>

            <ListItem button key={0}>
                <ListItemIcon>
                    <ShoppingBasket />
                </ListItemIcon>
                <ListItemText primary={"Shop"} />
            </ListItem>

        </List>
        <Divider />
        <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
        </React.Fragment>
);
}

export default NavItems;