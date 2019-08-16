import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import Todo from './pages/Todo';
import PostList from './pages/PostList';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/todos/:todo" component={Todo} />
                    <Route exact path="/todos" component={TodoList} />
                    <Route exact path="/posts" component={PostList} />
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}