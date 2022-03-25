import React, { Component } from 'react';

import './Header.css'
import { MenuOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Drawer, Image, Menu, Layout, Row, Col, Space } from 'antd';
import { Link } from 'react-router-dom';

import logout_icon from '../../assets/images/logout_icon.svg';
import notify_icon from '../../assets/images/notify_icon.svg';
import logoPic from '../../assets/images/Quick Lookup - Logo.svg';


const { Header } = Layout;
const data = [
    {
        path: '/home',
        name: 'Home',
    },
    {
        path: '/',
        name: 'Country API & Download',
    },
    {
        path: '/pricing',
        name: 'Pricing',
    },
    {
        path: '/',
        name: 'Plugins & Code Samples',
    },
    {
        path: '/',
        name: 'Resources',
    },
    {
        path: '/features',
        name: 'QL Features',
    },
    {
        path: '/misc',
        name: 'QL MISC',
    },
    {
        path: '/lists',
        name: 'Lists',
    },
];

export default class HeaderLayout extends Component {
    state = {
        current: 'mail',
    };

    showDrawer = () => {
        this.setState({ visible: true });
    };

    onClose = () => {
        this.setState({ visible: false });
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
      
        return (
            <>
                <Header>
                    <Row align="middle">
                        <Col xs={20} sm={21} md={3} >
                            <Link to="/"><Image preview={false} max-width={145} src={logoPic} alt="Quick Lookup" /></Link>
                        </Col>
                        <Col xs={0} sm={0} md={19}>
                            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" >
                                {
                                    data &&
                                    data.map((item) => (
                                        <Menu.Item key={item.path-`${Math.random()}`} active>
                                            <Link to={item.path}>{item.name}</Link>
                                        </Menu.Item>
                                    ))
                                }                                
                            </Menu>
                        </Col>
                        <Col xs={0} sm={0} md={2} >
                            <Space align="center" size={16} >
                                <Link to="/">
                                    <Badge count={2}>
                                        <Avatar src={notify_icon} shape="square" size="medium" />
                                    </Badge>
                                </Link>
                                <Link to="/">
                                    <Avatar src={logout_icon} shape="square" size="medium" />
                                    {/* <Image preview={false} src={logout_icon} className="logout-icon" alt="notification" /> */}
                                </Link>
                            </Space>                                                       
                        </Col>
                        <Col sm={3} xs={4} md={0}>
                            <Button className="menubtn" type="primary" shape="circle" icon={<MenuOutlined />} onClick={this.showDrawer} />
                            <Link to="/">
                                <Badge count={2}>
                                    <Avatar src={notify_icon} size="medium" />
                                </Badge>
                            </Link>
                            
                            <Drawer title={<Image src={logoPic} alt="logo" />} placement="right" onClose={this.onClose} visible={this.state.visible}>
                                <Menu selectedKeys={[current]} mode="inline" >
                                    {
                                        data &&
                                        data.map((item) => (
                                            <Menu.Item key={item.path-`${Math.random()}`} active>
                                                <Link to={item.path}>{item.name}</Link>
                                            </Menu.Item>
                                        ))
                                    }                                
                                </Menu>
                            </Drawer>
                        </Col>
                    </Row>
                </Header>
            </>
        )
    }
}

