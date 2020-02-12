/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-montserrat';
import { CssBaseline } from '@material-ui/core';

const Layout = ({ children }) => {
  return (
    <div>
      <CssBaseline />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
