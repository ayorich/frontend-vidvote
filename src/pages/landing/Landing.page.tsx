import React, { FC, ReactElement } from 'react';
import { Col, Row, Typography } from 'antd';
import { Navigation } from '../../components/navigation';
import { VideoCard } from '../../components/videoCard';
import './style.scss';
// import { Link } from 'react-router-dom';

const { Title } = Typography;

const Landing: FC = (): ReactElement => {
    return (
        <>
            <Navigation />
            <Row className="landing__hero">
                <Col xs={{ span: 18, offset: 2 }} md={{ span: 10, offset: 2 }}>
                    <Title level={3} className="landing__title">
                        Welcome to vidvote !
                    </Title>
                    <Title level={4} className="landing__title">
                        You get to watch and vote for your favourite videos.
                        Cast your vote below for your favourite(s) in hope to
                        promote them here.{' '}
                    </Title>
                </Col>
            </Row>
            <Row className="landing__video">
                <Col xs={24} md={8}>
                    <VideoCard />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard />
                </Col>
            </Row>
        </>
    );
};

export default Landing;
