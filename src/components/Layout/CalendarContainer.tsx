import { Box } from '@mui/material';
import styled from '@emotion/styled';

export default styled(Box)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  background-color: #fff;
  max-height: 500px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
