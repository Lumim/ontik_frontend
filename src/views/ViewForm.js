import React from 'react';
import {useLocation  } from "react-router-dom";

const ViewForm = ( ) => {
  const location = useLocation()
  //const { from } = location.state
  const data=  location.state
  console.log(data)
    return (
        <>
        <h1 className='bLamim'>view  {data} </h1>
        </>
      );
  };
  
  export default ViewForm;