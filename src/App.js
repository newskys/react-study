import React from 'react';
import { Route } from 'react-router-dom';
import { Home, About } from './pages';

class App extends React.Component {
   
    render() {
        return (
            <div>
                <Route exact path="/" exact component={Home} />
                <Route exact path="/about" component={About} />
            </div>
        )
    }
}

export default App;