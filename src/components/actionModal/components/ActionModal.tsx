import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Modal, notification, Tooltip } from 'antd';
import React, {
    ReactElement,
    FC,
    useState,
    useContext,
    useEffect,
} from 'react';
import { AuthContext } from '../../../firebase';
import { modalProps } from '../types';
import './style.scss';

// const { Title } = Typography;
const ActionModal: FC<modalProps> = ({
    isOpen,
    onActionComplete,
    title,
}): ReactElement => {
    const { availablePoints, setAvailablePoints } = useContext(AuthContext);
    const [votes, setVotes] = useState(1);
    useEffect(() => {
        setVotes(1);
    }, [isOpen]);

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
    const addUnit = () => {
        if (!availablePoints) return;
        setVotes(votes + 1);
    };

    const removeUnit = () => {
        if (!availablePoints) return;
        if (votes === 1) return;
        setVotes(votes - 1);
    };

    const onConfirmVote = () => {
        if (availablePoints) {
            const remainingUnits = availablePoints - votes * 100;
            setAvailablePoints(remainingUnits);
            onActionComplete();
            notification.success({
                message: 'Successfully',
                description: 'Voted Successfully',
                duration: 1,
            });
        } else {
            onActionComplete();
            message.info('Not enough units');
        }
    };
    return (
        <Modal
            style={{ top: 100 }}
            onCancel={onActionComplete}
            onOk={onActionComplete}
            visible={isOpen}
            title={false}
            footer={false}
            width={300}
            className="action__modal"
        >
            <div className="action__modal--image">
                <img
                    alt="example"
                    src="https://img.youtube.com/vi/2Xmibe4YhpQ/mqdefault.jpg"
                />
            </div>
            <p className="action__modal--text">Vote</p>
            <p className="action__modal--title">{title}</p>
            <p className="action__modal--artist">John Cena</p>
            {availablePoints ? (
                <>
                    <p className="action__modal--votes">Votes</p>
                    <div className="unit-control">
                        <Tooltip title="remove vote">
                            <Button
                                disabled={votes === 1}
                                onClick={removeUnit}
                                shape="circle"
                                icon={<MinusOutlined />}
                            />
                        </Tooltip>
                        <div className="unit-value">
                            <h4>{votes}</h4>
                        </div>
                        <Tooltip title="add vote">
                            <Button
                                disabled={votes * 100 === availablePoints}
                                onClick={addUnit}
                                shape="circle"
                                type="primary"
                                icon={<PlusOutlined />}
                            />
                        </Tooltip>
                    </div>
                    <p className="action__modal--units">{votes * 100} Points</p>
                </>
            ) : (
                <>
                    <p className="action__modal--buymore">
                        NO AVAILABLE UNITS TO MAKE A VOTE.
                    </p>
                    <p className="action__modal--buymore">
                        <span>Please </span>
                        <span
                            onClick={buyMore}
                            className="action__modal--buymore-btn"
                        >
                            {' '}
                            PURCHASE{' '}
                        </span>
                        <span> more units</span>
                    </p>
                </>
            )}
            <Button
                type="primary"
                onClick={onConfirmVote}
                disabled={!availablePoints}
            >
                CONFIRM VOTE
            </Button>
        </Modal>
    );
};

export default ActionModal;
