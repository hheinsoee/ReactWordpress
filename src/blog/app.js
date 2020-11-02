import React from 'react';
import NavBar from './modules/navBar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    useLocation , 
  } from "react-router-dom";

import {Home,Post,Category} from './pages/';



export default function App(){
    return(
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/category/:category" component={Category}/>
                <Route path="/:post_id" component={Post}/>
                <Route path="/" component={Home}/>
                {/* <Route path="/category/:category" render={(props) => (
                    <CategoryPage key={props.match.params.category} {...props} />)
                    } /> */}
            </Switch>
        </Router>
    )
}