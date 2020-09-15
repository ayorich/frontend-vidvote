import React, { FC, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Divider } from 'antd';
import { FieldTimeOutlined, StarFilled } from '@ant-design/icons';
import { VIDEODETAILS } from '../../../routes';
import './style.scss';
import { videoCardProps } from '../types';

// const { Meta } = Card;
const VideoCard: FC<videoCardProps> = ({
    source,
    title,
    votes,
    time,
}): ReactElement => {
    const { push } = useHistory();
    const id = source.split('/')[4];
    const videoPlayerHandler = () => {
        push(`${VIDEODETAILS}?id=${id}&title=${title}`);
    };
    return (
        <Card
            onClick={videoPlayerHandler}
            className="videoCard "
            hoverable
            cover={<img alt="example" src={source} />}
        >
            {/* <div className="ant-card-body2"></div> */}
            <p className="videoCard__title">
                <b>{title}</b>
            </p>
            <div className="videoCard__detail">
                <span className="videoCard__votes">
                    <StarFilled className="videoCard__icon" /> {votes} votes
                </span>
                <Divider type="vertical" className="videoCard__divider" />
                <span className="videoCard__mins">
                    <FieldTimeOutlined className="videoCard__icon" /> {time}{' '}
                    mins
                </span>
            </div>
        </Card>
    );
};

export default VideoCard;
