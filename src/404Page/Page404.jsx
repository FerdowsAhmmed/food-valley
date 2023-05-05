import React from 'react';
import image404 from '/404.png';
const Page404 = () => {
    return (
        <div>
          <img src={image404} alt="404 Not Found" />
          <h2>Sorry, the page you requested was not found.</h2>
        </div>
      );
    };

export default Page404;