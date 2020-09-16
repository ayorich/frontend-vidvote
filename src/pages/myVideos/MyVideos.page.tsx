import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { Navigation } from '../../components/navigation';
import { Avatar } from '../../components/avatar';

import { VideoCard } from '../../components/videoCard';
import { Footer } from '../../components/footer';
import './style.scss';

// const { Title } = Typography;

const MyVideos: FC = (): ReactElement => {
    const [videoData, setVideoData] = useState([
        {
            name: 'Top Upcoming Videos',
            urlID: 'zr9E5-k4oug',
        },
    ]);

    //----localstorage---//
    useEffect(() => {
        const data = localStorage.getItem('data');
        //----localstorage---//
        if (data) {
            const parseData = JSON.parse(data);
            const arrayData = [];
            arrayData.push(...parseData);
            setVideoData(arrayData);
        }
    }, []);
    //----localstorage---//

    const displayCard = videoData.map(({ name, urlID }, i) => (
        <Col xs={24} md={8} key={i}>
            <VideoCard
                key={i}
                source={`https://img.youtube.com/vi/${urlID}/mqdefault.jpg`}
                title={name}
                votes="27"
                time="12"
            />
        </Col>
    ));

    return (
        <>
            <Navigation />
            <Row justify="start">
                <Avatar />
            </Row>

            <Row className="landing__video">{displayCard}</Row>
            <Footer />
        </>
    );
};

export default MyVideos;
