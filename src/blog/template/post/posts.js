import React, {useEffect} from 'react';
import {Fetcher} from '../../../api'

import {Loading, Error} from '../../../splash'
import {ThumbCard,ThumbFeature,ThumbList} from './thumbnail'

export const PostsByFilter = props => {
    var qry = props.query
    var myArrayQry = Object.keys(qry).map((key)=>{
        return `${key}=${qry[key]}`;
      }).join('&');
    return(
        <Fetcher query={"posts?"+myArrayQry}>
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
                    return(
                    props.style_type?(
                        <Type data={data} style_type={props.style_type}/>
                    ):(
                    <Type data={data} style_type=''/>
                    ))
                }
            }
        }
        </Fetcher>
    )
}
 
function Type(props){
    const style_type = props.style_type;
    const data = props.data;
    switch (style_type) {
        case 'grid':
            return(
            <div className="grid m_">
            {
                data.map(post=>
                    <ThumbCard key={post.id} {...post}/>
                )
            }
            </div>
            )
            break;
    
        case 'feature':
            return(
                <div className="flex wrap">
                    <div className="f2 flex">
                        <div><ThumbFeature {...data[0]}/></div>
                        <div><ThumbFeature {...data[1]}/></div>
                    </div>
                    <div className="f1 _mxy">
                        <div><ThumbCard {...data[2]}/></div>
                        <div><ThumbCard {...data[3]}/></div>
                    </div>
                    <div className="f1 _mxy">
                        {
                            data.slice(4,10).map(d =>
                                <ThumbList {...d}/>
                            )
                        }
                    </div>
                </div>
            )
            break;
        default://list
            return(
                <div className="_mxy">
                {
                    data.map(post=>
                        <ThumbList key={post.id} {...post}/>
                    )
                }
                </div>
                )
            break;
    }     
}