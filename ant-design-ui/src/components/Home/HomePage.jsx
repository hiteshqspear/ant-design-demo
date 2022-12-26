import React, { useState } from 'react';
import '../../App.css';
import CollapsePanel from '../Collapse/CollapsePanel';
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { Layout, Menu, Tabs, theme, Typography } from 'antd';

const HomePage = () => {
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
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
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
                </Layout>
            </Layout>
        </>
    )
}

export default HomePage