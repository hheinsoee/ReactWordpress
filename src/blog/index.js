import React, {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { purple,red,green } from "@material-ui/core/colors";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";

import App from './app';

import {
  IconButton,
  Container,
  Paper, Typography, Chip } from "@material-ui/core";

const light = createMuiTheme({
  palette: {
    primary: {
      main: red[800],
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    background: {
      default: "#efefef"
    },
    type:'light'
  }
  
});

const dark = createMuiTheme({
  palette: {
    primary: {
      main: red[200],
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    background: {
      default: "#292929"
    },
    text: {
      primary: "#bbbbbb"
    },
    type:'dark'
  }
});

export default function Blog() {
  const [theme, setTheme] = useState(true)

  const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />
  const appliedTheme = createMuiTheme(theme ? light : dark);

    return (
      <MuiThemeProvider theme={appliedTheme}>
        <IconButton
            style={{
              position:'fixed',
              top:'40vh',
              right:'10px',
              zIndex:'9999'
            }}
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={() => setTheme(!theme)}
          >
            {icon}
          </IconButton>
        <CssBaseline />
        <App/>
      </MuiThemeProvider>
    );
};

