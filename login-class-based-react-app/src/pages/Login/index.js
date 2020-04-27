import React, { Component } from "react";
import PageContent from "../../components/PageContent";
import Navbar from "../../components/Navbar";
import Form from "../../components/Form";
import { ThemeProvider } from "../../contexts/ThemeContext";

class Login extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeProvider>
    );
  }
}

export default Login;
