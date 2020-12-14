import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { DashboardOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { PanelWrapper } from '../components';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// import { FetchMoviesAction } from '../../Redux/actions/FetchMoviesAction'
const { Header, Content, Sider } = Layout;




function DashboardLayout() {

    const [collapsed, changeCollapsed] = useState(true);

    function toggle() {
        changeCollapsed(!collapsed);
    }

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<DashboardOutlined />}>
                        Dashbboard
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </Header>
                <Content className="site-layout-background content-wrapper">
                    <DndProvider backend={HTML5Backend}>
                        <PanelWrapper />
                    </DndProvider>
                </Content>
            </Layout>
        </Layout>
    );
}
export { DashboardLayout };
