import React from 'react'

export const Company = ({ children }: { children: React.ReactNode }) => (
  <div
    css={{
      width: '100%',
      padding: '0 16px',
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
      {children}
    </div>
  </div>
)
