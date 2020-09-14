import React, {
    FC,
    ReactElement,
    useState,
    FormEvent,
    useContext,
} from 'react';
import { Row, Col, Button, Alert, Spin, Typography } from 'antd';
import { signupFormType } from '../types';
import { auth } from '../../../firebase';
import { handlerEvent } from '../../input/types';
import { Input } from '../../input';
import { AuthContext } from '../../../firebase';

const { Title } = Typography;

const Signup: FC = (): ReactElement => {
    const { setUser } = useContext(AuthContext);
    const [formInputs, setFormInput] = useState<signupFormType>({
        email: '',
        password: '',
    });
    const [isSignin, setIsSignin] = useState(true);

    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    // const history = useHistory();

    const onInputChange = (e: handlerEvent) => {
        const { name, value } = e.target;
        setFormInput({ ...formInputs, [name]: value });
    };

    const setIsSignIn = () => setIsSignin(!isSignin);
    const onFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(formInputs);
        const { password, email } = formInputs;
        if (!password || !email) {
            /**@todo  you'll use yup to define validation schema*/
            return setError('Please fillout all fields');
        }
        setError('');
        setLoading(true);
        try {
            if (!isSignin) {
                const { user } = await auth.createUserWithEmailAndPassword(
                    email,
                    password,
                );
                setUser(user);
            } else {
                const { user } = await auth.signInWithEmailAndPassword(
                    email,
                    password,
                );
                setUser(user);
            }

            setFormInput({
                email: '',
                password: '',
            });
            setLoading(false);

            // history.push(`${EMAIL_NOTICE}?mode=confirmNotice&email=${email}`);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    return (
        <form onSubmit={onFormSubmit} className="signup-form">
            <Row justify="center">
                <Title level={3}>{isSignin ? 'Sign In' : 'Sign Up'}</Title>
            </Row>
            <Row>
                <Col span={24} className="indicators">
                    {error && (
                        <Alert message={error} type="error" showIcon closable />
                    )}
                    {loading && <Spin />}
                </Col>
            </Row>

            <Row gutter={{ sm: 0, md: 20 }} className="field-row">
                <Col xs={24}>
                    <Input
                        name="email"
                        onChange={onInputChange}
                        inputType="email"
                        label="Email Address"
                        hasLabel={true}
                        placeholder="enter your email address"
                        value={formInputs.email}
                    />
                </Col>
            </Row>
            <Row className="field-row">
                <Col xs={24}>
                    <Input
                        name="password"
                        onChange={onInputChange}
                        inputType="password"
                        label="Password"
                        hasLabel={true}
                        placeholder="choose a password"
                        value={formInputs.password}
                    />
                </Col>
            </Row>
            <Row className="field-row">
                <Col span={24}>
                    <Button
                        htmlType="submit"
                        className="custom-btn"
                        type="primary"
                    >
                        {isSignin ? 'Sign In' : 'Sign Up'}
                    </Button>
                </Col>
            </Row>
            <div className="extras">
                {isSignin ? (
                    <small>
                        Don't have an account?{' '}
                        <span onClick={setIsSignIn}>Sign Up</span>
                    </small>
                ) : (
                    <small>
                        Already have an account?{' '}
                        <span onClick={setIsSignIn}>Sign In</span>
                    </small>
                )}
            </div>
        </form>
    );
};

export default Signup;
