import styled from 'styled-components';

const Main = styled.main`
  flex: 0 0 75%;
  padding: 30px;
  text-align: center;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 480px) {
    flex: 0 0 100%;
  }

  h1 {
    margin: 0 0 20px 0;
  }

  p {
    margin: 0 0 20px 0;
    line-height: 1.6;
    width: 100%;
    max-width: 400px;

    &:last-child {
      color: rgba(0, 0, 0, 0.54);
      margin-top: 75px;

      span {
        color: #006cb0;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
`;

export default Main;
