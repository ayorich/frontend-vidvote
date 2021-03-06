import React, {
    FC,
    ReactElement,
    useContext,
    useEffect,
    useState,
} from 'react';
import { Col, Row, Spin, Typography } from 'antd';
import { Navigation } from '../../components/navigation';
import { Avatar } from '../../components/avatar';

import { VideoCard } from '../../components/videoCard';
import { Footer } from '../../components/footer';
import { dataType } from './types';
import { LoadingOutlined } from '@ant-design/icons';
import './style.scss';
import { AuthContext } from '../../firebase';

const { Title } = Typography;

const MyVideos: FC = (): ReactElement => {
    const { user } = useContext(AuthContext);

    const [videoData, setVideoData] = useState<dataType[]>([]);
    const [loading, setLoading] = useState(false);

    //----localstorage---//
    useEffect(() => {
        setLoading(true);
        const data = localStorage.getItem('data');

        //----localstorage---//
        if (data) {
            const parseData = JSON.parse(data);
            const arrayData = [];
            arrayData.push(...parseData);

            const userData = arrayData.filter((key) => {
                return key.uid === user?.uid;
            });
            // console.log(userData);

            setVideoData(userData);
        }

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [user]);

    //----localstorage---//

    const displayCard = videoData?.map(({ name, urlID, source }, i) => (
        <Col xs={24} md={8} key={i}>
            <VideoCard
                key={i}
                source={source ? source : `https://img.youtube.com/vi/${urlID}/mqdefault.jpg`}
                title={name}
                votes="27"
                time="12"
                votedTab
                picture={source ? true : false}
            />
        </Col>
    ));
    const indicator = <LoadingOutlined style={{ fontSize: 40 }} spin />;
    return (
        <>
            <Navigation />
            <Row justify="start">
                <Avatar />
            </Row>
            <Row justify="center" align="middle">
                {videoData?.length === 0 && !loading && (
                    <Title style={{ marginTop: '70px' }}>
                        NO VIDEO VOTED YET
                    </Title>
                )}
            </Row>
            {!loading && videoData ? (
                <Row className="landing__video2">{displayCard}</Row>
            ) : (
                    <Row
                        style={{ height: '400px' }}
                        justify="center"
                        align="middle"
                    >
                        {loading && <Spin indicator={indicator} />}
                    </Row>
                )}
            <Footer />
        </>
    );
};

export default MyVideos;
