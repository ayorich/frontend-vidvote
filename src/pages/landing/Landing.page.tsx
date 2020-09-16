import React, { FC, ReactElement } from 'react';
import { Col, Row, Typography } from 'antd';
import { Navigation } from '../../components/navigation';
import { VideoCard } from '../../components/videoCard';
import { Footer } from '../../components/footer';

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
                    <VideoCard
                        source="https://img.youtube.com/vi/2Xmibe4YhpQ/mqdefault.jpg"
                        title="Fast And Furious 9"
                        votes="27"
                        time="12"
                    />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard
                        source="https://img.youtube.com/vi/9yW4OWEifIY/mqdefault.jpg"
                        title="Forgotten SuperStar"
                        votes="277"
                        time="42"
                    />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard
                        source="https://img.youtube.com/vi/GRIfm826bnw/mqdefault.jpg"
                        title="Truth About JetLi"
                        votes="27"
                        time="11:23"
                    />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard
                        source="https://img.youtube.com/vi/ngTMDTFTauw/mqdefault.jpg"
                        title="Officer Woos Comendy"
                        votes="27"
                        time="13:26"
                    />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard
                        source="https://img.youtube.com/vi/ebHIC38PBnI/mqdefault.jpg"
                        title="Martial Art"
                        votes="27"
                        time="10:35"
                    />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard
                        source="https://img.youtube.com/vi/zr9E5-k4oug/mqdefault.jpg"
                        title="Top Upcoming Videos"
                        votes="1127"
                        time="17:10"
                    />
                </Col>
            </Row>
            <Footer />
        </>
    );
};

export default Landing;
