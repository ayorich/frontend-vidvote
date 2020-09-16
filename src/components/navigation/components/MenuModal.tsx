import { Col, Modal, Row } from 'antd';
import React, { ReactElement, FC, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../firebase';
import { DASHBOARD, HOME, SIGNIN, SIGNUP, VIDEODETAILS } from '../../../routes';
import { menuModalProps } from '../types';

import './style.scss';

// const { Title } = Typography;
const MenuModal: FC<menuModalProps> = ({
    onActionComplete,
    isOpen,
    onClick,
    onSignOut,
}): ReactElement => {
    const { authenticated } = useContext(AuthContext);
    const {
        location: { pathname },
    } = useHistory();
    return (
        <Modal
            style={{ top: 10 }}
            onOk={onActionComplete}
            onCancel={onActionComplete}
            visible={isOpen}
            title={false}
            footer={false}
            width={800}
            className="action__modal "
        >
            <Row justify="center" align="middle" className="menumodal">
                <Col xs={18}>
                    <div onClick={() => onClick(HOME)}>HOME</div>
                    {pathname === VIDEODETAILS && (
                        <div onClick={() => onClick(VIDEODETAILS)}>
                            VIDEO PLAYER
                        </div>
                    )}
                    <div onClick={() => onClick(DASHBOARD)}>MY VIDEOS</div>
                    {!authenticated ? (
                        <>
                            <div onClick={() => onClick(SIGNIN)}>SIGNIN</div>
                            <div onClick={() => onClick(SIGNUP)}>SIGNUP</div>
                        </>
                    ) : (
                        <div onClick={onSignOut}>SIGNOUT</div>
                    )}
                </Col>
            </Row>
        </Modal>
    );
};

export default MenuModal;
