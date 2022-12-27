import moment from 'moment';
import React from 'react';
import { Footer } from 'antd/es/layout/layout';

const CommonFooter = () => {
    return (
        <>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©{moment().format('YYYY')} Created by Ant UED</Footer>
        </>
    )
}

export default CommonFooter