import React, {FC} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRouters, publicRouters, RouteNames} from "../routers";
import {useTypedSelector} from "../hooks/useTypedSelector";


const AppRouter: FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        isAuth
            ?
            <Switch>
                {privateRouters.map(route =>
                    <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path}
                    />
                )}
                <Redirect to={RouteNames.WELCOME}/>
            </Switch>
            :
            <Switch>
                {publicRouters.map(route =>
                    <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path}
                    />
                )}
                <Redirect to={RouteNames.LOGIN}/>
            </Switch>
    );
};

export default AppRouter;
