import { Button, Menu } from 'antd';
import React, {
    FC,
    ReactElement,
    useContext,
    useEffect,
    useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { auth, AuthContext } from '../../../firebase';
import { DASHBOARD, HOME, SIGNIN, SIGNUP, VIDEODETAILS } from '../../../routes';
import logoImage from '../../../assets/logo.png';

const Navigation: FC = (): ReactElement => {
    const { setUser, authenticated } = useContext(AuthContext);
    const [current, setCurrent] = useState(HOME);
    const {
        push,
        location: { pathname },
    } = useHistory();
    const handleClick = (e: any) => {
        // console.log('click ', e);
        if (e.key === 'SIGNOUT') return;
        push(e.key);
    };
    useEffect(() => {
        setCurrent(pathname);
    }, [pathname]);
    const onSignOut = () => {
        localStorage.clear();
        auth.signOut();
        setUser(null);
        //Re-direct landing page
        return push(HOME);
    };

    return (
        <>
            <Menu
                onClick={handleClick}
                selectedKeys={[current]}
                mode="horizontal"
                className="menu"
            >
                {/* <div className="logo" /> */}
                <div className="menu__logo">
                    <img src={logoImage} alt="profile" />
                </div>
                <Menu.Item key={HOME}>Home</Menu.Item>
                {pathname === VIDEODETAILS && (
                    <Menu.Item key={VIDEODETAILS}>Video Player</Menu.Item>
                )}

                <Menu.Item key={DASHBOARD}>My Videos</Menu.Item>
                {!authenticated ? (
                    <>
                        <Menu.Item key={SIGNIN} className="btnItems">
                            <Button type="primary">Login</Button>
                        </Menu.Item>
                        <Menu.Item key={SIGNUP} className="btnItems">
                            <Button>Register</Button>
                        </Menu.Item>
                    </>
                ) : (
                    <Menu.Item
                        onClick={onSignOut}
                        key="SIGNOUT"
                        className="btnItems"
                    >
                        <Button>Log Out</Button>
                    </Menu.Item>
                )}
            </Menu>
        </>
    );
};

export default Navigation;
