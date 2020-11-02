import React from 'react';
import { NavLink,Link,useParams } from 'react-router-dom';
import {Posts} from './../template/post'

export function HomePage(){
    return(
        <>
        <div>
            <Posts 
                query = {{
                    'orderby':'date',
                    '_fields':'author,id,excerpt,title,link,date,_links'
                }}
                style_type='feature'
            />
        </div>
        <hr/>
        <div className="Colums">
            <div className="sticky" style={{width:"400px"}}>
                <div>
                    <Posts 
                        query = {{
                            'orderby':'date',
                            'per_page': 6,
                            'offset':10,
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
                        'orderby':'date',
                        'per_page': 9,
                        'offset':16,
                        '_fields':'author,id,excerpt,title,link,date,_links'
                    }}
                    style_type='grid'
                />
            </div>
        </div>
        </>
    )
}
