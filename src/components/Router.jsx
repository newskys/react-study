import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Counter from './Counter';
import Counter2 from './Counter2';


const RootRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={Counter} />
            <Route exact path={'/Counter2'} component={Counter2} />

        </Switch>
    )
}
export default RootRouter;