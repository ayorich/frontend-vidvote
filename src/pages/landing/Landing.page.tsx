import React, { FC, ReactElement } from 'react';
import { Col, Row, Typography } from 'antd';
// import { HeaderBar } from '../../components/headerBar';
import './style.scss';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Landing: FC = (): ReactElement => {
    return (
        <>
            <Row justify="center">
                <Col>
                    <Title level={2}>LANDING PAGE</Title>
                    <Link to="/auth">
                        <button>signin</button>
                    </Link>
                </Col>
            </Row>
        </>
    );
};

export default Landing;
