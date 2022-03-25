import { Line } from '@ant-design/plots';
import { Button, Col, Divider, Image, List, Row, Statistic } from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { Component } from 'react'
import currency from '../../assets/images/currency.svg';
import source1 from '../../assets/images/source1.svg';
import source2 from '../../assets/images/source2.svg';
import source3 from '../../assets/images/source3.svg';

const myData = [
    {
        "type": 'Source1',
        "value": "18",
        "year": '2009'
    },
    {
        "type": 'Source1',
        "value": "16",
        "year": '2010'
    },
    {
        "type": 'Source1',
        "value": "13",
        "year": '2011'
    },
    {
        "type": 'Source1',
        "value": "14",
        "year": '2012'
    },
    {
        "type": 'Source1',
        "value": "15",
        "year": '2013'
    },
    {
        "type": 'Source1',
        "value": "14",
        "year": '2014'
    },
    {
        "type": 'Source1',
        "value": "13",
        "year": '2015'
    },
    {
        "type": 'Source1',
        "value": "12",
        "year": '2016'
    },
    {
        "type": 'Source1',
        "value": "11",
        "year": '2017'
    },
    {
        "type": 'Source1',
        "value": "10",
        "year": '2018'
    },
    {
        "type": 'Source1',
        "value": "11",
        "year": '2019'
    },
    {
        "type": 'Source1',
        "value": "10",
        "year": '2020'
    },
    {
        "type": 'Source2',
        "value": "19",
        "year": '2009'
    },
    {
        "type": 'Source2',
        "value": "17",
        "year": '2010'
    },
    {
        "type": 'Source2',
        "value": "12",
        "year": '2011'
    },
    {
        "type": 'Source2',
        "value": "11",
        "year": '2012'
    },
    {
        "type": 'Source2',
        "value": "13",
        "year": '2013'
    },
    {
        "type": 'Source2',
        "value": "12",
        "year": '2014'
    },
    {
        "type": 'Source2',
        "value": "13",
        "year": '2015'
    },
    {
        "type": 'Source2',
        "value": "13",
        "year": '2016'
    },
    {
        "type": 'Source2',
        "value": "9",
        "year": '2017'
    },
    {
        "type": 'Source2',
        "value": "8",
        "year": '2018'
    },
    {
        "type": 'Source2',
        "value": "14",
        "year": '2019'
    },
    {
        "type": 'Source2',
        "value": "11",
        "year": '2020'
    },
    {
        "type": 'Source3',
        "value": "17",
        "year": '2009'
    },
    {
        "type": 'Source3',
        "value": "16",
        "year": '2010'
    },
    {
        "type": 'Source3',
        "value": "13",
        "year": '2011'
    },
    {
        "type": 'Source3',
        "value": "12",
        "year": '2012'
    },
    {
        "type": 'Source3',
        "value": "14",
        "year": '2013'
    },
    {
        "type": 'Source3',
        "value": "10",
        "year": '2014'
    },
    {
        "type": 'Source3',
        "value": "10",
        "year": '2015'
    },
    {
        "type": 'Source3',
        "value": "12",
        "year": '2016'
    },
    {
        "type": 'Source3',
        "value": "10",
        "year": '2017'
    },
    {
        "type": 'Source3',
        "value": "13",
        "year": '2018'
    },
    {
        "type": 'Source3',
        "value": "15",
        "year": '2019'
    },
    {
        "type": 'Source3',
        "value": "8",
        "year": '2020'
    },
    
        


];
const currency_data = [
    { 
        icon: source1,
        value: 3.4
    },
    { 
        icon: source2,
        value: 3.4
    },
    { 
        icon: source3,
        value: 3.4
    },
];


export default class CurrencyStatistics extends Component {
    render() {
        return (
            <div className="stat">
                <Row align="middle">
                    <Col xs={4} lg={2}>
                        <Image src={currency} alt="" preview={false} />
                    </Col>
                    <Col lg={22} xs={20}>
                        <Statistic title="Current Conversion Rate" value="0.0123" />
                    </Col>
                    <Col lg={24} xs={24}>
                        <Title level={5} >+0,9 %</Title>
                    </Col>
                </Row>
                {/* <Row>
                    <Col md={24} xs={0} >
                        <Divider/>
                            <List
                                itemLayout="horizontal"
                                dataSource={currency_data}
                                renderItem={item => (
                                <List.Item >
                                    <List.Item.Meta
                                    description={<><Image preview={false} src={item.icon} /></>}
                                    />
                                </List.Item>
                                )}
                            />
                        <Divider/>
                    </Col>
                </Row> */}

                <Line 
                    className="line"
                    autoFit={true}
                    height={250}
                    data={myData}
                    yField="value"
                    xField="year"
                    seriesField="type" />
            </div >
        )
    }
}
