import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, notification } from 'antd';
import React, { ReactElement, FC, useContext } from 'react';
import { AuthContext } from '../../../firebase';

const BuyMore: FC = (): ReactElement => {
    const { availablePoints, setAvailablePoints } = useContext(AuthContext);
    const buyMore = (amount: number) => {
        if (availablePoints) {
            setAvailablePoints(availablePoints + amount);
        } else {
            setAvailablePoints(amount);
        }
        notification.success({
            message: 'Successful',
            description: `You Have Successfully Bought ${
                amount / 100
            } units worth ₦${amount.toLocaleString()}. Happy Voting! `,
            duration: 5,
        });
    };
    const options = (
        <Menu>
            <Menu.Item key="0">
                <span onClick={() => buyMore(100000)}>
                    1,000units = ₦100,000
                </span>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">
                <span onClick={() => buyMore(150000)}>
                    1,500units = ₦150,000
                </span>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">
                <span onClick={() => buyMore(200000)}>
                    2,000units = ₦2000,000
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
