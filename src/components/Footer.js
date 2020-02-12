import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { FaHeart } from 'react-icons/fa';

const useStyles = makeStyles({
  footer: {
    backgroundImage: 'radial-gradient(#8b8b8bf0, #696969d3)',
    color: 'white',
    textShadow: '1px 1px 7px #c71414',
    fontFamily: 'Montserrat',
    fontWeight: '900',
    fontStyle: 'bold',
    boxShadow: '0px 10px 10px 0px #adadad',
    padding: '1rem',
    textAlign: 'right',
  },
  link: {
    color: 'white',
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      built with <FaHeart color="red" /> by{' '}
      <a className={classes.link} href="https://jordanrhea.com">
        jordan rhea
      </a>
    </footer>
  );
}
