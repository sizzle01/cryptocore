import React from 'react'
import { Line } from 'react-chartjs-2'
import { Col, Row, Typography } from 'antd'

const { Title } = Typography

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  return (
    <div>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {/* dfgdr {coinHistory?.data?.change}% */}
            dfhnbt
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
    </div>
  )
}

export default LineChart
