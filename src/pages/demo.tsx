import React from 'react';
import './index.css';
import { Card, Col, Row } from 'antd';

const App: React.FC = () => (
  <Row gutter={18}>
    <Col span={6} className="colInRow">
      <Card title="" bordered={false}>
      <img className='imageCol' src="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg" alt="" />
      <h1>Type of product</h1>
      </Card>
    </Col>
    <Col span={6} className="colInRow">
      <Card title="" bordered={false}>
      <img className='imageCol' src="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg" alt="" />
      <h1>Type of product</h1>
      </Card>
    </Col>
    <Col span={6} className="colInRow">
      <Card title="" bordered={false}>
      <img className='imageCol' src="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg" alt="" />
      <h1>Type of product</h1>
      </Card>
    </Col>
    <Col span={6} className="colInRow">
      <Card title="" bordered={false}>
      <img className='imageCol' src="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg" alt="" />
      <h1>Type of product</h1>
      </Card>
    </Col>
  </Row>
);

export default App;
