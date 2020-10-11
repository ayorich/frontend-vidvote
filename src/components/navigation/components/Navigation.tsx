import { Button, Col, Menu, Row } from 'antd';
import React, {
    FC,
    ReactElement,
    useContext,
    useEffect,
    useState,
} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth, AuthContext } from '../../../firebase';
import { DASHBOARD, HOME, SIGNIN, SIGNUP, VIDEODETAILS } from '../../../routes';
import { useWindowWidth } from '@react-hook/window-size';
import logoImage from '../../../assets/logo.jpeg';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import MenuModal from './MenuModal';

const Navigation: FC = (): ReactElement => {
    const { setUser, authenticated } = useContext(AuthContext);
    const [current, setCurrent] = useState(HOME);
    const windowWidth = useWindowWidth();
    const [isMobile, setIsMobile] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const {
        push,
        location: { pathname },
    } = useHistory();
    const handleClick = (e: any) => {
        // console.log('click ', e);
        if (e.key === 'SIGNOUT') return;
        push(e.key);
    };

    const onToggle = () => {
        setShowMenu(!showMenu);
    };

    const onMenuClick = (key: string) => {
        onToggle();
        push(key);
    };
    useEffect(() => {
        setCurrent(pathname);
    }, [pathname]);

    useEffect(() => {
        if (windowWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [windowWidth]);

    const onSignOut = () => {
        // localStorage.clear();
        auth.signOut();
        setUser(null);
        //Re-direct landing page
        return push(HOME);
    };

    return (
        <>
            {!isMobile ? (
                <Menu
                    onClick={handleClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    className="menu"
                >
                    {/* <div className="logo" /> */}
                    <Link to="/">

                        <div className="menu__logo">
                            <img src={logoImage} alt="profile" />
                        </div>
                    </Link>
                    <Menu.Item key={HOME}>Home</Menu.Item>
                    {pathname === VIDEODETAILS && (
                        <Menu.Item key={VIDEODETAILS}>Video Player</Menu.Item>
                    )}

                    {authenticated && (
                        <Menu.Item key={DASHBOARD}>My Videos</Menu.Item>
                    )}
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
            ) : (
                    <Row justify="end">
                        <Col>
                            <MenuUnfoldOutlined
                                onClick={onToggle}
                                className="hamburger-menu"
                            />
                        </Col>
                    </Row>
                )}
            <MenuModal
                isOpen={showMenu}
                onActionComplete={onToggle}
                onClick={onMenuClick}
                onSignOut={onSignOut}
            />
        </>
    );
};

export default Navigation;
