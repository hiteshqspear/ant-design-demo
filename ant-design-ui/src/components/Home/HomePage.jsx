import React, { useState } from 'react';
import '../../App.css';
import CollapsePanel from '../Collapse/CollapsePanel';
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, PieChartOutlined, VideoCameraOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { Avatar, Layout, Menu, Tabs, theme, Typography } from 'antd';
import { Footer } from 'antd/es/layout/layout';

const HomePage = () => {
    const today = new Date();
    const { Header, Sider, Content } = Layout;
    const { Text } = Typography;
    const { token: { colorBgContainer } } = theme.useToken();

    // states management
    const [collapsed, setCollapsed] = useState(false);

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <>
            <Layout className='main'>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div
                        className='text-center'
                        style={{
                            height: 32,
                            margin: 16,
                            // background: 'rgba(255, 255, 255, 0.2)',
                        }}
                    >
                        {collapsed ?
                            <div >
                                <Avatar
                                    className='justify-content-center img-fluid'
                                    src={require('../../assets/img/manager.png')}
                                />
                            </div>
                            :
                            <div className='h5 text-muted text-uppercase font-weight-bold text-center'>
                                DASHBOARD
                            </div>
                        }
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <PieChartOutlined />,
                                label: 'FORM_WITH_TAB_PANEL',
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: 'FORM_WITH_COLLAPSABLE',
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: 'FORM_SIMPLE',
                            },
                            {
                                key: '4',
                                icon: <CheckSquareOutlined />,
                                label: 'FORM_WITH_Collapsable_under tab',
                            },
                        ]}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
                        <div
                            className='ml-3'
                            onClick={() => setCollapsed(!collapsed)}
                            style={{ fontSize: '20px' }}
                        >
                            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            {/* <Avatar className='mt-4 mr-4' style={{ float: 'right' }} src="https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699_1280.png" /> */}
                        </div>
                    </Header>
                    <Content
                        className='border border-secondary'
                        style={{
                            margin: '24px 16px',
                            minHeight: 280,
                            borderRadius: '10px',
                            background: colorBgContainer,
                        }}
                    >
                        <Typography.Title
                            className='w-100 text-center bg-dark'
                            level={3}
                            style={{
                                margin: 0,
                                'borderTopRightRadius': '10px',
                                'borderTopLeftRadius': '10px',
                            }}
                        >
                            <Text className="text-light bg-dark">Form Preview</Text>
                        </Typography.Title>
                        <Tabs
                            className='p-2'
                            defaultActiveKey="1"
                            onChange={onChange}
                            items={[
                                {
                                    label: `Company Details`,
                                    key: '1',
                                    children: <CollapsePanel />,
                                },
                                {
                                    label: `Contact Details`,
                                    key: '2',
                                    children: `Content of Tab Pane 2`,
                                },
                                {
                                    label: `Review`,
                                    key: '3',
                                    children: `Content of Tab Pane 3`,
                                },
                            ]}
                        />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©{today.getFullYear()} Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </>
    )
}

export default HomePage