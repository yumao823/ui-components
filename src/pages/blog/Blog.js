import React, { Component } from 'react'
import { Anchor, Button, Carousel, Col, Divider, Image,  List,  Row, Select, Form, Input, Card, PageHeader } from 'antd'
import './Blog.css'
import { CheckOutlined, EyeOutlined, MessageOutlined, RightOutlined, SearchOutlined, StarOutlined } from '@ant-design/icons';
import blog1 from '../../assets/images/blog1.svg';
import blog2 from '../../assets/images/blog2.svg';
import blog3 from '../../assets/images/blog3.svg';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import Paragraph from 'antd/lib/typography/Paragraph';
import { Link } from 'react-router-dom';

const IconText = ({ text }) => (
    <Text>
        {text}
    </Text>
);
export default class Blog extends Component {
    componentDidMount = () => window.scrollTo(0, 0);

    render() {
        return (
        <>
            <section className="blog-pg cards">
                <div className="container">
                    <Row>
                        <Col xl={24} xs={24}>
                            <PageHeader
                                title="News & Blog"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={24} lg={24} xs={24}>    
                            <Card  className="featured" cover={<img alt="blog" src={blog1} />} actions={[
                                [
                                    <div>
                                        <IconText text="20"/>
                                        <EyeOutlined key="view" />
                                    </div>,
                                    <div className="comments">
                                        <IconText text="0"/>
                                        <MessageOutlined key="message" />
                                    </div>
                                ],
                                <StarOutlined key="favorite" />,
                                ]}>
                                <div className="hidden-xs">
                                    <Text type="primary">Lorem ipsum Dorum</Text>
                                    <Text type="secondary">Aug 3 - 5 min</Text>
                                </div>
                                <Title level={4}>Data Curation Excellence</Title>
                                <Title level={5}>Our Manifesto</Title>
                                <div className="hidden-xs blog-desc">
                                    <Paragraph>Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue eget. Duis vel justo ac lectus pharetra viverra sit amet nec dolor. Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue eget. Duis vel justo ac lectus pharetra viverra sit amet nec dolor. Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue eget. Duis vel justo ac lectus pharetra viver</Paragraph>
                                </div>
                                <div className="read-more">
                                    <Link to="/blog-single">Read more</Link>
                                </div>
                            </Card> 
                        </Col>

                        <Col xl={8} lg={8} md={8} sm={12} xs={24}>  
                            <Card cover={<img alt="blog" src={blog1} />} actions={[
                                [
                                    <div>
                                        <IconText text="20"/>
                                        <EyeOutlined key="view" />
                                    </div>,
                                    <div className="comments">
                                        <IconText text="0"/>
                                        <MessageOutlined key="message" />
                                    </div>
                                ],
                                <StarOutlined key="favorite" />,
                                ]}>
                                <div className="hidden-xs">
                                    <Text type="primary">Lorem ipsum Dorum</Text>
                                    <Text type="secondary">Aug 3 - 5 min</Text>
                                </div>
                                <Title level={4}>Data Curation Excellence</Title>
                                <Title level={5}>Our Manifesto</Title>
                                <div className="hidden-xs blog-desc">
                                    <Paragraph>Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue eget. Duis vel justo ac lectus pharetra viverra sit amet nec dolor. Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue.</Paragraph>
                                </div>
                            </Card> 
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={12} xs={24}>
                            <Card cover={<img alt="blog" src={blog2} />} actions={[
                                [
                                    <div>
                                        <IconText text="20"/>
                                        <EyeOutlined key="view" />
                                    </div>,
                                    <div className="comments">
                                        <IconText text="0"/>
                                        <MessageOutlined key="message" />
                                    </div>
                                ],
                                <StarOutlined key="favorite" />,
                                ]}>
                                <div className="hidden-xs">
                                    <Text type="primary">Lorem ipsum Dorum</Text>
                                    <Text type="secondary">Aug 3 - 5 min</Text>
                                </div>
                                <Title level={4}>Avoiding Stale Data</Title>
                                <Title level={5}>Our Manifesto</Title>
                                <div className="hidden-xs blog-desc">
                                    <Paragraph>Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue eget. Duis vel justo ac lectus pharetra viverra sit amet nec dolor. Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue.</Paragraph>
                                </div>
                            </Card>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={12} xs={24}>
                            <Card cover={<img alt="blog" src={blog3} />} actions={[
                                [
                                    <div>
                                        <IconText text="20"/>
                                        <EyeOutlined key="view" />
                                    </div>,
                                    <div className="comments">
                                        <IconText text="0"/>
                                        <MessageOutlined key="message" />
                                    </div>
                                ],
                                <StarOutlined key="favorite" />,
                                ]}>
                                <div className="hidden-xs">
                                    <Text type="primary">Lorem ipsum Dorum</Text>
                                    <Text type="secondary">Aug 3 - 5 min</Text>
                                </div>
                                <Title level={4}>Simple Use</Title>
                                <Title level={5}>Our Manifesto</Title>
                                <div className="hidden-xs blog-desc">
                                    <Paragraph>Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue eget. Duis vel justo ac lectus pharetra viverra sit amet nec dolor. Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue.</Paragraph>
                                </div>
                            </Card>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={12} xs={24}>
                            <Card cover={<img alt="blog" src={blog2} />} actions={[
                                [
                                    <div>
                                        <IconText text="20"/>
                                        <EyeOutlined key="view" />
                                    </div>,
                                    <div className="comments">
                                        <IconText text="0"/>
                                        <MessageOutlined key="message" />
                                    </div>
                                ],
                                <StarOutlined key="favorite" />,
                                ]}>
                                <div className="hidden-xs">
                                    <Text type="primary">Lorem ipsum Dorum</Text>
                                    <Text type="secondary">Aug 3 - 5 min</Text>
                                </div>
                                <Title level={4}>Avoiding Stale Data</Title>
                                <Title level={5}>Our Manifesto</Title>
                                <div className="hidden-xs blog-desc">
                                    <Paragraph>Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue eget. Duis vel justo ac lectus pharetra viverra sit amet nec dolor. Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue.</Paragraph>
                                </div>
                            </Card>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={12} xs={24}>  
                            <Card cover={<img alt="blog" src={blog1} />} actions={[
                                [
                                    <div>
                                        <IconText text="20"/>
                                        <EyeOutlined key="view" />
                                    </div>,
                                    <div className="comments">
                                        <IconText text="0"/>
                                        <MessageOutlined key="message" />
                                    </div>
                                ],
                                <StarOutlined key="favorite" />,
                                ]}>
                                <div className="hidden-xs">
                                    <Text type="primary">Lorem ipsum Dorum</Text>
                                    <Text type="secondary">Aug 3 - 5 min</Text>
                                </div>
                                <Title level={4}>Data Curation Excellence</Title>
                                <Title level={5}>Our Manifesto</Title>
                                <div className="hidden-xs blog-desc">
                                    <Paragraph>Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue eget. Duis vel justo ac lectus pharetra viverra sit amet nec dolor. Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue.</Paragraph>
                                </div>
                            </Card> 
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={12} xs={24}>
                            <Card cover={<img alt="blog" src={blog3} />} actions={[
                                [
                                    <div>
                                        <IconText text="20"/>
                                        <EyeOutlined key="view" />
                                    </div>,
                                    <div className="comments">
                                        <IconText text="0"/>
                                        <MessageOutlined key="message" />
                                    </div>
                                ],
                                <StarOutlined key="favorite" />,
                                ]}>
                                <div className="hidden-xs">
                                    <Text type="primary">Lorem ipsum Dorum</Text>
                                    <Text type="secondary">Aug 3 - 5 min</Text>
                                </div>
                                <Title level={4}>Simple Use</Title>
                                <Title level={5}>Our Manifesto</Title>
                                <div className="hidden-xs blog-desc">
                                    <Paragraph>Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue eget. Duis vel justo ac lectus pharetra viverra sit amet nec dolor. Aenean ac cursus nisl. Pellentesque sit amet mauris ipsum. Etiam luctus auctor odio, sed vulputate lorem congue.</Paragraph>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="overlay"></div>
            </section>
        </>
        )
    }
}
