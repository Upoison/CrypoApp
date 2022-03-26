import React from 'react'
import { Botton, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

import icon from '../images/cryptocurrency.png'
const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo">
                <Link to="/">CryptoPlotzlich</Link>
            </Typography.Title>
            {/* <Botton className="menu-control-container">

            </Botton> */}
        </div>
        <Menu theme="dark">
          <Menu.Item Icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item Icon={<FundOutlined />}>
              <Link to="/Cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item><Menu.Item Icon={<MoneyCollectOutlined />}>
              <Link to="/Exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item Icon={<BulbOutlined />}>
              <Link to="/News">News</Link>
          </Menu.Item>
        </Menu>
    </div>
  )
}

export default Navbar