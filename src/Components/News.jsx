import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetCryptosNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/CryptoApi'
import Tilt from 'react-parallax-tilt'
const demoImage =
  'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'
const { Text, Title } = Typography
const { Option } = Select

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState()
  const { data } = useGetCryptosQuery(100)
  const { data: cryptoNews } = useGetCryptosNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  })
  if (!cryptoNews?.value) return 'loading...'

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOff(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => (
              <Option value={coin.name}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}

      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Tilt>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.name}
                  </Title>
                  <img
                    style={{ maxWidth: '200px', maxHeight: '100px' }}
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt="new img"
                  />
                </div>
                <p>
                  {news.description > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                      alt=""
                    />
                    <Text className="provider-name">
                      {news.provider[0]?.name}
                    </Text>
                  </div>
                  <Text>
                    {moment(news.datePublished).startOf('ss').fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Tilt>
        </Col>
      ))}
    </Row>
  )
}

export default News
