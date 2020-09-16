import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Col, Row, Spin, Typography } from 'antd';
import { Navigation } from '../../components/navigation';
import { Avatar } from '../../components/avatar';

import { VideoCard } from '../../components/videoCard';
import { Footer } from '../../components/footer';
import { dataType } from './types';
import { LoadingOutlined } from '@ant-design/icons';
import './style.scss';

const { Title } = Typography;

const MyVideos: FC = (): ReactElement => {
    const [videoData, setVideoData] = useState<dataType[]>();
    const [loading, setLoading]=useState(false)

    
    //----localstorage---//
    useEffect(() => {
        setLoading(true)
        const data = localStorage.getItem('data');

        //----localstorage---//
        if (data) {
            const parseData = JSON.parse(data);
            const arrayData = [];
            arrayData.push(...parseData);
            setVideoData(arrayData);
        }

        setTimeout(()=>{
            setLoading(false)

        },1000)
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
const indicator=<LoadingOutlined style={{ fontSize : 40 }} spin />
    return (
        <>
            <Navigation />
            <Row justify="start">
                <Avatar />
            </Row>
            {!loading &&videoData ? (
                <Row className="landing__video">{displayCard}</Row>
            ) : (
                <Row
                    style={{ height: '400px' }}
                    justify="center"
                    align="middle"
                >
                   {!loading ?<Col>
                        <Title>NO VIDEO VOTED YET</Title>
                    </Col>: <Spin indicator={indicator} />}
                </Row>
            )}
            <Footer />
        </>
    );
};

export default MyVideos;
