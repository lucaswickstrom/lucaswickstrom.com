import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'

import { Company } from '../components/Company'
import { Paragraph } from '../components/Paragraph'

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
        * {
          box-sizing: border-box;
        }

        html {
          font-size: 12px;
          font-weight: 300;
          background-color: #d8d8d8;

          @media (min-width: 768px) {
            font-size: 16px;
          }
        }

        body {
          font-family: 'Open Sans', sans-serif;
        }

        h2 {
          margin: 0 0 2px;
          font-weight: 500;
        }
      `}
    />
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 1030,
        padding: '0 16px',
        margin: '0 auto',

        '@media (min-width: 768px)': {
          padding: '0 48px'
        }
      }}
    >
      {/* <div
        css={{
          position: 'absolute',
          top: 150 / 2 + 40,
          left: '16px',
          right: '50%',
          height: 1,
          backgroundColor: '#979797'
        }}
      /> */}

      {/* <div
        css={{
          position: 'absolute',
          top: 150 / 2 + 40,
          left: '16px',
          bottom: 0,
          width: 1,
          backgroundColor: '#979797'
        }}
      /> */}

      <div
        css={{
          position: 'relative',
          backgroundColor: '#FFF',
          border: '1px solid #979797',
          width: 150,
          height: 150,
          borderRadius: '50%',
          marginTop: 96,
          marginBottom: -150 / 2
        }}
      />
      <div
        css={{
          width: '50%',
          borderTop: '1px solid #979797',
          borderLeft: '1px solid #979797',
          height: 75 + 44,
          alignSelf: 'flex-start'
        }}
      />

      <div
        css={{
          width: '100%',
          padding: 16,
          borderLeft: '1px solid #979797'
        }}
      >
        <p
          css={{
            maxWidth: 600,
            margin: '0 auto',
            fontSize: '1.5rem',
            color: '#424242'
          }}
        >
          Far far away, behind the word mountains, far from the countries Vokalia and Cons
        </p>
      </div>

      <div
        css={{
          width: '100%',
          padding: 16,
          borderLeft: '1px solid #979797'
        }}
      >
        <div
          css={{
            backgroundColor: '#FFF',
            border: '1px solid #979797',
            width: 92,
            height: 92,
            borderRadius: '50%',
            marginLeft: -16 - 92 / 2,
            marginBottom: -96
          }}
        />
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxWidth: 600 + 48 * 2,
            minHeight: 96,
            color: '#424242',
            margin: '0 auto',
            padding: '0 48px'
          }}
        >
          <h2>h2 subheadline</h2>
          <span>jun 2018–nu • 1 år 3 månader</span>
        </div>
      </div>
      <Company>
        <>
          <h2>h2 subheadline</h2>
          <span>jun 2018–nu • 1 år 3 månader</span>
        </>
      </Company>
      <Paragraph>
        Far far away, behind the word mountains, far from the countries Vokalia and Cons
      </Paragraph>
    </div>
  </>
)

export default LayoutIndexPage
