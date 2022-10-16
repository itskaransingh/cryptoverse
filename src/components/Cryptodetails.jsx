import React from 'react'
import { useParams } from 'react-router-dom'

const Cryptodetails = () => {
  const {cryptoid}=useParams()
  return (
    <div>Cryptodetails [{cryptoid}]</div>
  )
}

export default Cryptodetails