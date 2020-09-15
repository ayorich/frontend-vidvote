import React, { FC, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Divider } from 'antd';
import { FieldTimeOutlined, StarFilled } from '@ant-design/icons';
import { VIDEODETAILS } from '../../../routes';
import './style.scss';

// const { Meta } = Card;
const VideoCard: FC = (): ReactElement => {
    const { push } = useHistory();
    const videoPlayerHandler = () => {
        push(VIDEODETAILS);
    };
    return (
        <Card
            onClick={videoPlayerHandler}
            className="videoCard "
            hoverable
            cover={
                <img
                    alt="example"
                    src="https://img.youtube.com/vi/2Xmibe4YhpQ/mqdefault.jpg"
                />
            }
        >
            {/* <div className="ant-card-body2"></div> */}
            <p className="videoCard__title">
                <b>Europe Street beat</b>
            </p>
            <div className="videoCard__detail">
                <span className="videoCard__votes">
                    <StarFilled className="videoCard__icon" /> 12 votes
                </span>
                <Divider type="vertical" className="videoCard__divider" />
                <span className="videoCard__mins">
                    <FieldTimeOutlined className="videoCard__icon" /> 2 mins ago
                </span>
            </div>
        </Card>
    );
};

export default VideoCard;
