import { Avatar, Badge, Button, Card, Carousel, Col, Comment, Image, List, Row, Space } from 'antd'
import './Home.css'
import Title from 'antd/lib/typography/Title'
import React, { Component } from 'react'
import Javascript from '../../assets/images/language/Javascript.svg';
import Excel from '../../assets/images/language/Excel.svg';
import Python from '../../assets/images/language/Python.svg';
import php_logo from '../../assets/images/language/php-logo.svg';
import GraphQL from '../../assets/images/language/GraphQL.svg';
import C_sharp from '../../assets/images/language/C_sharp.svg';
import R_LG from '../../assets/images/language/R-LG.svg';
import PowerBI from '../../assets/images/language/PowerBI.svg';
import Tiles from '../../assets/images/Tiles.svg';
import search_new from '../../assets/images/search_new.svg';
import compare_plans_sm from '../../assets/images/compare_plans_sm.svg';
import user_icon from '../../assets/images/user_icon.svg';
import hub from '../../assets/images/hub.svg';
import shine from '../../assets/images/shine.svg';
import feature_sources from '../../assets/images/feature-sources.svg';
import rocket from '../../assets/images/rocket.svg';
import next from '../../assets/images/next.svg';
import previous from '../../assets/images/previous.svg';
import Paragraph from 'antd/lib/typography/Paragraph';
import blog1 from '../../assets/images/blog1.svg';
import blog2 from '../../assets/images/blog2.svg';
import blog3 from '../../assets/images/blog3.svg';
import { CheckOutlined, CiCircleFilled, CloseCircleFilled, DotChartOutlined, DownOutlined, EyeOutlined, MessageOutlined, RightOutlined, StarOutlined } from '@ant-design/icons';
import Text from 'antd/lib/typography/Text';
import { Link } from 'react-router-dom';
import SignUp from '../../assets/images/SignUp.png';
import Mission from '../../assets/images/Mission.svg';
import Frame_3342 from '../../assets/images/Frame 3342.svg';
import Frame_3309 from '../../assets/images/Frame 3309.svg';
import wikidata from '../../assets/images/cluster/wikidata.svg';
import world_data from '../../assets/images/cluster/world-data.svg';
import geonames from '../../assets/images/cluster/geonames.svg';
import maps from '../../assets/images/cluster/maps.svg';
import iceland from '../../assets/images/cluster/iceland.svg';
import Tthrsj from '../../assets/images/cluster/Tthrsj.svg';
import infocapital from '../../assets/images/cluster/infocapital.svg';
import Nvidia from '../../assets/images/cluster/Nvidia.svg';
import groska from '../../assets/images/cluster/groska.svg';
import Supernova from '../../assets/images/cluster/Supernova.svg';
import Treehive from '../../assets/images/cluster/Treehive.svg';
import tennin from '../../assets/images/cluster/tennin.svg';
import CIA from '../../assets/images/cluster/CIA.svg';
import sources from '../../assets/images/cluster/sources.svg';
import sources1 from '../../assets/images/cluster/sources1.svg';
import sources2 from '../../assets/images/cluster/sources2.svg';
import oecd from '../../assets/images/cluster/oecd.svg';

const IconText = ({ text }) => (
    <Text>
        {text}
    </Text>
  );
const language_data = [
    {
        logo: Javascript,
    },
    {
        logo: Excel,
    },
    {
        logo: Python,
    },
    {
        logo: PowerBI,
    },
    {
        logo: php_logo,
    },
    {
        logo: R_LG,
    },
    {
        logo: GraphQL,
    },
    {
        logo: C_sharp,
    },
];
const help_data = [
    {
        icon: search_new,
        description: 'Find & Use External Data',
    },
    {
        icon: compare_plans_sm,
        description: 'Publish Open Data',
    },
    {
        icon: compare_plans_sm,
        description: 'Monazite Premium Data',
    },
    {
        icon: compare_plans_sm,
        description: 'Eliminate Data Wrangling',
    },
];
const ql_numbers_data = [
    {
        title: <>10<i>M</i></>,
        description: <>Enities of <b>6268</b> Types in <b>818</b> categories from 154 sources</>,
    },
    {
        title: <>150<i>k</i></>,
        description: 'Streaming-data messages each second',
    },
    {
        title: <>600<i>k</i></>,
        description:<>API calls a minute by <b>12335</b> customers</>,
    },
    {
        title: <>500<i>k</i></>,
        description: <>datasets wtih 15K timeseries & <b>154</b>  datapoints</>,
    },
];
const mission_data = [
    {
      description: 'Democritize Access to Contextual World Data',
    },
    {
      description: 'Eliminated Data Wrangling and Stale Data for Data Professionals',
    },
    {
      description: 'Provide Context On-Demand for Deep Leaning &  Advanced Analytics',
    },
];
export default class QlHome extends Component {
  render() {
    return (
      <>

        {/* hero section */}
        <section className="hero-section">
            <div className="container">
                <Row justify="center" align="middle">
                    <Col md={0} xs={24}>
                        <Title level={1}>External Data <i>at Your Fingertips</i></Title>
                    </Col>
                    <Col md={{span:7,order:1}} xs={{span:24,order:2}}>
                        <Title level={1} className="hidden-xs hidden-sm">External Data <i>at Your Fingertips</i></Title>
                        <Title level={2}>Curated & Linked Data you use Directly from all your Favorite Tools.</Title>
                        <List
                            itemLayout="vertical"
                            dataSource={language_data}
                            renderItem={item => (
                            <List.Item>
                                <List.Item.Meta avatar={<img src={item.logo} alt="" />} />
                            </List.Item>
                            )}
                        />
                    </Col>
                    <Col md={{span:12,offset:1,order:2}} xs={{span:24,order:1}}>
                        <Image src={Tiles} preview={false} alt="" />
                    </Col>
                </Row>
            </div>
        </section>

        {/* help section */}
        <section className="help-section">
            <div className="container">
                <Row>
                    <Col md={24} xs={24}>
                        <div className="box">
                            <Title level={1}>We can help you:</Title>
                            <List
                                grid={{ gutter: 16, xl:4, lg:4, md: 2, sm:1, xs:1 }}
                                dataSource={help_data}
                                renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Image src={item.icon} preview={false} alt="" />}
                                        description={item.description}
                                    />
                                </List.Item>
                                )}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
        
        {/* review section */}
        <section className="review-section">
            <div className="container">
                <Row align="middle" justify="center">
                    <Col md={18} xs={24}>
                        <Comment
                            avatar={<Avatar src={user_icon} alt="Han Solo" />}
                            content={
                                <>
                                    <Title level={1}>
                                    "Quick Lookup's amazing API and the quality data it offers, saved so many of my days. Having access to managed data informs me of the coming winter. I now know something"
                                    </Title>
                                    <Title level={2}>John Snow</Title>
                                    <Title level={3}>Indipendant Meteorologists</Title>
                                </>
                            }
                            />
                    </Col>
                </Row>
            </div>
        </section>

        {/* data hub section */}
        <section className="datahub-section">
            <div className="container">
                <Row>
                    <Col md={7} xs={15}>
                        <Title level={1}>The Quick Lookup <i>Data Hub</i></Title>
                    </Col>
                </Row>
                <Row>
                    <Col md={24}>
                        <Badge.Ribbon text={<><Image src={shine} />Free Lifetime Access If you join us now!</>} color="volcano" placement="start">
                            <Card title="the Best Country API" size="large" >
                                <Row>
                                    <Col md={{span:11,order:1}} xs={{order:2,span:24}}>
                                        <Title level={2} className="hidden-md hidden-lg hidden-xl">the Best Country API</Title>
                                        <Paragraph>
                                            We built this city on rock and roll, and now we offer it to you, for free. We believe in full transparency and following are the numbers that drive us. Please join us as we build the world's primary data source for curated and linked world data, one linked and curated dataset at a time
                                        </Paragraph>
                                    </Col>
                                    <Col md={{span:13,order:2}} xs={{order:1,span:24}}>
                                        <Badge.Ribbon text={<><Image src={shine} /><div><i>FREE ACCESS</i>  For a limited time</div></>} color="volcano" placement="end">
                                            <Image alt="" preview={false} src={hub} />
                                        </Badge.Ribbon>
                                    </Col>
                                </Row>
                            </Card>
                        </Badge.Ribbon>
                    </Col>
                </Row>
            </div>
        </section>

        {/* featured source section */}
        <section className="featured-src-section">
            <div className="container">
                <Row>
                    <Col md={24}>
                        <Card size="large" >
                            <Row>
                                <Col md={11} xs={24}>
                                    <div className="cluster">
                                        <div className="bg" ></div>
                                        <Image preview={false} src={maps} />
                                        <Image preview={false} src={wikidata} />
                                        <Image preview={false} src={world_data} />
                                        <Image preview={false} src={geonames} />
                                        <Image preview={false} src={sources2} />
                                        <Image preview={false} src={oecd} />
                                        <Image preview={false} src={sources} />
                                        <Image preview={false} src={CIA} />
                                        <Image preview={false} src={sources1} />
                                    </div>
                                    {/* <Image alt="" preview={false} src={feature_sources} /> */}
                                </Col>
                                <Col md={{offset:1,span:11}} xs={24}>
                                    <Title level={1}>Featured Sources</Title>
                                    <Paragraph>
                                        Here we could say a few words about our process, how we select the sources, albeit in marketin jargon.   We believe in full transparency and following are the numbers that drive us. Please join us as we build the world's primary data source for curated and linked world data, one linked and curated dataset at a time    
                                    </Paragraph>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>

        {/* getting started section */}
        <section className="getting-start-section">
            <div className="container">
                <Row align="middle" justify="center" >
                    <Col md={{span:11,order:1}} xs={{span:24,order:2}} >
                        <Title><i>We’re just</i> Getting Started </Title>
                        <Paragraph>
                            <p>
                                Yes, we are brand-new and our journey has just started. We believe in full transparency and following are the numbers that drive us.
                            </p>
                            <p>
                                Join us as we build the world's primary data source for curated and linked world data, one linked and curated dataset at a time.
                            </p>
                        </Paragraph>
                        <Button type="primary">SIgn Up Now!</Button>
                    </Col>
                    <Col md={{span:9,offset:1,order:2}} xs={{order:1,span:24}}>
                        <Image src={rocket} alt="" preview={false} />
                    </Col>
                </Row>
            </div>
        </section>

        {/* ql by numbers section */}
        <section className="help-section invert">
            <div className="container">
                <Row justify="center" align="middle">
                    <Col md={24} xs={24}>
                        <div className="box">
                            <Title level={1}>Quick Lookup By the numbers:</Title>
                            <List
                                grid={{ gutter: 16, xl:4, lg:4, md: 2, sm:1, xs:1 }}
                                dataSource={ql_numbers_data}
                                renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={item.title}
                                        description={item.description}
                                    />
                                </List.Item>
                                )}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
        
        {/* mission section */}
        <section className="mission-section">
            <div className="container">
                <Row justify="center" align="middle">
                    <Col md={3} xs={24}>
                        <Image src={Mission} alt="" preview={false} />
                    </Col>
                    <Col md={{offset:1,span:11}} xs={24}>
                        <Title level={1}>Our <i>Mission</i></Title>
                        <div className="ant-simple-list">
                            <List itemLayout="horizontal">
                                {
                                    mission_data &&
                                    mission_data.map((item) => (
                                        <List.Item>
                                            <List.Item.Meta 
                                            description={item.description}
                                            />
                                        </List.Item>
                                    ))
                                } 
                            </List>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>

        {/* blog section */}
        <section className="blogs-bg cards remove-img">
            <div className="container ">
                <Row>
                    <Col xl={24} xs={24}>
                        <Row className="blogs">
                            <Col xl={24}>
                                <div className="blog-main-title">
                                    <Title level={1}>Quality is Baked In</Title>
                                </div> 
                            </Col>
                            <Col xl={24} xs={24}>
                                <Carousel dots={false}
                                    infinite={true}
                                    slidesToShow={3}
                                    autoplay={true}
                                    arrows={false}
                                    nextArrow={<img src={next} alt="" />}
                                    prevArrow={<img src={previous} alt="" />}
                                    responsive={[
                                        {
                                            breakpoint: 1200, // extra large breakpoint
                                            settings: {
                                                slidesToShow: 3,
                                                slidesToScroll: 1
                                            }
                                        },
                                        {
                                            breakpoint: 1199, // large breakpoint
                                            settings: {
                                                slidesToShow: 3,
                                                slidesToScroll: 1
                                            }
                                        },
                                        {
                                            breakpoint: 992, // md breakpoint
                                            settings: {
                                                slidesToShow: 2,
                                                slidesToScroll: 1
                                            }
                                        },
                                        {
                                            breakpoint: 768, // sm breakpoint
                                            settings: {
                                                slidesToShow: 2,
                                                slidesToScroll: 1,
                                                arrows: false
                                            }
                                        },
                                        {
                                            breakpoint: 575, // xs breakpoint
                                            settings: {
                                                slidesToShow: 1,
                                                slidesToScroll: 1,
                                                arrows: false
                                            }
                                        }
                                    ]}>
                                    <div className="item">
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
                                    </div>
                                    <div className="item">
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
                                    </div>
                                    <div className="item">
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
                                    </div>
                                </Carousel>
                            </Col>
                            <Col xl={24} xs={24} className="blog-bottom-desc">
                                <Link to="blogs" className="blog-link">Go To Our Blog <RightOutlined className="blog-link-icon" /> </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </section>

        {/* thanks section */}
        <section className="thanks-section">
            <div className="container">
                <Row justify="center" align="middle">
                    <Col md={9} xs={24}>
                        <Image.PreviewGroup>
                            <Image preview={false} src={wikidata} />
                            <Image preview={false} src={maps} />
                            <Image preview={false} src={geonames} />
                            <Image preview={false} src={world_data} />
                        </Image.PreviewGroup>
                        {/* <Image src={Frame_3342} alt="" preview={false} /> */}
                    </Col>
                    <Col md={{offset:1,span:10}} xs={24}>
                        <Title level={1}>Special <i>Thanks!</i></Title>
                        <Paragraph>
                            <p>Go out to <b>Wikidata, Our World In Data, Open Street Maps, Geonames</b> and all the organizations that publish quality open data. </p>
                            <p>Without them, Quick Lookup would not exists.</p>
                        </Paragraph>
                    </Col>
                </Row>
            </div>
        </section>

        {/* investor section */}
        <section className="investor-section">
            <div className="container">
                <Row justify="center" align="middle">
                    <Col md={{span:9,order:1}} xs={{order:2,span:24}}>
                        <Title level={1}>Investors, <i>Accellerators </i> & Grants</Title>
                        <Paragraph>General text praesent mattis ante a vulputate porttitor. Nunc rhoncus ut sem eget volutpat. Pellentesque lobortis gravida blandit. Praesent nisi enim, dictum eget tellus euismod, condimentum bibendum quam. </Paragraph>
                    </Col>
                    <Col md={{offset:1,span:10,order:2}} xs={{span:24,order:1}}>
                        {/* <Image src={Frame_3309} alt="" preview={false} /> */}
                        <div className="cluster">
                            <Image preview={false} src={iceland} />
                            <Image preview={false} src={tennin} />
                            <Image preview={false} src={Tthrsj} />
                            <Image preview={false} src={Supernova} />
                            <Image preview={false} src={Treehive} />
                            <Image preview={false} src={groska} />
                            <Image preview={false} src={Nvidia} />
                            <Image preview={false} src={infocapital} />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>

      </>
    )
  }
}
