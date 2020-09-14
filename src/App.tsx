import React, { FC, ReactElement, useContext } from 'react';
import { Button } from 'antd';
import './App.less';
import { AuthContext, AuthProvider } from './firebase';

const App: FC = (): ReactElement => {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <AuthProvider>
            <div className="app">
                <h1>Hello, welcome to VidVote application</h1>
                <Button type="primary">click me</Button>
            </div>
        </AuthProvider>
    );
};

export default App;
