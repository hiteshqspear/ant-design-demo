import React, { useState } from 'react';
import { Layout } from 'antd';
import CommonFooter from '../../common/CommonFooter';
import CommonHeader from '../../common/CommonHeader';
import CommonSideBar from '../../common/CommonSideBar';

const AboutUs = () => {
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

                    <main id="main" className="main m-3">
                        <div className="pagetitle">
                            <h1>About Us</h1>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active">About Us</li>
                                </ol>
                            </nav>
                        </div>
                    </main>

                    {/*********** common footer ********/}
                    <CommonFooter />
                </Layout>
            </Layout>
        </>
    )
}

export default AboutUs