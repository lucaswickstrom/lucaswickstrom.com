import styled from '@emotion/styled';

import { borderColor } from '.';

export const Container = styled.div<{ line?: boolean }>(({ line }) => [
  {
    width: '100%',
    padding: '0 16px',
    '> *': {
      maxWidth: 600,
      margin: '12px auto',
    },
  },
  line
    ? {
        borderLeft: `1px solid ${borderColor}`,
      }
    : {
        paddingLeft: 17,
      },
]);
