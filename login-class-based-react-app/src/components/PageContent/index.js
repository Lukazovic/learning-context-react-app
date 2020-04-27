import React, { Component } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

class PageContent extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode } = this.context;
    const styles = {
      backgroundColor: isDarkMode ? "rgb(24, 24, 24)" : "rgb(230, 230, 230)",
      height: "100vh",
      width: "100vw",
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}

export default PageContent;
