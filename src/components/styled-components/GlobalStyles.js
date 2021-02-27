import { createGlobalStyle } from 'styled-components';

import OpenSansRegular from '../../assets/fonts/open-sans/open-sans-regular.ttf';
import OpenSansSemiBold from '../../assets/fonts/open-sans/open-sans-semi-bold.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansRegular}) format("truetype");
    font-weight: 400;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansSemiBold}) format("truetype");
    font-weight: 600;
  }

  body {
    margin: 0;
    font-size: 18px;
    font-family: 'Open Sans';

    .loading {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      
      .MuiCircularProgress-colorPrimary {
        color: #fd9707;
      }
    }
  }
`;

export default GlobalStyles;
