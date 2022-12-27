import React, { useState } from 'react';
import '../../App.css';
import { Layout } from 'antd';
import CommonFooter from '../../common/CommonFooter';
import CommonHeader from '../../common/CommonHeader';
import CommonSideBar from '../../common/CommonSideBar';
import CommonBody from '../../common/CommonBody';

const HomePage = () => {
    // states management
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Layout className='main'>
                {/*********** common SideBar ********/}
                <CommonSideBar collapsed={collapsed} />
                <Layout className="site-layout">
                    {/*********** common Header ********/}
                    <CommonHeader setCollapsed={setCollapsed} collapsed={collapsed} />
                    {/*********** common body ********/}
                    <CommonBody />
                    {/*********** common footer ********/}
                    <CommonFooter />
                </Layout>
            </Layout>
        </>
    )
}

export default HomePage