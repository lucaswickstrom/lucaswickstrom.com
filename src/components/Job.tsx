import React from 'react';

import { bigScreen, borderColor } from './Layout';

const border = `1px solid ${borderColor}`;

export const Job: React.FC<{
  line?: boolean;
  icon?: string;
}> = ({ line = false, icon, children }) => (
  <div
    css={[
      {
        width: '100%',
        padding: '48px 16px 0',
        '&::before': {
          content: `''`,
          display: 'block',
          width: 16 + 32,
          [bigScreen]: {
            width: 16 + 32 + 64 / 2,
          },
          height: 64 / 2 + 48,
          marginTop: -48,
          marginBottom: (icon ? -64 : -12) / 2,
          marginLeft: -16,
          borderLeft: border,
          borderBottom: border,
        },
      },
      line && {
        borderLeft: border,
        '&::before': {
          marginLeft: -17,
        },
      },
    ]}
  >
    {icon ? (
      <img
        src={icon}
        css={{
          display: 'block',
          width: 64,
          height: 64,
          borderRadius: '50%',
          [bigScreen]: {
            marginLeft: 32,
          },
          marginBottom: -64,
        }}
      />
    ) : (
      <div
        css={{
          display: 'block',
          backgroundColor: borderColor,
          width: 12,
          height: 12,
          borderRadius: '50%',
          marginLeft: 32 - 12 / 2,
          [bigScreen]: {
            marginLeft: 64 - 12 / 2,
          },
          marginBottom: -36,
        }}
      />
    )}
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 600 + 112 * 2,
        minHeight: 64,
        margin: '0 auto',
        paddingLeft: 64 + 16,

        [bigScreen]: {
          paddingLeft: 112,
          paddingRight: 112,
        },
      }}
    >
      {children}
    </div>
  </div>
);
