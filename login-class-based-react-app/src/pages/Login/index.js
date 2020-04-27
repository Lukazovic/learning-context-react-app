import React, { Component } from "react";
import PageContent from "../../components/PageContent";
import Navbar from "../../components/Navbar";
import Form from "../../components/Form";
import { ThemeProvider } from "../../contexts/ThemeContext";
import { LanguageProvider } from "../../contexts/LanguageContext";

class Login extends Component {
  render() {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <PageContent>
            <Navbar />
            <Form />
          </PageContent>
        </LanguageProvider>
      </ThemeProvider>
    );
  }
}

export default Login;
