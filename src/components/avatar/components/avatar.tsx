import { Button } from 'antd';
import React, { ReactElement, FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../../../assets/profile.svg';
import { AuthContext } from '../../../firebase';
import { BUYMORE } from '../../../routes';

const CustomAvatar: FC = (): ReactElement => {
    const { availablePoints } = useContext(AuthContext);
    return (
        <div className="container">
            <img src={profilePic} alt="profile" />
            <div className="text-guard">
                <span className="name ">Smart Obi</span>
                <span className="title ">{availablePoints} Points</span>
                <Link to={BUYMORE}>
                    <Button className="avatar-btn ">Buy Points</Button>
                </Link>
            </div>
        </div>
    );
};

export default CustomAvatar;
