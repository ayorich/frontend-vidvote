import React, { FC, ReactElement, Fragment } from 'react';
import { Col, Row } from 'antd';
import { Signup } from '../../components/signUp';
import './style.scss';

const AuthPage: FC = (): ReactElement => {
    return (
        <Fragment>
            <Row className="auth-page" justify="space-around" align="middle">
                <Fragment>
                    <Col xs={20} md={12} lg={8}>
                        <Signup />
                    </Col>
                </Fragment>
            </Row>
        </Fragment>
    );
};

export default AuthPage;
