import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, notification } from 'antd';
import React, { ReactElement, FC, useContext } from 'react';
import { AuthContext } from '../../../firebase';

const BuyMore: FC = (): ReactElement => {
    const { availablePoints, setAvailablePoints } = useContext(AuthContext);
    const buyMore = (units: number) => {
        if (availablePoints) {
            setAvailablePoints(availablePoints + units);
        } else {
            setAvailablePoints(units);
        }
        notification.success({
            message: 'Successful',
            description: `You Have Successfully Bought ${
                units
            } units worth ₦${(units*100).toLocaleString()}. Happy Voting! `,
            duration: 5,
        });
    };
    const options = (
        <Menu>
            <Menu.Item key="0">
                <span onClick={() => buyMore(1000)}>
                    1,000units = ₦100,000
                </span>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">
                <span onClick={() => buyMore(1500)}>
                    1,500units = ₦150,000
                </span>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">
                <span onClick={() => buyMore(2000)}>
                    2,000units = ₦200,000
                </span>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={options} trigger={['click']}>
            <Button className="avatar-btn ">
                Buy Points <DownOutlined />
            </Button>
        </Dropdown>
    );
};

export default BuyMore;
