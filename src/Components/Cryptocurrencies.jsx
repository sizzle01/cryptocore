import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/CryptoApi'

const Cryptocurrencies = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery()
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
  return <div>
      <Row gutter={{32, 32}} className='crypto-card-container'>
          {cryptos.map((currency) =>(
           
          ))}
      </Row>
  </div>
}

export default Cryptocurrencies
