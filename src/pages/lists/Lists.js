import { Col, Image, List, Row, Badge, Dropdown, Menu, Collapse } from 'antd'
import './Lists.css';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title'
import React, { Component } from 'react'
import Catalouge from '../../assets/images/Catalouge.svg';
import search_new from '../../assets/images/search_new.svg';
import compare_plans_sm from '../../assets/images/compare_plans_sm.svg';
import geography from '../../assets/images/geography.svg';
import tech from '../../assets/images/tech.svg';
import finance from '../../assets/images/finance.svg';
import transport from '../../assets/images/transport.svg';
import countries from '../../assets/images/countries.svg';
import products from '../../assets/images/products.svg';
import business from '../../assets/images/business.svg';
import science from '../../assets/images/science.svg';
import organization from '../../assets/images/organization.svg';
import demographic from '../../assets/images/demographic.svg';
import globe_img_w from '../../assets/images/globe_img_w.svg';
import dbpedia_w from '../../assets/images/dbpedia_w.svg';
import wikidata_w from '../../assets/images/wikidata_w.svg';
import openstreetmaps_w from '../../assets/images/openstreetmaps_w.svg';
import wikipedia_w from '../../assets/images/wikipedia_w.svg';
import eurostat_w from '../../assets/images/eurostat_w.svg';
import globe_img from '../../assets/images/globe.svg';
import dbpedia from '../../assets/images/dbpedia.svg';
import wikidata from '../../assets/images/wikidata.svg';
import openstreetmaps from '../../assets/images/openstreetmaps.svg';
import wikipedia from '../../assets/images/wikipedia.svg';
import eurostat from '../../assets/images/eurostat.svg';
import Text from 'antd/lib/typography/Text';
import shine from '../../assets/images/shine.svg';
import fundamental from '../../assets/images/fundamental.svg';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Panel } = Collapse;

const entity_data = [
  {
    icon: geography,
    title: "Geography",
    description: "Geo, Locations, Ways & Services",
  },
  {
    icon: finance,
    title: "Finance",
    description: "Finance, Markets & Rates",
  },
  {
    icon: transport,
    title: "Transport",
    description: "Transportation & Infrastructure",
  },
  {
    icon: countries,
    title: "Countries",
    description: "The Bests Country API",
    badge: true,
  },
  {
    icon: products,
    title: "Products",
    description: "Products & Goods",
  },
  {
    icon: business,
    title: "Business",
    description: "Business & Trade",
  },
  {
    icon: science,
    title: "Science",
    description: "Nature & Science",
  },
  {
    icon: tech,
    title: "Tech",
    description: "Technology, Standards & Identifiers",
  },
  {
    icon: demographic,
    title: "Demography",
    description: "Demography, Culture & Society",
  },
  {
    icon: organization,
    title: "Orginzation",
    description: "Organizations & Services",
  },
  {
    icon: geography,
    title: "Name  of",
    description: "Short Exlpanation & Lorem Ipsum Dorum",
  },
  {
    icon: geography,
    title: "Name  of",
    description: "Short Exlpanation & Lorem Ipsum Dorum",
  }, 
  {
    icon: fundamental,
    title: "The Fundamentals",
    description: "Demography, Culture  & Society",
  },  
];

const stat_data = [
  {
    icon: geography,
    title: "Geography",
    description: "Geo, Locations, Ways & Services",
  },
  {
    icon: finance,
    title: "Finance",
    description: "Finance, Markets & Rates",
  },
  {
    icon: transport,
    title: "Transport",
    description: "Transportation & Infrastructure",
  },
  {
    icon: countries,
    title: "Countries",
    description: "The Bests Country API",
    badge: true,
  },
  {
    icon: products,
    title: "Products",
    description: "Products & Goods",
  },
  {
    icon: business,
    title: "Business",
    description: "Business & Trade",
  },
  {
    icon: science,
    title: "Science",
    description: "Nature & Science",
  },
  {
    icon: tech,
    title: "Tech",
    description: "Technology, Standards & Identifiers",
  },
  {
    icon: demographic,
    title: "Demography",
    description: "Demography, Culture & Society",
  },
  {
    icon: organization,
    title: "Orginzation",
    description: "Organizations & Services",
  },
  {
    icon: geography,
    title: "Name  of",
    description: "Short Exlpanation & Lorem Ipsum Dorum",
  },
  {
    icon: geography,
    title: "Name  of",
    description: "Short Exlpanation & Lorem Ipsum Dorum",
  },
  {
    icon: demographic,
    title: "Demography",
    description: "Demography, Culture & Society",
  },
  {
    icon: organization,
    title: "Orginzation",
    description: "Organizations & Services",
  },
  {
    icon: geography,
    title: "Name  of",
    description: "Short Exlpanation & Lorem Ipsum Dorum",
  },
  {
    icon: geography,
    title: "Name  of",
    description: "Short Exlpanation & Lorem Ipsum Dorum",
  },  
  {
    icon: fundamental,
    title: "The Fundamentals",
    description: "Demography, Culture  & Society",
  }, 
];

const events_data = [
  {
    icon: geography,
    title: "Geography",
    description: "Geo, Locations, Ways & Services",
  },
  {
    icon: finance,
    title: "Finance",
    description: "Finance, Markets & Rates",
  },
  {
    icon: transport,
    title: "Transport",
    description: "Transportation & Infrastructure",
  },
  {
    icon: countries,
    title: "Countries",
    description: "The Bests Country API",
    badge: true,
  },
  {
    icon: products,
    title: "Products",
    description: "Products & Goods",
  },
  {
    icon: business,
    title: "Business",
    description: "Business & Trade",
  },
  
];
const sources_data_w = [
  {
    logo: globe_img_w,
    title: "Geonames"
  },
  {
    logo: openstreetmaps_w,
    title: "Open Street Maps"
  },
  {
    logo: dbpedia_w,
    title: "db Pedia"
  },
  {
    logo: wikipedia_w,
    title: "Wikipedia"
  },
  {
    logo: wikidata_w,
    title: "Wikidata"
  },
  {
    logo: eurostat_w,
    title: "Eurostat"
  },
];
const sources_data = [
  {
    logo: globe_img,
    title: "Geonames"
  },
  {
    logo: openstreetmaps,
    title: "Open Street Maps"
  },
  {
    logo: dbpedia,
    title: "db Pedia"
  },
  {
    logo: wikipedia,
    title: "Wikipedia"
  },
  {
    logo: wikidata,
    title: "Wikidata"
  },
  {
    logo: eurostat,
    title: "Eurostat"
  },
];
const menu = (
  <Menu className="src-menu" mode="grid">
    <Menu.Item key="0" icon={<img src={globe_img_w} alt="" />} >Geonames</Menu.Item>
    <Menu.Item key="1" icon={<img src={openstreetmaps_w} alt="" />} >Open Street Maps</Menu.Item>
    <Menu.Item key="2" icon={<img src={dbpedia_w} alt="" />} >db Pedia</Menu.Item>
    <Menu.Item key="3" icon={<img src={wikipedia_w} alt="" />} >Wikipedia</Menu.Item>
    <Menu.Item key="4" icon={<img src={wikidata_w} alt="" />} >Wikidata</Menu.Item>
    <Menu.Item key="5" icon={<img src={eurostat_w} alt="" />} >Eurostat</Menu.Item>
  </Menu>
);
export default class Lists extends Component {
  render() {
    return (
      <>
        {/* catalogue section */}
        <section className="catalogue-section">
          <div className="container">
            <Row align="middle" justify="center">
              <Col md={9} xs={24}>
                <Image src={Catalouge} alt="" preview={false} />
              </Col>
              <Col md={{span:9,offset:1}} xs={24}>
                <Title level={1}>The Quick Lookup <i>Data Catalogue</i></Title>
              </Col>
            </Row>
          </div>
        </section>

        {/* goals section */}
        <section className="goals-section">
          <div className="container">
            <Row justify="center">
              <Col md={7} xs={24}>
                <Title level={1}>Humble Beginnings <i>Lofty Goals</i></Title>
              </Col>
              <Col md={12} xs={24}>
                <Paragraph>
                  We are curating data that falls into the following categories. A small sample is available now but most of it will only be available after our beta and we will continue to make new datasets available for as long as we can improve our coverage. <i>We realeasing new cureated and linked datasets every month.</i>
                </Paragraph>
              </Col>
            </Row>
          </div>
        </section>

        {/* entities section */}
        <section className="entities-section">
          <div className="container">
            <Row>
              <Col md={24} xs={24}>
                <div className="box">
                  <Title level={1}>Entitties</Title>
                  <List
                    grid={{ gutter: 16, xl:4, lg:4, md: 2, sm:1, xs:1 }}
                    dataSource={entity_data}
                    renderItem={item => (
                      item.badge ?
                        <Badge.Ribbon text={<>FREE For Life<Image src={shine} preview={false} /></>} color="volcano" placement="end">
                          <List.Item>
                            <List.Item.Meta
                              avatar={<Image src={item.icon} preview={false} alt="" />}
                              title={item.title}
                              description={item.description}
                            />
                          </List.Item>
                        </Badge.Ribbon>
                      :     
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Image src={item.icon} preview={false} alt="" />}
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

        {/* primary sources section */}
        <section className="entity-primary-src-section">
          <div className="container">
            <Row>
              <Col md={24} xs={0}>
                <div className="primary-vertical-list">
                  <Text >
                      Primary Sources:
                  </Text>
                  <List
                      itemLayout="vertical"
                      dataSource={sources_data_w}
                      renderItem={item => (
                      <List.Item>
                          <List.Item.Meta avatar={<img src={item.logo} alt="" />} title={item.title} />
                      </List.Item>
                      )}
                  />
                  <Link to="/">See all</Link>
                </div>
              </Col>
              <Col md={0} xs={24}>
                <Dropdown overlay={
                    <Menu className="src-menu" mode="grid">
                      { sources_data_w && 
                        sources_data_w.map((item) => (
                      <Menu.Item key="0" icon={<img src={item.logo} alt="" />} >{item.title}</Menu.Item>
                        ))
                      }
                    </Menu>
                  } trigger={['click']}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Primary Sources <DownOutlined />
                  </a>
                </Dropdown>
              </Col>
            </Row>
          </div>
        </section>

        {/* statistics section */}
        <section className="statistics-section">
          <div className="container">
            <Row>
              <Col md={24} xs={24}>
                <div className="box">
                  <Title level={1}>Statistics</Title>
                  <List
                    grid={{ gutter: 16, xl:4, lg:4, md: 2, sm:2, xs:2 }}
                    dataSource={stat_data}
                    renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Image src={item.icon} preview={false} alt="" />}
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

        {/* primary sources section */}
        <section className="stat-primary-src-section">
          <div className="container">
            <Row>
              <Col md={24} xs={0}>
                <div className="primary-vertical-list">
                  <Text >
                      Primary Sources:
                  </Text>
                  <List
                    itemLayout="vertical"
                    dataSource={sources_data}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta avatar={<img src={item.logo} alt="" />} title={item.title} />
                    </List.Item>
                    )}
                  />
                  <Link to="/">See all</Link>
                </div>
              </Col>
              <Col md={0} xs={24}>
                <Dropdown overlay={
                  <Menu className="src-menu invert" mode="grid">
                      { sources_data && 
                        sources_data.map((item) => (
                      <Menu.Item key="0" icon={<img src={item.logo} alt="" />} >{item.title}</Menu.Item>
                        ))
                      }
                    </Menu>
                  } trigger={['click']}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Primary Sources <DownOutlined />
                  </a>
                </Dropdown>
              </Col>
            </Row>
          </div>
        </section>

        {/* events section */}
        <section className="events-section">
          <div className="container">
            <Row>
              <Col md={24} xs={24}>
                <div className="box">
                  <Title level={1}>Events</Title>
                  <List
                    grid={{ gutter: 16, xl:4, lg:4, md: 2, sm:2, xs:2 }}
                    dataSource={events_data}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Image src={item.icon} preview={false} alt="" />}
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

        {/* primary sources section */}
        <section className="entity-primary-src-section">
          <div className="container">
            <Row>
              <Col md={24} xs={0}>
                <div className="primary-vertical-list">
                  <Text >
                      Primary Sources:
                  </Text>
                  <List
                      itemLayout="vertical"
                      dataSource={sources_data_w}
                      renderItem={item => (
                      <List.Item>
                          <List.Item.Meta avatar={<img src={item.logo} alt="" />} title={item.title} />
                      </List.Item>
                      )}
                  />
                  <Link to="/">See all</Link>
                </div>
              </Col>
              <Col md={0} xs={24}>
                <Dropdown overlay={
                  <Menu className="src-menu" mode="grid">
                    { sources_data_w && 
                      sources_data_w.map((item) => (
                    <Menu.Item key="0" icon={<img src={item.logo} alt="" />} >{item.title}</Menu.Item>
                      ))
                    }
                  </Menu>
                  } trigger={['click']}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Primary Sources <DownOutlined />
                  </a>
                </Dropdown>
              </Col>
            </Row>
          </div>
        </section>

      </>
    )
  }
}
