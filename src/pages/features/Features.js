import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Col, Form, Image, List, Modal, Row, Select } from "antd";

import "./Features.css";
import React, { Component } from "react";

import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";

import atals from "../../assets/images/atals.svg";
import AutoComplete from "../../assets/images/AutoComplete.svg";
import Connected from "../../assets/images/Connected.svg";
// import DkShape from '../../assets/images/DkShape.svg';
import Edit from "../../assets/images/Edit.svg";
import featuresIcon from "../../assets/images/features-icon.svg";
// import FlagIcon1 from '../../assets/images/FlagIcon1.svg';
// import FlagIcon2 from '../../assets/images/FlagIcon2.svg';
// import FlagIcon3 from '../../assets/images/FlagIcon3.svg';
// import FlagIcon4 from '../../assets/images/FlagIcon4.svg';
import Location from "../../assets/images/Location.svg";
// import SeShape from '../../assets/images/SeShape.svg';
import SignBoard from "../../assets/images/Sign-board.svg";
import SignUp from "../../assets/images/SignUp.png";

const featuresData1 = [
  {
    title: "Fully linked Data",
  },
  {
    title: "Timeseries and Entities",
  },
  {
    title: "Fully Conformed Data",
  },
];
const { Option } = Select;
export default class Features extends Component {
  state = {
    modal1Visible: false,
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  render() {
    return (
      <>
        {/* catalogue section */}
        <section className="catalogue-section">
          <div className="container">
            <Row align="middle" justify="center">
              <Col md={8} xs={24}>
                <Image src={featuresIcon} alt="" preview={false} />
              </Col>
              <Col md={{ span: 9, offset: 1 }} xs={24}>
                <Title level={1}>
                  Main Features <i>& Differentiators</i>
                </Title>
              </Col>
            </Row>
          </div>
        </section>

        {/* goals section */}
        <section className="goals-section invert">
          <div className="container">
            <Row justify="center">
              <Col md={7} xs={24}>
                <Title level={1}>
                  Lorem Ipsum <i>Dolor Sit Amet</i>
                </Title>
              </Col>
              <Col md={12} xs={24}>
                <Paragraph>
                  We are curating data that falls into the following categories.
                  A small sample is available now but most of it will only be
                  available after our beta and we will continue to make new
                  datasets available for as long as we can improve our coverage.{" "}
                  <i>
                    We realeasing new cureated and linked datasets every month.
                  </i>
                </Paragraph>
              </Col>
            </Row>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <Row justify="center" gutter={32} align="middle">
              <Col md={8}>
                <Card
                  title="Everything is connected"
                  cover={
                    <Image alt="example" preview={false} src={AutoComplete} />
                  }
                >
                  <List
                    itemLayout="horizontal"
                    dataSource={featuresData1}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta description={item.title} />
                      </List.Item>
                    )}
                  />
                </Card>
                <Card title="Frictionless Data">
                  <List
                    itemLayout="horizontal"
                    dataSource={featuresData1}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta description={item.title} />
                      </List.Item>
                    )}
                  />
                </Card>
                <Card
                  title="Direct Data Delivery"
                  cover={
                    <Image alt="example" preview={false} src={SignBoard} />
                  }
                >
                  <List
                    itemLayout="horizontal"
                    dataSource={featuresData1}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta description={item.title} />
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
              <Col md={8} className="invert">
                <Card title="Visual Data Discovery">
                  <List
                    itemLayout="horizontal"
                    dataSource={featuresData1}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta description={item.title} />
                      </List.Item>
                    )}
                  />
                </Card>
                <Card
                  title="Source Selection"
                  cover={<Image alt="example" preview={false} src={atals} />}
                >
                  <List
                    itemLayout="horizontal"
                    dataSource={featuresData1}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta description={item.title} />
                      </List.Item>
                    )}
                  />
                </Card>
                <Card
                  title="Redundancy Guard"
                  cover={<Image alt="example" preview={false} src={Location} />}
                >
                  <List
                    itemLayout="horizontal"
                    dataSource={featuresData1}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta description={item.title} />
                      </List.Item>
                    )}
                  />
                </Card>
                <Card title="Intelligent Autocomplete">
                  <List
                    itemLayout="horizontal"
                    dataSource={featuresData1}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta description={item.title} />
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
              <Col md={8}>
                <Card
                  title="Automatic Reference Resolver"
                  cover={<Image alt="example" preview={false} src={Edit} />}
                >
                  <List
                    itemLayout="horizontal"
                    dataSource={featuresData1}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta description={item.title} />
                      </List.Item>
                    )}
                  />
                </Card>
                <Card title="Mix Open & Premium Data">
                  <List
                    itemLayout="horizontal"
                    dataSource={featuresData1}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta description={item.title} />
                      </List.Item>
                    )}
                  />
                </Card>
                <Card
                  title="Context on Demand"
                  cover={
                    <Image alt="example" preview={false} src={Connected} />
                  }
                >
                  <List
                    itemLayout="horizontal"
                    dataSource={featuresData1}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta description={item.title} />
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        <Modal
          title={
            <>
              <Title level={1}>One Step Away!</Title>{" "}
              <Title level={2}>
                Fill out the form below and get access to the best country list
                int the world.
              </Title>
            </>
          }
          centered
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
          width={674}
          footer={[
            <Button key="back" type="default" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              Sign Me Up!
            </Button>,
          ]}
        >
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
                  <Row gutter={16} justify="space-between" align="middle">
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
                  <Row gutter={16} justify="space-between" align="middle">
                    <Col md={3} xs={3}>
                      {/* <Image src={FlagIcon2} /> */}
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
                      {/* <Image src={DkShape} /> */}
                    </Col>
                  </Row>
                </Option>
                <Option value="Finland" label="Finland">
                  <Row gutter={16} justify="space-between" align="middle">
                    <Col md={3} xs={3}>
                      {/* <Image src={FlagIcon3} /> */}
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
                  <Row gutter={16} justify="space-between" align="middle">
                    <Col md={3} xs={3}>
                      {/* <Image src={FlagIcon4} /> */}
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
        </Modal>

        {/* signup section */}
        <section className="signup-bg">
          <div className="container">
            <Row>
              <Col
                xl={{ span: 18, offset: 3 }}
                lg={{ offset: 2, span: 20 }}
                md={{ offset: 1, span: 22 }}
                xs={24}
              >
                <div className="box">
                  <Row>
                    <Col
                      xl={{ span: 12, order: 1 }}
                      xs={{ order: 2, span: 24 }}
                    >
                      <Title level={3}>
                        <b>Sign up</b> now!
                      </Title>
                      <Title level={4}>
                        And get free access to the only list of contries you'll
                        ever need!
                      </Title>
                      <Button>Sign Me Up!</Button>
                    </Col>
                    <Col
                      xl={{ span: 12, order: 2 }}
                      xs={{ span: 24, order: 1 }}
                    >
                      <Image src={SignUp} alt="signup" preview={false} />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </>
    );
  }
}
