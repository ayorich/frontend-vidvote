import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Col, Row, Typography } from 'antd';
import { Navigation } from '../../components/navigation';
import { Avatar } from '../../components/avatar';

import { VideoCard } from '../../components/videoCard';
import { Footer } from '../../components/footer';
import { dataType } from './types';
import './style.scss';

const { Title } = Typography;

const MyVideos: FC = (): ReactElement => {
    const [videoData, setVideoData] = useState<dataType[]>();

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

    const displayCard = videoData?.map(({ name, urlID }, i) => (
        <Col xs={24} md={8} key={i}>
            <VideoCard
                key={i}
                source={`https://img.youtube.com/vi/${urlID}/mqdefault.jpg`}
                title={name}
                votes="27"
                time="12"
                votedTab
            />
        </Col>
    ));

    return (
        <>
            <Navigation />
            <Row justify="start">
                <Avatar />
            </Row>

            {videoData ? (
                <Row className="landing__video">{displayCard}</Row>
            ) : (
                <Row
                    style={{ height: '400px' }}
                    justify="center"
                    align="middle"
                >
                    <Col>
                        <Title>NO VIDEO VOTED YET</Title>
                    </Col>
                </Row>
            )}
            <Footer />
        </>
    );
};

export default MyVideos;
