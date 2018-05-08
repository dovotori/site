// import { css } from 'styled-components';
import theme from "./theme";

const commonCss = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#dovotori-app {
  width: 100%;
  height: 100%;
}

body {
  font-size: 16px;
  background: url("./assets/img/stripes.svg") #fff repeat;
  background-attachment: fixed;
}

button {
  background: transparent;
  border: 0;
  cursor: pointer;
}

a:focus,
button:focus {
  text-decoration: none;
}

body {
  font-family: ${theme.font1};
  ${theme.scrollbar}
}

// @font-face {
//   font-family: 'White Rabbit';
//   src: url('./assets/fonts/whitrabt.eot');
//   src: url('./assets/fonts/whitrabt.eot?#iefix') format('embedded-opentype'),
//        url('./assets/fonts/whitrabt.woff') format('woff'),
//        url('./assets/fonts/whitrabt.ttf')  format('truetype'),
//        url('./assets/fonts/whitrabt.svg#svgFontName') format('svg');
// }
`;

export default commonCss;
