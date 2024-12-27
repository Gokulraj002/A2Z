import React from 'react'
import Video from './Video'
import Content from './Content'
import AboutUs from './AboutUs'
import Testimonials from '../Company/Carrer/Testimonials'
import TrustedBrands from './TrustedBrands'
import SocialMedia from '../Product/SocialMedia'
import Industries from '../Product/BulkSms/Industries'
import Achievements from '../Resources/Services/Achievements'
import { whatsappFaqData } from '../Resources/FAQ/FaqData'
import FAQHome from '../Resources/FAQ/FAQHome'

const Home = () => {
  return (
    <>
    <Video/>
    <AboutUs/>
    <TrustedBrands/>
    <Content/>
    <SocialMedia/>
    <Industries/>
    <Achievements/>
    <Testimonials/>
    <FAQHome data={whatsappFaqData} />
    

    </>
  )
}

export default Home
