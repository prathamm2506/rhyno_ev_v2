import React from 'react'
import FAQ from '../components/faq/Faq'
import ContactUs from '../components/faq/FaqContact'
import { Helmet } from 'react-helmet';


const Faqs = () => {
  return (
    <div className='bg-white'>
      <Helmet>
        <title>FAQ</title>
        <meta name="description" content="About Rhyno EV Private Limited" />
      </Helmet>
      <FAQ/>
      <ContactUs/>
    </div>
  )
}

export default Faqs
