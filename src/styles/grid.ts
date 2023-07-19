import styled from 'styled-components';

interface IStyledContainerProps {
  containerWidth?: number;
}

export const StyledContainer = styled.div<IStyledContainerProps>`
  width: 100%;
  max-width: ${({ containerWidth }) =>
    // eslint-disable-next-line no-unneeded-ternary
    containerWidth ? containerWidth : 1000}px;
  margin: 0 auto;
  padding: 10px;

  figure {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  #small-logo {
    width: 200px;
    height: 30px;
    @media (max-width: 750px) {
      margin: 0 auto;
    }
  }
`;

export const StyledGridBox = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.gray0};
  border-radius: 5px;
`;
