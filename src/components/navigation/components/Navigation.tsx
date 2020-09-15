import { Button, Menu } from 'antd';
import React, { FC, ReactElement, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DASHBOARD, HOME, SIGNIN, SIGNUP, VIDEODETAILS } from '../../../routes';

const Navigation: FC = (): ReactElement => {
    const [current, setCurrent] = useState(HOME);
    const {
        push,
        location: { pathname },
    } = useHistory();
    const handleClick = (e: any) => {
        // console.log('click ', e);
        push(e.key);
    };
    useEffect(() => {
        setCurrent(pathname);
    }, [pathname]);

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
                {pathname === VIDEODETAILS && (
                    <Menu.Item key={VIDEODETAILS}>Video Player</Menu.Item>
                )}
                <Menu.Item key={DASHBOARD}>My Videos</Menu.Item>
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
