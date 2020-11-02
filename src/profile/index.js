import React, {useState} from "react";
import Nav from './conponent/scrollnav';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { purple,red,green } from "@material-ui/core/colors";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import bg from './media/logo_gray.png';
import {
  IconButton,
  Container,
  Paper, Typography, Chip } from "@material-ui/core";
import logo from './media/htoo_logo.svg'

const light = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    background: {
      default: "#fafafa"
    },
    type:'light'
  }
});

const dark = createMuiTheme({
  palette: {
    primary: {
      main: green[300],
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

export default function App() {
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
        <Head/>
        
        <Nav/>
      </MuiThemeProvider>
    );
};



const useStyles = makeStyles((theme) => ({
  root: {
      width: '100%',
      '& img':{
        height:'60px',
        maxWidth:'90vw',
      }
  },
}));
function Head(){
  const classes = useStyles();
  return(
    <Paper square style={{
      padding:'10px 0px',
      backgroundImage:"url("+bg+")",
      backgroundSize:'300px',
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat',
      backgroundAttachment:'fixed'
    }} >
    <Container className={classes.root}>
      <div style={{
        display:'flex',
        alignItems: 'flex-end'
      }}>
        <img src={logo}/>
        <Typography variant="b" component="b">&nbsp;SEAFOOD & COMMODITY
        </Typography>
      </div>
    </Container>
    </Paper>
  )
}
