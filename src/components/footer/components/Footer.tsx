import { Row, Col, Typography } from 'antd';
import React, { FC, ReactElement } from 'react';

import './style.scss';

const { Title } = Typography;
const Footer: FC = (): ReactElement => {
    return (
        <Row className="footer" align="middle" justify="center">
            <Col>
                <Title level={3} className="footer__title">
                    FOOTER
                </Title>
            </Col>
        </Row>
    );
};

export default Footer;
