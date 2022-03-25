import { Line } from '@ant-design/plots';
import { Button, Col, Divider, Image, Radio, Row, Space, Statistic } from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { Component } from 'react'
import users from '../../assets/images/users.svg';

const myData = [
    { year: '2009', value: 3.4 },
    { year: '2010', value: 3.2 },
    { year: '2011', value: 3.4 },
    { year: '2012', value: 3 },
    { year: '2013', value: 3.5 },
    { year: '2014', value: 5 },
    { year: '2015', value: 4.9 },
    { year: '2016', value: 6 },
    { year: '2017', value: 7 },
    { year: '2018', value: 9 },
    { year: '2019', value: 8 },
    { year: '2020', value: 11 },
];

const options = [
    { label: 'By Age Group', value: 'age' },
    { label: 'By Gender', value: 'gender' },
    { label: 'Total', value: 'total' },
];

export default class Statistics extends Component {
    render() {
        return (
            <div className="stat">
                <Row>
                    <Col xs={4} lg={2}>
                        <Image src={users} alt="" preview={false} />
                    </Col>
                    <Col lg={22} xs={20}>
                        <Statistic title="Total Population" value="6.550.264" />
                    </Col>
                    <Col lg={24} xs={24}>
                        <Title level={5} >+0,9 %</Title>
                    </Col>
                </Row>
                <Row justify="end" >
                    <Col md={24} xs={0} >
                        <Divider/>
                            <Row justify="end" >
                                <Radio.Group  
                                    defaultValue="total"
                                    options={options}
                                    optionType="button" 
                                    buttonStyle="solid"
                                    size="small"
                                />
                            </Row>
                        <Divider />
                    </Col>
                </Row>

                <Line
                    className="line"
                    data={myData}
                    height={250}
                    xField="year"
                    yField="value"
                    color='#3F6587'
                />
            </div >
        )
    }
}
