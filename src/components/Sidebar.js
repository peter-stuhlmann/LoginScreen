import styled from 'styled-components';

const Sidebar = styled.aside`
  flex: 0 0 25%;
  background-color: #fd9707;

  @media (max-width: 480px) {
    flex: 0 0 0;
  }
`;

export default Sidebar;
