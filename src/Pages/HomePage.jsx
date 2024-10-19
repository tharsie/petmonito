import React from 'react'
import { Header } from '../Component/HeaderSection/Header'
import { PatCard } from '../Component/PatCard'
import { HeroFooter } from '../Component/HeroFooter'
import { Product } from '../Component/Product'
import { PetKnowlage } from '../Component/PetKnowlage'
import { Footer } from '../Component/Fotter'

export const HomePage = () => {
  return (
    <div>
      <Header/>
      <PatCard/>
      <HeroFooter />
      <Product/>
      <PetKnowlage/>
      <Footer/>
    </div>
  )
}
