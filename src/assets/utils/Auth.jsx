import React from 'react'
import Cookies from 'js-cookie';

const AUthenticated = () => {
    const token = Cookies.get('access_token');
    console.log('my cookie',token)


  return (
    <></>

  )
}

export default AUthenticated;
