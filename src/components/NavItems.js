import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'

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

                <ListItem button key={1}>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Shop"} />
                </ListItem>

            </List>
            <Divider />

        </React.Fragment>
    );
}

export default NavItems;