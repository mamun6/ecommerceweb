import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import Offers from '../Offers/Offers'
import NewCollectoins from '../NewCollections/NewCollectoins'
import NewsLetter from '../NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollectoins />
        <NewsLetter />
    </div>
  )
}

export default Shop