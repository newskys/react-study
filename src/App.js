import React from 'react';
import TodoList from './components/TodoList';
import Counter from './components/Counter';

export default class App extends React.Component {
    render() {
        return (
            <>
                {/* <TodoList /> */}
                <Counter />
            </>
        )
    }
}