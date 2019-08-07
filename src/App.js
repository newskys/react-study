
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import Todo from './pages/Todo';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/todos/:todo" component={Todo} />
                    <Route exact path="/todos" component={TodoList} />
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}