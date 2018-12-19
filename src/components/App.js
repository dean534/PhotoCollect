import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import Entry from './Entry';
import Collector from './Collector';

class App extends React.Component{
    
    
    render(){
        return (
            <BrowserRouter>
                <>
                <Route path="/Collector" exact component={Entry}/>
                <Route path="/Collector/pictures" component={Collector}/>
                </>
            </BrowserRouter>
        )
    }
}



export default App;