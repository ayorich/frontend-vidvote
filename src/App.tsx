import React, { FC, ReactElement, useContext } from 'react';
import { AuthContext, AuthProvider } from './firebase';
import AuthPage from './pages/auth/Auth.page';
import './App.less';

const App: FC = (): ReactElement => {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <AuthProvider>
            <div className="app">
                <AuthPage />
            </div>
        </AuthProvider>
    );
};

export default App;
