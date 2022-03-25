import React, { Component } from 'react'
import { Badge, Button, Checkbox, Col, Dropdown, Form, Image, Input, Menu, Modal, Row, Select, Slider, Space, Table } from 'antd'
import { DownloadOutlined, DownOutlined } from '@ant-design/icons';
import dropdown_pic from '../../assets/images/Group 1526.svg';
import logo_new from '../../assets/images/logo_new.svg';
import flag from '../../assets/images/flag.svg';
import search from '../../assets/images/simple_search.svg';
import premium from '../../assets/images/premium.svg';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Option } = Select;

const dataSource = [
    {
        key: '1',
        flag: <Image src={flag} />,
        country: 'Denmark',
        native_name: 'Denmark',
        population: '6.562.000',
        gdp: '$ 622 trillion',
        education_index: '0,99',
        iso: '1600000000',
        wikidata: '$ 2.624 trillion',
        un_m49: '0,9',
    },
    {
        key: '2',
        flag: <Image src={flag} />,
        country: 'India',
        native_name: 'Baharat',
        population: '6.565.000',
        gdp: '$ 623 trillion',
        education_index: '0,99',
        iso: '1600000000',
        wikidata: '$ 2.624 trillion',
        un_m49: '0,9',
    },
    {
        key: '3',
        flag: <Image src={flag} />,
        country: 'Denmark',
        native_name: 'Denmark',
        population: '6.565.000',
        gdp: '$ 623 trillion',
        education_index: '0,99',
        iso: '1600000000',
        wikidata: '$ 2.624 trillion',
        un_m49: '0,9',
    },
    {
        key: '4',
        flag: <Image src={flag} />,
        country: 'Denmark',
        native_name: 'Denmark',
        population: '6.565.000',
        gdp: '$ 623 trillion',
        education_index: '0,99',
        iso: '1600000000',
        wikidata: '$ 2.624 trillion',
        un_m49: '0,9',
    },
    {
        key: '5',
        flag: <Image src={flag} />,
        country: 'Denmark',
        native_name: 'Denmark',
        population: '6.565.000',
        gdp: '$ 623 trillion',
        education_index: '0,99',
        iso: '1600000000',
        wikidata: '$ 2.624 trillion',
        un_m49: '0,9',
    },
    {
        key: '6',
        flag: <Image src={flag} />,
        country: 'Denmark',
        native_name: 'Denmark',
        population: '6.565.000',
        gdp: '$ 623 trillion',
        education_index: '0,99',
        iso: '1600000000',
        wikidata: '$ 2.624 trillion',
        un_m49: '0,9',
    },
    {
        key: '7',
        flag: <Image src={flag} />,
        country: 'Denmark',
        native_name: 'Denmark',
        population: '6.565.000',
        gdp: '$ 623 trillion',
        education_index: '0,99',
        iso: '1600000000',
        wikidata: '$ 2.624 trillion',
        un_m49: '0,9',
    },
    {
        key: '8',
        flag: <Image src={flag} />,
        country: 'Denmark',
        native_name: 'Denmark',
        population: '6.565.000',
        gdp: '$ 623 trillion',
        education_index: '0,99',
        iso: '1600000000',
        wikidata: '$ 2.624 trillion',
        un_m49: '0,9',
    },
    {
        key: '9',
        flag: <Image src={flag} />,
        country: 'Denmark',
        native_name: 'Denmark',
        population: '6.565.000',
        gdp: '$ 623 trillion',
        education_index: '0,99',
        iso: '1600000000',
        wikidata: '$ 2.624 trillion',
        un_m49: '0,9',
    },
    {
        key: '10',
        flag: <Image src={flag} />,
        country: 'Denmark',
        native_name: 'Denmark',
        population: '6.565.000',
        gdp: '$ 623 trillion',
        education_index: '0,99',
        iso: '1600000000',
        wikidata: '$ 2.624 trillion',
        un_m49: '0,9',
    },
    {
        key: '11',
        flag: <Image src={flag} />,
        country: 'Denmark',
        native_name: 'Denmark',
        population: '6.565.000',
        gdp: '$ 623 trillion',
        education_index: '0,99',
        iso: '1600000000',
        wikidata: '$ 2.624 trillion',
        un_m49: '0,9',
    },
];


const columns = [
    {
        title: "",
        children: [
            {
                title: () => {
                    return (
                        <>
                            <Title level={5}>Flag</Title> 
                            <Image src={flag} />
                        </>
                    )
                },
                dataIndex: 'flag',
                key: 'flag',
            },
            {
                title: 'Country',
                dataIndex: 'country',
                key: 'country',
            },
            {
                title: 'Native Name*',
                dataIndex: 'native_name',
                key: 'native_name',
                sorter: (a, b) => a.native_name.localeCompare(b.native_name)
            },
        ]
    },
    {
    title: "Statistics for 1950",
      children: [
        {
            title: 'Population',
            dataIndex: 'population',
            key: 'population',
            sorter: (a, b) => a.native_name.localeCompare(b.native_name)
        },
        {
            title: 'GDP',
            dataIndex: 'gdp',
            key: 'gdp',
            sorter: (a, b) => a.native_name.localeCompare(b.native_name)
        },
        {
            title: 'Education Index',
            dataIndex: 'education_index',
            key: 'education_index',
            sorter: (a, b) => a.native_name.localeCompare(b.native_name)
        },
      ]
    },
    {
        title: "Common Identifiers",
        children: [
            {
                title: 'ISO',
                dataIndex: 'iso',
                key: 'iso',
                sorter: (a, b) => a.native_name.localeCompare(b.native_name)
            },
            {
                title: 'Wikidata',
                dataIndex: 'wikidata',
                key: 'wikidata',
                sorter: (a, b) => a.native_name.localeCompare(b.native_name)
            },
            {
                title: 'UN M49',
                dataIndex: 'un_m49',
                key: 'un_m49',
                sorter: (a, b) => a.native_name.localeCompare(b.native_name)
            },
        ]
    }

];

export default class Datatable extends Component {

    handleChange = value => {
        this.setState({ value });
    };
    state = {
        year_val: 1950,
        modal1Visible: false,
        modal2Visible: false,
    };
    
    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }

    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }

    render() {
        const marks = {
            1894: '1894',
            2022: '2022',
        };
        const menu = (
            <Menu>
                <Menu.Item key="0"><Image src={dropdown_pic} /> UN List Of Sovereign States  (206)</Menu.Item>
                <Menu.Item key="1"><Image src={dropdown_pic} /> UN List Of Sovereign States  (206)</Menu.Item>
                <Menu.Item key="2"><Image src={dropdown_pic} /> UN List Of Sovereign States  (206)</Menu.Item>
            </Menu>
        );
        
        return (
            <>
                <div className="data-table">
                    <Row gutter={8} justify="space-between">
                        <Col md={5} xs={24}>
                            <Select defaultValue="206" size="large" >
                                <Option value="206"><Image src={dropdown_pic} /> UN List Of Sovereign States  (206)</Option>
                                <Option value="205"><Image src={dropdown_pic} /> UN List Of Sovereign States  (205)</Option>
                                <Option value="204"><Image src={dropdown_pic} /> UN List Of Sovereign States  (205)</Option>
                            </Select>
                        </Col>
                        <Col md={5} xs={24}>
                            <div className="table-search-box">
                                <Input
                                    size="large"
                                    placeholder="Search"
                                    suffix={<img src={search} alt="" />
                                    }
                                    />
                            </div>
                        </Col>
                    </Row>   

                    <Row>
                        <Col md={24} xs={24}>
                            <Table pagination={false} columns={columns} dataSource={dataSource} />
                        </Col>
                    </Row>             

                    <Row gutter={8}>
                        <Col xl={8} lg={8} md={9} xs={24}>
                            <div className="slider-wrapper">
                                <span className="year-text">{this.state.year_val}</span>
                                <Slider marks={marks} min={1894} max={2022} defaultValue={this.state.year_val} onChange={this.handleChange}  />
                            </div>
                        </Col>
                        <Col xxl={{span:5,offset:8}} xl={{span:6, offset:7}} lg={{span:7, offset:5}} md={{span:9, offset:1}} xs={24}>
                            <Button  onClick={() => this.setModal1Visible(true)}  className="fetch-btn">Customize which Country properties you fetch</Button>
                            <Modal className="secondary" 
                                width={804}
                                title={<><Image src={logo_new} preview={false} alt="logo" />Availble <i>Country</i> Properties</>}
                                centered
                                visible={this.state.modal1Visible}
                                onOk={() => this.setModal1Visible(false)}
                                onCancel={() => this.setModal1Visible(false)}
                                footer={[
                                    <div>
                                        <Text>*You fetch all these values using the QL API and Plug-ins</Text>
                                        <Link to="/">More</Link>
                                    </div>,
                                    <div>
                                        <Button key="back" type="default" onClick={this.handleCancel}>
                                        Cancel
                                        </Button>
                                        <Button key="submit" type="primary" onClick={this.handleOk}>
                                            Update Table
                                        </Button>
                                    </div>,
                                ]}
                                >                                    
                                <Form
                                    layout="vertical"
                                    >
                                    <Row>
                                        <Col md={10} xs={24}>
                                            <Form.Item name="checkbox-group" label="Basic Information">
                                                <Checkbox.Group style={{ width: '100%' }}>
                                                    <Row>
                                                        <Col md={12} xs={8}>
                                                            <Checkbox value="Name" >
                                                                Name
                                                            </Checkbox>
                                                        </Col>
                                                        <Col md={12} xs={8}>
                                                            <Checkbox value="Size"  >
                                                                Size
                                                            </Checkbox>
                                                        </Col>
                                                        <Col md={12} xs={8}>
                                                            <Checkbox value="Native Name" >
                                                                Native Name
                                                            </Checkbox>
                                                        </Col>
                                                        <Col md={12} xs={8}>
                                                            <Checkbox value="Highest point" >
                                                                Highest point
                                                            </Checkbox>
                                                        </Col>
                                                        <Col md={12} xs={8}>
                                                            <Checkbox value="Map" >
                                                                Map
                                                            </Checkbox>
                                                        </Col>
                                                        <Col md={12} xs={8}>
                                                            <Checkbox value="Map" >
                                                                Map
                                                            </Checkbox>
                                                        </Col>
                                                    </Row>
                                                </Checkbox.Group>
                                            </Form.Item>
                                        </Col>
                                        <Col md={10} xs={24}>
                                            <Form.Item name="checkbox-group" label="Localization">
                                                <Checkbox.Group style={{ width: '100%' }}>
                                                    <Row>
                                                        <Col span={12}>
                                                            <Badge.Ribbon text="New" color="volcano">
                                                                <Checkbox value="Date Format" >
                                                                    Date Format
                                                                </Checkbox>
                                                            </Badge.Ribbon>
                                                        </Col>
                                                        <Col span={12}>
                                                            <Checkbox value="Number format"  >
                                                                Number format
                                                            </Checkbox>
                                                        </Col>
                                                        <Col span={12}>
                                                            <Badge.Ribbon text="New" color="volcano">
                                                                <Checkbox value="Electric Sockets" >
                                                                    Electric Sockets
                                                                </Checkbox>
                                                            </Badge.Ribbon>
                                                        </Col>
                                                        <Col span={12}>
                                                            <Checkbox value="Tel Formatting" >
                                                                Tel Formatting
                                                            </Checkbox>
                                                        </Col>
                                                        <Col span={12}>
                                                            <Checkbox value="SSC Format" >
                                                                SSC Format
                                                            </Checkbox>
                                                        </Col>
                                                    </Row>
                                                </Checkbox.Group>
                                            </Form.Item>
                                        </Col>
                                        <Col md={4} xs={24}>
                                            <Form.Item name="checkbox-group" label="Geo">
                                                <Checkbox.Group style={{ width: '100%' }}>
                                                    <Row>
                                                        <Col md={24} xs={8}>
                                                            <Checkbox value="Map" >
                                                                Map
                                                            </Checkbox>
                                                        </Col>
                                                        <Col md={24} xs={8}>
                                                            <Checkbox value="BB Box" >
                                                                BB Box
                                                            </Checkbox>
                                                        </Col>
                                                        <Col md={24} xs={8}>
                                                            <Checkbox value="Center (Lat, Long)" >
                                                                Center (Lat, Long)
                                                            </Checkbox>
                                                        </Col>
                                                    </Row>
                                                </Checkbox.Group>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row gutter={{md:64}}>
                                        <Col md={14} xs={24}>
                                            <Form.Item name="checkbox-group" label="Statics and Lead Indicators*">
                                                <Space size={16} style={{width:"100%"}} direction="vertical">
                                                    <Select defaultValue="Add text" >
                                                        <Option value="Add text">Add text</Option>
                                                        <Option value="lucy">Lucy</Option>
                                                        <Option value="Yiminghe">yiminghe</Option>
                                                    </Select>
                                                    <Select defaultValue="Add text" >
                                                        <Option value="Add text">Add text</Option>
                                                        <Option value="lucy">Lucy</Option>
                                                        <Option value="Yiminghe">yiminghe</Option>
                                                    </Select>
                                                    <Select defaultValue="Add text" >
                                                        <Option value="Add text">Add text</Option>
                                                        <Option value="lucy">Lucy</Option>
                                                        <Option value="Yiminghe">yiminghe</Option>
                                                    </Select>
                                                </Space>
                                                <Text> Select 3 of 120</Text>
                                            </Form.Item>
                                        </Col>
                                        <Col md={10}>
                                            <Form.Item name="checkbox-group" label="Relations">
                                                <Checkbox.Group style={{ width: '100%' }}>
                                                    <Row>
                                                        <Col md={12} xs={12}>
                                                            <Checkbox value="Head of State" >
                                                                Head of State
                                                            </Checkbox>
                                                        </Col>
                                                        <Col md={12} xs={12}>
                                                            <Badge.Ribbon text={<Image src={premium} alt="" />} className="premium" >
                                                                <Checkbox value="Head of State" >
                                                                    Head of State
                                                                </Checkbox>
                                                            </Badge.Ribbon>
                                                        </Col>
                                                        <Col md={12} xs={12}>
                                                            <Checkbox value="Capital"  >
                                                                Capital
                                                            </Checkbox>
                                                        </Col>
                                                        <Col md={12} xs={12}>
                                                            <Checkbox value="Capital"  >
                                                                Capital
                                                            </Checkbox>
                                                        </Col>
                                                        <Col md={12} xs={12}>
                                                            <Checkbox value="Administrative Areas" >
                                                                Administrative Areas
                                                            </Checkbox>
                                                        </Col>
                                                        <Col md={12} xs={12}>
                                                            <Checkbox value="Administrative Areas" >
                                                                Administrative Areas
                                                            </Checkbox>
                                                        </Col>
                                                        <Col md={12} xs={12}>
                                                            <Checkbox value="Media" >
                                                                Media
                                                            </Checkbox>
                                                        </Col>
                                                        <Col md={12} xs={12}>
                                                            <Checkbox value="Media" >
                                                                Media
                                                            </Checkbox>
                                                        </Col>
                                                        <Col md={12} xs={12}>
                                                            <Checkbox value="Currency" >
                                                                Currency
                                                            </Checkbox>
                                                        </Col>
                                                        <Col md={12} xs={12}>
                                                            <Checkbox value="Currency" >
                                                                Currency
                                                            </Checkbox>
                                                        </Col>
                                                    </Row>
                                                </Checkbox.Group>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Form.Item name="checkbox-group" label="Identifiers*">
                                        <Checkbox.Group style={{ width: '100%' }}>
                                            <Row>
                                                <Col md={10}>
                                                    <div className="box">
                                                        <Row>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Head of State" >
                                                                    Head of State
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Head of State" >
                                                                    Head of State
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Capital"  >
                                                                    Capital
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Capital"  >
                                                                    Capital
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Administrative Areas" >
                                                                    Administrative Areas
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Administrative Areas" >
                                                                    Administrative Areas
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Media" >
                                                                    Media
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Media" >
                                                                    Media
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Currency" >
                                                                    Currency
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Currency" >
                                                                    Currency
                                                                </Checkbox>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                                <Col md={10}>
                                                    <div className="box">
                                                        <Row>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Head of State" >
                                                                    Head of State
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Head of State" >
                                                                    Head of State
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Capital"  >
                                                                    Capital
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Capital"  >
                                                                    Capital
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Administrative Areas" >
                                                                    Administrative Areas
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Administrative Areas" >
                                                                    Administrative Areas
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Media" >
                                                                    Media
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Media" >
                                                                    Media
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Currency" >
                                                                    Currency
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={12} xs={12}>
                                                                <Checkbox value="Currency" >
                                                                    Currency
                                                                </Checkbox>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="box">
                                                        <Row>
                                                            <Col md={24} xs={24}>
                                                                <Checkbox value="Head of State" >
                                                                    Head of State
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={24} xs={24}>
                                                                <Checkbox value="Capital"  >
                                                                    Capital
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={24} xs={24}>
                                                                <Checkbox value="Administrative Areas" >
                                                                    Administrative Areas
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={24} xs={24}>
                                                                <Checkbox value="Media" >
                                                                    Media
                                                                </Checkbox>
                                                            </Col>
                                                            <Col md={24} xs={24}>
                                                                <Checkbox value="Currency" >
                                                                    Currency
                                                                </Checkbox>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Text> Select 3 of 120</Text>
                                        </Checkbox.Group>
                                    </Form.Item>
                                </Form>
                            </Modal>
                        </Col>
                        <Col xl={3} lg={{span:4}} md={{span:5}} xs={24}>
                            <Button onClick={() => this.setModal2Visible(true)} className="csv-btn"> Download <b> CSV</b> <DownloadOutlined /></Button>   
                            <Modal 
                                title="How Would You Like Your Dataset?"
                                centered
                                visible={this.state.modal2Visible}
                                onOk={() => this.setModal2Visible(false)}
                                onCancel={() => this.setModal2Visible(false)}
                                width={441}
                                footer={[
                                    <div>
                                        <Button key="back" type="default" onClick={this.handleCancel}>
                                        Cancel
                                        </Button>
                                        <Button key="submit" type="primary" onClick={this.handleOk}>
                                            Sign Me Up!
                                        </Button>
                                    </div>
                                  ]}
                                >                                    
                                <Form
                                    layout="vertical"
                                    >
                                    <Form.Item label="File Type" >
                                        <Select defaultValue="csv" size="large">
                                            <Option value="csv">.CSV</Option>
                                            <Option value="excel">.XLSX</Option>
                                            <Option value="pdf">.PDF</Option>
                                        </Select>
                                    </Form.Item>
                                    <Text>Please Supply Your Name & Email & We’ll send you a download link.</Text>
                                    <Form.Item label="Email" >
                                        <Input size="large" />
                                    </Form.Item>
                                    <Text>To Take full advantage of outr services we do revomend our <i>Full Service</i> </Text>
                                </Form>
                            </Modal>                         
                        </Col>
                    </Row>
                </div>

            </>
        )
    }
}
