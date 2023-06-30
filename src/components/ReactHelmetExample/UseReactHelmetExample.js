import React from 'react'
import { Helmet } from 'react-helmet';

const UseReactHelmetExample=()=> {
    const pageTitle = 'My Page Title Jai';
    const metaDescription = 'This is the description of my page Jai.';
  
    return (
      <div>
         <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={metaDescription} />
        </Helmet>
   
        {/* Rest of your component content */}
        <h1>{pageTitle}</h1>
        <p>{metaDescription}</p>
        <h5>Hey Subhi</h5>
      </div>
    );
  };

export default UseReactHelmetExample
