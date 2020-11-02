import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Redirect} from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  IconButton,
  CardMedia,
  Slide,
  Dialog
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CancelIcon from '@material-ui/icons/Cancel';

import ProductGallery from './productGallery'

const dataOfPro = {
  titile : "name", 
  description : 'This article is about the food. For the UK band, see Seafood (band). For the Chinese film, see Seafood (film). For just fish, see Fish as food.   A seafood platter composed of shrimp, oyster, snail and crab.   Seafood includes any form of food taken from the sea.   Seafood is any form of sea life regarded as food by humans, prominently including fish and shellfish. Shellfish include various species of molluscs (e.g. bivalve molluscs such as clams, oysters, and mussels and cephalopods such as octopus and squid), crustaceans (e.g. shrimp, crabs, and lobster), and echinoderms (e.g. sea cucumbers and sea urchins). Historically, marine mammals such as cetaceans (whales and dolphins) as well as seals have been eaten as food, though that happens to a lesser extent in modern times. Edible sea plants such as some seaweeds and microalgae are widely eaten as sea vegetables around the world, especially in Asia. In the United States, although not generally in the United Kingdom, the term seafood is extended to fresh water organisms eaten by humans, so all edible aquatic life may be referred to as seafood.[citation needed]    The harvesting of wild seafood is usually known as fishing or hunting, while the cultivation and farming of seafood is known as aquaculture or fish farming (in the case of fish). Seafood is often colloquially distinguished from meat, although it is still animal in nature and is excluded from a vegetarian diet, as decided by groups like the Vegetarian Society after confusion surrounding pescetarianism. Seafood is an important source of (animal) protein in many diets around the world, especially in coastal areas.    Most of the seafood harvest is consumed by humans, but a significant proportion is used as fish food to farm other fish or rear farm animals. Some seafoods (i.e. kelp) are used as food for other plants (a fertilizer). In these ways, seafoods are used to produce further food for human consumption. Also, products such as fish oil and spirulina tablets are extracted from seafoods. Some seafood is fed to aquarium fish, or used to feed domestic pets such as cats. A small proportion is used in medicine, or is used industrially for nonfood purposes (e.g. leather).',
  photo :{
    cover : 'https://i0.wp.com/batamexcursion.com/wp-content/uploads/2018/10/Batam-Seafood.jpeg?resize=800%2C445&ssl=1',
    ss :[
      {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFXUOLLzCzMCBX-utPfFPWB7v7JRbZqQh2kQ&usqp=CAU',
          title: 'ကျောက်ပုစွန်'
      },

      {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhPPkHulopS3ufQogq1IkI3deEZ-XuB5NS0g&usqp=CAU',
          title: 'ပုစွန်တုတ်'
      },
      
      {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL_sBDkA1EpSNWh1lXMm3f0tuZnmdvJUxUmg&usqp=CAU',
          title: 'ကျောက်ပုစွန်'
      },

      {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9enlWaGOCTn5a2OdPfJgU_Tf4ssUaijJ9Ow&usqp=CAU',
          title: 'ပုစွန်တုတ်'
      },
      {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShhbgZLmUvJoJ-s30RJv2FhUx6nl-ITIphKw&usqp=CAU',
          title: 'ကျောက်ပုစွန်'
      },

      {
          img: 'https://www.mcall.com/resizer/6kPF5iL_lVUUT7ZKRwk86ej_ahE=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/CUJHNH7IAREJFHTSQJCCJKYLKI.jpg',
          title: 'ပုစွန်တုတ်'
      }
    ]
  }
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function PopUp(props){
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(()=>{window.history.back()}, 500)
  };


  return(
    <Dialog
      open={open}
      keepMounted
      onClose={handleClose}
      fullScreen
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      TransitionComponent={Transition}
    >
      
      <Container style={{padding:'0'}}>
        <Paper square elevation={3} style={{position:'sticky',top:'0',zIndex:'9399'}}>
          <div style={{display:'flex',alignItems:'center',}}>
            <IconButton color="inherit" variant="contained" color="primary" onClick={handleClose} aria-label="close">
              <ArrowBackIcon />
            </IconButton>
            <Typography color="primary" gutterBottom variant="h5" component="h1" style={{ margin:"10px"}}>
              {dataOfPro.titile}
            </Typography>
          </div>
        </Paper>
        <Detail/>
      </Container>

    </Dialog>
  )
}
function Detail() {
  return (
      <>        
        <CardMedia
          component="img"
          height="350px"
          alt="Contemplative Reptile"
          image={dataOfPro.photo.cover}
          title="Contemplative Reptile"
          style={{
            position:'sticky',
            top:'0'
          }}
        />
        <Paper elevation={3} style={{
          borderRadius:'20px 20px 0px 0px',
          marginTop:'-20px',
          position:'relative',
          zIndex:'9',
          boxShadow:'0px -20px 50px rgba(0,0,0,0.4)'}}>
          <div className="pxy mxy">
            <Typography gutterBottom variant="h5" component="h2">
              {dataOfPro.titile}
            </Typography>
            <p>{dataOfPro.description}</p>
          </div>
          <ProductGallery ss={dataOfPro.photo.ss}/>
        </Paper>
     </>
  );
}
