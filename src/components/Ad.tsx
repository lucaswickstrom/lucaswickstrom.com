import React from 'react';

import { bigScreen, borderColor } from './Layout';

export const Ad: React.FC = (props) => (
  <div>
    <div
      css={{
        border: `1px dashed ${borderColor}`,
        marginTop: 48,
        marginLeft: -8,
        marginRight: -8,
        paddingLeft: 7,
        paddingRight: 7,
        paddingTop: '1em',

        [bigScreen]: {
          marginLeft: -16,
          marginRight: -16,
          paddingLeft: 15,
          paddingRight: 15,
        },
      }}
      {...props}
    />
  </div>
);
