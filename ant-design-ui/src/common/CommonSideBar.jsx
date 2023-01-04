import React from 'react';
import { UploadOutlined, PieChartOutlined, VideoCameraOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router';
// import { Link } from 'react-router-dom';

const menuContent = [
    {
        key: '1',
        icon: <PieChartOutlined />,
        label: 'Home',
        path: '/Home',
    },
    {
        key: '2',
        icon: <VideoCameraOutlined />,
        label: 'Category',
        path: '/Category',
    },
    {
        key: '3',
        icon: <UploadOutlined />,
        label: 'About',
        path: '/About',
    },
    {
        key: '4',
        icon: <CheckSquareOutlined />,
        label: 'Login',
        path: '/Login',
    },
];

const CommonSideBar = (props) => {
    const navigate = useNavigate();

    const { collapsed } = props;
    const { Sider } = Layout;

    const onClickMenu = (item) => {
        const clicked = menuContent.find(elm => elm.key === item.key);
        navigate(clicked.path);
    }


    return (
        <>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div
                    className='text-center'
                    style={{
                        height: 32,
                        margin: 16,
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}
                >
                    {/* {collapsed ?
                        <Link to={'/'}>
                            <Avatar
                                className='justify-content-center img-fluid'
                                src={require('../assets/img/manager.png')}
                            />
                        </Link>
                        :
                        <Link to={'/'} className='h5 text-uppercase font-weight-bold text-center'>
                            DASHBOARD
                        </Link>
                    } */}
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={menuContent}
                    onClick={onClickMenu}
                />
            </Sider>
        </>
    )
}

export default CommonSideBar