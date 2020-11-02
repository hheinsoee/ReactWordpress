import React, {useEffect} from 'react';
import { NavLink,Link,useParams } from 'react-router-dom';
import {Fetcher} from '../../../api'

import {Loading, Error} from '../../../splash'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
export function Menu(){
    const [value, setValue] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue); 
    };
    const query = ''
    return(
        <Fetcher query={"categories?"+query}>
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
                        <AppBar position="static" color="primiry">
                            <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                            >
          
                            {
                                data.map(cat=>
                                    <Tab 
                                    key={cat.id}
                                    value={cat.id}
                                    component={Link} 
                                    to={'/category/'+cat.id} 
                                    label={cat.name} 
                                    {...a11yProps(cat.id)} 
                                    title={cat.count}/>
                                )
                            }
                            </Tabs> 
                        </AppBar>
                    )                    
                }
            }
        }
        </Fetcher>
    )
}
