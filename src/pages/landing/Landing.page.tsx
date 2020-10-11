import React, { FC, ReactElement } from 'react';
import { Col, Row, Typography } from 'antd';
import { Navigation } from '../../components/navigation';
import { VideoCard } from '../../components/videoCard';
import { Footer } from '../../components/footer';
import cont1 from '../../assets/pic1.jpeg'
import cont2 from '../../assets/pic2.jpeg'
import cont3 from '../../assets/pic3.jpeg'
import cont4 from '../../assets/pic4.jpeg'
import cont5 from '../../assets/pic5.jpeg'
import cont6 from '../../assets/pic6.jpeg'
import cont7 from '../../assets/pic7.jpeg'
import cont8 from '../../assets/pic8.jpeg'
import cont9 from '../../assets/pic9.jpeg'
import cont10 from '../../assets/pic10.jpeg'

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
                        Welcome to Africa Golden Voting Site
                    </Title>
                    <Title level={4} className="landing__title">
                        You get to watch and vote for your favourite contestant.
                        Cast your vote below for your favourite(s) in hope to
                        promote them.{' '}
                    </Title>
                </Col>
            </Row>
            <Row className="landing__video">
                <Col xs={24} md={8}>
                    <VideoCard
                        source="https://img.youtube.com/vi/U9X0_aq_BuU/mqdefault.jpg"
                        title="Miss Africa Golden"
                        votes="55"
                        time="1"
                    />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard
                        source={cont1}
                        title="Selina Brown"
                        votes="27"
                        picture
                    />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard
                        source={cont2}
                        title="Jenifer Tunisia"
                        votes="76"
                        picture
                    />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard
                        source={cont3}
                        title="Selina Togo"
                        votes="270"
                        picture
                    />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard
                        source={cont4}
                        title="Smart botw"
                        votes="77"
                        picture
                    />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard
                        source={cont5}
                        title="Selina Brown"
                        votes="257"
                        picture
                    />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard
                        source={cont6}
                        title="tend Malawi"
                        votes="327"
                        picture
                    />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard
                        source={cont7}
                        title="Selina Brown"
                        votes="627"
                        picture
                    />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard
                        source={cont8}
                        title="Ghana Brown"
                        votes="127"
                        picture
                    />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard
                        source={cont9}
                        title="Blessing Sudan"
                        votes="273"
                        picture
                    />
                </Col>
                <Col xs={24} md={8}>
                    <VideoCard
                        source={cont10}
                        title="Selina Brown"
                        votes="217"
                        picture
                    />
                </Col>
            </Row>
            <Footer />
        </>
    );
};

export default Landing;
