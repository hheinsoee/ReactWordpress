import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Redirect} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Dialog, Paper } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PopUp from './popup'

const useStyles = makeStyles({
  root: {
  }

});

export default function MyCard() {
  return (
    <div>
    <Router>
      <Switch>
        <Route path="/aaa">
          <PopUp/>
        </Route>
      </Switch>
      <div className="_mxy">
      <Card>
        <CardActionArea to="/aaa" component={Link} >
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFXUOLLzCzMCBX-utPfFPWB7v7JRbZqQh2kQ&usqp=CAU"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </div>
    </Router>
    </div>
  );
}
