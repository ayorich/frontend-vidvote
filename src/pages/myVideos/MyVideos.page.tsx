import React, { FC, ReactElement } from 'react';
import { Col, Row, Typography } from 'antd';
import { Navigation } from '../../components/navigation';

// import './style.scss';
const { Title } = Typography;

const MyVideos: FC = (): ReactElement => {
    return (
        <>
            <Navigation />
            <Row justify="center">
                <Col md={24} className="video__description">
                    <Title>Here is a sample video for voted videos</Title>
                </Col>
            </Row>
        </>
    );
};

export default MyVideos;
