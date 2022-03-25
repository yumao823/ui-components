import React, { Component } from 'react'
import { Anchor, Button, Carousel, Col, Divider, Image,  List,  Row, Select, Form, Input, Card, Breadcrumb } from 'antd'
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
export default class BlogSingle extends Component {
    componentDidMount = () => window.scrollTo(0, 0);
    render() {
    return (
        <>
        <section className="blog-pg cards">
            <div className="container">
                <Row>
                    <Col xl={24} xs={24}>
                        <Breadcrumb>
                            <Breadcrumb.Item>Guick Lookup  </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link to="/blogs" >Blog</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="active">Data Curation Excellence</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                    <Col xl={24}>                                   
                        <Card  title={<><Text type="secondary">Aug 3 - 5 min</Text><Title>Data Curation Excellence</Title><Title level={5}>Our Manifesto</Title></>} className="featured card-single" cover={<img alt="blog" src={blog1} />} actions={[
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
                            <div className="blog-desc">
                                <Paragraph>
                                    <p>Maecenas consectetur in libero nec varius. Quisque molestie tortor ut leo luctus tempus. Suspendisse mattis consequat justo, a consectetur elit mollis sit amet. Suspendisse vel lorem libero. Proin id pulvinar leo, eu auctor felis. Mauris auctor bibendum tortor, vel blandit mi dapibus eu. Phasellus interdum ut lectus at elementum. Nullam volutpat euismod tortor in pulvinar. Maecenas eu libero tempor, molestie lectus eu, elementum felis.</p>
                                    <p>Praesent tristique facilisis arcu, et pharetra dui blandit sed. Fusce molestie luctus turpis, et sagittis justo maximus eu. Aliquam faucibus erat in massa hendrerit, ut fermentum magna ullamcorper. Nullam elementum non odio rutrum vehicula. Quisque sit amet orci ut elit venenatis egestas vel vitae urna. Aliquam erat volutpat. Suspendisse eu mollis velit, dignissim consequat eros. Pellentesque eget erat fringilla, pretium augue nec, pulvinar neque. Quisque ac euismod erat. Duis et magna blandit, maximus metus ut, mattis lectus. In diam augue, rutrum vitae nisl ut, iaculis pellentesque enim. Aliquam risus quam, posuere vitae tincidunt eu, pellentesque a tellus. Pellentesque mattis purus eu diam rutrum fermentum.</p>
                                    <p>Curabitur sollicitudin eget nisi eu rutrum. Praesent pellentesque congue mauris at egestas. Quisque auctor turpis tellus, eget malesuada lectus auctor vitae. Vivamus nisl sapien, convallis ac hendrerit non, imperdiet eu magna. Sed magna diam, consequat et feugiat vitae, tempus a felis. Duis faucibus gravida laoreet. Vestibulum malesuada eros a ante tristique accumsan eget eu tortor. Integer metus orci, elementum eu lacinia quis, ultricies non elit. Nam ut tincidunt dui. Praesent et quam eget risus fermentum placerat eu non sem. Sed a ante lacinia, consectetur nisi vitae, vestibulum dui. Proin viverra, enim vitae faucibus vestibulum, est ex fringilla mi, at rhoncus orci ligula vitae nulla. Maecenas pellentesque diam a viverra vehicula. Ut at laoreet purus.</p>
                                    <i>Pellentesque fringilla </i>
                                    <p>Maecenas convallis mi quis enim congue ultrices. Mauris at tortor sit amet ligula ullamcorper mollis. Praesent posuere sapien eget convallis venenatis. Pellentesque nulla nisl, imperdiet a enim at, faucibus varius justo. Proin blandit mi sit amet nisl volutpat feugiat. Donec ornare mauris a tempor dictum. Proin mi turpis, condimentum id turpis ac, pharetra pretium sapien. Pellentesque fringilla mi vel magna mattis consectetur. Nam consectetur, libero ac accumsan commodo, nibh ante venenatis tortor, eu lacinia ipsum urna vitae magna. Mauris dignissim, enim sit amet viverra bibendum, sem nunc molestie arcu, et lobortis mi nisl id turpis. Fusce ultricies porttitor vestibulum. Vestibulum sit amet nibh lobortis, aliquam velit vel, commodo neque.</p>
                                    <p>Aliquam lobortis lobortis gravida. Donec dapibus non urna nec maximus. Fusce nec ex risus. Suspendisse imperdiet, turpis vel finibus iaculis, augue metus posuere ligula, in ullamcorper nunc diam quis diam. Aliquam euismod luctus hendrerit. Suspendisse odio orci, auctor sed ex in, convallis vestibulum arcu. Etiam maximus mauris velit, in malesuada diam rutrum in. Praesent interdum venenatis tortor, mattis accumsan dolor facilisis id. Fusce ut ex scelerisque, dapibus est ut, dictum nulla. Proin vel vestibulum ipsum, quis pharetra massa. Donec malesuada est diam, vel pharetra quam ullamcorper vel. Proin aliquet, leo et luctus venenatis, diam purus cursus ipsum, quis pharetra tellus lacus et velit. Suspendisse urna ex, mollis tincidunt lectus ultrices, finibus interdum massa. Etiam eget ante diam. Etiam accumsan ipsum ornare, euismod neque eu, gravida ex.</p>
                                    <p>Donec consequat faucibus dolor, a volutpat elit congue at. Suspendisse ullamcorper justo id tortor placerat fringilla. Proin congue lacus leo, sed faucibus orci dapibus quis. Suspendisse at lacinia orci. Donec blandit elit sed est hendrerit, at elementum risus ultrices. Pellentesque ultrices dolor ut lectus tincidunt volutpat. Aliquam ut rutrum justo, at posuere metus. Donec venenatis eu ipsum aliquam faucibus. Nunc bibendum viverra sem, sit amet aliquet justo lobortis vel.</p>
                                    <i>Aenean rhoncus sed velit</i>
                                    <p>Nullam vel dui quis ex pulvinar blandit. Aenean rhoncus sed velit sit amet sollicitudin. Integer iaculis, libero eget hendrerit rhoncus, orci lacus rhoncus nisl, ut congue velit velit a nulla. Suspendisse vulputate pellentesque mi, nec facilisis ante eleifend eget. Aliquam pulvinar, dolor id pellentesque iaculis, leo dolor mollis neque, nec sodales tellus sapien quis purus. Ut gravida efficitur nunc, at sollicitudin ligula blandit pretium. Morbi volutpat tempor nisl vitae aliquam. Duis bibendum dui ut elit auctor, sed lobortis lectus bibendum. Aenean sit amet volutpat lorem, ac sollicitudin risus. Aliquam pretium tempor dignissim.</p>
                                    <p>Maecenas tincidunt tellus non tempor lobortis. Vivamus dui eros, iaculis sed sem ut, rutrum tempor dolor. Cras ullamcorper placerat lacinia. Nullam hendrerit, massa sed malesuada commodo, orci nisi tristique sem, ut efficitur enim nunc a mauris. Morbi in aliquet justo. Nunc suscipit nibh eu hendrerit aliquet. Ut enim libero, ullamcorper non pulvinar eu, mollis at elit.</p>
                                    <i>Aenean rhoncus sed velit</i>
                                    <p>Maecenas convallis mi quis enim congue ultrices. Mauris at tortor sit amet ligula ullamcorper mollis. Praesent posuere sapien eget convallis venenatis. Pellentesque nulla nisl, imperdiet a enim at, faucibus varius justo. Proin blandit mi sit amet nisl volutpat feugiat. Donec ornare mauris a tempor dictum. Proin mi turpis, condimentum id turpis ac, pharetra pretium sapien. Pellentesque fringilla mi vel magna mattis consectetur. Nam consectetur, libero ac accumsan commodo, nibh ante venenatis tortor, eu lacinia ipsum urna vitae magna. Mauris dignissim, enim sit amet viverra bibendum, sem nunc molestie arcu, et lobortis mi nisl id turpis. Fusce ultricies porttitor vestibulum. Vestibulum sit amet nibh lobortis, aliquam velit vel, commodo neque.</p>
                                    <p>Aliquam lobortis lobortis gravida. Donec dapibus non urna nec maximus. Fusce nec ex risus. Suspendisse imperdiet, turpis vel finibus iaculis, augue metus posuere ligula, in ullamcorper nunc diam quis diam. Aliquam euismod luctus hendrerit. Suspendisse odio orci, auctor sed ex in, convallis vestibulum arcu. Etiam maximus mauris velit, in malesuada diam rutrum in. Praesent interdum venenatis tortor, mattis accumsan dolor facilisis id. Fusce ut ex scelerisque, dapibus est ut, dictum nulla. Proin vel vestibulum ipsum, quis pharetra massa. Donec malesuada est diam, vel pharetra quam ullamcorper vel. Proin aliquet, leo et luctus venenatis, diam purus cursus ipsum, quis pharetra tellus lacus et velit. Suspendisse urna ex, mollis tincidunt lectus ultrices, finibus interdum massa. Etiam eget ante diam. Etiam accumsan ipsum ornare, euismod neque eu, gravida ex.</p>
                                    <p>Donec consequat faucibus dolor, a volutpat elit congue at. Suspendisse ullamcorper justo id tortor placerat fringilla. Proin congue lacus leo, sed faucibus orci dapibus quis. Suspendisse at lacinia orci. Donec blandit elit sed est hendrerit, at elementum risus ultrices. Pellentesque ultrices dolor ut lectus tincidunt volutpat. Aliquam ut rutrum justo, at posuere metus. Donec venenatis eu ipsum aliquam faucibus. Nunc bibendum viverra sem, sit amet aliquet justo lobortis vel.</p>
                                </Paragraph>
                            </div>
                        </Card> 
                    </Col>
                </Row>
                <Row>
                    <Col xl={24} xs={24}>
                        <Breadcrumb>
                            <Breadcrumb.Item>Recent Posts</Breadcrumb.Item>
                        </Breadcrumb>
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
                </Row>
            </div>
            <div className="overlay"></div>
        </section>
    </>
                    
    )
  }
}
