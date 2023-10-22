import React from 'react'

import '../App.css';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Season from '../components/Season';
import Notice from '../components/Notice';
const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Card></Card>
        <Season></Season>
        <Notice></Notice>
    </div>
  )
}

export default Home