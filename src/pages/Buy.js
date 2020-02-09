import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import TextBox from '../components/TextBox';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import ShopCard from '../components/ShopCard';

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



export default function Buy(props) {

  const classes = useStyles();

  return (
    <React.Fragment>

      <div><h1>Buy for Yourself</h1></div>

      <Typography paragraph>
        Select a nearby store to purchase items from.
        </Typography>


      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>

          {[1, 2, 3, 4, 5, 6, 7, 8].map(card => (
            <ShopCard card={card} title={`Store No. ${card}`} />
          ))}

        </Grid>
      </Container>


    </React.Fragment>
  );

}
