import React from 'react';
import Post,{ Posts } from './';
import {Fetcher} from '../../../api';
import {Loading, Error} from '../../../splash';


export const RecomendPosts=(prop)=>{
    const _fields = '?_fields=categories,tags'
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
                else{
                    return <Posts
                        query = {{
                            'categories':data.categories,
                            'orderby':'date',
                            'per_page': 6,
                            '_fields':'author,id,excerpt,title,link,date,_links'
                        }}
                        style_type='list'
                    />
                }
            }
        }
        </Fetcher>
    )
}