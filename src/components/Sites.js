import React from 'react';
import { Grid, Container, makeStyles } from '@material-ui/core';
import SiteCard from './SiteCard';
import { useStaticQuery } from 'gatsby';

const useStyles = makeStyles({
  root: {
    padding: '2rem',
    paddingBottom: '10rem',
  },
});
export default function Sites() {
  const classes = useStyles();
  const data = useStaticQuery(SiteCardImagesQuery);

  const cards = [
    {
      image: data.calendars,
      title: 'Calendars',
      description:
        'Build a calendar with your six day schedule on a five day week.',
      href: 'https://calendars.keystone.academy',
    },
    {
      image: data.houses,
      title: 'Houses',
      description:
        'The five houses work together to make Keystone a great place to live and learn.',
    },
    {
      image: data.greenteam,
      title: 'Green Team',
      description:
        'The power behind the throne. The real force that keeps Keystone running.',
    },
  ];
  return (
    <Container>
      <Grid container spacing={2} className={classes.root}>
        {cards.map(card => (
          <Grid item sm={6} md={4}>
            <SiteCard card={card} />
          </Grid>
        ))}
        {/* <Grid item sm={6} md={4}>
          <SiteCard card={data.calendars.childImageSharp.fluid} />
        </Grid>
        <Grid item sm={6} md={4}>
          <SiteCard card={data.calendars.childImageSharp.fluid} />
        </Grid>
        <Grid item sm={6} md={4}>
          <SiteCard card={data.calendars.childImageSharp.fluid} />
        </Grid> */}
      </Grid>
    </Container>
  );
}

const SiteCardImagesQuery = graphql`
  query {
    calendars: file(relativePath: { eq: "calendars.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 345) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    houses: file(relativePath: { eq: "houses.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 345) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    greenteam: file(relativePath: { eq: "greenteam.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 345) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
