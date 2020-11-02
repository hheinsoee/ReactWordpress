import React from 'react';
import { NavLink,Link,useParams } from 'react-router-dom';
import {Fetcher} from '../../../api';
import {Loading, Error} from '../../../splash';
import Media from '../media';
import './post.scss';
import { Avatar, Chip } from '@material-ui/core';
import {PostsByFilter} from './posts';
import { Time } from '../../modules/date';

export const Posts = (props) =><PostsByFilter {...props}/>

export default function Post (prop){
    const fields =[
        'id',
        'author',
        'excerpt',
        'content',
        'title',
        'link',
        'date',
        '_links'
    ];
    const _fields = '?_fields='+fields.join(',')
    const query = 'posts/'+prop.post_id+_fields;
    return(
        <Fetcher query={query}>
        {
            ({ data, isLoading, error }) => {
                if (error) {
                return <center><Error {...error}/></center>;
                }
            
                if (isLoading||!data) {
                    return <center><Loading/></center>;
                }
                else if(data.error){
                    return<div>Error</div>
                }
                else{
                    {window.scrollTo({top: 0,behavior: 'smooth'})}
                    return <PostBody data={data}/>
                }
            }
        }
        </Fetcher>
    )
}

const PostBody = (props)=>{
    const d = props.data
    function createMarkup(thehtml) {
        return {__html: thehtml};
    }
    const isMedia = d._links.hasOwnProperty('wp:featuredmedia');
    const style = {
        media:{
            width:'100%'
        }
    }
    return(
        <div className="postBody" >
            <h2><div dangerouslySetInnerHTML={createMarkup(d.title.rendered)}/></h2>
            <Time time={d.date} ago />&nbsp;
            <Time time={d.date}  />
            <br/>
            <br/>
            {isMedia ? (<Media 
                json_link={d._links["wp:featuredmedia"][0].href} 
                size='full'
                style = {style.media}
                caption
                />
                ):(
                    <></>
                )
            }
            <div dangerouslySetInnerHTML={createMarkup(d.content.rendered)} />
            <Chip 
            variant="outlined" 
            avatar={<Avatar src="http://graph.facebook.com/1065718597119016/picture?type=square" />} 
            label="hein soe"
            // onClick={handleClick}
            />
        </div>
    )
}