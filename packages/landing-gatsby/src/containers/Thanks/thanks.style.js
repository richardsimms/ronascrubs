import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  padding: 80px 15px;
  height: 60vh;
  display: flex;
  align-items: center;
`;

export const ErrorConatent = styled.div`
  width: 450px;
  max-width: 50%;
  margin: 0 auto;

  .image-wrapper {
    max-width: 20%;

    margin-left: auto;
    margin-right: auto;

    img {
      width: 100px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  font-family: 'roboto';
  text-align: center;
  > * {
    margin: 0 8px;
  }
`;
