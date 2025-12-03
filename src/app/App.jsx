import { useState } from 'react'
import Header from '../pages/Header'
import MainPage from '../pages/MainPage'
import Section from '../pages/section/Section'
import AboutCompany from '../pages/AboutCompany'
import News from '../pages/newss/News'
import Footer from '../pages/Footer'

function App() {
  return (
    <div >
      <Header />
      <MainPage />
      <Section />
      <AboutCompany />
      <News />
      <Footer />
    </div>
  )
}

export default App
