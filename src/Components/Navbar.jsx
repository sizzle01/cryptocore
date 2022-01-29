import React from 'react'
import { Button, Typography, Avatar, Menu } from 'antd'
import { Link } from 'react-router-dom'
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  menuOutlined,
} from '@ant-design/icons'
import icon from '../../src/images/cryptocurrency.png'

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />

        <Typography.Title level={2} className="logo">
          <Link to="/">CRYPTOCORE</Link>
        </Typography.Title>
      </div>
      <Menu className="dark">
        <Menu.Item key={1} icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key={2} icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item key={5} icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar
