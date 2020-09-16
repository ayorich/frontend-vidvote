import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Modal, Result, Typography } from 'antd';
import React, { ReactElement, FC, useContext, useState } from 'react';
import { AuthContext } from '../../../firebase';

const { Title } = Typography;
const BuyMore: FC = (): ReactElement => {
    const { availablePoints, setAvailablePoints } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [purchasedUnits, setPurchasedUnits] = useState<number>(0);

    const onActionComplete = () => {
        setIsOpen(!isOpen);
    };
    const buyMore = (units: number) => {
        setPurchasedUnits(units);
        if (availablePoints) {
            setAvailablePoints(availablePoints + units);
        } else {
            setAvailablePoints(units);
        }
        setIsOpen(true);
        // notification.success({
        //     message: 'Successful',
        //     description: `You Have Successfully Bought ${
        //         units
        //     } units worth ₦${(units*100).toLocaleString()}. Happy Voting! `,
        //     duration: 5,
        // });
    };

    const options = (
        <Menu>
            <Menu.Item key="0">
                <span onClick={() => buyMore(1000)}>1,000units = ₦100,000</span>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">
                <span onClick={() => buyMore(1500)}>1,500units = ₦150,000</span>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">
                <span onClick={() => buyMore(2000)}>2,000units = ₦200,000</span>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Dropdown overlay={options} trigger={['click']}>
                <Button className="avatar-btn ">
                    Buy Points <DownOutlined />
                </Button>
            </Dropdown>
            <Modal visible={isOpen} title={false} footer={false}>
                <Result
                    status="success"
                    title={`You Have Successfully Purchased Additional ${purchasedUnits.toLocaleString()} Units`}
                    subTitle={
                        <>
                            <div>Order number: 2017182818828182881</div>
                            <Title level={4}>
                                ₦{(purchasedUnits * 100).toLocaleString()}
                            </Title>
                        </>
                    }
                    extra={[
                        <Button
                            type="primary"
                            key="console"
                            onClick={onActionComplete}
                        >
                            Go Back
                        </Button>,
                    ]}
                />
            </Modal>
        </>
    );
};

export default BuyMore;
