import React from 'react'
import { Helmet } from 'react-helmet';
import NotFound from '../components/notfound/NotFound';


const PageNotFound = () => {
  return (
    <div>
      <Helmet>
        <title>404 Not Found</title>
        <link rel="canonical" />
        <meta name="description" content="Contact Us for Rhyno EV Private Limited" />
      </Helmet>
      <NotFound/>
    </div>
  )
}

export default PageNotFound