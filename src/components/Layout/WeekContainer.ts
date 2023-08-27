import { Box } from '@mui/material';
import styled from '@emotion/styled';

export default styled(Box)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding-inline: 8px;
  padding-bottom: 8px;
  overflow: hidden;
  scrollbar-gutter: stable;
  column-gap: 20px;
`;
