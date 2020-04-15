import styled from 'styled-components';

const ComponentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 -10px;
  h4,
  p {
    margin: 0;
  }

  h4 {
    margin-bottom: 7px;
  }

  label {
    position: relative;
    padding: 5px 12px;
    box-sizing: border-box;
    border: 2px solid #f4f2fa;
    border-radius: 10px;
    margin: 0 2px;
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
      background-color: #e7ecb9;
    }

    input {
      visibility: hidden;
      opacity: 0;
      position: absolute;
    }
  }
`;

export default ComponentWrapper;
