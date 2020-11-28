import React from 'react';

import { borderColor } from './Layout';

export const Company: React.FC<{
  icon?: string;
}> = ({ icon, children }) => (
  <div
    css={{
      width: '100%',
      padding: '48px 16px 0',
      borderLeft: `1px solid ${borderColor}`,
    }}
  >
    {icon ? (
      <img
        src={icon}
        css={{
          display: 'block',
          backgroundColor: '#FFF',
          width: 92,
          height: 92,
          borderRadius: '50%',
          marginLeft: -16 - 92 / 2,
          marginBottom: -96,
        }}
      />
    ) : (
      <div
        css={{
          display: 'block',
          backgroundColor: '#FFF',
          width: 92,
          height: 92,
          borderRadius: '50%',
          marginLeft: -16 - 92 / 2,
          marginBottom: -96,
          border: `1px solid ${borderColor}`,
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
