import React, { FC, ReactElement, useContext } from 'react';
import { AuthContext, AuthProvider } from './firebase';
import AuthPage from './pages/auth/Auth.page';
import LandingPage from './pages/landing/Landing.page';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AUTH, HOME } from './routes';

import './App.less';
const App: FC = (): ReactElement => {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <AuthProvider>
            <Router>
                <Route exact path={HOME} component={LandingPage} />
                <Route exact path={AUTH} component={AuthPage} />
            </Router>
        </AuthProvider>
    );
};

export default App;
