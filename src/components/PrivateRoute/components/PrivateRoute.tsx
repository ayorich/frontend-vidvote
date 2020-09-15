import React, { FC, ReactElement, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../../../firebase';
import { privateRouteProps } from '../types';
import { SIGNIN } from '../../../routes';
import { CustomSpinner } from '../../customSpinner';

const PrivateRoute: FC<privateRouteProps> = ({
    exact,
    path,
    component,
    ...rest
}): ReactElement => {
    const { authenticated, loadingAuthState } = useContext(AuthContext);
    const Component = component;
    if (loadingAuthState) {
        return <CustomSpinner spinnerType="fullpage" />;
    }
    return (
        <Route
            exact={exact}
            path={path}
            {...rest}
            render={() =>
                authenticated === true ? (
                    <Component />
                ) : (
                    <Redirect to={SIGNIN} />
                )
            }
        />
    );
};

export default PrivateRoute;
