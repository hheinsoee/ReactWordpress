import React from 'react';
import Media from '../media';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink,Link,useParams } from 'react-router-dom';
import { Avatar, Box, Chip, Paper } from '@material-ui/core';
import {Time} from './../../modules/date';

export const ThumbFeature=(prop)=>{
    const isMedia = prop._links.hasOwnProperty('wp:featuredmedia');
    const style = {
        photo:{
            objectFit:'cover',
            width:'100%',
            height:'400px',
        },
        defaultPhoto:{
            width:'100%',
            height:'100%',
            backgroundImage:'url(https://heinsoe.com/static/media/heinsoe.0f51f6a7.svg)',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center'
        }
    }
    return(
        <Paper elevation={0} style={{height:'100%',display:'block'}}>
            <CardActionArea component='div' style={{height:'100%',display:'block'}} to={'/'+prop.id} component={Link}>
            <div className="" style={{height:'100%'}}>
                <div style={{position:'absolute',padding:'5px'}}>
                    <Time time={prop.date} ago/>
                </div>
                {isMedia ? (
                    <Media 
                    json_link={prop._links["wp:featuredmedia"][0].href} 
                    size='full'//medium
                    style = {style.photo}
                    />
                    ):(
                        <></>
                    )
                }
                <div className="pxy f1">  
                    <Typography component="h1" variant="h6">
                        <div dangerouslySetInnerHTML={{__html : prop.title.rendered}}/>
                    </Typography>
                    <hr/>
                    <div className='flex_be'>
                        <Time time={prop.date}  />
                        <Chip 
                        avatar={<Avatar src="http://graph.facebook.com/1065718597119016/picture?type=square" />} 
                        label="hein soe"
                        size="small"
                        />
                    </div>
                </div>
            </div>
            </CardActionArea>
        </Paper>
    )
}


export const ThumbList=(prop)=>{
    const isMedia = prop._links.hasOwnProperty('wp:featuredmedia');
    const photo_style = {
        objectFit:'cover',
        height:'inhernet',
        maxWidth:'120px'
    }
    const style = {
        display:'flex',
        maxHeight:'100px'
    }
    return(
        <Card elevation={0} >
            <CardActionArea to={'/'+prop.id} component={Link} style={{height:'100%',display:'block'}}>
                <div style={style}>
                    <div style={{position:'absolute',padding:'5px'}}>
                        <Time time={prop.date} ago/>
                    </div>
                    {isMedia ? (<Media 
                        json_link={prop._links["wp:featuredmedia"][0].href} 
                        size='thumbnail'
                        style = {photo_style}
                        />
                        ):(
                            <></>
                        )
                    }
                    <CardContent>   
                        <b dangerouslySetInnerHTML={{__html : prop.title.rendered.substring(0, 50)}} /><br/>
                        <Time time={prop.date}  />  
                    </CardContent>
                </div>
            </CardActionArea>
        </Card >
    )
}

export const ThumbCard=(prop)=>{
    const isMedia = prop._links.hasOwnProperty('wp:featuredmedia');
    const style={
        link:{
            height:'100%',
            display:'block',
            borderRadius:'10px'
        },
        photo_style:{
            objectFit:'cover',
            maxHeight:'180px',
            width:'100%',
            borderRadius:'10px'
        }
    }
    return(
        <Box to={'/'+prop.id} component={Link}>
            <CardActionArea component='div' style={style.link}>
                <div style={{position:'absolute',padding:'5px'}}>
                    <Time time={prop.date} ago/>
                </div>
                {isMedia ? (<Media 
                    json_link={prop._links["wp:featuredmedia"][0].href} 
                    size='medium'
                    style = {style.photo_style}
                    />
                    ):(
                        <></>
                    )
                }
                <CardContent>                
                    <div dangerouslySetInnerHTML={{__html : prop.title.rendered.substring(0, 150)}} />
                    <br/>
                    <Chip 
                    avatar={<Avatar src="http://graph.facebook.com/1065718597119016/picture?type=square" />} 
                    label="hein soe"
                    size="small"
                    />
                </CardContent>
            </CardActionArea>
        </Box>
    )
}
