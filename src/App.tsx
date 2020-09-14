import React, { FC, ReactElement } from 'react';
import { Button } from 'antd';
import './App.less';

const App: FC = (): ReactElement => {
    console.log('error');
    return (
        <div className="app">
            <h1>Hello, welcome to VidVote application</h1>
            <Button type="primary">click me</Button>
        </div>
    );
};

export default App;
