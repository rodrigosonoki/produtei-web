import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
}

p {
  margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
  border: none;
  text-decoration: none;
  cursor: pointer;
  font: 14px 'Patua One', cursive;
  color: #F26666
}

* {
    box-sizing: border-box;
}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
