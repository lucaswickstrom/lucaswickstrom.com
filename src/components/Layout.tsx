import { Global, keyframes } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';

export const bigScreen = '@media (min-width: 768px)';
export const bgColor = '#f8f8f1'; //'#fffbf3';
export const borderColor = '#979797';
const fontColor = '#424242';

export const Layout: React.FC = ({ children }) => {
  const [hasLoaded, setLoaded] = useState(false);
  useEffect(() => {
    window.addEventListener('load', () => {
      setLoaded(true);
    });
  }, []);

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600&display=swap"
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

          'h1, h2, h3': {
            margin: '0 0 4px',
            fontWeight: 600,
          },

          'h2 + span, h3 + span': {
            fontWeight: 300,
          },

          p: {
            fontSize: '1.2rem',
          },

          a: {
            textDecoration: 'none',
            color: 'inherit',
            position: 'relative',
            display: 'inline-block',
            outline: 'none',

            '&:after': {
              content: "''",
              display: 'block',
              position: 'absolute',
              width: '100%',
              height: 2,
              bottom: -2,
              backgroundColor: 'currentcolor',
              visibility: 'hidden',

              transformOrigin: '100% 50%',
              transform: 'scale(0)',
              animation: `${keyframes({
                '0%': { transform: 'scaleX(1)' },
                to: { transform: 'scaleX(0)' },
              })} 300ms ease-in-out`,
            },
            '&:hover:after, &:focus:after': {
              transformOrigin: '0 50%',
              transform: 'scaleX(1)',
              animation: `${keyframes({
                '0%': { transform: 'scaleX(0)' },
                to: { transform: 'scaleX(1)' },
              })} 300ms ease-in-out`,
            },
          },

          hr: {
            width: '100%',
            maxWidth: 600,
            height: 1,
            margin: '64px auto 32px',
            backgroundColor: borderColor,
          },
        }}
      />
      {hasLoaded && (
        <Global
          styles={{
            a: {
              '&:after': {
                visibility: 'initial',
                // animation: `${keyframes({
                //   '0%': { transform: 'scaleX(1)' },
                //   to: { transform: 'scaleX(0)' },
                // })} 300ms ease-in-out`,
              },
              // '&:hover:after, &:focus:after': {
              //   animation: `${keyframes({
              //     '0%': { transform: 'scaleX(0)' },
              //     to: { transform: 'scaleX(1)' },
              //   })} 300ms ease-in-out`,
              // },
            },
          }}
        />
      )}
      {children}
    </>
  );
};
