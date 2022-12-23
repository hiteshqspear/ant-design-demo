import React, { useState } from 'react';
import '../../App.css';
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const HomePage = () => {
    const { Header, Sider, Content } = Layout;
    const { token: { colorBgContainer } } = theme.useToken();

    // states management
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Layout className='main'>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div
                        style={{
                            height: 32,
                            margin: 16,
                            background: 'rgba(255, 255, 255, 0.2)',
                        }}
                    >
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
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
                                key: '3',
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
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default HomePage