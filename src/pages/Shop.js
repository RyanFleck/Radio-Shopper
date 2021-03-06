import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import BuyCard from '../components/BuyCard';


import messaging from "../Messaging";

import Paho from "paho-mqtt";


const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Shop(props) {

  const classes = useStyles();

  return (
    <React.Fragment>


      <div><h1>Shop for Others</h1></div>

      <Typography paragraph>
        These are items that people want delivered from stores nearby.
        </Typography>

      <Button

        color="primary">
        Ready
        </Button>

      <Button color="primary">
        Submit
        </Button>

      {props.messages.map(msg => {
        if (msg.for == "shoppers") {
          return (
            <BuyCard itemDesc={msg.itemDesc} storeDesc={msg.storeDesc}/>
          )
        }
      })}


    </React.Fragment>
  );

}
