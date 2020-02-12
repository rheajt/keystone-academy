import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    maxHeight: 200,
    objectFit: 'cover',
    overflow: 'hidden',
  },
});

export default function SiteCard({ card }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title="Contemplative Reptile"
          component={Img}
          fluid={card.image.childImageSharp.fluid}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {card.description.padEnd(50, ' ')}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {card.href ? (
          <Button size="small" color="primary" component="a" href={card.href}>
            Learn More
          </Button>
        ) : (
          <Button size="small" color="primary">
            Coming soon...
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
