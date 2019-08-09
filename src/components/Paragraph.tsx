import React from 'react'

export const Paragraph = ({
  line = false,
  children
}: {
  line?: boolean
  children: React.ReactNode
}) => (
  <div
    css={{
      width: '100%',
      padding: '0 16px',
      ...(line && {
        borderLeft: '1px solid #979797'
      })
    }}
  >
    <p
      css={{
        maxWidth: 600,
        margin: '0 auto',
        fontSize: '1.2rem',
        color: '#424242'
      }}
    >
      {children}
    </p>
  </div>
)
