import React, { Component, Fragment } from "react";
import { injectGlobal, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import theme from "../themes/theme";
import commonCss from "../themes/commonCss";
import SvgDisplayer from "./SvgDisplayer";

class App extends Component {
  componentWillMount() {
    injectGlobal`${commonCss}`;

    if (process.env.NODE_ENV !== "production") {
      console.log(
        "%c Hello JS Coders! ",
        `background: ${theme.primary}; color: #000`
      );
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <SvgDisplayer />
        </Fragment>
      </ThemeProvider>
    );
  }
}

if (process.env.NODE_ENV !== "production") {
  App.propTypes = {};
}

App.defaultProps = {};

export default App;
