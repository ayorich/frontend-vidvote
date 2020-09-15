import React, { FC, ReactElement } from 'react';
import { AuthProvider } from './firebase';
import AuthPage from './pages/auth/Auth.page';
import LandingPage from './pages/landing/Landing.page';
import VideoDetailsPage from './pages/videoDetails/VideoDetails.page';
import MyVideos from './pages/myVideos/MyVideos.page';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { DASHBOARD, HOME, SIGNIN, SIGNUP, VIDEODETAILS } from './routes';

import './App.less';
const App: FC = (): ReactElement => {
    return (
        <AuthProvider>
            <Router>
                <Route exact path={VIDEODETAILS} component={VideoDetailsPage} />
                <Route exact path={DASHBOARD} component={MyVideos} />

                <Route exact path={HOME} component={LandingPage} />
                <Route exact path={SIGNIN} component={AuthPage} />
                <Route exact path={SIGNUP} component={AuthPage} />
            </Router>
        </AuthProvider>
    );
};

export default App;
