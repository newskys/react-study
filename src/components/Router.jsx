import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Counter from './Counter';

const RootRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={Counter} />
        </Switch>
    )
}

export default RootRouter;