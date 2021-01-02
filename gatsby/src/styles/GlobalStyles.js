import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --maroon: #42215e;
    --snow: #fbfbfb;
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --blue: #5944e4;
  }
  html {
    font-size: 10px;
  }

  body {
    font-size: 1.5rem;
    line-height: 1.25;
    color: var(--black);
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: none;
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
  }

  button:focus {outline:0;}
  input:focus {outline:0;}
  textarea:focus {outline:0;}
  select:focus {outline:0;}

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  img {
    max-width: 100%;
  }

`;

export default GlobalStyles;