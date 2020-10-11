import React, { FC, ReactElement, useState } from 'react';
import { Col, Divider, Row, Typography } from 'antd';
import { Navigation } from '../../components/navigation';

import { ShareAltOutlined, StarOutlined } from '@ant-design/icons';
import { ActionModal } from '../../components/actionModal';
import { useHistory } from 'react-router-dom';
import { Footer } from '../../components/footer';

import './style.scss';

const { Title } = Typography;

const VideoDetails: FC = (): ReactElement => {
    const [modalOpen, setModalOpen] = useState(false);
    const voteHandler = () => {
        setModalOpen(true);
    };
    const {
        location: { search },
    } = useHistory();
    const id = new URLSearchParams(search).get('id');
    const source = new URLSearchParams(search).get('source') as string;
    const title = new URLSearchParams(search).get('title');

    return (
        <>
            <Navigation />
            <Row justify="center" className="videodetails">
                <Col xs={20} md={18} lg={12}>
                    <div className="video__detail">
                        {source ?
                            <div className="video__img">

                                <img src={source} alt=" project" />
                            </div>

                            :
                            <iframe
                                src={`https://www.youtube.com/embed/${id}`}
                                height="400"
                                width="100%"
                                title="Iframe Example"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        }
                    </div>

                    <Title level={3} className="video__title">
                        {title}
                    </Title>

                    <Row justify="space-between">
                        <Col md={12} lg={12}>
                            <span>123 Votes</span>
                            <Divider type="vertical" />
                            <span>{new Date().toDateString()}</span>
                        </Col>
                        <Col md={8}>
                            <Row justify="end">
                                <span
                                    className="video__action"
                                    onClick={voteHandler}
                                >
                                    <StarOutlined className="video__icon" />
                                    <span className="video__action--text">
                                        Vote
                                    </span>
                                </span>
                                <span className="video__action">
                                    <ShareAltOutlined className="video__icon" />
                                    <span className="video__action--text">
                                        Share
                                    </span>
                                </span>
                            </Row>
                        </Col>
                    </Row>

                    <Divider />

                    <Title level={5}>Description</Title>
                    <div className="video__description">
                        <span>
                            Here is a sample video for sample purpose and the
                            description goes here. Hane a nice day ahead. Here
                            is a sample video for sample purpose and the
                            description goes here. Hane a nice day ahead.
                        </span>
                    </div>
                </Col>
            </Row>
            <ActionModal
                onActionComplete={() => setModalOpen(false)}
                isOpen={modalOpen}
                title={title}
                id={id}
                source={source}
            />
            <Footer />
        </>
    );
};

export default VideoDetails;
