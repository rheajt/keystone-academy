import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { GoChevronDown } from 'react-icons/go';
import Image from './Image';

const useStyles = makeStyles({
  hero: {
    color: 'white',
    textShadow: '1px 1px 7px #c71414',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontWeight: '900',
    // boxShadow: '0px 10px 10px 0px #adadad',
  },
  text: {
    fontSize: '16vw',
  },
  chevron: {
    textAlign: 'center',
    filter: 'drop-shadow(1px 1px 7px #c71414)',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: -1,
    overflow: 'hidden',
    objectFit: 'cover',
  },
});

export default function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <div className={classes.image}>
        <Image />
      </div>
      <div className={classes.text}>KEYSTONE</div>
      <div className={classes.text}>ACADEMY</div>

      {/* <div className={classes.chevron}>
        <GoChevronDown size="12vw" />
      </div> */}
    </div>
  );
}
