import React from 'react';

import { bgColor, borderColor } from './Layout';

const border = `1px solid ${borderColor}`;

export const ExperienceWrapper: React.FC<{
  line?: boolean;
  imgProps?: { src: string; alt: string };
}> = ({ line, imgProps, children }) => (
  <div
    css={{
      width: '100%',
      padding: '48px 16px 0',
      borderLeft: `1px solid ${line ? borderColor : 'transparent'}`,
    }}
  >
    {imgProps ? (
      <img
        {...imgProps}
        css={{
          display: 'block',
          backgroundColor: bgColor,
          width: 92,
          height: 92,
          borderRadius: '50%',
          marginLeft: -16 - 92 / 2,
          marginBottom: -96,
          padding: 2,
          border,
        }}
      />
    ) : (
      <div
        css={{
          display: 'block',
          backgroundColor: bgColor,
          width: 92,
          height: 92,
          borderRadius: '50%',
          marginLeft: -16 - 92 / 2,
          marginBottom: -96,
          border,
        }}
      />
    )}
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 600 + 48 * 2,
        minHeight: 96,
        margin: '0 auto',
        padding: '0 48px',
      }}
    >
      {children}
    </div>
  </div>
);
