import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  padding: 80px 15px;
  height: 80vh;
  display: flex;
  align-items: center;
`;

export const ErrorConatent = styled.div`
  width: 450px;
  max-width: 60%;
  margin: 0 auto;

  .image-wrapper {
     
      margin-left: auto;
      margin-right: auto;

      img {
        max-width: 200px;
        height: auto;
        margin: 0 auto;
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
