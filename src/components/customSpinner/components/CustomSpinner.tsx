import React, { FC, ReactElement } from 'react';
import { spinnerProps } from '../types';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import './style.scss';
const CustomSpinner: FC<spinnerProps> = ({
    spinnerType,
    fontSize,
}): ReactElement => {
    const Indicator = (
        <LoadingOutlined style={{ fontSize: fontSize ? fontSize : 40 }} spin />
    );
    return (
        <div
            className={
                spinnerType
                    ? `custom-spinner ${spinnerType}`
                    : 'custom-spinner padded'
            }
        >
            <Spin indicator={Indicator} />;<h3>Loading..</h3>
        </div>
    );
};

export default CustomSpinner;
