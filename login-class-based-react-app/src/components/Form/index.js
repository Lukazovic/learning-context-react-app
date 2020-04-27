import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { LanguageContext } from "../../contexts/LanguageContext";

const words = {
  english: {
    signIn: "Sign In",
    email: "Email",
    password: "Password",
    remember: "Remember Me",
  },
  spanish: {
    signIn: "Registrarse",
    email: "Correo Electrónico",
    password: "Contraseña",
    remember: "Recuérdame",
  },
  portuguese: {
    signIn: "Cadastre-se",
    email: "Email",
    password: "Senha",
    remember: "Lembrar-me",
  },
  french: {
    signIn: "Se Connecter",
    email: "Adresse Èlectronique",
    password: "Mot de Passe",
    remember: "Souviens-toi de Moi",
  },
};

class From extends Component {
  static contextType = LanguageContext;

  constructor(props) {
    super(props);
    this.state = { showPassword: false };
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    const { classes } = this.props;
    const { showPassword } = this.state;
    const { language, changeLanguage } = this.context;
    const { signIn, email, password, remember } = words[language];
    return (
      <div className={classes.root}>
        <main className={classes.main}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">{signIn}</Typography>
            <Select value={language} onChange={changeLanguage}>
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="spanish">Spanish</MenuItem>
              <MenuItem value="portuguese">Portuguese</MenuItem>
              <MenuItem value="french">French</MenuItem>
            </Select>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">{email}</InputLabel>
                <Input id="email" name="email" autoFocus></Input>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">{password}</InputLabel>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                ></Input>
              </FormControl>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label={remember}
              ></FormControlLabel>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
                className={classes.submit}
              >
                {signIn}
              </Button>
            </form>
          </Paper>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(From);
