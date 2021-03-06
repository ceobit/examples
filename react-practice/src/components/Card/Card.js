import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { history } from "../../history";

const useStyles = makeStyles({
  root: {
    width: "350px",
    maxWidth: 545,
    margin: 5,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ img, title, population, capital }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => history.push(`/country/${title}`)}>
        <CardMedia className={classes.media} image={img} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Population: ${population}`}
            {` Capital: ${capital}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => history.push(`/country/${title}`)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
