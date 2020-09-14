import { Button, Menu } from 'antd';
import React, { FC, ReactElement, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HOME, SIGNIN, SIGNUP } from '../../../routes';

const Navigation: FC = (): ReactElement => {
    const [current, setCurrent] = useState(HOME);
    const handleClick = (e: any) => {
        // console.log('click ', e);
        setCurrent(e.key);
    };
    const history = useHistory();
    useEffect(() => {
        history.push(current);
    }, [current, history]);

    return (
        <>
            <Menu
                onClick={handleClick}
                selectedKeys={[current]}
                mode="horizontal"
                className="menu"
            >
                <div className="logo" />
                <Menu.Item key={HOME} className="menu-1">
                    Home
                </Menu.Item>
                <Menu.Item key="2">About</Menu.Item>
                <Menu.Item key="3">How it works</Menu.Item>
                <Menu.Item key="4">My Votes</Menu.Item>
                <Menu.Item key={SIGNIN} className="btnItems">
                    <Button type="primary">Login</Button>
                </Menu.Item>
                <Menu.Item key={SIGNUP} className="btnItems">
                    <Button>Register</Button>
                </Menu.Item>
            </Menu>
        </>
    );
};

export default Navigation;
