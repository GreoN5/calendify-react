import { Box } from '@mui/material';
import styled from '@emotion/styled';

export default styled(Box)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 20px;
  height: 90%;
  padding-inline: 8px;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;
