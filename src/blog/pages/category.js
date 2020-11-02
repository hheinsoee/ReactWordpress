import React from 'react';
import {Posts} from './../template/post/';
import {
    useParams
  } from "react-router-dom";

export function CategoryPage(){
    const { category } = useParams();
    return(
        <>
        <div className="Colums">
            <div className="sticky" style={{width:"400px"}}>
                <div>
                    <h2>Latest</h2>
                    <Posts 
                        query = {{
                            'orderby':'date',
                            'per_page': 6,
                            '_fields':'author,id,excerpt,title,link,date,_links'
                        }}
                        style_type='list'
                    />
                </div>
            </div>
            <hr/>
            <div className="content">
                <Posts 
                    query = {{
                        'categories':category,
                        'orderby':'date',
                        'per_page': 9,
                        '_fields':'author,id,excerpt,title,link,date,_links'
                    }}
                    style_type='grid'
                />
            </div>
        </div>
        </>
    )
}
