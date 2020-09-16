import React, { ReactElement, FC, useContext } from 'react';
import profilePic from '../../../assets/profile.svg';
import { AuthContext } from '../../../firebase';
import { BuyMore } from '../../buymore';

const CustomAvatar: FC = (): ReactElement => {
    const { availablePoints } = useContext(AuthContext);

    return (
        <div className="container">
            <img src={profilePic} alt="profile" />
            <div className="text-guard">
                <span className="name ">Smart Obi</span>
                <span className="title ">{availablePoints} Points</span>
                <BuyMore />
            </div>
        </div>
    );
};

export default CustomAvatar;
