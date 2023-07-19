import styled from 'styled-components';

export const StyledIllustrationBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 750px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .styledBox {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid #e0e0e0;
    @media (max-width: 750px) {
      margin-top: 20px;
    }
  }

  #illustrations {
    margin: 0 auto;
    @media (max-width: 750px) {
      display: none;
    }
  }
`;
