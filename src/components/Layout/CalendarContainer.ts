import { Box } from '@mui/material';
import styled from '@emotion/styled';

export default styled(Box)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-radius: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  background-color: #fff;
  height: 500px;
  column-gap: 20px;
  padding: 8px 12px;
  overflow-y: scroll;
`;
