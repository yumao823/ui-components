import React, { Component } from 'react';
import './Footer.css'
import { Col, List, Row, Layout, Popover, Tag, Form, Input, Button } from 'antd'
import logoPic from '../../assets/images/Quick Lookup - Logo.svg';
import { FacebookFilled, GithubFilled, GithubOutlined, GitlabFilled, LinkedinFilled, MessageOutlined, TwitterSquareFilled } from '@ant-design/icons';
import brand1 from '../../assets/images/brand1.svg';
import brand2 from '../../assets/images/brand2.svg';
import brand3 from '../../assets/images/brand3.svg';
import brand4 from '../../assets/images/brand4.svg';
import brand_m1 from '../../assets/images/brand_m1.svg';
import brand_m2 from '../../assets/images/brand_m2.svg';
import brand_m3 from '../../assets/images/brand_m3.svg';
import brand_m4 from '../../assets/images/brand_m4.svg';
import request from '../../assets/images/request.svg';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';
import TextArea from 'antd/lib/input/TextArea';

const { Footer } = Layout;
const brand_data = [
    {
      logo: brand1,
    },
    {
      logo: brand2,
    },
    {
      logo: brand3,
    },
    {
      logo: brand4,
    },
];
const brand_icon_data = [
    {
      logo: brand_m1,
    },
    {
      logo: brand_m2,
    },
    {
      logo: brand_m3,
    },
    {
      logo: brand_m4,
    },
];
export default class FooterLayout extends Component {

    render() {
        return (
            <>
                <Footer>
                    <div className="container">
                        <Row>
                            <Col lg={{span:4, offset:0}} md={{span:4, offset:0}}  xs={{span:20, offset:2}} className="bottom-logo-box" >
                                <img src={logoPic} alt="" />
                                <img src={request} alt="" className="request-img hidden-xl hidden-lg hidden-md" />
                            </Col>
                            <Col lg={{span:5, offset:0}} md={{span:5, offset:0}} xs={{span:13, offset:2}}>
                                    <List>
                                        <List.Item>
                                            <List.Item.Meta title="Lorem Ipsum" />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta title="dolor Sit Amet" />
                                            <span className="hightlight-link">Achtung!</span>
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta title="Crepido Oris" />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta title="Patris Et Fili" />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta title="Nomini Deus" />
                                        </List.Item>
                                    </List>
                            </Col>
                            <Col lg={4} md={4} xs={7}>
                                    <List>
                                        <List.Item>
                                            <List.Item.Meta title="Lorem Ipsum" />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta title="dolor Sit Amet" />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta title="Crepido Oris" />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta title="Patris Et Fili" />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta title="Nomini Deus" />
                                        </List.Item>
                                    </List>
                            </Col>
                            <Col lg={{span:4, offset:0}} md={{span:4, offset:0}}  xs={{span:13, offset:2}}>
                                    <List>
                                        <List.Item>
                                            <List.Item.Meta title="Lorem Ipsum" />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta title="dolor Sit Amet" />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta title="Crepido Oris" />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta title="Patris Et Fili" />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta title="Nomini Deus" />
                                        </List.Item>
                                    </List>
                            </Col>
                            <Col lg={4} md={4} xs={7}>
                                    <List>
                                        <List.Item>
                                            <List.Item.Meta title="Lorem Ipsum" />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta title="dolor Sit Amet" />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta title="Crepido Oris" />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta title="Patris Et Fili" />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta title="Nomini Deus" />
                                        </List.Item>
                                    </List>
                            </Col>
                            <Col lg={2} md={2} xs={2}>
                                <Popover overlayClassName="footer" placement="topRight" title="How can we help?" content={
                                <>
                                    <Form
                                        layout="vertical"
                                        autoComplete="off"
                                        >
                                        <Form.Item
                                            name="url"
                                            label="Hi,there"
                                            >
                                            <TextArea placeholde="Write Something" rows={6} ></TextArea>
                                        </Form.Item>
                                        <Form.Item>
                                            <Button type="primary">Send</Button>
                                        </Form.Item>

                                    </Form>
                                </>
                                } trigger="click">
                                    <img src={request} alt="" className="request-img hidden-sm hidden-xs" />
                                </Popover>

                            </Col>
                        </Row>
                        <Row className="footer-brands">
                            <Col lg={{offset:4, span:12}} md={{offset:3, span:18}} xs={{span:20, offset:2}}>

                                <div className="hidden-sm hidden-xs">
                                    <List
                                        itemLayout="vertical"
                                        dataSource={brand_data}
                                        renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta avatar={<img src={item.logo} alt="" />} />
                                        </List.Item>
                                        )}
                                    />
                                </div>
                                <div className="hidden-xl hidden-lg hidden-md">
                                    <List
                                        itemLayout="vertical"
                                        dataSource={brand_icon_data}
                                        renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta avatar={<img src={item.logo} alt="" />} />
                                        </List.Item>
                                        )}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Footer>

                <div className="bottom-footer">
                    <Footer>
                        <div className="container">
                            <Row>
                                <Col lg={{offset:4,span:9}} xs={14} >
                                    <ul className="copyright-list">
                                        <li className="copyright-list-item">TERMS</li>
                                        <li className="copyright-list-item">PRIVACY</li>
                                        <li className="copyright-list-item">CONTACT</li>
                                    </ul>
                                </Col>
                                <Col lg={10} xs={10} className="social-icons" >
                                    <FacebookFilled />
                                    <LinkedinFilled />
                                    <GithubFilled />
                                    <TwitterSquareFilled />
                                </Col>
                            </Row>
                            <Row>
                                <Col ld={{offset:4,span:14}} xs={24} className="copyright-box">
                                    <Text className="copyright-text hidden-sm hidden-xs">Copyright © 2021 Snjallgögn</Text>
                                    <Text className="copyright-text">Gróska, 101 Reykjavik, Iceland</Text>
                                </Col>
                            </Row>
                        </div>
                    </Footer>
                </div>
            </>
        )
    }
}

