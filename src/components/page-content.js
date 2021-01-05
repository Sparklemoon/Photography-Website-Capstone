import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from "./home.js";
import Gallery from "./gallery.js";
import Contact from "./contact.js";
import Upload from './upload.js';

function PageContent() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/gallery" component={Gallery}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/upload" component={Upload}/>
                
            </Switch>
        </div>
    )
}

export default PageContent;