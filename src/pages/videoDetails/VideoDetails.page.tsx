import React, { FC, ReactElement, useState } from 'react';
import { Col, Divider, Row, Typography } from 'antd';
import { Navigation } from '../../components/navigation';

import { ShareAltOutlined, StarOutlined } from '@ant-design/icons';
import { ActionModal } from '../../components/actionModal';
import './style.scss';

const { Title } = Typography;

const VideoDetails: FC = (): ReactElement => {
    const [modalOpen, setModalOpen] = useState(false);
    const voteHandler = () => {
        setModalOpen(true);
    };
    return (
        <>
            <Navigation />
            <Row justify="center">
                <Col md={12}>
                    {/* <Row className="video__detail"> */}
                    <Col md={24} className="video__detail">
                        <iframe
                            src="https://www.youtube.com/embed/_qyw6LC5pnE"
                            height="400"
                            width="100%"
                            title="Iframe Example"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </Col>

                    <Col md={24}>
                        <Title level={3} className="video__title">
                            Fast and Furious 10
                        </Title>
                    </Col>

                    <Col md={24}>
                        <Row justify="space-between">
                            <Col md={8}>
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
                    </Col>

                    <Col md={24}>
                        <Divider />
                    </Col>

                    <Col md={24}>
                        <Title level={5}>Description</Title>
                    </Col>
                    <Col md={24} className="video__description">
                        <span>
                            Here is a sample video for sample purpose and the
                            description goes here. Hane a nice day ahead. Here
                            is a sample video for sample purpose and the
                            description goes here. Hane a nice day ahead.
                        </span>
                    </Col>
                </Col>
            </Row>
            <ActionModal
                onActionComplete={() => setModalOpen(false)}
                isOpen={modalOpen}
            />
        </>
    );
};

export default VideoDetails;
