import { Global, keyframes } from '@emotion/react';
import React from 'react';
import Helmet from 'react-helmet';

export const bigScreen = '@media (min-width: 768px)';
export const bgColor = '#fffbf3'; // '#d8d8d8'
export const borderColor = '#979797';
const fontColor = '#424242';

// export const bgColor = '#232323';
// export const borderColor = '#424242';
// const fontColor = '#FFF';

export const Layout: React.FC = ({ children }) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;500&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Global
      styles={{
        '*': {
          boxSizing: 'border-box',
        },

        html: {
          fontSize: 12,
          fontWeight: 300,
          backgroundColor: bgColor,

          [bigScreen]: {
            fontSize: 16,
          },
        },

        body: {
          fontFamily: "'Roboto', sans-serif",
          margin: 0,
          color: fontColor,
        },

        'h2, h3': {
          margin: '0 0 4px',
          fontWeight: 500,
        },

        'h2 + span, h3 + span': {
          fontWeight: 100,
        },

        p: {
          fontSize: '1.2rem',
        },

        a: {
          textDecoration: 'none',
          color: 'inherit',
          position: 'relative',
          display: 'inline-block',

          '&:after': {
            content: "''",
            display: 'block',
            position: 'absolute',
            width: '100%',
            height: 2,
            bottom: -2,
            backgroundColor: 'currentcolor',

            transformOrigin: '100% 50%',
            transform: 'scale(0)',
            animation: `${keyframes({
              '0%': { transform: 'scaleX(1)' },
              to: { transform: 'scaleX(0)' },
            })} .3s ease-in-out`,
          },
          '&:hover:after': {
            transformOrigin: '0 50%',
            transform: 'scaleX(1)',
            animation: `${keyframes({
              '0%': { transform: 'scaleX(0)' },
              to: { transform: 'scaleX(1)' },
            })} .3s ease-in-out`,
          },
          // },
        },
      }}
    />
    {children}
  </>
);
