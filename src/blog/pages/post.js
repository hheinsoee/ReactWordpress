import React from 'react';
import { NavLink,Link,useParams } from 'react-router-dom';
import Post,{ Posts } from './../template/post/';
import {Fetcher} from '../../api';
import {Loading, Error} from '../../splash';
import {RecomendPosts} from './../template/post/recomentPost'

// const cats = data.categories
// const cat = cats.map(c=>{
//                 return {c}
//             }).join(',');
export const PostPage= () =>{
    const { post_id } = useParams();
    
    return(
        <>
        <div className="Colums">
            <div className="sticky" style={{width:"400px"}}>
                <div>
                    <RecomendPosts post_id={post_id}/>
                </div>
            </div>
            <div className="content">
                <Post post_id={post_id}/>
            </div>
        </div>
        </>
    )
}