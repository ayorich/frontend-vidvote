import { Button, notification } from 'antd';
import React, { ReactElement, FC, useContext } from 'react';
import profilePic from '../../../assets/profile.svg';
import { AuthContext } from '../../../firebase';

const CustomAvatar: FC = (): ReactElement => {
    const { availablePoints, setAvailablePoints } = useContext(AuthContext);
    const buyMore = () => {
        if (availablePoints) {
            setAvailablePoints(availablePoints + 2000);
        } else {
            setAvailablePoints(2000);
        }
        notification.success({
            message: 'Successful',
            description:
                'You Have Successfully Bought 2000 units worth ₦10,000. Happy Voting! ',
            duration: 5,
        });
    };

    return (
        <div className="container">
            <img src={profilePic} alt="profile" />
            <div className="text-guard">
                <span className="name ">Smart Obi</span>
                <span className="title ">{availablePoints} Points</span>
                {/* <Link to={BUYMORE}> */}
                <Button onClick={buyMore} className="avatar-btn ">
                    Buy Points
                </Button>
                {/* </Link> */}
            </div>
        </div>
    );
};

export default CustomAvatar;
