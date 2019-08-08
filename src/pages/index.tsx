import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/core';

export const IndexPage = () => (
  <>
    <h2>Hi people</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      <Link to="/another-page/">Go to another page</Link>
    </p>
    <p>
      <Link to="/all/">See content generated from Markdown files</Link>
    </p>
  </>
)

const LayoutIndexPage = () => (
  <>
    <Helmet
      // titleTemplate={`%s - ${data.site.siteMetadata.title}`}
      // defaultTitle={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'Demo site for a Gatsby Starter in TypeScript'
        },
        {
          name: 'keywords',
          content: 'gatsby, gatsbyjs, sample, demo, typescript'
        }
      ]}
    />
    <Global
      styles={css`
        body {
          font-family: 'Open Sans', sans-serif;
          font-size: 12px;
          background-color: #D8D8D8;

          
        }

        @media (min-width: 768px) {
          body {
            font-size: 16px;
          }
        }
      `}
    />
    <div>
      <div css={{
        position: 'absolute',
        top: 150 / 2 + 40,
        left: '10%',
        right: '50%',
        height: 1,
        backgroundColor: '#979797'
      }} />
      <div css={{
        position: 'absolute',
        top: 150 / 2 + 40,
        left: '10%',
        bottom: 0,
        width: 1,
        backgroundColor: '#979797'
      }} />
      <div css={{
        position: 'relative',
        backgroundColor: '#FFF',
        border: '1px solid #979797',
        width: 150,
        height: 150,
        borderRadius: '50%',
        margin: '40px auto'
      }} />
      <p css={{
        maxWidth: 600,
        margin: '0 auto',
        padding: '0 16px',
        fontSize: '1.5rem',
        color: '#424242'
      }}>Far far away, behind the word mountains, far from the countries Vokalia and Cons</p>
    </div>
  </>
)

export default LayoutIndexPage
