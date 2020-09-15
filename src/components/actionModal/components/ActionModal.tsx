import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Modal, notification, Tooltip } from 'antd';
import React, {
    ReactElement,
    FC,
    useState,
    useContext,
    useEffect,
} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../firebase';
import { BUYMORE } from '../../../routes';
import { modalProps } from '../types';
import './style.scss';

// const { Title } = Typography;
const ActionModal: FC<modalProps> = ({
    isOpen,
    onActionComplete,
}): ReactElement => {
    const { availableUnits, setAvailableUnits } = useContext(AuthContext);
    const [votes, setVotes] = useState(1);
    useEffect(() => {
        setVotes(1);
    }, [isOpen]);

    const addUnit = () => {
        if (!availableUnits) return;
        setVotes(votes + 1);
    };

    const removeUnit = () => {
        if (!availableUnits) return;
        if (votes === 1) return;
        setVotes(votes - 1);
    };

    const onConfirmVote = () => {
        if (availableUnits) {
            const remainingUnits = availableUnits - votes * 100;
            setAvailableUnits(remainingUnits);
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
            <p className="action__modal--title">{'"Fast and Furious"'}</p>
            <p className="action__modal--artist">John Cena</p>
            {availableUnits ? (
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
                                disabled={votes * 100 === availableUnits}
                                onClick={addUnit}
                                shape="circle"
                                type="primary"
                                icon={<PlusOutlined />}
                            />
                        </Tooltip>
                    </div>
                    <p className="action__modal--units">{votes * 100} units</p>
                </>
            ) : (
                <>
                    <p className="action__modal--buymore">
                        NO AVAILABLE UNITS TO MAKE A VOTE.
                    </p>
                    <p className="action__modal--buymore">
                        <span>Please </span>
                        <Link to={BUYMORE}> PURCHASE </Link>
                        <span> more units</span>
                    </p>
                </>
            )}
            <Button
                type="primary"
                onClick={onConfirmVote}
                disabled={!availableUnits}
            >
                CONFIRM VOTE
            </Button>
        </Modal>
    );
};

export default ActionModal;
