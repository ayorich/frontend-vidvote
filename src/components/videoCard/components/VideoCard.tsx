import React, { FC, ReactElement } from 'react';
import { Card } from 'antd';
import { FieldTimeOutlined, StarFilled } from '@ant-design/icons';
import './style.scss';

// const { Meta } = Card;
const VideoCard: FC = (): ReactElement => {
    return (
        <Card
            className="videoCard"
            hoverable
            cover={
                <img
                    alt="example"
                    src="https://img.youtube.com/vi/2Xmibe4YhpQ/mqdefault.jpg"
                />
            }
        >
            <p className="videoCard__title">
                <b>Europe Street beat</b>
            </p>
            <div className="videoCard__detail">
                <span className="videoCard__votes">
                    <StarFilled className="videoCard__icon" /> 12 votes
                </span>
                <span className="videoCard__mins">
                    <FieldTimeOutlined className="videoCard__icon" /> 2 mins ago
                </span>
            </div>
        </Card>
    );
};

export default VideoCard;
