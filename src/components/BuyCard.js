import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Suzanne requests items:
        </Typography>
        <Typography variant="h5" component="h5">
          {props.itemDesc}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          At store:
        </Typography>
        <Typography variant="h5" component="h5">
          {props.storeDesc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Accept</Button>
        <Button size="small">Map</Button>
      </CardActions>
    </Card>
  );
}