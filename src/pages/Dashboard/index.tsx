import React from 'react';
import Empty from 'Components/Empty';
import { Card } from 'Components/Card';
import { Row, Col } from 'Components/Grid'

export default () => (
  <section style={{height: '100%'}}>
    <Row gutter={12} >
      <Col md={12}>
        <Card title="test" bordered={false}></Card>
      </Col>
    </Row>
  </section>
);
