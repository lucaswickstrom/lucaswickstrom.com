import styled from '@emotion/styled';

import { bigScreen } from '.';

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 1030,
  padding: '48px 16px',
  margin: '0 auto',

  [bigScreen]: {
    padding: 48,
  },
});
