import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Switch from "@material-ui/core/Switch";
import Tooltip from "@material-ui/core/Tooltip";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";
import { withLanguageContext } from "../../contexts/LanguageContext";

const contents = {
  english: {
    search: "Search",
    emoji: "♦",
  },
  spanish: {
    search: "Buscar",
    emoji: "♠",
  },
  portuguese: {
    search: "Buscar",
    emoji: "♣",
  },
  french: {
    search: "Chercher",
    emoji: "♥",
  },
};

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode, toggleTheme } = this.context;
    const { classes } = this.props;
    const { language } = this.props.languageContext;
    const { search, emoji } = contents[language];
    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDarkMode ? "secondary" : "primary"}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span role="img" aria-label="emoji">
                {emoji}
              </span>
            </IconButton>
            <Typography className={classes.title} variant="h6">
              Class Based React App
            </Typography>
            <Tooltip title="Switch Theme">
              <Switch onChange={toggleTheme} />
            </Tooltip>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <Tooltip title="Github">
              <IconButton
                color="inherit"
                onClick={() =>
                  window.open("https://github.com/Lukazovic", "_blank")
                }
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton
                color="inherit"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/lucas-vieira-90658619b/",
                    "_blank"
                  )
                }
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withLanguageContext(withStyles(styles)(Navbar));
