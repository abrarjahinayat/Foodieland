import React from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Categories from './Components/Categories'
import Recipes from './Components/Recipes'
import Everyone from './Components/Everyone'
import Checkout from './Components/Checkout'
import Delicious from './Components/Delicious'
import Inbox from './Components/Inbox'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Categories/>
      <Recipes/>
      <Everyone/>
      <Checkout/>
      <Delicious/>
      <Inbox/>
      <Footer/>
    </div>
  )
}

export default App