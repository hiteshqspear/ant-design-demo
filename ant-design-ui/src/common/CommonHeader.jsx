import React from 'react'
import { Layout, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const CommonHeader = (props) => {
    const { setCollapsed, collapsed } = props;
    const { Header } = Layout;
    const { token: { colorBgContainer } } = theme.useToken();

    return (
        <>
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
        </>
    )
}

export default CommonHeader