import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

class Router extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Route exact path="/" exact component={Home} />
                <Route exact path="/about" component={About} />
            </BrowserRouter>
        )
    }
}

export default Router;