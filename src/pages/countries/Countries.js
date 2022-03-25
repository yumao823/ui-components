import {
  Button,
  Carousel,
  Col,
  Divider,
  Image,
  List,
  Row,
  Select,
  Form,
  Input,
  Menu,
  Card,
  message,
  Modal,
  Popover,
  Tag,
} from "antd";

import "./Countries.css";
import React, { Component } from "react";

import {
  CheckOutlined,
  EyeOutlined,
  MessageOutlined,
  RightOutlined,
  SearchOutlined,
  StarOutlined,
} from "@ant-design/icons";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";
import TagCloud from "react-tag-cloud";

import Analytical_Tools from "../../assets/images/Analytical Tools.svg";
import award from "../../assets/images/award.svg";
import BI_Systems from "../../assets/images/BI Systems.svg";
import blog1 from "../../assets/images/blog1.svg";
import blog2 from "../../assets/images/blog2.svg";
import blog3 from "../../assets/images/blog3.svg";
import c_sharp from "../../assets/images/C_sharp.svg";
import clock from "../../assets/images/clock.svg";
import Data_Pipelines from "../../assets/images/Data Pipelines.svg";
import dbpedia from "../../assets/images/dbpedia.svg";
import denominate1 from "../../assets/images/denominate1.svg";
import denominate2 from "../../assets/images/denominate2.svg";
import DkShape from "../../assets/images/flag.svg";
import down_arrow from "../../assets/images/Down-chevron-orange.svg";
import eurostat from "../../assets/images/eurostat.svg";
import excel from "../../assets/images/excel.svg";
import flag from "../../assets/images/flag.svg";
import FlagIcon1 from "../../assets/images/flag.svg";
import FlagIcon2 from "../../assets/images/flag.svg";
import FlagIcon3 from "../../assets/images/flag.svg";
import FlagIcon4 from "../../assets/images/flag.svg";
import gid_icon from "../../assets/images/GiD Icon.svg";
import Gid_icon_white from "../../assets/images/Gid-icon.svg";
import gid_logo from "../../assets/images/GID-Logo-LG.svg";
import globe_img from "../../assets/images/globe.svg";
import GraphQL from "../../assets/images/GraphQL.svg";
import Handshake from "../../assets/images/Handshake.svg";
import heart from "../../assets/images/heart.png";
import iso from "../../assets/images/iso.svg";
import Javascript from "../../assets/images/Javascript.png";
import link_icon from "../../assets/images/link_icon.svg";
import linked_data from "../../assets/images/linked_inner.svg";
import map from "../../assets/images/map.svg";
import next from "../../assets/images/next.svg";
import noun from "../../assets/images/noun.svg";
import OECD_logo_new from "../../assets/images/OECD_logo_new.svg";
import openstreetmaps from "../../assets/images/openstreetmaps.svg";
import php from "../../assets/images/php.svg";
import power_bi from "../../assets/images/power_bi.svg";
import premium from "../../assets/images/premium.svg";
import previous from "../../assets/images/previous.svg";
import Python from "../../assets/images/Python.svg";
import r_lg from "../../assets/images/r_lg.svg";
import resource1 from "../../assets/images/resource1.png";
import resource2 from "../../assets/images/resource2.png";
import resource3 from "../../assets/images/resource3.png";
import resource4 from "../../assets/images/resource4.png";
import RLG from "../../assets/images/RLG.svg";
import s_logo from "../../assets/images/s-logo.svg";
import search_red from "../../assets/images/search-red.svg";
import search from "../../assets/images/search.svg";
// import SeShape from '../../assets/images/SeShape.svg';
import SignUp from "../../assets/images/SignUp.png";
import Snjallgogn from "../../assets/images/Snjallgogn.svg";
import source1 from "../../assets/images/source1.svg";
import source2 from "../../assets/images/source2.svg";
import source3 from "../../assets/images/source3.svg";
import Spreadsheets from "../../assets/images/Spreadsheets.svg";
import sun_w from "../../assets/images/sun-w.svg";
import sun from "../../assets/images/sun.svg";
import sunrise from "../../assets/images/sunrise.svg";
import sunset from "../../assets/images/sunset (1).svg";
import sunset_graph from "../../assets/images/sunset.svg";
import The_World_Bank_logo from "../../assets/images/The_World_Bank_logo.svg";
import thunder from "../../assets/images/thunder.svg";
import timer from "../../assets/images/timer.svg";
import UN from "../../assets/images/UN.svg";
import video from "../../assets/images/video.svg";
import web1 from "../../assets/images/web1.svg";
import web2 from "../../assets/images/web2.svg";
import web3 from "../../assets/images/web3.svg";
import web4 from "../../assets/images/web4.svg";
import wikidata from "../../assets/images/wikidata.svg";
import wikipedia from "../../assets/images/wikipedia.svg";
import CurrencyStatistics from "./CurrencyStatistics";
import Datatable from "./Datatable";
import Statistics from "./Statistics";

const { TextArea } = Input;
const IconText = ({ text }) => <Text>{text}</Text>;
const { Option } = Select;
const list_data = [
  {
    title: "Autocomplete and Targetted Search in one",
  },
  {
    title: "Autocomplete and Targetted Search in one",
  },
  {
    title: "Autocomplete and Targetted Search in one",
  },
  {
    title: "Autocomplete and Targetted Search in one",
  },
];
const vertical_list_data = [
  {
    logo: UN,
  },
  {
    logo: OECD_logo_new,
  },
  {
    logo: The_World_Bank_logo,
  },
];
const sources_data = [
  {
    logo: globe_img,
    title: "Geonames",
  },
  {
    logo: openstreetmaps,
    title: "Open Street Maps",
  },
  {
    logo: dbpedia,
    title: "db Pedia",
  },
  {
    logo: wikipedia,
    title: "Wikipedia",
  },
  {
    logo: wikidata,
    title: "Wikidata",
  },
  {
    logo: eurostat,
    title: "Eurostat",
  },
];
const vertical_icon_list_data = [
  {
    logo: source1,
  },
  {
    logo: source2,
  },
  {
    logo: source3,
  },
];
const plugin_tools_data = [
  {
    logo: excel,
  },
  {
    logo: power_bi,
  },
  {
    logo: r_lg,
  },
];
const language_data = [
  {
    logo: Javascript,
  },
  {
    logo: Python,
  },
  {
    logo: php,
  },
  {
    logo: RLG,
  },
  {
    logo: GraphQL,
  },
  {
    logo: c_sharp,
  },
];
const api_data = [
  {
    logo: Spreadsheets,
    title: "Spreadsheets",
  },
  {
    logo: Analytical_Tools,
    title: "Analytical Tools",
  },
  {
    logo: BI_Systems,
    title: "BI Systems",
  },
  {
    logo: Data_Pipelines,
    title: "Data Pipelines",
  },
];
const uuid_data = [
  {
    heading: "ISO3166 ",
    description: "ISO3166 DK DK DEN DAN 245",
  },
  {
    description: "ISO3166 DK DK DEN DAN 245",
  },
  {
    description: "ISO3166 DK DK DEN DAN 245",
  },
  {
    description: "ISO3166 DK DK DEN DAN 245",
  },
  {
    description: "ISO3166 DK DK DEN DAN 245",
  },
  {
    description: "ISO3166 DK DK DEN DAN 245",
  },
  {
    description: "ISO3166 DK DK DEN DAN 245",
  },
  {
    description: "ISO3166 DK DK DEN DAN 245",
  },
];
const condition_data = [
  {
    description: "Register properly",
  },
  {
    description: "User the same access or  API Key when using the service",
  },
  {
    description:
      "Do not leach or copy the data (the API access is much better anyways)",
  },
  {
    description: "Heavy, production-based, use should use a paid plan.",
  },
];
const source_resource_data = [
  {
    logo: globe_img,
    title: "BabelNet",
    description: "Duis ex nisi, semper ac malesuada eu, sodales vitae dolor.",
  },
  {
    logo: dbpedia,
    title: "db Pedia",
    description: "Pellentesque rhoncus congue semper. ",
  },
  {
    logo: wikipedia,
    title: "Wikipedia",
    description: "Proin ipsum nunc, blandit ac elit.",
  },
];
const tagcloud_data = [
  {
    name: "Danemarc",
  },
  {
    name: "Denmark",
  },
  {
    name: "丹麦",
  },
  {
    name: "Denmark",
  },
  {
    name: "Danemarc",
  },
  {
    name: "Дания",
  },
  {
    name: "Denmark",
  },
  {
    name: "Дания",
  },
  {
    name: "Danska",
  },
  {
    name: "Denmark",
  },
  {
    name: "Danimarka",
  },
  {
    name: "Danimarca",
  },
  {
    name: "Dinamarka",
  },
  {
    name: "Danimarka",
  },
  {
    name: "丹麦",
  },
  {
    name: "Danska",
  },
  {
    name: "Dánsko",
  },
  {
    name: "Denmark",
  },
  {
    name: "Дания",
  },
  {
    name: "Danemarc",
  },
  {
    name: "Denmark",
  },
  {
    name: "Danish",
  },
  {
    name: "Данска",
  },
  {
    name: "Danish",
  },
  {
    name: "Danska",
  },
  {
    name: "丹麦",
  },
  {
    name: "Denmark",
  },
  {
    name: "Danish",
  },
  {
    name: "Danemarc",
  },
  {
    name: "Dánia",
  },
  {
    name: "Denmark",
  },
  {
    name: "Taani",
  },
  {
    name: "Дания",
  },
  {
    name: "Danemarc",
  },
  {
    name: "Denmark",
  },
  {
    name: "Denmark",
  },
  {
    name: "Taani",
  },
  {
    name: "Дания",
  },
  {
    name: "Danemarc",
  },
  {
    name: "Denmark",
  },
  {
    name: "Denmark",
  },
  {
    name: "Taani",
  },
  {
    name: "Дания",
  },
  {
    name: "Danemarc",
  },
  {
    name: "Данска",
  },
  {
    name: "Denmark",
  },
  {
    name: "Taani",
  },
  {
    name: "Denmark",
  },
  {
    name: "Danish",
  },
  {
    name: "Danemarc",
  },
  {
    name: "Denmark",
  },
];
const denomination_list_data1 = [
  {
    value: "1000 kr.",
  },
  {
    value: "500 kr.",
  },
  {
    value: "200 kr.",
  },
  {
    value: "100 kr.",
  },
  {
    value: "50 kr.",
  },
];
const denomination_list_data2 = [
  {
    value: "20 kr.",
  },
  {
    value: "10 kr.",
  },
  {
    value: "5 kr.",
  },
  {
    value: "2 kr.",
  },
  {
    value: "1 kr.",
  },
  {
    value: "50 öre",
  },
];
const currency_list_data = [
  {
    title: "Danish Krone",
    year: " - 1939",
    description: "Lorem  dolor Amet, Liberate Me Ex Inferis",
  },
  {
    title: "Deutsche Mark",
    year: "1939 -1945",
    description: "Lorem  dolor Amet, Liberate Me Ex Inferis",
  },
  {
    title: "Danish Krone",
    year: "1945 - ",
    description: "Lorem  dolor Amet, Liberate Me Ex Inferis",
  },
];

const info = () => {
  message.open("Thank four Your Suggestion", 60);
};
export default class Home extends Component {
  state = {
    current: "mail",
    modal1Visible: false,
    modal2Visible: false,
    modal3Visible: false,
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  setModal3Visible(modal3Visible) {
    this.setState({ modal3Visible });
  }

  render() {
    const { current } = this.state;

    return (
      <>
        <section>
          <div className="location-navbar">
            <Row justify="end" gutter={16}>
              <Col>
                Pretend my location &nbsp;
                <Select
                  defaultValue="English"
                  size="small"
                  className="language-dropdown"
                >
                  <Option value="English">
                    <Image src={flag} preview={false} />
                  </Option>
                  <Option value="French">
                    <Image src={flag} preview={false} />
                  </Option>
                  <Option value="Spanish">
                    <Image src={flag} preview={false} />
                  </Option>
                </Select>
              </Col>
              <Col>
                Pretend my native language is
                <Select
                  defaultValue="English"
                  size="small"
                  className="language-dropdown"
                >
                  <Option value="English">English</Option>
                  <Option value="French">French</Option>
                  <Option value="Spanish">Spanish</Option>
                </Select>
              </Col>
            </Row>
          </div>
        </section>

        {/* banner slider section */}
        <section className="banner-section">
          <div className="container-fluid">
            <Carousel
              dots={false}
              infinite
              slidesToShow={1}
              autoplay={false}
              arrows
              nextArrow={<img src={next} alt="" />}
              prevArrow={<img src={previous} alt="" />}
              responsive={[
                {
                  breakpoint: 1200, // tablet breakpoint
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 700, // mobile breakpoint
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                  },
                },
              ]}
            >
              <div className="item">
                <div className="carousel-banner">
                  <Button>
                    Always <b> Free</b>
                  </Button>
                  <Button>
                    Always <b> Up To Date</b>
                  </Button>
                  <Button>
                    Always <b> Complete</b>
                  </Button>
                  <div className="banner-content">
                    <Title level={2}>
                      Likely <i>The Best API For Countries</i> You'll Ever Find
                    </Title>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="carousel-banner carousel-banner-primary">
                  <Button>
                    Always <b> Free</b>
                  </Button>
                  <Button>
                    Always <b> Up To Date</b>
                  </Button>
                  <Button>
                    Always <b> Complete</b>
                  </Button>
                  <Row gutter={{ md: 16, xs: 8 }}>
                    <Col
                      xxl={{ span: 3, offset: 4 }}
                      xl={{ span: 4, offset: 4 }}
                      lg={{ span: 5, offset: 4 }}
                      md={{ span: 5, offset: 2 }}
                      className=" hidden-xs hidden-sm"
                    >
                      <img src={search} className="banner-search-img" alt="" />
                    </Col>
                    <Col xl={10} lg={10} md={10} sm={24} xs={24}>
                      <div className="banner-content">
                        <Title level={3}>
                          Seriously <br /> Smart <br /> Autocomplete
                        </Title>
                        <Row>
                          <Col xl={2} xs={3}>
                            <img src={search_red} alt="" />
                          </Col>
                          <Col xl={20} xs={19}>
                            <Input
                              placeholder="Try our country autocompleyte service now"
                              prefix={<SearchOutlined />}
                            />
                          </Col>
                        </Row>
                        <Paragraph type="secondary">
                          With QL you can search by anything that indicates a
                          country
                        </Paragraph>
                        <Paragraph>
                          Try name, nickname, location, IP address, flag colors
                          or even website names
                        </Paragraph>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="item">
                <div className="carousel-banner carousel-banner-secondary">
                  <Button>
                    <img src={award} className="award-icon" alt="" />
                    <p>Data Cuation Excellence</p>
                    <p>
                      <b>- QL Manifesto -</b>
                    </p>
                  </Button>
                  <Row className="cards blogs">
                    <Col xs={{ span: 24 }} xl={{ span: 5, offset: 2 }}>
                      <Title level={3} type="primary">
                        With QUALITY BAKED IN
                      </Title>
                    </Col>
                    <Col xl={15} xs={24}>
                      <Row gutter={{ xl: 16, lg: 8, md: 8 }}>
                        <Col xl={8} lg={8} md={8} sm={12} xs={24}>
                          <Card
                            cover={<img alt="blog" src={blog1} />}
                            actions={[
                              [
                                [
                                  <IconText text="20" />,
                                  <EyeOutlined key="view" />,
                                ],
                                [
                                  <IconText text="0" />,
                                  <MessageOutlined key="message" />,
                                ],
                              ],
                              <StarOutlined key="favorite" />,
                            ]}
                          >
                            <Title level={4}>Data Curation Excellence</Title>
                            <Title level={5}>Our Manifesto</Title>
                            <div className="actions">
                              <div>
                                <Text>
                                  20 <EyeOutlined />
                                </Text>
                                <Text>
                                  0 <MessageOutlined />
                                </Text>
                              </div>
                              <div>
                                <StarOutlined />
                              </div>
                            </div>
                          </Card>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={12} xs={0}>
                          <Card
                            cover={<img alt="blog" src={blog2} />}
                            actions={[
                              [
                                [
                                  <IconText text="20" />,
                                  <EyeOutlined key="view" />,
                                ],
                                [
                                  <IconText text="0" />,
                                  <MessageOutlined key="message" />,
                                ],
                              ],
                              <StarOutlined key="favorite" />,
                            ]}
                          >
                            <Title level={4}>Avoiding Stale Data</Title>
                            <Title level={5}>Our Manifesto</Title>
                          </Card>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={0} xs={0}>
                          <Card
                            cover={<img alt="blog" src={blog3} />}
                            actions={[
                              [
                                [
                                  <IconText text="20" />,
                                  <EyeOutlined key="view" />,
                                ],
                                [
                                  <IconText text="0" />,
                                  <MessageOutlined key="message" />,
                                ],
                              ],
                              <StarOutlined key="favorite" />,
                            ]}
                          >
                            <Title level={4}>Simple Use</Title>
                            <Title level={5}>Our Manifesto</Title>
                          </Card>
                        </Col>
                      </Row>
                      <Row>
                        <Col xl={24} xs={24}>
                          <div className="card-bottom">
                            <Link to="/blogs">
                              Go To Our Blog{" "}
                              <RightOutlined className="blog-link-icon" />{" "}
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </Carousel>
          </div>
        </section>

        {/* primary sources section */}
        <section className="primary-src-section">
          <div className="container-fluid">
            <Row>
              <Col md={24} xs={24}>
                <div className="primary-vertical-list">
                  <Text>Primary Sources:</Text>
                  <List
                    itemLayout="vertical"
                    dataSource={sources_data}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<img src={item.logo} alt="" />}
                          title={item.title}
                        />
                      </List.Item>
                    )}
                  />
                  <Link to="/">See all</Link>
                </div>
                <div className="mobile-sources hidden-xl hidden-lg hidden-md">
                  <Paragraph>See All Sources</Paragraph>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* datatable section */}
        <section className="">
          <div className="container-fluid">
            <Datatable />
          </div>
        </section>

        {/* api section */}
        <section className="api-section">
          <div className="container">
            <Row align="middle" justify="center">
              <Col xl={3} lg={4} md={4} xs={8} sm={6}>
                <img className="primary" preview={false} src={timer} alt="" />
                <Button className="hidden-xs hidden-sm">
                  See How{" "}
                  <img
                    alt="primary-arrow"
                    className="down-primary-arrow"
                    src={down_arrow}
                  />
                </Button>
              </Col>
              <Col xl={11} lg={14} md={16} xs={12} sm={12}>
                <div className="timer-content">
                  <Title level={1}>The Ultimate Country API</Title>
                  <Text>Don’t create yet another list of countries!</Text>
                  <Paragraph type="secondary" className="hidden-xs hidden-sm">
                    Avoid stale data and use Quick Lookup directly from within
                    the tools you use and love!
                  </Paragraph>
                  <div className="secondary-vertical-list hidden-xs hidden-sm">
                    <List
                      itemLayout="vertical"
                      dataSource={api_data}
                      renderItem={(item) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<img src={item.logo} alt="" />}
                            title={item.title}
                          />
                        </List.Item>
                      )}
                    />
                  </div>
                </div>
              </Col>
              <Col xl={0} lg={0} md={0} xs={20}>
                <Paragraph type="secondary">
                  Avoid stale data and use Quick Lookup directly from within the
                  tools you use and love!
                </Paragraph>
                <Button>
                  See How{" "}
                  <img
                    alt="primary-arrow"
                    className="down-primary-arrow"
                    src={down_arrow}
                  />
                </Button>
                <div className="secondary-vertical-list">
                  <List
                    itemLayout="vertical"
                    dataSource={api_data}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<img src={item.logo} alt="" />}
                        />
                      </List.Item>
                    )}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* currency section */}
        <section className="currency-section">
          <div className="container">
            <Row className="box">
              <Col xl={10} lg={10} md={10}>
                <Title level={1}>Currency Information</Title>
                <Row>
                  <Col md={12} xs={14}>
                    <Title level={2}>Danish Krone</Title>
                    <Title level={3}>Official Currency of Denmark</Title>
                  </Col>
                  <Col md={12} xs={10}>
                    <Title level={3} type="secondary">
                      Units <i>Kr.</i>/<i>øre</i>
                    </Title>
                  </Col>
                </Row>
                <Row align="middle">
                  <Col md={6} xs={8}>
                    <Text>Allso in circulation</Text>
                  </Col>
                  <Col md={18} xs={16}>
                    <div className="currency-box">
                      <Row align="middle">
                        <Col md={4} xs={4}>
                          <Title level={3}>€</Title>
                        </Col>
                        <Col md={20} xs={20}>
                          <Title level={4}>Euro</Title>
                          <Paragraph>Common Currency Of EU</Paragraph>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
                <Paragraph>
                  <p>
                    Commonly used statistics is available directly from Quick
                    Lookup. It includes statistics from all the leading sources.
                  </p>
                </Paragraph>

                <Title level={5}>Denominations</Title>
                <div className="primary-vertical-list denominate">
                  <Image preview={false} src={denominate1} alt="money" />
                  <List
                    itemLayout="vertical"
                    dataSource={denomination_list_data1}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta title={item.value} />
                      </List.Item>
                    )}
                  />
                </div>

                <div className="primary-vertical-list denominate">
                  <Image preview={false} src={denominate2} alt="money" />
                  <List
                    itemLayout="vertical"
                    dataSource={denomination_list_data2}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta title={item.value} />
                      </List.Item>
                    )}
                  />
                </div>

                <Title level={5}>Currency History</Title>
                <div className="currency-list compact-list">
                  <List
                    itemLayout="horizontal"
                    dataSource={currency_list_data}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          description={
                            <>
                              <Title level={5}>{item.title}</Title>
                              <Text>{item.year}</Text>
                              <Text>{item.description}</Text>
                            </>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </div>
              </Col>
              <Col
                xs={24}
                xl={{ span: 13, offset: 1 }}
                lg={{ span: 13, offset: 1 }}
                md={{ span: 13, offset: 1 }}
              >
                <Row gutter={16} align="middle">
                  <Col md={11} xs={24}>
                    <Select defaultValue="land" size="large">
                      <Option value="land">Danish Korne</Option>
                      <Option>Water</Option>
                    </Select>
                  </Col>
                  <Col md={2} xs={4}>
                    <Text>VS.</Text>
                  </Col>
                  <Col md={11} xs={20}>
                    <Select defaultValue="land" size="large">
                      <Option value="land">USD</Option>
                      <Option>Water</Option>
                    </Select>
                  </Col>
                </Row>
                <CurrencyStatistics />
                <div className="primary-sources-box hidden-sm hidden-xs">
                  <Paragraph>Primary Sources:</Paragraph>
                  <Divider />
                  <List
                    itemLayout="vertical"
                    dataSource={vertical_list_data}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<img src={item.logo} alt="" />}
                        />
                      </List.Item>
                    )}
                  />
                </div>
                <Divider className="hidden-xl hidden-lg hidden-md" />
                <div className="primary-sources-box-mobile hidden-xl hidden-lg hidden-md">
                  <div className="vertical-icon-list">
                    <Text>Primary Sources:</Text>
                    <List
                      itemLayout="vertical"
                      dataSource={vertical_icon_list_data}
                      renderItem={(item) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<img src={item.logo} alt="" />}
                          />
                        </List.Item>
                      )}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* map section */}
        <section className="map-section">
          <div className="container">
            <Row className="box">
              <Col md={24} xs={0}>
                <Title level={4}>Denmark</Title>
              </Col>
              <Col md={{ span: 13, order: 1 }} xs={{ span: 24, order: 2 }}>
                <Title className="hidden-xl hidden-lg hidden-md" level={4}>
                  Denmark
                </Title>
                <img src={map} alt="" className="map-img" />
                <Row gutter={8}>
                  <Col xl={6} xs={7}>
                    <Select defaultValue="land" size="large">
                      <Option value="land">Land Only</Option>
                      <Option>Water</Option>
                    </Select>
                  </Col>
                  <Col xl={6} xs={6}>
                    <Select defaultValue="mercator" size="large">
                      <Option value="mercator">Mercator</Option>
                      <Option>Mercator</Option>
                      <Option>Mercator</Option>
                      <Option>Mercator</Option>
                    </Select>
                  </Col>
                  <Col xl={6} xs={6}>
                    <Select defaultValue="1st admin" size="large">
                      <Option value="1st admin">1st Admin</Option>
                      <Option>2nd Admin</Option>
                      <Option>3rd Admin</Option>
                    </Select>
                  </Col>
                  <Col xl={6} xs={5}>
                    <Select defaultValue="land" size="large">
                      <Option value="land">1:1</Option>
                      <Option>1:5</Option>
                      <Option>1:20</Option>
                      <Option>1:300</Option>
                    </Select>
                  </Col>
                </Row>
                <Divider className="hidden-xl hidden-lg hidden-md" />
                <div className="primary-sources-box-mobile hidden-xl hidden-lg hidden-md">
                  <div className="vertical-icon-list">
                    <Text>Primary Sources:</Text>
                    <List
                      itemLayout="vertical"
                      dataSource={vertical_icon_list_data}
                      renderItem={(item) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<img src={item.logo} alt="" />}
                          />
                        </List.Item>
                      )}
                    />
                  </div>
                </div>
              </Col>
              <Col
                md={{ span: 10, offset: 1, order: 2 }}
                xs={{ span: 24, order: 1 }}
              >
                <Title level={1}>Maps in all flavors</Title>
                <Paragraph>
                  Our ready-to-use maps are available for <b>Land Only </b>or
                  Water, using the <b>Mercator</b> Equirectangular or other
                  projections and for <b>1st</b> 2nd or 3rd admin levels. You
                  can even fetch a simplified version using <b>1:1</b> 1:5 1:20
                  or 1:300 scale
                </Paragraph>
                <div className="primary-sources-box hidden-sm hidden-xs">
                  <Paragraph>Primary Sources:</Paragraph>
                  <Divider />
                  <List
                    itemLayout="vertical"
                    dataSource={vertical_list_data}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<img src={item.logo} alt="" />}
                        />
                      </List.Item>
                    )}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* statistic section */}
        <section className="stat-section">
          <div className="container">
            <div className="box">
              <Row justify="end">
                <Col md={5} xs={24}>
                  <div className="hidden-sm hidden-xs">
                    <Select
                      showSearch
                      defaultValue="land"
                      size="large"
                      className="primary"
                    >
                      <Option value="land">Population</Option>
                      <Option value="gdp">GDP</Option>
                      <Option value="Education">Education</Option>
                      <Option value="Age">Age</Option>
                    </Select>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xl={10} lg={10} md={10}>
                  <Title level={1}>Essential statistics</Title>
                  <Paragraph>
                    <p>
                      Commonly used statistics is available directly from Quick
                      Lookup. It includes statistics from all the leading
                      sources.
                    </p>
                    <p>
                      It too comes with full localization in terms of data
                      formatting, currency conversion and conversion between
                      different units of measure.
                    </p>
                  </Paragraph>
                  <div className="primary-sources-box hidden-sm hidden-xs">
                    <Paragraph>Primary Sources:</Paragraph>
                    <Divider />
                    <List
                      itemLayout="vertical"
                      dataSource={vertical_list_data}
                      renderItem={(item) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<img src={item.logo} alt="" />}
                          />
                        </List.Item>
                      )}
                    />
                  </div>
                </Col>
                <Col
                  xs={24}
                  xl={{ span: 13, offset: 1 }}
                  lg={{ span: 13, offset: 1 }}
                  md={{ span: 13, offset: 1 }}
                >
                  <div className="hidden-xl hidden-lg hidden-md">
                    <Select
                      showSearch
                      defaultValue="land"
                      size="large"
                      className="primary"
                    >
                      <Option value="land">Population</Option>
                      <Option value="gdp">GDP</Option>
                    </Select>
                  </div>
                  <Statistics />
                  <Divider className="hidden-xl hidden-lg hidden-md" />
                  <div className="primary-sources-box-mobile hidden-xl hidden-lg hidden-md">
                    <div className="vertical-icon-list">
                      <Text>Primary Sources:</Text>
                      <List
                        itemLayout="vertical"
                        dataSource={vertical_icon_list_data}
                        renderItem={(item) => (
                          <List.Item>
                            <List.Item.Meta
                              avatar={<img src={item.logo} alt="" />}
                            />
                          </List.Item>
                        )}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        <section className="uid-section">
          <div className="container">
            <Row className="list-box">
              <Col xl={12} lg={12} md={12} xs={24}>
                <div className="hidden-xl hidden-lg hidden-md">
                  <Title level={1}>All the IDs ... plus one</Title>
                </div>
                <div className="uuid-list-box">
                  <Row>
                    <Col xl={10} lg={9} md={9} sm={9} xs={8}>
                      <div>
                        <Button type="primary">
                          {" "}
                          <img src={Gid_icon_white} alt="" /> Denmark
                        </Button>
                      </div>
                    </Col>

                    <Col xl={14} lg={15} md={15} sm={15} xs={16}>
                      <div className="uuid-list-main compact-list">
                        <Text>Named UUID (V5)</Text>
                        <List
                          itemLayout="horizontal"
                          dataSource={[
                            {
                              digit: "1235337665832087552",
                              title: "Open Street Map",
                              icon: "https://quicklookup.info/assets/icons/sources/iso-icon.svg",
                            },
                            {
                              digit: "1235337665832087552",
                              title: "Geonames",
                              icon: "https://quicklookup.info/assets/icons/sources/iso-icon.svg",
                            },
                            {
                              digit: "12353376",
                              title: "Open Street Map",
                              icon: "https://quicklookup.info/assets/icons/sources/iso-icon.svg",
                            },
                            {
                              digit: "1235337665832087552",
                              title: "Open Street Map",
                              icon: "https://quicklookup.info/assets/icons/sources/iso-icon.svg",
                            },
                            {
                              digit: "1235337665832087552",
                              title: "Geonames",
                              icon: "https://quicklookup.info/assets/icons/sources/iso-icon.svg",
                            },
                            {
                              digit: "12353376",
                              title: "Open Street Map",
                              icon: "https://quicklookup.info/assets/icons/sources/iso-icon.svg",
                            },
                            {
                              digit: "1235337665832087552",
                              title: "Open Street Map",
                              icon: "https://quicklookup.info/assets/icons/sources/iso-icon.svg",
                            },
                          ]}
                          renderItem={(item) => (
                            <List.Item>
                              <List.Item.Meta
                                avatar={<img src={item.icon} alt="" />}
                                description={
                                  <span>
                                    <abbr title="Open Street Map Relations ID">
                                      <b>Open Street Map</b>
                                    </abbr>{" "}
                                    <Link
                                      to="https://www.openstreetmap.org/relation/80500"
                                      target="_blank"
                                      rel="noreferrer noopener"
                                    >
                                      {item.digit}
                                      <Image
                                        src={link_icon}
                                        width={12}
                                        height={12}
                                      />
                                    </Link>
                                  </span>
                                }
                              />
                            </List.Item>
                          )}
                        />
                        <Text>Named UUID (V5)</Text>
                        <List
                          itemLayout="horizontal"
                          dataSource={[
                            {
                              digit: "1235337665832087552",
                              title: "Open Street Map",
                              icon: "https://quicklookup.info/assets/icons/sources/iso-icon.svg",
                            },
                            {
                              digit: "1235337665832087552",
                              title: "Geonames",
                              icon: "https://quicklookup.info/assets/icons/sources/iso-icon.svg",
                            },
                            {
                              digit: "1235337665832087552",
                              title: "Geonames",
                              icon: "https://quicklookup.info/assets/icons/sources/iso-icon.svg",
                            },
                            {
                              digit: "12353376",
                              title: "Open Street Map",
                              icon: "https://quicklookup.info/assets/icons/sources/iso-icon.svg",
                            },
                            {
                              digit: "1235337665832087552",
                              title: "Open Street Map",
                              icon: "https://quicklookup.info/assets/icons/sources/iso-icon.svg",
                            },
                            {
                              digit: "12353376",
                              title: "Open Street Map",
                              icon: "https://quicklookup.info/assets/icons/sources/iso-icon.svg",
                            },
                            {
                              digit: "1235337665832087552",
                              title: "Open Street Map",
                              icon: "https://quicklookup.info/assets/icons/sources/iso-icon.svg",
                            },
                            {
                              digit: "12353376",
                              title: "Open Street Map",
                              icon: "https://quicklookup.info/assets/icons/sources/iso-icon.svg",
                            },
                            {
                              digit: "1235337665832087552",
                              title: "Open Street Map",
                              icon: "https://quicklookup.info/assets/icons/sources/iso-icon.svg",
                            },
                            {
                              digit: "12353376",
                              title: "Open Street Map",
                              icon: "https://quicklookup.info/assets/icons/sources/iso-icon.svg",
                            },
                            {
                              digit: "1235337665832087552",
                              title: "Open Street Map",
                              icon: "https://quicklookup.info/assets/icons/sources/iso-icon.svg",
                            },
                          ]}
                          renderItem={(item) => (
                            <List.Item>
                              <List.Item.Meta
                                avatar={<img src={item.icon} alt="" />}
                                description={
                                  <span>
                                    <abbr title="Open Street Map Relations ID">
                                      <b>{item.title}</b>
                                    </abbr>{" "}
                                    <Link
                                      to="https://www.openstreetmap.org/relation/80500"
                                      target="_blank"
                                      rel="noreferrer noopener"
                                    >
                                      {item.digit}
                                    </Link>
                                  </span>
                                }
                              />
                            </List.Item>
                          )}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col offset={1} xl={11} lg={11} md={11} className="uuid-content">
                <div className="hidden-sm hidden-xs">
                  <Title level={1}>All the IDs ... plus one</Title>
                </div>
                <Paragraph>
                  In addition to a complete list of the IDs commonly used to
                  reference Countries, QL provides a universal ID called Global
                  Identifier.{" "}
                </Paragraph>
                <img className="gid-logo" src={gid_logo} alt="" />
                <Paragraph>
                  <p>
                    GiDs are the ultimate IDs, universal, strong and include a
                    map to the other - commonly used - IDs and natural keys for
                    the same Named Entity. Think of GiD as the DNS of all
                    things.
                  </p>
                  <p>
                    Each GiD is available in two flavors. A readable ID for
                    semantic web & linking and as a UUID for efficient storing
                    and IT system compliance.
                  </p>
                </Paragraph>
                <Row className="gid-url-box">
                  <Col xl={6}>
                    <div className="gid-label">
                      <img src={gid_icon} alt="" />
                      <Text> GiD URL</Text>
                    </div>
                  </Col>
                  <Col xl={16}>
                    <Link to="https://gid.is/country/Denmark">
                      https://gid.is/country/Denmark
                    </Link>
                  </Col>
                </Row>
                <Row className="gid-url-box">
                  <Col xl={6}>
                    <div className="gid-label">
                      <img src={gid_icon} alt="" />
                      <Text> GiD UUID</Text>
                    </div>
                  </Col>
                  <Col xl={16}>
                    <div className="gid-url">
                      <Text>2be8ae99-0b19-5025-ba6b-acb999741349</Text>
                    </div>
                  </Col>
                </Row>
                <Paragraph>
                  The readable version will always results in the same (Named)
                  UUID and the same UUID will always point to Denmark,
                  regardless of IT system.
                </Paragraph>
              </Col>
            </Row>
          </div>
        </section>

        <section className="localize-section">
          <div className="container">
            <Row className="content-box">
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Title level={1}>Full localization and i18n</Title>
                <Title level={2}>Get all the localization help you need!</Title>
                <List
                  itemLayout="horizontal"
                  dataSource={list_data}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={item.title}
                        description="Including formal names, nicknames and olders names for some"
                      />
                    </List.Item>
                  )}
                />
              </Col>
              <Col
                xl={{ span: 12 }}
                lg={{ span: 12 }}
                md={{ span: 12 }}
                sm={24}
                xs={24}
                className="tag-cloud"
              >
                <TagCloud
                  style={{
                    padding: 2,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {tagcloud_data &&
                    tagcloud_data.map((item) => (
                      <div
                        className={`color${
                          Math.floor(Math.random() * (4 - 1)) + 1
                        } tag-cloud${Math.floor(Math.random() * (6 - 1)) + 1}`}
                      >
                        {item.name}
                      </div>
                    ))}
                </TagCloud>
              </Col>
            </Row>
          </div>
        </section>

        {/* localization section */}
        {/* <section className="localization-bg">
                    <Row>
                        <Col xl={24} xs={24} className="localize-headings">
                            <img src={Danmark} alt="" />
                        </Col>
                        <Col xl={24} xs={24} className="localize-headings">
                            <img src={Дания} alt="" />
                        </Col>
                        <Col xl={24} xs={24} className="localize-headings">
                            <img src={Denmark} alt="" />
                        </Col>
                    </Row>
                </section> */}

        {/* services section */}
        <section className="services-section">
          <div className="container">
            <div className="resources-bg">
              <Row>
                <Col xl={22}>
                  <Title level={1}>Danish Almanac</Title>
                  <div className="resource-subtitle">
                    <Title level={4}>
                      An example of the date and time services available
                    </Title>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xl={20}>
                  <div className="services-subtitle">
                    <Title level={5}>
                      Today in
                      <div className="ant-select-single-line">
                        <Select defaultValue="best">
                          <Option value="best">Copenhagen</Option>
                          <Option value="">Copenhagen</Option>
                          <Option value="">Copenhagen</Option>
                        </Select>
                      </div>
                    </Title>
                  </div>
                </Col>
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 16, lg: 16, xl: 32 }}
                className="service-main-box"
              >
                <Col xl={8} lg={8} md={8} xs={24}>
                  <div className="resource-inner-box">
                    <Row gutter={{ xl: 16, md: 8, xs: 16, sm: 16 }}>
                      <Col xl={12} lg={12} xs={12}>
                        <div className="resource-item-box">
                          <div className="calender-title">
                            <Title level={4}>Monday</Title>
                          </div>
                          <div className="calender-subtitle">
                            <Paragraph>January 1, 2021</Paragraph>
                          </div>
                        </div>
                      </Col>
                      <Col xl={12} lg={12} xs={12}>
                        <div className="resource-item-s-box">
                          <div className="calender-day color-mark">
                            <Title level={5}>Workday</Title>
                          </div>
                        </div>
                        <div className="resource-item-s-box resource-item-s-box-2 ">
                          <div className="calender-region">
                            <Title level={5}>Denmark</Title>
                          </div>
                          <div className="calender-region-light">
                            <Title level={5}>All regions</Title>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="services-subtitle">
                      <Title level={5}>
                        Workday Calender for
                        <div className="ant-select-single-line">
                          <Select defaultValue="2022">
                            <Option value="2022">2022</Option>
                            <Option value="">2022</Option>
                            <Option value="">2022</Option>
                          </Select>
                        </div>
                      </Title>
                    </div>
                    <div className="calender-box">
                      <Row gutter={8}>
                        <Col xl={6} lg={6} xs={6}>
                          <div className="calender-date-box">
                            <div className="calender-bx-days">
                              <Paragraph>31</Paragraph>
                            </div>
                            <div className="calender-bx-date">
                              <Title level={4}>20</Title>
                            </div>
                            <div className="calender-bx-first">
                              <Paragraph>1</Paragraph>
                            </div>
                            <div className="calender-bx-second">
                              <Paragraph>10</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} lg={6} xs={6}>
                          <div className="calender-date-box">
                            <div className="calender-bx-days">
                              <Paragraph>31</Paragraph>
                            </div>
                            <div className="calender-bx-date">
                              <Title level={4}>20</Title>
                            </div>
                            <div className="calender-bx-first">
                              <Paragraph>1</Paragraph>
                            </div>
                            <div className="calender-bx-second">
                              <Paragraph>10</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} lg={6} xs={6}>
                          <div className="calender-date-box">
                            <div className="calender-bx-days">
                              <Paragraph>31</Paragraph>
                            </div>
                            <div className="calender-bx-date">
                              <Title level={4}>20</Title>
                            </div>
                            <div className="calender-bx-first">
                              <Paragraph>1</Paragraph>
                            </div>
                            <div className="calender-bx-second">
                              <Paragraph>10</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} lg={6} xs={6}>
                          <div className="calender-date-box">
                            <div className="calender-bx-days">
                              <Paragraph>31</Paragraph>
                            </div>
                            <div className="calender-bx-date">
                              <Title level={4}>20</Title>
                            </div>
                            <div className="calender-bx-first">
                              <Paragraph>1</Paragraph>
                            </div>
                            <div className="calender-bx-second">
                              <Paragraph>10</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} lg={6} xs={6}>
                          <div className="calender-date-box">
                            <div className="calender-bx-days">
                              <Paragraph>31</Paragraph>
                            </div>
                            <div className="calender-bx-date">
                              <Title level={4}>20</Title>
                            </div>
                            <div className="calender-bx-first">
                              <Paragraph>1</Paragraph>
                            </div>
                            <div className="calender-bx-second">
                              <Paragraph>10</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} lg={6} xs={6}>
                          <div className="calender-date-box">
                            <div className="calender-bx-days">
                              <Paragraph>31</Paragraph>
                            </div>
                            <div className="calender-bx-date">
                              <Title level={4}>20</Title>
                            </div>
                            <div className="calender-bx-first">
                              <Paragraph>1</Paragraph>
                            </div>
                            <div className="calender-bx-second">
                              <Paragraph>10</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} lg={6} xs={6}>
                          <div className="calender-date-box">
                            <div className="calender-bx-days">
                              <Paragraph>31</Paragraph>
                            </div>
                            <div className="calender-bx-date">
                              <Title level={4}>20</Title>
                            </div>
                            <div className="calender-bx-first">
                              <Paragraph>1</Paragraph>
                            </div>
                            <div className="calender-bx-second">
                              <Paragraph>10</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} lg={6} xs={6}>
                          <div className="calender-date-box">
                            <div className="calender-bx-days">
                              <Paragraph>31</Paragraph>
                            </div>
                            <div className="calender-bx-date">
                              <Title level={4}>20</Title>
                            </div>
                            <div className="calender-bx-first">
                              <Paragraph>1</Paragraph>
                            </div>
                            <div className="calender-bx-second">
                              <Paragraph>10</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} lg={6} xs={6}>
                          <div className="calender-date-box">
                            <div className="calender-bx-days">
                              <Paragraph>31</Paragraph>
                            </div>
                            <div className="calender-bx-date">
                              <Title level={4}>20</Title>
                            </div>
                            <div className="calender-bx-first">
                              <Paragraph>1</Paragraph>
                            </div>
                            <div className="calender-bx-second">
                              <Paragraph>10</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} lg={6} xs={6}>
                          <div className="calender-date-box">
                            <div className="calender-bx-days">
                              <Paragraph>31</Paragraph>
                            </div>
                            <div className="calender-bx-date">
                              <Title level={4}>20</Title>
                            </div>
                            <div className="calender-bx-first">
                              <Paragraph>1</Paragraph>
                            </div>
                            <div className="calender-bx-second">
                              <Paragraph>10</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} lg={6} xs={6}>
                          <div className="calender-date-box">
                            <div className="calender-bx-days">
                              <Paragraph>31</Paragraph>
                            </div>
                            <div className="calender-bx-date">
                              <Title level={4}>20</Title>
                            </div>
                            <div className="calender-bx-first">
                              <Paragraph>1</Paragraph>
                            </div>
                            <div className="calender-bx-second">
                              <Paragraph>10</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} lg={6} xs={6}>
                          <div className="calender-date-box">
                            <div className="calender-bx-days">
                              <Paragraph>31</Paragraph>
                            </div>
                            <div className="calender-bx-date">
                              <Title level={4}>20</Title>
                            </div>
                            <div className="calender-bx-first">
                              <Paragraph>1</Paragraph>
                            </div>
                            <div className="calender-bx-second">
                              <Paragraph>10</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                      </Row>
                      <div className="premium">
                        <img src={premium} alt="" />
                      </div>
                    </div>
                    <div className="calender-desc-box">
                      <Row gutter={16}>
                        <Col xl={7} lg={8} md={8} xs={8}>
                          <div className="calender-desc workday active">
                            <Text>Workdays</Text>
                          </div>
                        </Col>
                        <Col xl={6} lg={8} md={8} xs={8}>
                          <div className="calender-desc weekend">
                            <Text>Weekend</Text>
                          </div>
                        </Col>
                        <Col xl={6} lg={8} md={8} xs={8}>
                          <div className="calender-desc holiday">
                            <Text>Holiday</Text>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
                <div className="weather-divider hidden-xl hidden-lg hidden-md">
                  <Divider />
                </div>

                <Col xl={8} lg={8} md={8} xs={24}>
                  <div className="resource-inner-box">
                    <Row gutter={{ xl: 16, md: 8, xs: 16, sm: 16 }}>
                      <Col xl={15} xs={15}>
                        <div className="resource-item-box weather-display-box">
                          <Row>
                            <Col xl={6} xs={7}>
                              <img src={sun_w} alt="" className="sun_w" />
                            </Col>
                            <Col xl={10} xs={10}>
                              <div className="weather-value">
                                <Title level={4}>25°</Title>
                              </div>
                            </Col>
                            <Col xl={7} xs={7}>
                              <div className="weather-level-box">
                                <div className="weather-level">
                                  <Paragraph>
                                    Hi: <Text strong>15°</Text>
                                  </Paragraph>
                                </div>
                                <div className="weather-level">
                                  <Paragraph>
                                    Low: <Text strong>10°</Text>
                                  </Paragraph>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col xl={9} xs={9}>
                        <div className="resource-item-s-box">
                          <div className="calender-day">
                            <Title level={5}>
                              Yesterday{" "}
                              <img
                                className="weather-icons"
                                alt=""
                                src={thunder}
                              />{" "}
                              5°
                            </Title>
                          </div>
                        </div>
                        <div className="resource-item-s-box">
                          <div className="calender-day">
                            <Title level={5}>
                              Tomorrow{" "}
                              <img className="weather-icons" alt="" src={sun} />{" "}
                              35°
                            </Title>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="services-subtitle">
                      <Title level={5}>
                        Average weather in
                        <div className="ant-select-single-line">
                          <Select defaultValue="best">
                            <Option value="best">Copenhagen</Option>
                            <Option value="">Copenhagen</Option>
                            <Option value="">Copenhagen</Option>
                          </Select>
                        </div>
                      </Title>
                    </div>
                    <div className="calender-box">
                      <Row gutter={8}>
                        <Col xl={6} xs={6}>
                          <div className="calender-date-box weather-box">
                            <div className="weather-degree hot">
                              <Paragraph>31°</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} xs={6}>
                          <div className="calender-date-box weather-box">
                            <div className="weather-degree cold">
                              <Paragraph>31°</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} xs={6}>
                          <div className="calender-date-box weather-box">
                            <div className="weather-degree">
                              <Paragraph>31°</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} xs={6}>
                          <div className="calender-date-box weather-box">
                            <div className="weather-degree">
                              <Paragraph>31°</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} xs={6}>
                          <div className="calender-date-box weather-box">
                            <div className="weather-degree">
                              <Paragraph>31°</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} xs={6}>
                          <div className="calender-date-box weather-box">
                            <div className="weather-degree">
                              <Paragraph>31°</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} xs={6}>
                          <div className="calender-date-box weather-box">
                            <div className="weather-degree">
                              <Paragraph>31°</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} xs={6}>
                          <div className="calender-date-box weather-box">
                            <div className="weather-degree">
                              <Paragraph>31°</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} xs={6}>
                          <div className="calender-date-box weather-box">
                            <div className="weather-degree">
                              <Paragraph>31°</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} xs={6}>
                          <div className="calender-date-box weather-box">
                            <div className="weather-degree">
                              <Paragraph>31°</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} xs={6}>
                          <div className="calender-date-box weather-box">
                            <div className="weather-degree">
                              <Paragraph>31°</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                        <Col xl={6} xs={6}>
                          <div className="calender-date-box weather-box">
                            <div className="weather-degree">
                              <Paragraph>31°</Paragraph>
                            </div>
                          </div>
                          <div className="calender-bx-month">
                            <Paragraph>Jan</Paragraph>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
                <div className="weather-divider hidden-xl hidden-lg hidden-md">
                  <Divider />
                </div>
                <Col xl={8} lg={8} md={8} xs={24}>
                  <div className="resource-inner-box">
                    <Row gutter={{ xl: 16, md: 8, xs: 16, sm: 16 }}>
                      <Col xl={14} xs={14}>
                        <div className="resource-item-box">
                          <Row>
                            <Col xl={6} lg={7} sm={5} xs={5}>
                              <img src={clock} className="clock-icon" alt="" />
                            </Col>
                            <Col xl={16} lg={15} sm={19} xs={19}>
                              <div className="calender-title">
                                <Title level={4}>13:07:33</Title>
                              </div>
                              <div className="calender-subtitle">
                                <Paragraph>Lorem Ipsum</Paragraph>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col xl={10} xs={10}>
                        <div className="resource-item-s-box">
                          <div className="calender-day">
                            <Title level={5}>Sunrise</Title>
                            <img
                              src={sunrise}
                              className="sunset-icons"
                              alt=""
                            />
                            <Title level={5}>10:20</Title>
                          </div>
                        </div>
                        <div className="resource-item-s-box">
                          <div className="calender-day">
                            <Title level={5}>Sunset</Title>
                            <img src={sunset} className="sunset-icons" alt="" />
                            <Title level={5}>22:20</Title>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="services-subtitle">
                      <Title level={5}>
                        Sunrise & Sunset in
                        <div className="ant-select-single-line">
                          <Select defaultValue="best">
                            <Option value="best">Copenhagen</Option>
                            <Option value="">Copenhagen</Option>
                            <Option value="">Copenhagen</Option>
                          </Select>
                        </div>
                      </Title>
                    </div>
                    <div>
                      <img src={sunset_graph} alt="" className="sunset-img" />
                      <div className="calender-desc-box">
                        <Row gutter={16}>
                          <Col xl={9} lg={10} md={10} xs={10}>
                            <div className="sunset-desc active">
                              <Paragraph>Sunrise & Sunset</Paragraph>
                            </div>
                          </Col>
                          <Col xl={9} lg={10} md={11} xs={10}>
                            <div className="sunset-desc">
                              <Paragraph>Day & Night Length</Paragraph>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        {/* resources section */}
        <section className="resource-section">
          <div className="container">
            <Row>
              <Col md={24} xs={24}>
                <Title level={1}>More Information on Denmark</Title>
                <Title level={2}>
                  All ther resources you need to build your own dataset for
                  Denmark
                </Title>
              </Col>
            </Row>
            <Carousel
              dots={false}
              infinite
              slidesToShow={4.5}
              swipeToSlide
              draggable
              loops
              arrows={false}
              nextArrow={<img src={next} alt="" />}
              prevArrow={<img src={previous} alt="" />}
              responsive={[
                {
                  breakpoint: 1200, // laptop breakpoint
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 992, // tablet breakpoint
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 700, // mobile breakpoint
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                  },
                },
                {
                  breakpoint: 500, // mobile breakpoint
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                  },
                },
              ]}
            >
              <div className="item">
                <Image preview={false} src={resource1} alt="" />
                <Title level={3}>
                  <Image preview={false} src={web1} alt="" /> Denmark.dk
                </Title>
              </div>
              <div className="item">
                <Image preview={false} src={resource2} alt="" />
                <Title level={3}>
                  <Image preview={false} src={web2} alt="" /> Visitdenmark.com
                </Title>
              </div>
              <div className="item">
                <Image preview={false} src={resource3} alt="" />
                <Title level={3}>
                  <Image preview={false} src={web3} alt="" />{" "}
                  facebook.com/denmark
                </Title>
              </div>
              <div className="item">
                <Image preview={false} src={resource4} alt="" />
                <Title level={3}>
                  <Image preview={false} src={web4} alt="" /> um.dk/en
                </Title>
              </div>
              <div className="item">
                <Image preview={false} src={resource3} alt="" />
                <Title level={3}>
                  <Image preview={false} src={web3} alt="" />{" "}
                  facebook.com/denmark
                </Title>
              </div>
              <div className="item">
                <Image preview={false} src={resource1} alt="" />
                <Title level={3}>
                  <Image preview={false} src={web1} alt="" /> Denmark.dk
                </Title>
              </div>
              <div className="item">
                <Image preview={false} src={resource2} alt="" />
                <Title level={3}>
                  <Image preview={false} src={web2} alt="" /> Visitdenmark.com
                </Title>
              </div>
              <div className="item">
                <Image preview={false} src={resource3} alt="" />
                <Title level={3}>
                  <Image preview={false} src={web3} alt="" />{" "}
                  facebook.com/denmark
                </Title>
              </div>
              <div className="item">
                <Image preview={false} src={resource4} alt="" />
                <Title level={3}>
                  <Image preview={false} src={web4} alt="" /> um.dk/en
                </Title>
              </div>
              <div className="item">
                <Image preview={false} src={resource3} alt="" />
                <Title level={3}>
                  <Image preview={false} src={web3} alt="" />{" "}
                  facebook.com/denmark
                </Title>
              </div>
            </Carousel>
          </div>
        </section>

        {/* free access section */}
        <section className="free-access-section">
          <div className="container access-inner-box">
            <Row justify="center">
              <Col xl={10} lg={10} md={12} sm={20} xs={24}>
                <div className="box">
                  <Row>
                    <Col xl={12} lg={15} md={16} xs={15}>
                      <Title level={1}>Sign up now!</Title>
                      <Title level={2}>
                        Get free access to the only list of contries you'll ever
                        need!
                      </Title>
                      <Button onClick={() => this.setModal1Visible(true)}>
                        Sign Me Up!
                      </Button>
                    </Col>
                    <Col xl={12} lg={9} md={8} xs={9}>
                      <Image src={SignUp} alt="signup" preview={false} />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* linked section */}
        <section className="linked-section">
          <div className="container">
            <Row className="box" justify="center" align="middle">
              <Col md={{ span: 11, order: 1 }} xs={{ span: 24, order: 2 }}>
                <div className="linked-img-box">
                  <img src={linked_data} className="linked-img" alt="" />
                </div>
              </Col>
              <Col md={{ span: 13, order: 2 }} xs={{ span: 24, order: 1 }}>
                <Title level={1}>
                  Fully linked data for fast, <br /> effortless, access
                </Title>
                <Paragraph>
                  <p>
                    Countries are a part of our Knowledge Graph where each
                    Country has been linked to relevent entities and statistical
                    information.
                  </p>
                  <p>
                    When you use QL Countries you can easily traverse the graph
                    to get the additional information you might need.
                  </p>
                  <p>
                    <i>”Everything is connected”</i>
                  </p>
                </Paragraph>
              </Col>
            </Row>
          </div>
        </section>

        {/* linked lookup section */}
        <section className="lookup-section">
          <div className="container">
            <Row gutter={{ lg: 32, md: 16, sm: 0, xs: 0 }} className="box">
              <Col md={24} xs={24}>
                <Title level={1}>Quick Lookup</Title>
              </Col>
              <Col xl={10} lg={11} md={11} xs={24}>
                <List
                  itemLayout="horizontal"
                  dataSource={list_data}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<img src={s_logo} alt="" />}
                        title={item.title}
                        description="Combines Autocomplete and targetted search."
                      />
                    </List.Item>
                  )}
                />
              </Col>
              <Col
                xl={{ span: 13, offset: 1 }}
                lg={{ span: 13, offset: 0 }}
                md={{ span: 13, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <div className="lookup-search-box">
                  <Image src={heart} alt="" preview={false} />
                  <Form layout="vertical" autoComplete="off">
                    <Form.Item name="url" label="We &nbsp; Complete You">
                      <Select
                        size="large"
                        prefix={<SearchOutlined />}
                        mode="multiple"
                        style={{ width: "100%" }}
                        placeholder={
                          <>
                            <SearchOutlined /> Select
                          </>
                        }
                        optionLabelProp="label"
                      >
                        <Option value="Sweden" label="Sweden">
                          <Row
                            gutter={16}
                            justify="space-between"
                            align="middle"
                          >
                            <Col md={3} xs={3}>
                              {/* <Image src={FlagIcon1} /> */}
                            </Col>
                            <Col md={9} xs={9}>
                              <Title level={2}>Sweden</Title>
                              <Text type="secondary">Sverige / Sweden</Text>
                            </Col>
                            <Col md={9} xs={9}>
                              <Title level={2}>
                                <b>SE</b>
                              </Title>
                              <SearchOutlined />
                              <Text>Baltic Sea</Text>
                            </Col>
                            <Col md={3} xs={3}>
                              {/* <Image src={SeShape} /> */}
                            </Col>
                          </Row>
                        </Option>
                        <Option value="Denmark" label="Denmark">
                          <Row
                            gutter={16}
                            justify="space-between"
                            align="middle"
                          >
                            <Col md={3} xs={3}>
                              <Image src={FlagIcon2} />
                            </Col>
                            <Col md={9} xs={9}>
                              <Title level={2}>Denmark</Title>
                              <Text type="secondary">Danmark / Denmark</Text>
                            </Col>
                            <Col md={9} xs={9}>
                              <Title level={2}>
                                <b>SE</b>
                              </Title>
                              <SearchOutlined />
                              <Text>Baltic Sea</Text>
                            </Col>
                            <Col md={3} xs={3}>
                              <Image src={DkShape} />
                            </Col>
                          </Row>
                        </Option>
                        <Option value="Finland" label="Finland">
                          <Row
                            gutter={16}
                            justify="space-between"
                            align="middle"
                          >
                            <Col md={3} xs={3}>
                              <Image src={FlagIcon3} />
                            </Col>
                            <Col md={9} xs={9}>
                              <Title level={2}>Finland</Title>
                              <Text type="secondary">Suomi / Finland</Text>
                            </Col>
                            <Col md={9} xs={9}>
                              <Title level={2}>
                                <b>SE</b>
                              </Title>
                              <SearchOutlined />
                              <Text>Baltic Sea</Text>
                            </Col>
                            <Col md={3} xs={3}>
                              {/* <Image src={SeShape} /> */}
                            </Col>
                          </Row>
                        </Option>
                        <Option value="Estonia" label="Estonia">
                          <Row
                            gutter={16}
                            justify="space-between"
                            align="middle"
                          >
                            <Col md={3} xs={3}>
                              <Image src={FlagIcon4} />
                            </Col>
                            <Col md={9} xs={9}>
                              <Title level={2}>Estonia</Title>
                              <Text type="secondary">Eesti / Estonia</Text>
                            </Col>
                            <Col md={9} xs={9}>
                              <Title level={2}>
                                <b>SE</b>
                              </Title>
                              <SearchOutlined />
                              <Text>Baltic Sea</Text>
                            </Col>
                            <Col md={3} xs={3}>
                              {/* <Image src={SeShape} /> */}
                            </Col>
                          </Row>
                        </Option>
                      </Select>
                      {/* <Input placeholder="input placeholder" /> */}
                    </Form.Item>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* plugins section */}
        <section className="plugins-section">
          <div className="container">
            <div className="box">
              <Row>
                <Col xl={13} lg={13} md={13} xs={24}>
                  <Title level={1}>
                    Plugins Available For The Tools You use and Love
                  </Title>
                </Col>
                <Col xl={10} lg={10} md={10} xs={24}>
                  <Menu
                    onClick={this.handleClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                  >
                    {plugin_tools_data &&
                      plugin_tools_data.map((item) => (
                        <Menu.Item
                          key="mail"
                          style={{ width: "33%" }}
                          icon={<Image src={item.logo} alt="" />}
                        />
                      ))}
                  </Menu>

                  {/* <div className="vertical-list big-icon-list">
                                        
                                        <List
                                            itemLayout="vertical"
                                            dataSource={plugin_tools_data}
                                            renderItem={item => (
                                            <List.Item>
                                                <List.Item.Meta avatar={<img src={item.logo} alt="" />} />
                                            </List.Item>
                                            )}
                                        />
                                    </div> */}
                </Col>
              </Row>

              <Row>
                <Col xl={13} lg={13} md={13} xs={24}>
                  <img src={video} className="plugin-video" alt="" />
                </Col>
                <Col
                  xs={24}
                  lg={{ span: 10, offset: 1 }}
                  md={{ span: 10, offset: 1 }}
                  xl={{ span: 10, offset: 1 }}
                >
                  <Title level={2}>ETL Ends Here!</Title>
                  <List
                    itemLayout="horizontal"
                    dataSource={list_data}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<img src={noun} alt="" />}
                          title={item.title}
                          description="Combines Autocomplete and targetted search."
                        />
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </section>

        {/* coding section */}
        <section className="coding-section">
          <div className="container">
            <div className="box">
              <Row>
                <Col xl={13} lg={13} md={13} xs={24}>
                  <Title level={1}>
                    Try Out API Now, <br /> Using Our Live Code Examples
                  </Title>
                </Col>
                <Col xl={10} lg={10} md={10} xs={24}>
                  <Menu
                    onClick={this.handleClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                  >
                    {language_data &&
                      language_data.map((item) => (
                        <Menu.Item
                          key="item"
                          style={{ width: "16%" }}
                          icon={<img src={item.logo} alt="" />}
                        />
                      ))}
                  </Menu>
                  {/* <div className="vertical-list big-icon-list">
                                        <List
                                            itemLayout="vertical"
                                            dataSource={language_data}
                                            renderItem={item => (
                                            <List.Item>
                                                <List.Item.Meta avatar={<img src={item.logo} alt="" />} />
                                            </List.Item>
                                            )}
                                        />
                                    </div> */}
                </Col>
              </Row>
              <Row>
                <Col xl={12} lg={12} md={12} xs={24}>
                  <Select defaultValue="land" size="large">
                    <Option value="land">List of Code Examples</Option>
                    <Option>Water</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col xl={24} xs={24}>
                  <div className="code-box">
                    <Row gutter={{ lg: 32, xs: 0 }}>
                      <Col xl={12} xs={12}>
                        <div className="code-inner-box">
                          <ol className="code-list">
                            <li>
                              <code>
                                document.getElementById("demo").innerHTML =
                              </code>
                            </li>
                            <li>
                              <code>
                                obj.employees[1].firstName+""+obj.employees[1].lastName;
                              </code>
                            </li>
                            <li>
                              <code>
                                document.getElementById("demo").innerHTML =
                              </code>
                            </li>
                            <li>
                              <code>obj.employees[1].firstName+""+</code>
                            </li>
                            <li>
                              <code>
                                document.getElementById("demo").innerHTML=
                              </code>
                            </li>
                            <li>
                              <code>
                                obj.employees[1].firstName+""+obj.employees[1].lastName;
                              </code>
                            </li>
                            <li>
                              <code>obj.employees[1].lastName;</code>
                            </li>
                            <li />
                            <li />
                            <li />
                          </ol>
                          <code />
                        </div>
                      </Col>
                      <Col xl={12} xs={12}>
                        <div className="code-inner-box">
                          <ol className="code-list">
                            <li>
                              <code>
                                document.getElementById("demo").innerHTML =
                              </code>
                            </li>
                            <li>
                              <code>
                                obj.employees[1].firstName+""+obj.employees[1].lastName;
                              </code>
                            </li>
                            <li>
                              <code>
                                document.getElementById("demo").innerHTML =
                              </code>
                            </li>
                            <li>
                              <code>obj.employees[1].firstName+""+</code>
                            </li>
                            <li>
                              <code>
                                document.getElementById("demo").innerHTML=
                              </code>
                            </li>
                            <li>
                              <code>
                                obj.employees[1].firstName+""+obj.employees[1].lastName;
                              </code>
                            </li>
                            <li>
                              <code>obj.employees[1].lastName;</code>
                            </li>
                            <li />
                            <li />

                            <li />
                          </ol>
                          <code />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        {/* user stories section */}
        <section className="user-stories-section">
          <div className="container">
            <Row justify="left">
              <Col md={{ span: 8, offset: 3 }} xs={24}>
                <Title level={1}>User Stories</Title>
              </Col>
            </Row>
            <Row justify="center">
              <Col md={18} xs={24}>
                <Carousel
                  className="user-stories-carousel"
                  dots={false}
                  infinite
                  slidesToShow={1}
                  autoplay
                  arrows
                  nextArrow={<img src={next} alt="" />}
                  prevArrow={<img src={previous} alt="" />}
                  responsive={[
                    {
                      breakpoint: 1200, // tablet breakpoint
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      },
                    },
                    {
                      breakpoint: 700, // mobile breakpoint
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                      },
                    },
                  ]}
                >
                  <div className="item">
                    <Row>
                      <Col xl={8} xs={24} sm={8}>
                        <div className="story-img-box">
                          <img src={Snjallgogn} alt="" className="story-img" />
                        </div>
                      </Col>
                      <Col xl={16} xs={24} sm={16}>
                        <div className="story-content-box">
                          <Title level={2}>
                            “It makes all the difference when data is
                            masterfully curated and fully linked”
                          </Title>
                          <Title level={3}>
                            “Cleaning and enriching data is a time-consuming
                            processes tha all data-professionals share. It
                            represents up-to 80% of the work involved when
                            trurning data into value. We are determined to
                            eliminate that vaste by providing ready-to-use data
                            for all business related analysis.”
                          </Title>
                        </div>
                      </Col>
                      <Col xl={24} xs={24}>
                        <Text>
                          <b>Stefán Baxter</b> - CEO Smart Data inc.
                        </Text>
                      </Col>
                    </Row>
                  </div>
                  <div className="item">
                    <Row>
                      <Col xl={8} xs={24} sm={8}>
                        <div className="story-img-box">
                          <img src={Snjallgogn} alt="" className="story-img" />
                        </div>
                      </Col>
                      <Col xl={16} xs={24} sm={16}>
                        <div className="story-content-box">
                          <Title level={2}>
                            “It makes all the difference when data is
                            masterfully curated and fully linked”
                          </Title>
                          <Title level={3}>
                            “Cleaning and enriching data is a time-consuming
                            processes tha all data-professionals share. It
                            represents up-to 80% of the work involved when
                            trurning data into value. We are determined to
                            eliminate that vaste by providing ready-to-use data
                            for all business related analysis.”
                          </Title>
                        </div>
                      </Col>
                      <Col xl={24} xs={24}>
                        <Text>
                          <b>Stefán Baxter </b>- CEO Smart Data inc.
                        </Text>
                      </Col>
                    </Row>
                  </div>
                </Carousel>
              </Col>
            </Row>
          </div>
        </section>

        {/* sources section */}
        <section className="source-section">
          <div className="container">
            <Row>
              <Col xl={24} xs={24}>
                <Title level={1}>Sources & Resources</Title>
                <Title level={2}>
                  We always use open-source data when it is available and
                  contribute back to source projects as much as possible. Here
                  you find all the information you need to build your own list
                  of countries as well as information that helps you along the
                  way.
                </Title>
                <Row>
                  <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <div className="ant-secondary-list">
                      <List itemLayout="horizontal">
                        {source_resource_data &&
                          source_resource_data.map((item) => (
                            <List.Item>
                              <List.Item.Meta
                                avatar={<img src={item.logo} alt="" />}
                                title={item.title}
                                description={item.description}
                              />
                            </List.Item>
                          ))}
                      </List>
                    </div>
                  </Col>
                  <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <div className="ant-secondary-list">
                      <List itemLayout="horizontal">
                        {source_resource_data &&
                          source_resource_data.map((item) => (
                            <List.Item>
                              <List.Item.Meta
                                avatar={<img src={item.logo} alt="" />}
                                title={item.title}
                                description={item.description}
                              />
                            </List.Item>
                          ))}
                      </List>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </section>

        {/* condition section */}
        <section className="condition-section">
          <div className="container">
            <Row justify="center" align="middle">
              <Col xs={24} sm={24} md={16}>
                <Title level={1}>Always free for fair use</Title>
                <Title level={2}>
                  API access to the Best list of Countries will always be free
                  for those that use the service in accordance to our simple
                  fair-use clause.{" "}
                </Title>
                <Row justify="center" align="middle" gutter={8}>
                  <Col xl={7} lg={6} md={6} sm={8} xs={24}>
                    <Image src={Handshake} alt="" preview={false} />
                  </Col>
                  <Col
                    xl={{ offset: 1, span: 16 }}
                    lg={17}
                    md={17}
                    sm={16}
                    xs={24}
                  >
                    <div className="ant-simple-list">
                      <Title level={3}>Conditions for Free Use</Title>
                      <List itemLayout="horizontal">
                        {condition_data &&
                          condition_data.map((item) => (
                            <List.Item>
                              <List.Item.Meta
                                avatar={<CheckOutlined />}
                                description={item.description}
                              />
                            </List.Item>
                          ))}
                      </List>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </section>

        {/* notify section */}
        <section className="notify-section">
          <div className="container">
            <Row justify="center">
              <Col xl={12} lg={12} md={16} xs={24}>
                <Title level={1}>Content Notification</Title>
                <Title level={2}>
                  Help us be correct & Up-to-date and report any discrepencies
                  or wishes you may have
                </Title>
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  autoComplete="off"
                >
                  <Row gutter={16}>
                    <Col xl={12} xs={24}>
                      <Form.Item name="firstname">
                        <Input placeholder="First Name" />
                      </Form.Item>
                    </Col>
                    <Col xl={12} xs={24}>
                      <Form.Item name="lastname">
                        <Input placeholder="Last Name" />
                      </Form.Item>
                    </Col>
                    <Col xl={24} xs={24}>
                      <Form.Item name="email">
                        <Input placeholder="Email" />
                      </Form.Item>
                    </Col>
                    <Col xl={24} xs={24}>
                      <Form.Item name="content">
                        <TextArea
                          rows={7}
                          placeholder="Content"
                          maxLength={6}
                        />
                      </Form.Item>
                    </Col>
                    <Col xl={24} xs={24}>
                      <Select defaultValue="best">
                        <Option value="best">The Best Country List</Option>
                        <Option value="">The Best Country List</Option>
                        <Option value="">The Best Country List</Option>
                      </Select>
                    </Col>
                    <Col xl={24} xs={24}>
                      <Form.Item>
                        <Button
                          type="ghost"
                          onClick={() => this.setModal3Visible(true)}
                        >
                          Send
                        </Button>
                        <Modal
                          width={543}
                          className="primary"
                          title="The auto-adaptable part of the Country service improves when we know where you are coming from."
                          visible={this.state.modal2Visible}
                          onOk={() => this.setModal2Visible(false)}
                          onCancel={() => this.setModal2Visible(false)}
                          okText="Yes"
                          cancelText="No"
                          footer={[
                            <div>
                              <Button
                                key="back"
                                type="default"
                                onClick={this.handleCancel}
                              >
                                Cancel
                              </Button>
                              <Button
                                key="submit"
                                type="primary"
                                onClick={this.handleOk}
                              >
                                Sign Me Up!
                              </Button>
                            </div>,
                          ]}
                        >
                          Is It Okay for us to lookup YOur IP Adress?
                        </Modal>

                        <Modal
                          width={370}
                          className="primary center"
                          title="Thank four Your Suggestion"
                          visible={this.state.modal3Visible}
                          onOk={() => this.setModal3Visible(false)}
                          onCancel={() => this.setModal3Visible(false)}
                          okText="Yes"
                          cancelText="No"
                          footer={[
                            <div>
                              <Button
                                key="submit"
                                type="primary"
                                onClick={this.handleOk}
                              >
                                Have A Nice Day!
                              </Button>
                            </div>,
                          ]}
                        >
                          We’ll look into it and let you know
                        </Modal>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </div>
        </section>

        {/* blog section */}
        <section className="blogs-bg cards">
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
                    <Carousel
                      dots={false}
                      infinite
                      slidesToShow={3}
                      autoplay
                      arrows={false}
                      nextArrow={<img src={next} alt="" />}
                      prevArrow={<img src={previous} alt="" />}
                      responsive={[
                        {
                          breakpoint: 1200, // extra large breakpoint
                          settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                          },
                        },
                        {
                          breakpoint: 1199, // large breakpoint
                          settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                          },
                        },
                        {
                          breakpoint: 992, // md breakpoint
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                          },
                        },
                        {
                          breakpoint: 768, // sm breakpoint
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: false,
                          },
                        },
                        {
                          breakpoint: 575, // xs breakpoint
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                          },
                        },
                      ]}
                    >
                      <div className="item">
                        <Card
                          cover={<img alt="blog" src={blog1} />}
                          actions={[
                            [
                              <div>
                                <IconText text="20" />
                                <EyeOutlined key="view" />
                              </div>,
                              <div className="comments">
                                <IconText text="0" />
                                <MessageOutlined key="message" />
                              </div>,
                            ],
                            <StarOutlined key="favorite" />,
                          ]}
                        >
                          <div className="hidden-xs">
                            <Text type="primary">Lorem ipsum Dorum</Text>
                            <Text type="secondary">Aug 3 - 5 min</Text>
                          </div>
                          <Title level={4}>Data Curation Excellence</Title>
                          <Title level={5}>Our Manifesto</Title>
                          <div className="hidden-xs blog-desc">
                            <Paragraph>
                              Aenean ac cursus nisl. Pellentesque sit amet
                              mauris ipsum. Etiam luctus auctor odio, sed
                              vulputate lorem congue eget. Duis vel justo ac
                              lectus pharetra viverra sit amet nec dolor. Aenean
                              ac cursus nisl. Pellentesque sit amet mauris
                              ipsum. Etiam luctus auctor odio, sed vulputate
                              lorem congue.
                            </Paragraph>
                          </div>
                        </Card>
                      </div>
                      <div className="item">
                        <Card
                          cover={<img alt="blog" src={blog2} />}
                          actions={[
                            [
                              <div>
                                <IconText text="20" />
                                <EyeOutlined key="view" />
                              </div>,
                              <div className="comments">
                                <IconText text="0" />
                                <MessageOutlined key="message" />
                              </div>,
                            ],
                            <StarOutlined key="favorite" />,
                          ]}
                        >
                          <div className="hidden-xs">
                            <Text type="primary">Lorem ipsum Dorum</Text>
                            <Text type="secondary">Aug 3 - 5 min</Text>
                          </div>
                          <Title level={4}>Avoiding Stale Data</Title>
                          <Title level={5}>Our Manifesto</Title>
                          <div className="hidden-xs blog-desc">
                            <Paragraph>
                              Aenean ac cursus nisl. Pellentesque sit amet
                              mauris ipsum. Etiam luctus auctor odio, sed
                              vulputate lorem congue eget. Duis vel justo ac
                              lectus pharetra viverra sit amet nec dolor. Aenean
                              ac cursus nisl. Pellentesque sit amet mauris
                              ipsum. Etiam luctus auctor odio, sed vulputate
                              lorem congue.
                            </Paragraph>
                          </div>
                        </Card>
                      </div>
                      <div className="item">
                        <Card
                          cover={<img alt="blog" src={blog3} />}
                          actions={[
                            [
                              <div>
                                <IconText text="20" />
                                <EyeOutlined key="view" />
                              </div>,
                              <div className="comments">
                                <IconText text="0" />
                                <MessageOutlined key="message" />
                              </div>,
                            ],
                            <StarOutlined key="favorite" />,
                          ]}
                        >
                          <div className="hidden-xs">
                            <Text type="primary">Lorem ipsum Dorum</Text>
                            <Text type="secondary">Aug 3 - 5 min</Text>
                          </div>
                          <Title level={4}>Simple Use</Title>
                          <Title level={5}>Our Manifesto</Title>
                          <div className="hidden-xs blog-desc">
                            <Paragraph>
                              Aenean ac cursus nisl. Pellentesque sit amet
                              mauris ipsum. Etiam luctus auctor odio, sed
                              vulputate lorem congue eget. Duis vel justo ac
                              lectus pharetra viverra sit amet nec dolor. Aenean
                              ac cursus nisl. Pellentesque sit amet mauris
                              ipsum. Etiam luctus auctor odio, sed vulputate
                              lorem congue.
                            </Paragraph>
                          </div>
                        </Card>
                      </div>
                    </Carousel>
                  </Col>
                  <Col xl={24} xs={24} className="blog-bottom-desc">
                    <Link to="blogs" className="blog-link">
                      Go To Our Blog{" "}
                      <RightOutlined className="blog-link-icon" />{" "}
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="access-inner-box small">
              <Row justify="center">
                <Col xl={9} lg={9} md={12} sm={20} xs={24}>
                  <div className="box">
                    <Row>
                      <Col xl={12} lg={15} md={16} xs={15}>
                        <Title level={1}>Sign up now!</Title>
                        <Title level={2}>
                          Get free access to the only list of contries you'll
                          ever need!
                        </Title>
                        <Button onClick={() => this.setModal1Visible(true)}>
                          Sign Me Up!
                        </Button>
                        <Modal
                          title={
                            <>
                              <Title level={1}>One Step Away!</Title>{" "}
                              <Title level={2}>
                                Fill out the form below and get access to the
                                best country list int the world.
                              </Title>
                            </>
                          }
                          centered
                          visible={this.state.modal1Visible}
                          onOk={() => this.setModal1Visible(false)}
                          onCancel={() => this.setModal1Visible(false)}
                          width={674}
                          footer={[
                            <Button
                              key="back"
                              type="default"
                              onClick={this.handleCancel}
                            >
                              Cancel
                            </Button>,
                            <Button
                              key="submit"
                              type="primary"
                              onClick={this.handleOk}
                            >
                              Sign Me Up!
                            </Button>,
                          ]}
                        >
                          <Form layout="vertical">
                            <Form.Item label="Email">
                              <Input size="large" />
                            </Form.Item>
                            <Form.Item label="First Name">
                              <Input size="large" />
                            </Form.Item>
                            <Form.Item label="Last Name">
                              <Input size="large" />
                            </Form.Item>
                            <Form.Item label="Message">
                              <TextArea rows={6} />
                            </Form.Item>
                          </Form>
                        </Modal>
                      </Col>
                      <Col xl={12} lg={9} md={8} xs={9}>
                        <Image src={SignUp} alt="signup" preview={false} />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        {/* popovers */}
        <section>
          <Row justify="center">
            <Popover
              overlayClassName="primary"
              placement="bottomRight"
              title="Updates"
              content={
                <>
                  <Text>18.01.2022</Text>
                  <Title level={2}>Barbados is Now a Sovereign State.</Title>
                  <Paragraph>
                    Conveniently initiate viral synergy without multi functional
                    platforms. Conveniently initiate viral synergy without multi
                    functional platforms.{" "}
                  </Paragraph>
                  <Tag className="primary">Update</Tag>
                  <Tag className="secondary">New Country</Tag>
                  <Divider />
                  <Text>18.01.2022</Text>
                  <Title level={2}>Barbados is Now a Sovereign State.</Title>
                  <Paragraph>
                    Conveniently initiate viral synergy without multi functional
                    platforms. Conveniently initiate viral synergy without multi
                    functional platforms.{" "}
                  </Paragraph>
                  <Tag>New Entity</Tag>
                  <Tag>Ipsum</Tag>
                  <Tag>Dorum</Tag>
                </>
              }
              trigger="click"
            >
              <Button>Primary Popover</Button>
            </Popover>

            <Popover
              placement="bottomRight"
              title="Updates"
              content={
                <>
                  <Text>18.01.2022</Text>
                  <Title level={2}>Barbados is Now a Sovereign State.</Title>
                  <Paragraph>
                    Conveniently initiate viral synergy without multi functional
                    platforms. Conveniently initiate viral synergy without multi
                    functional platforms.{" "}
                  </Paragraph>
                  <Tag>New Entity</Tag>
                  <Tag>Ipsum</Tag>
                  <Tag>Dorum</Tag>
                  <Divider />
                  <Text>18.01.2022</Text>
                  <Title level={2}>Barbados is Now a Sovereign State.</Title>
                  <Paragraph>
                    Conveniently initiate viral synergy without multi functional
                    platforms. Conveniently initiate viral synergy without multi
                    functional platforms.{" "}
                  </Paragraph>
                  <Tag>New Entity</Tag>
                  <Tag>Ipsum</Tag>
                  <Tag>Dorum</Tag>
                </>
              }
              trigger="click"
            >
              <Button>Normal Popover</Button>
            </Popover>

            <Popover
              placement="leftTop"
              title="Popover title"
              content="Conveniently initiate viral synergy without multi functional platforms"
              trigger="click"
            >
              <Button>Left top</Button>
            </Popover>

            <Popover
              placement="rightTop"
              title="Popover title"
              content="Conveniently initiate viral synergy without multi functional platforms"
              trigger="click"
            >
              <Button>Right top</Button>
            </Popover>

            <Popover
              overlayClassName="premium"
              placement="rightTop"
              title={
                <>
                  <Image src={premium} alt="" />
                  Premium
                </>
              }
              content="Conveniently initiate viral synergy without multi functional platforms"
              trigger="click"
            >
              <Button>Premium</Button>
            </Popover>
          </Row>
        </section>
      </>
    );
  }
}
