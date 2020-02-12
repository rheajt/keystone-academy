import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery } from 'gatsby';
export default function SiteImage() {
  return (
    <StaticQuery
      query={graphql`
        query {
          calendars: file(relativePath: { eq: "calendars.jpg" }) {
            childImageSharp {
              fixed(width: 375) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <Img fixed={data.calendars.childImageSharp.fixed} objectFit="cover" />
      )}
    />
  );
}
