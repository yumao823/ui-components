import { Anchor, Button, Carousel, Col, Collapse, Divider, Image, List, Row, Table, Tabs, Tooltip } from 'antd'
import './Pricing.css'
import Title from 'antd/lib/typography/Title'
import Text from 'antd/lib/typography/Text';
import React, { Component } from 'react'
import pricing_icon1 from '../../assets/images/pricing_icon1.svg';
import pricing_icon2 from '../../assets/images/pricing_icon2.svg';
import pricing_icon3 from '../../assets/images/pricing_icon3.svg';
import pricing_icon4 from '../../assets/images/pricing_icon4.svg';
import panel_icon from '../../assets/images/which-plan.svg';
import free_icon from '../../assets/images/free_icon.svg';
import lite_icon from '../../assets/images/lite_icon.svg';
import premium_icon from '../../assets/images/premium_icon.svg';
import enterprise_icon from '../../assets/images/enterprise_icon.svg';
import Diamonds1 from '../../assets/images/Diamonds1.svg';
import Question from '../../assets/images/Question.svg';
import compare_plans from '../../assets/images/compare_plans.svg';
import p_icon1 from '../../assets/images/p_icon1.svg';
import p_icon2 from '../../assets/images/p_icon2.svg';
import p_icon3 from '../../assets/images/p_icon3.svg';
import p_icon4 from '../../assets/images/p_icon4.svg';
import price_m_icon1 from '../../assets/images/price_m_icon1.svg';
import price_m_icon2 from '../../assets/images/price_m_icon2.svg';
import price_m_icon3 from '../../assets/images/price_m_icon3.svg';
import price_m_icon4 from '../../assets/images/price_m_icon4.svg';
import SignUp from '../../assets/images/SignUp.png';
import next from '../../assets/images/next.svg';
import previous from '../../assets/images/previous.svg';
import { CaretDownFilled, CaretLeftFilled, CaretRightFilled, CaretUpFilled, CheckOutlined, QuestionCircleFilled, UnderlineOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Paragraph from 'antd/lib/typography/Paragraph';

const { TabPane } = Tabs;
const { Panel } = Collapse;

const list_data1 = [
    {
      title: 'Autocomplete and Targetted Search in one',
    },
    {
      title: 'Autocomplete and Targetted Search in one',
    }
];

const columns = [
    {
        title: '',
        dataIndex: 'compare',
        key: 'compare',
        className: 'subheading-col',
    },
    {
        title: () => {
            return (
                <>
                    <div className="compare-head">
                        <div className="box">
                            <Image affix={false} src={p_icon1} />
                            <Title level={3}>Free</Title>
                        </div>                        
                        <Button>Create Account</Button>
                    </div>
                </>
            )
        },
        dataIndex: 'free',
        key: 'free',
        className: 'secondary-col',
    },
    {
        title: () => {
            return (
                <>
                    <div className="compare-head">
                        <div className="box">
                            <Image affix={false} src={p_icon2} />
                            <Title level={3}>Lite</Title>
                        </div>
                        <Button>Sign Up</Button>
                    </div>
                </>
            )
        },
        dataIndex: 'lite',
        key: 'lite',
        className: 'secondary-col',
    },
    {
        title: () => {
            return (
                <>
                    <div className="compare-head premium-head">
                        <div className="box">
                            <Image affix={false} src={p_icon3} />
                            <Title level={3}>Premium</Title>
                        </div>
                        <Button>Free Trial</Button>
                        <Title level={4}>14 Day Free Trial</Title>
                    </div>
                </>
            )
        },
        dataIndex: 'premium',
        key: 'premium',
        className: 'primary-col',
    },
    {
        title: () => {
            return (
                <>
                    <div className="compare-head">
                        <div className="box">
                            <Image affix={false} src={p_icon4} />
                            <Title level={3}>Enterprise</Title>
                        </div>
                        <Button>Get a Demo</Button>
                    </div>
                </>
            )
        },
        dataIndex: 'enterprise',
        key: 'enterprise',
        className: 'secondary-col',
    },

];

const dataSource = [
    {
        key: '1',
        compare: <Title level={3} className="compare-subhead">Suspendisse sollicitudin</Title>,
    },
    {
        key: '2',
        compare:
        <Title level={3} className="compare-subhead-data">Facilisis, lobortis est at, imperdiet risus.
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: 'Super Short note',
        lite: 'Super Short note',
        premium: 'Super Short note',
        enterprise: 'Super Short note',
    },
    {
        key: '3',
        compare:
        <Title level={3} className="compare-subhead-data">Nunc convallis sem et convallis maximus.
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: <CheckOutlined />,
        lite: <CheckOutlined />,
        premium: <CheckOutlined />,
        enterprise: <CheckOutlined />,
    },
    {
        key: '4',
        compare:
        <Title level={3} className="compare-subhead-data">Maecenas eleifend lacus ac felis 
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: '',
        lite: '',
        premium: <CheckOutlined />,
        enterprise: <CheckOutlined />,
    },
    {
        key: '5',
        compare:
        <Title level={3} className="compare-subhead-data">Vivamus quis enim eu odio mollis tempor
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: '',
        lite: '',
        premium: '',
        enterprise: <CheckOutlined />,
    },
    {
        key: '6',
        compare: <Title level={3} className="compare-subhead">Suspendisse eget sapien </Title>,
    },
    {
        key: '7',
        compare: 
        <Title level={3} className="compare-subhead-data">Morbi nec eros feugiat justo
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: <CheckOutlined />,
        lite: <CheckOutlined />,
        premium: <CheckOutlined />,
        enterprise: <CheckOutlined />,
    },
    {
        key: '8',
        compare: 
        <Title level={3} className="compare-subhead-data">Vestibulum ornare urna vitae tortor 
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: '',
        lite: '',
        premium: <CheckOutlined />,
        enterprise: <CheckOutlined />,
    },
    {
        key: '9',
        compare:
        <Title level={3} className="compare-subhead-data">Praesent at dui nec eros finibus consectetur 
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: '',
        lite: '',
        premium: <CheckOutlined />,
        enterprise: <CheckOutlined />,
    },
    {
        key: '10',
        compare: <Title level={3} className="compare-subhead">Quisque iaculis nisi non interdum gravida.</Title>,
    },
    {
        key: '11',
        compare:
        <Title level={3} className="compare-subhead-data">Aliquam eu magna hendrerit, luctus
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: 'Super Short note',
        lite: 'Super Short note',
        premium: 'Super Short note',
        enterprise: 'Super Short note',
    },
    {
        key: '12',
        compare:
        <Title level={3} className="compare-subhead-data">Nunc hendrerit eros quis ante tristique 
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: <CheckOutlined />,
        lite: <CheckOutlined />,
        premium: <CheckOutlined />,
        enterprise: <CheckOutlined />,
    },
    {
        key: '13',
        compare:
        <Title level={3} className="compare-subhead-data">Sed molestie nisi sit amet placerat faucibus
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: '',
        lite: <CheckOutlined />,
        premium: <CheckOutlined />,
        enterprise: 'Super Short note',
    },
    {
        key: '14',
        compare: 
        <Title level={3} className="compare-subhead-data">Ut at ex nec lectus varius sodales 
            <Tooltip title="prompt text">
                <QuestionCircleFilled/>
            </Tooltip>
        </Title>,
        free: '',
        lite: '',
        premium: 'Super Short note',
        enterprise: 'Super Short note',
    },
];

const columns_mobile1 = [
    {
        title: '',
        dataIndex: 'compare',
        key: 'compare',
        className: 'heading-col',
        fixed: 'left',
    },
    {
        title: <Title level={2}>Mensa Usuum</Title>,
        className: 'heading-group',
        children: [
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Haec omnia ineptias</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_1',
                key: 'col_1',
                className: 'secondary-col',
            },
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Is est pulcherrimus</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_2',
                key: 'col_2',
                className: 'secondary-col',
            },
        ]
    },
    
];
const columns_mobile2 = [
    {
        title: '',
        dataIndex: 'compare',
        key: 'compare',
        className: 'heading-col small-icon',
        fixed: 'left',
    },
    {
        title: <Title level={2}>Mensa Usuum</Title>,
        className: 'heading-group',
        children: [
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Haec omnia ineptias</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_3',
                key: 'col_3',
                className: 'secondary-col',
            },
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Haec omnia ineptias</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_4',
                key: 'col_4',
                className: 'secondary-col',
            },
        ]
    }
];
const columns_mobile3 = [
    {
        title: '',
        dataIndex: 'compare',
        key: 'compare',
        className: 'heading-col small-icon',
        fixed: 'left',
    },
    {
        title: <Title level={2}>Mensa Usuum</Title>,
        className: 'heading-group',
        children: [
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Haec omnia ineptias</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_5',
                key: 'col_5',
                className: 'secondary-col',
            },
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Haec omnia ineptias</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_6',
                key: 'col_6',
                className: 'secondary-col',
            },
        ]
    }

];
const columns_mobile4 = [
    {
        title: '',
        dataIndex: 'compare',
        key: 'compare',
        className: 'heading-col small-icon',
        fixed: 'left',
    },
    {
        title: <Title level={2}>Mensa Usuum</Title>,
        className: 'heading-group',
        children: [
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Haec omnia ineptias</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_7',
                key: 'col_7',
                className: 'secondary-col',
            },
            {
                title: () => {
                    return (
                        <>
                            <div className="compare-head">
                                <Title level={4}>Haec omnia ineptias</Title>
                            </div>
                        </>
                    )
                },
                dataIndex: 'col_8',
                key: 'col_8',
                className: 'secondary-col',
            },
        ]
    }

];

const dataSource_mobile = [
    {
        key: '1',
        compare: 
            <div level={3} className="compare-head">
                <Image affix src={price_m_icon1} />
                <Title level={3}>Free</Title>
            </div>,
        col_1: <CheckOutlined />,
        col_2: '',
        col_3: '',
        col_4: '',
        col_5: '',
        col_6: '',
        col_7: '',
        col_8: '',
    },
    {
        key: '2',
        compare:
            <div level={3} className="compare-head">
                <Image affix src={price_m_icon2} />
                <Title level={3}>Lite</Title>
            </div>,
        col_1: <CheckOutlined />,
        col_2: '',
        col_3: '',
        col_4: <CheckOutlined />,
        col_5: <CheckOutlined />,
        col_6: '',
        col_7: <CheckOutlined />,
        col_8: '',
    },
    {
        key: '3',
        compare:
            <div level={3} className="compare-head">
                <Image affix src={price_m_icon3} />
                <Title level={3}>Premium</Title>
            </div>,
        col_1: <CheckOutlined />,
        col_2: <CheckOutlined />,
        col_3: <CheckOutlined />,
        col_4: <CheckOutlined />,
        col_5: <CheckOutlined />,
        col_6: <CheckOutlined />,
        col_7: <CheckOutlined />,
        col_8: <CheckOutlined />,
    },
    {
        key: '4',
        compare:
            <div level={3} className="compare-head">
                <Image affix src={price_m_icon4} />
                <Title level={3}>Enterprise</Title>
            </div>,
        col_1: <CheckOutlined />,
        col_2: <CheckOutlined />,
        col_3: <CheckOutlined />,
        col_4: <CheckOutlined />,
        col_5: <CheckOutlined />,
        col_6: <CheckOutlined />,
        col_7: <CheckOutlined />,
        col_8: <CheckOutlined />,
    },
];


export default class Pricing extends Component {
  render() {
    return (
      <>
        <section className="pricing-main-box">
            <div className="container-fluid">
                <Row>
                    <Col xl={{span:24}} lg={24} md={24} sm={24} xs={24}>
                        <div className="page-title">
                            <Title level={1}>Simple <i>Affordable</i> Pricing</Title>
                        </div>
                    </Col>
                </Row>

                {/* desktop version */}
                <Row gutter={{xl:16, lg:16, md:16, sm:0, xs:0}} className="hidden-xs hidden-sm">
                    <Col xl={6} lg={6} md={12} xs={24}>
                        <div className="price-box first">
                            <Image src={pricing_icon1} alt="pricind" preview={false} />
                            <Title level={2}>Free</Title>
                            <Title level={3}>$0/mo</Title>
                            <Button>Sign Up</Button>
                            <Title level={4}>Included in <Text strong>Free</Text></Title>
                            <Divider />
                            <List>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined className="condition-list-icon" /> }
                                    description="Access to free data"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined className="condition-list-icon" /> }
                                    description="Fair use of QL Knowledge Tools"
                                    />
                                </List.Item>
                            </List>
                            <div className="price-inner-box">
                                <Title level={4}>100 Monthly</Title>
                                <Title level={5}>Query Credits</Title>
                            </div>
                            <Anchor affix={false}>
                                <Link to="/">See Details</Link>
                            </Anchor>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} xs={24}>
                        <div className="price-box">
                            <Image src={pricing_icon2} alt="pricind" preview={false} />
                            <Title level={2}>Lite</Title>
                            <Title level={3}>$25/mo</Title>
                            <Button>Sign Up</Button>
                            <Title level={4}>Included in <Text strong>Lite</Text></Title>
                            <Divider />
                            <div className="inner-light-box">
                                <Title level={4}>All <Text strong>Free</Text> features +</Title>
                            </div>
                            <List>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined className="condition-list-icon" /> }
                                    description="Access to Knowledge Graph API"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined className="condition-list-icon" /> }
                                    description="Detailed Usage Report"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined className="condition-list-icon" /> }
                                    description="Redundancy Guard"
                                    />
                                </List.Item>
                            </List>
                            <div className="price-inner-box">
                                <Title level={4}>100 Monthly</Title>
                                <Title level={5}>Query Credits</Title>
                            </div>
                            <Anchor affix={false}>
                                <Link to="/">See Details</Link>
                            </Anchor>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} xs={24}>
                        <div className="price-box active">
                            <Image src={pricing_icon3} alt="pricind" preview={false} />
                            <Title level={2}>Premium</Title>
                            <Title level={3}>$60/mo</Title>
                            <Button>Sign Up</Button>
                            <Title level={4}>Included in <Text strong>Premium</Text></Title>
                            <Divider />
                            <div className="inner-light-box">
                                <Title level={4}>All <Text strong>Lite</Text> features +</Title>
                            </div>
                            <List>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined/> }
                                    description="Document Enrichment"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined/> }
                                    description="Long Lived Connections"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined/> }
                                    description="Advanced Fuzzy Matching"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined/> }
                                    description="Usage Control"
                                    />
                                </List.Item>
                            </List>
                            <div className="price-inner-box">
                                <Title level={4}>100 Monthly</Title>
                                <Title level={5}>Query Credits</Title>
                            </div>
                            <Anchor affix={false}>
                                <Link to="/">See Details</Link>
                            </Anchor>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} xs={24}>
                        <div className="price-box">
                            <Image src={pricing_icon4} alt="pricind" preview={false} />
                            <Title level={2}>Enterprise</Title>
                            <Title level={3}>$100/mo</Title>
                            <Button>Sign Up</Button>
                            <Title level={4}>Included in <Text strong>Enterprise</Text></Title>
                            <Divider />
                            <div className="inner-light-box">
                                <Title level={4}>All <Text strong>Premium</Text> features +</Title>
                            </div>
                            <List>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined className="condition-list-icon" /> }
                                    description="Bulk Processing:"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined className="condition-list-icon" /> }
                                    description="Provider Selection:"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined className="condition-list-icon" /> }
                                    description="Custom Cost Breakdown:"
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined className="condition-list-icon" /> }
                                    description="Use own provider account:  "
                                    />
                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<CheckOutlined className="condition-list-icon" /> }
                                    description="Customized Results:"
                                    />
                                </List.Item>
                            </List>
                            <div className="price-inner-box">
                                <Title level={4}>100 Monthly</Title>
                                <Title level={5}>Query Credits</Title>
                            </div>
                            <Anchor affix={false}>
                                <Link to="/">See Details</Link>
                            </Anchor>
                        </div>
                    </Col>
                </Row>
                
                {/* mobile version */}
                <Row gutter={{xl:16, xs:0}} type="flex" className="hidden-lg hidden-xl hidden-md">
                    <Col xl={6} sm={24} xs={24}>
                        <Carousel
                         
                            infinite={true}
                            slidesToShow={1}
                            autoplay={false}
                            dots={true}
                            arrows={true}
                            nextArrow={<img src={next} alt="" />}
                            prevArrow={<img src={previous} alt="" />} >
                            <>
                                <div className="price-box">
                                    <Image src={pricing_icon1} alt="pricind" className="main-img" preview={false} />
                                    <Title level={2}>Free</Title>
                                    <Title level={3}>$0/mo</Title>
                                    <Button>Sign Up</Button>
                                </div>
                            </>
                            <>
                                <div className="price-box">
                                    <Image src={p_icon1} alt="pricind" className="main-icon"  preview={false} />
                                    <Divider />
                                    <List>
                                        <List.Item>
                                            <List.Item.Meta
                                            avatar={<CheckOutlined className="condition-list-icon" /> }
                                            description="Access to free data"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                            avatar={<CheckOutlined className="condition-list-icon" /> }
                                            description="Fair use of QL Knowledge Tools"
                                            />
                                        </List.Item>
                                    </List>
                                    <div className="price-inner-box">
                                        <Title level={4}>100 Monthly</Title>
                                        <Title level={5}>Query Credits</Title>
                                    </div>
                                    <Button>Sign Up</Button>
                                </div>
                            </>
                        </Carousel>
                    </Col>
                    <Col xl={6} sm={24} xs={24}>
                        <Carousel 
                           
                            infinite={true}
                            slidesToShow={1}
                            autoplay={false}
                            dots={true}
                            arrows={true}
                            nextArrow={<img src={next} alt="" />}
                            prevArrow={<img src={previous} alt="" />} >
                            <>
                                <div className="price-box">
                                    <Image src={pricing_icon2} alt="pricind" className="main-img" preview={false} />
                                    <Title level={2}>Lite</Title>
                                    <Title level={3}>$25/mo</Title>
                                    <Button>Sign Up</Button>
                                </div>
                            </>
                            <>
                                <div className="price-box">
                                    <Image src={p_icon2} alt="pricind" className="main-icon"  preview={false} />
                                    <Divider />
                                    <div className="inner-light-box">
                                        <Title level={4}>All <Text strong>Free</Text> features +</Title>
                                    </div>
                                    <List>
                                        <List.Item>
                                            <List.Item.Meta
                                            avatar={<CheckOutlined className="condition-list-icon" /> }
                                            description="Access to Knowledge Graph API"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                            avatar={<CheckOutlined className="condition-list-icon" /> }
                                            description="Detailed Usage Report"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                            avatar={<CheckOutlined className="condition-list-icon" /> }
                                            description="Redundancy Guard"
                                            />
                                        </List.Item>
                                    </List>
                                    <div className="price-inner-box">
                                        <Title level={4}>100 Monthly</Title>
                                        <Title level={5}>Query Credits</Title>
                                    </div>
                                </div>
                            </>
                        </Carousel>
                    </Col>
                    <Col xl={6} sm={24} xs={24}>
                        <Carousel 
                            
                            infinite={true}
                            slidesToShow={1}
                            autoplay={false}
                            dots={true}
                            arrows={true}
                            nextArrow={<img src={next} alt="" />}
                            prevArrow={<img src={previous} alt="" />} >
                            <>
                                <div className="price-box active">
                                    <Image src={pricing_icon3} alt="pricind" className="main-img" preview={false} />
                                    <Title level={2}>Premium</Title>
                                    <Title level={3}>$60/mo</Title>
                                    <Button>Sign Up</Button>
                                </div>
                            </>
                            <>
                                <div className="price-box active">
                                    <Image src={p_icon3} alt="pricind" className="main-icon"  preview={false} />
                                    <Divider />
                                    <div className="inner-light-box">
                                        <Title level={4}>All <Text strong>Lite</Text> features +</Title>
                                    </div>
                                    <List>
                                        <List.Item>
                                            <List.Item.Meta
                                            avatar={<CheckOutlined/> }
                                            description="Document Enrichment"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                            avatar={<CheckOutlined/> }
                                            description="Long Lived Connections"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                            avatar={<CheckOutlined/> }
                                            description="Advanced Fuzzy Matching"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                            avatar={<CheckOutlined/> }
                                            description="Usage Control"
                                            />
                                        </List.Item>
                                    </List>
                                    <div className="price-inner-box">
                                        <Title level={4}>100 Monthly</Title>
                                        <Title level={5}>Query Credits</Title>
                                    </div>
                                </div>
                            </>
                        </Carousel>
                    </Col>
                    <Col xl={6} sm={24} xs={24}>
                        <Carousel 
                        
                            infinite={true}
                            slidesToShow={1}
                            autoplay={false}
                            dots={true}
                            arrows={true}
                            nextArrow={<img src={next} alt="" />}
                            prevArrow={<img src={previous} alt="" />} >
                            <>
                                <div className="price-box">
                                    <Image src={pricing_icon4} alt="pricind" className="main-img" preview={false} />
                                    <Title level={2}>Enterprise</Title>
                                    <Title level={3}>$100/mo</Title>
                                    <Button>Sign Up</Button>
                                </div>
                            </>
                            <>
                                <div className="price-box">
                                    <Image src={p_icon4} alt="pricind" className="main-icon"  preview={false} />
                                    <Divider />
                                    <div className="inner-light-box">
                                        <Title level={4}>All <Text strong>Premium</Text> features +</Title>
                                    </div>
                                    <List>
                                        <List.Item>
                                            <List.Item.Meta
                                            avatar={<CheckOutlined className="condition-list-icon" /> }
                                            description="Bulk Processing:"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                            avatar={<CheckOutlined className="condition-list-icon" /> }
                                            description="Provider Selection:"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                            avatar={<CheckOutlined className="condition-list-icon" /> }
                                            description="Custom Cost Breakdown:"
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                            avatar={<CheckOutlined className="condition-list-icon" /> }
                                            description="Use own provider account:  "
                                            />
                                        </List.Item>
                                        <List.Item>
                                            <List.Item.Meta
                                            avatar={<CheckOutlined className="condition-list-icon" /> }
                                            description="Customized Results:"
                                            />
                                        </List.Item>
                                    </List>
                                    <div className="price-inner-box">
                                        <Title level={4}>100 Monthly</Title>
                                        <Title level={5}>Query Credits</Title>
                                    </div>
                                </div>
                            </>
                        </Carousel>
                    </Col>
                </Row>

            </div>
        </section>

        {/* <section className="pricing-panel-bg">
            <div className="container">
                <Row>
                    <Col xl={24} xs={24}>
                        <div className="panel-main-head">
                            <Image src={panel_icon} alt="pricing" preview={false} />
                            <Title level={2}>Which Plan Is Right for You </Title>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xl={24}>
                        <div className="price-panel">
                            <Tabs type="card">
                                <TabPane tab={<><img src={free_icon} /><Text>Free</Text></>} key="1">
                                    <Title level={3}>Free Plan:</Title>
                                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique ultrices enim quis mattis. Maecenas hendrerit, lacus ut tempor egestas, libero arcu finibus velit, in gravida lorem felis non eros. Phasellus cursus ut metus et fringilla. </Text>
                                    <Title level={4}>Included in Our Free Plan:</Title>
                                    <List itemLayout="horizontal" dataSource={list_data1} renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                                            avatar={<CheckOutlined />}
                                            title={item.title}
                                            />
                                        </List.Item>
                                        )}
                                    />
                                    <Title level={5}><Text strong>+ 100 Monthly </Text> Query Credits</Title>
                                    <Button>Sign  Up For Free!</Button>
                                </TabPane>
                                <TabPane tab={<><img src={lite_icon} /><Text>Lite</Text></>} key="2">
                                    <Title level={3}>Lite Plan:</Title>
                                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique ultrices enim quis mattis. Maecenas hendrerit, lacus ut tempor egestas, libero arcu finibus velit, in gravida lorem felis non eros. Phasellus cursus ut metus et fringilla. </Text>
                                    <Title level={4}>Included in Our Free Plan:</Title>
                                    <List itemLayout="horizontal" dataSource={list_data1} renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                                            avatar={<CheckOutlined />}
                                            title={item.title}
                                            />
                                        </List.Item>
                                        )}
                                    />
                                    <Title level={5}><Text strong>+ 100 Monthly </Text> Query Credits</Title>
                                    <Button>Sign  Up For Free!</Button>
                                </TabPane>
                                <TabPane tab={<><img src={premium_icon} /><Text>Premium</Text></>} key="3">
                                    <Title level={3}>Premium Plan:</Title>
                                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique ultrices enim quis mattis. Maecenas hendrerit, lacus ut tempor egestas, libero arcu finibus velit, in gravida lorem felis non eros. Phasellus cursus ut metus et fringilla. </Text>
                                    <Title level={4}>Included in Our Free Plan:</Title>
                                    <List itemLayout="horizontal" dataSource={list_data1} renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                                            avatar={<CheckOutlined />}
                                            title={item.title}
                                            />
                                        </List.Item>
                                        )}
                                    />
                                    <Title level={5}><Text strong>+ 100 Monthly </Text> Query Credits</Title>
                                    <Button>Sign  Up For Free!</Button>
                                </TabPane>
                                <TabPane tab={<><img src={enterprise_icon} /><Text>Enterprise</Text></>} key="4">
                                    <Title level={3}>Enterprise Plan:</Title>
                                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique ultrices enim quis mattis. Maecenas hendrerit, lacus ut tempor egestas, libero arcu finibus velit, in gravida lorem felis non eros. Phasellus cursus ut metus et fringilla. </Text>
                                    <Title level={4}>Included in Our Free Plan:</Title>
                                    <List itemLayout="horizontal" dataSource={list_data1} renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                                            avatar={<CheckOutlined />}
                                            title={item.title}
                                            />
                                        </List.Item>
                                        )}
                                    />
                                    <Title level={5}><Text strong>+ 100 Monthly </Text> Query Credits</Title>
                                    <Button>Sign  Up For Free!</Button>
                                </TabPane>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </div>
        </section> */}
        
        <section className="comparison-bg">
            <div className="container">
                <div className="panel-main-head">
                    <Row>
                        <Col xl={{offset:2,span:4}} md={{offset:2,span:4}} xs={{span:24,offset:0}}>
                            <Image src={compare_plans} alt="pricing" preview={false} />
                        </Col>
                        <Col xl={{offset:1,span:15}} md={{offset:1,span:15}} xs={24}>
                            <Title level={1}>Compare <i>Subscription</i> Plans</Title>
                            <Paragraph className="hidden-xs hidden-sm">Integer hendrerit dolor eget congue fermentum. Sed tincidunt, dui id mattis iaculis, sapien tellus viverra leo, nec consequat odio dui vel .</Paragraph>
                        </Col>
                    </Row>
                </div>
                {/* desktop version */}
                <Row className="hidden-xs hidden-sm">
                    <Col xl={24} xs={24}>
                        <div  className="price-table">
                            <Table pagination={false} columns={columns} dataSource={dataSource} />
                        </div>
                    </Col>
                </Row>
                
                {/* mobile version */}
                <Row className="hidden-lg hidden-xl hidden-md">
                    <Col xl={24} xs={24}>
                        <div className="price-table-mobile">
                            <Carousel
                                infinite={false}
                                slidesToShow={1}
                                autoplay={false}
                                dots={true}
                                effect='fade'
                                arrows={true}
                                nextArrow={<CaretRightFilled/>}
                                prevArrow={<CaretLeftFilled/>} >
                                <div>
                                    <Table pagination={false} columns={columns_mobile1} dataSource={dataSource_mobile} />
                                </div>
                                <div>
                                    <Table pagination={false} columns={columns_mobile2} dataSource={dataSource_mobile} />
                                </div>
                                <div>
                                    <Table pagination={false} columns={columns_mobile3} dataSource={dataSource_mobile} />
                                </div>
                                <div>
                                    <Table pagination={false} columns={columns_mobile4} dataSource={dataSource_mobile} />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>

        <section className="faq-bg">
            <div className="container">
                <div className="panel-main-head">
                    <Row>
                        <Col xl={{offset:2,span:4}} md={{offset:2,span:4}} xs={{span:24,offset:0}}>
                            <Image src={Question} alt="pricing" preview={false} />
                        </Col>
                        <Col xl={{offset:1,span:15}} md={{offset:1,span:15}} xs={24}>
                            <Title level={1}>Frequently <i>asked</i> questions</Title>
                            <Paragraph className="hidden-xs hidden-sm">Integer hendrerit dolor eget congue fermentum. Sed tincidunt, dui id mattis iaculis, sapien tellus viverra leo, nec consequat odio dui vel .</Paragraph>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col xl={24} xs={24}>
                        <Collapse accordion expandIcon={({isActive}) => isActive
                            ? <CaretUpFilled /> 
                            : <CaretDownFilled /> } >
                            <Panel header="Lorem ipsum dolor sit amet" key="1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                            </Panel>
                            <Panel header="Lorem ipsum dolor sit amet" key="2">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                            </Panel>
                            <Panel header="Lorem ipsum dolor sit amet" key="3">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                            </Panel>
                            <Panel header="Lorem ipsum dolor sit amet" key="4">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                            </Panel>
                            <Panel header="Lorem ipsum dolor sit amet" key="5">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                            </Panel>
                            <Panel header="Lorem ipsum dolor sit amet" key="6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
            </div>
        </section>

        <section className="signup-bg">
            <div className="container">
                <Row>
                    <Col xl={{span:18, offset:3}} lg={{offset:2,span:20}} md={{offset:1,span:22}} xs={24}>
                        <div className="box">
                            <Row>
                                <Col xl={{span:12,order:1}} xs={{order:2,span:24}} >
                                    <Title level={3}><b>Sign up</b> now!</Title>
                                    <Title level={4}>And get free access to the only list of  contries you'll  ever need!</Title>
                                    <Button>Sign Me Up!</Button>
                                </Col>
                                <Col xl={{span:12,order:2}} xs={{span:24,order:1}} >
                                    <Image src={SignUp} alt="signup" preview={false} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
      </>
    )
  }
}


