import React, { useState } from 'react';
import { Button, Carousel, Col, Divider, Image, Row } from "antd";
import './Misc.css';

import Title from "antd/lib/typography/Title";
import Paragraph from 'antd/lib/typography/Paragraph';

import featuresIcon from "../../assets/images/features-icon.svg";
import TutorialsImage from "../../assets/images/misc/tutorial.svg";
import CloudIcon from "../../assets/images/misc/cloud.svg";
import PreviewImage from "../../assets/images/preview.png";
import PreviewRowImage from "../../assets/images/preview_row.png";
import PreviewColImage from "../../assets/images/preview_col.png";
import SignUp from "../../assets/images/SignUp.png";
import { EyeOutlined } from "@ant-design/icons";

const brand_data = [
  {
    title: 'Nullam faucibus',
    content: 'Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.',
  },
  {
    title: 'Vestibulum porttitor',
    content: 'Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.',
  },
  {
    title: 'sit amet.',
    content: 'Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.',
  },
  {
    title: ' Proin ullamcorper',
    content: 'Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas.. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.',
  },
  {
    title: 'Nullam a lorem',
    content: 'Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. ',
  },
  {
    title: 'Quisque amet.',
    content: 'Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet. Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.',
  },
]

const targeted_data = [
  {
    value: 85,
    unit: '%',
    title: 'Nullam a lorem ut lacus tristique blandit in non elit.incidunt leo.',
  },
  {
    value: 13,
    unit: 'Minutes',
    title: 'Incidunt leo sapien, a mattis massa luctus interdum.',
  },
  {
    value: 90,
    unit: '%',
    title: 'Vestibulum tincidunt leo sapien, a mattis',
  },
]

const tutorials_data = [
  {
    title: 'Sed suscipit hendrerit magna',
    content: 'Fusce enim enim, ultricies id justo id, egestas condimentum lorem. Pellentesque habitant morbi tristique senectus et.',
    time: 6,
  },
  {
    title: 'Sed suscipit hendrerit magna',
    content: 'Fusce enim enim, ultricies id justo id, egestas condimentum lorem. Pellentesque habitant morbi tristique senectus et.',
    time: 6,
  },
  {
    title: 'Sed suscipit hendrerit magna',
    content: 'Fusce enim enim, ultricies id justo id, egestas condimentum lorem. Pellentesque habitant morbi tristique senectus et.',
    time: 6,
  },
  {
    title: 'Sed suscipit hendrerit magna',
    content: 'Fusce enim enim, ultricies id justo id, egestas condimentum lorem. Pellentesque habitant morbi tristique senectus et.',
    time: 6,
  },
]

const bananas_data = [
  {
    preview: true,
    title: 'Nullam faucibus',
    content: 'Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.',
  },
  {
    preview: true,
    title: 'Vestibulum porttitor',
    content: 'Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.',
  },
  {
    preview: true,
    title: 'Quisque amet.',
    content: 'Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet. Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.',
  },
  {
    preview: false,
  }
]

const bananas_two_data = [
  {
    preview: true,
    title: 'Proin ullamcorper',
    content: 'Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas.. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.',
  },
  {
    preview: true,
    title: 'Nullam a lorem',
    content: 'Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.',
  },
  {
    preview: true,
    title: 'Quisque amet.',
    content: 'Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet. Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.',
  },
  {
    preview: false,
  },
  {
    preview: true,
    title: 'Quisque amet.',
    content: 'Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet. Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.',
  },
  {
    preview: true,
    title: 'Nullam a lorem',
    content: 'Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.',
  },
]

const tutorials_two_data = [
  {
    title: 'Nullam faucibus sit amet.',
    content: 'Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet. Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.',
  },
  {
    title: 'Sed suscipit hendrerit magna',
    content: 'Suspendisse iaculis, eros vel pretium tincidunt, tortor nisi scelerisque velit, vitae rutrum libero justo vitae nibh. Mauris suscipit purus est, nec vestibulum ante condimentum quis. Vivamus sed tellus ante. Morbi et ante lorem. Duis pellentesque ex felis. Nullam pellentesque purus velit, vel elementum nulla malesuada sit amet. In facilisis ipsum nec augue sollicitudin, vel vulputate nibh suscipit. Phasellus eu ex aliquam, venenatis risus ut, hendrerit elit. Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque.',
  },
  {
    title: 'Nullam faucibus sit amet.',
    content: 'Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque. Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet. Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.',
  },
  {
    title: 'Sed suscipit hendrerit magna',
    content: 'Suspendisse iaculis, eros vel pretium tincidunt, tortor nisi scelerisque velit, vitae rutrum libero justo vitae nibh. Mauris suscipit purus est, nec vestibulum ante condimentum quis. Vivamus sed tellus ante. Morbi et ante lorem. Duis pellentesque ex felis. Nullam pellentesque purus velit, vel elementum nulla malesuada sit amet. In facilisis ipsum nec augue sollicitudin, vel vulputate nibh suscipit. Phasellus eu ex aliquam, venenatis risus ut, hendrerit elit. Maecenas elementum felis ut orci mattis, vel faucibus leo condimentum. Vestibulum porttitor libero eget ipsum commodo pellentesque.',
  },
]

const Misc = () => {
  const [current, setCurrent] = useState(0)

  return (
    <>
      <section className="catalogue-section">
        <div className="container">
          <Row align="middle" justify="center">
            <Col md={8} xs={24}>
              <Image src={featuresIcon} alt="" preview={false} />
            </Col>
            <Col md={{ span: 9, offset: 1 }} xs={24}>
              <Title level={1}>
                Miscalaneous <i>& Other</i>
              </Title>
            </Col>
          </Row>
        </div>
      </section>

      <section className="brands-section">
        <div className="container">
          <Title level={1}>
            Quisque <b>Faucibus Lacinia</b> Aliquet
          </Title>
          <Paragraph className="overview">
            incidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.incidunt leo sapien, Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis
          </Paragraph>
          <Paragraph className="headline">Ae blandit in non elit.</Paragraph>
          <Row>
            {brand_data.map((item, index) => (
              <Col key={`bd-${index}`} md={8} sm={12} sx={24} className="brand-card">
                <Title level={3} className={`title ${index % 2 === 0 && 'smart'}`}>{item.title}</Title>
                <Paragraph>{item.content}</Paragraph>
              </Col>
            ))}
            <Paragraph>Pellentesque purus velit, vel elementum nulla malesuada sit amet. In </Paragraph>
          </Row>
        </div>
      </section>

      <section className="targeted-section">
        <div className="container">
          <Row>
            {targeted_data.map((item, index) => (
              <Col key={`tgd-${index}`} md={8} sx={24} className={`targeted-card ${index !== 0 && 'divider'}`}>
                <div className="header">
                  <Title level={1}>{item.value}</Title>
                  <Title level={2}>{item.unit}</Title>
                </div>
                <Paragraph className="title">{item.title}</Paragraph>
              </Col>
            ))}
            <Paragraph className="content">Pellentesque purus velit, vel elementum nulla malesuada sit amet. In </Paragraph>
          </Row>
        </div>
      </section>

      <section className="slider-section"></section>

      <section className="tutorials-section">
        <div className="container">
          <div className="header">
            <div>
              <Title level={1}>
                Tutorials <b>& Guides</b>
              </Title>
              <Paragraph className="content">Fusce enim enim, ultricies id justo id, egestas condimentum lorem.</Paragraph>
            </div>
            <Image src={TutorialsImage} alt="" preview={false} />
          </div>
          <Row gutter={40}>
            {tutorials_data.map((item, index) => (
              <Col className="tutorial" key={`ttd-${index}`} md={12} xs={24}>
                <Image src={PreviewRowImage} alt="" preview={false} />
                <Title level={3}>{item.title}</Title>
                <Paragraph>{item.content}</Paragraph>
                <Paragraph className="views"><EyeOutlined key="view" />{item.time} mins read</Paragraph>
              </Col>
            ))}
          </Row>
        </div>
      </section>

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

      <section className="bananas-section">
        <div className="container">
          <div className="header">
            <Title level={1}>
              Quisque <b>Faucibus Lacinia</b> Aliquet
            </Title>
            <Paragraph className="overview">
              incidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.incidunt leo sapien, Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis
            </Paragraph>
            <Paragraph className="headline">Ae blandit in non elit.</Paragraph>
          </div>
          <Title className="banana" level={3}>Vestibulum porttitor </Title>
          <Paragraph>
            Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. Nullam a lorem ut lacus tristique blandit in non elit.
          </Paragraph>
          <Row gutter={40}>
            {bananas_data.map((item, index) => (
              <Col className="banana" key={`bnd-${index}`} md={12} sm={24}>
                {item.preview ? (
                  <>
                    <Title className={index === 0 && 'smart'} level={3}>{item.title}</Title>
                    <Paragraph>{item.content}</Paragraph>
                  </>
                ) : (
                  <Image src={PreviewRowImage} alt="" preview={false} />
                )}
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="bananas-two-section">
        <div className="container">
          <Row gutter={40}>
            {bananas_two_data.map((item, index) => (
              <Col className="banana-two" key={`bntd-${index}`} md={8} sm={12} xs={24}>
                {item.preview ? (
                  <>
                    <Title className={index % 2 !== 0 && 'smart'} level={3}>{item.title}</Title>
                    <Paragraph>{item.content}</Paragraph>
                  </>
                ) : (
                  <Image src={PreviewImage} alt="" preview={false} />
                )}
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="bananas-three-section">
        <div className="container">
          <Row gutter={40}>
            <Col md={8} sm={12} xs={24}>
              <Title className="smart" level={3}>Nullam a lorem</Title>
              <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.</Paragraph>
              <Title level={3}>Quisque amet.</Title>
              <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.</Paragraph>
            </Col>
            <Col md={16} sm={12} xs={24}>
              <Image src={PreviewImage} alt="" preview={false} />
            </Col>
          </Row>
          <Row gutter={40}>
            <Col md={8} sm={12} sx={24}>
              <Title level={3}>Quisque amet.</Title>
              <Paragraph>Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.</Paragraph>
              <Paragraph>Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.</Paragraph>
              <Paragraph>Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.</Paragraph>
            </Col>
            <Col md={8} xs={0}>
              <Image src={PreviewColImage} alt="" preview={false} />
            </Col>
            <Col md={8} sm={12} sx={24}>
              <Title className="smart" level={3}>Nullam a lorem</Title>
              <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.</Paragraph>
              <Title className="smart" level={3}>Nullam a lorem</Title>
              <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.</Paragraph>
            </Col>
          </Row>
        </div>
      </section>

      <section className="homecareer-section"></section>

      <section className="tutorials-two-section">
        <div className="container">
          <div className="header">
            <div>
              <Title level={1}>
                Tutorials <b>& Guides</b>
              </Title>
              <Paragraph className="content">Fusce enim enim, ultricies id justo id, egestas condimentum lorem.</Paragraph>
            </div>
            <Image src={TutorialsImage} alt="" preview={false} />
          </div>
        </div>
        <Row>
          <Col className="tutorials-two-left" md={8} xs={24}>
            <div className="content-container">
              <Paragraph className="content">“Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis “ </Paragraph>
              <div className="cloud-container">
                <Image src={CloudIcon} alt="" preview={false} />
                <Title level={3}>Latissimus Dorsi</Title>
              </div>
            </div>
          </Col>
          <Col className="tutorials-two-right" md={16} xs={24}>
            <div className="title-container">
              <Paragraph>Company</Paragraph>
              <Title className="title" level={3}>Latissimus Dorsi</Title>
            </div>
            <div className="title-container">
              <Paragraph>Industry</Paragraph>
              <Title className="title" level={3}>Condimentum Lorem.</Title>
            </div>
            <Row gutter={40}>
              {tutorials_two_data.map((item, index) => (
                <Col className="tutorial-two" key={`tttd-${index}`} md={12} xs={24}>
                  <Title level={3}>{item.title}</Title>
                  <Paragraph>{item.content}</Paragraph>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </section>
      
      <section className="tutorials-three-section">
        <div className="container">
          <div className="item">
            <Row gutter={40}>
              <Col md={8} sm={12} xs={24}>
                <Title className="smart" level={3}>Nullam a lorem</Title>
                <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.</Paragraph>
                <Title level={3}>Quisque amet.</Title>
                <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.</Paragraph>
              </Col>
              <Col md={16} sm={12} xs={24}>
                <Image src={PreviewImage} alt="" preview={false} />
              </Col>
            </Row>
          </div>
          <div className="item">
            <Row gutter={40}>
              <Col md={8} sm={12} xs={24}>
                <Title level={3}>Quisque amet.</Title>
                <Paragraph>Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.</Paragraph>
                <Paragraph>Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.</Paragraph>
                <Paragraph>Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.</Paragraph>
              </Col>
              <Col md={8} xs={0}>
                <Image src={PreviewColImage} alt="" preview={false} />
              </Col>
              <Col md={0} xs={24}>
                <Image src={PreviewRowImage} alt="" preview={false} />
              </Col>
              <Col md={8} sm={12} xs={24}>
                <Title level={3}>Quisque amet.</Title>
                <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. </Paragraph>
                <Title className="smart" level={3}>Nullam a lorem</Title>
                <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.</Paragraph>
              </Col>
            </Row>
          </div>
          <Row gutter={40}>
            <Col md={8} sm={12} xs={24}>
              <Title level={3}>Quisque amet.</Title>
              <Paragraph>Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.</Paragraph>
              <Paragraph>Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.Pellentesque tristique orci a neque tincidunt, vitae tempus neque egestas. Quisque faucibus lacinia aliquet.</Paragraph>
              <Paragraph>Ut ullamcorper nunc congue magna maximus fringilla. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit.</Paragraph>
            </Col>
            <Col md={8} sm={12} xs={24}>
              <Title className="smart" level={3}>Nullam a lorem</Title>
              <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. </Paragraph>
              <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. </Paragraph>
            </Col>
            <Col md={8} sm={12} xs={24}>
                <Title level={3}>Quisque amet.</Title>
                <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum. </Paragraph>
                <Title className="smart" level={3}>Nullam a lorem</Title>
                <Paragraph>Nullam a lorem ut lacus tristique blandit in non elit. Proin ullamcorper, leo eu pharetra pretium, leo nibh ullamcorper ante, a blandit turpis nibh scelerisque felis. Integer finibus eget mi ut tempus. Vestibulum tincidunt leo sapien, a mattis massa luctus interdum.</Paragraph>
              </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default Misc;