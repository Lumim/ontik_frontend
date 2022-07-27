import React, { useEffect, useState } from 'react'
import fetchApi from '../fetchApi'
const Product_view=({match})=> {
    let id =match.params.id;
    const [singleData,setSdata]=useState({});
    
    useEffect(()=>{
        getSingleProductData();
    },[])
    const getSingleProductData=async()=>{
    let data={uid:id};
    const res=await  fetchApi.getApi('api/web/getSingleProductData','POST',data,0)
        setSdata(res);
    }
    return (
        <div className="container">
            <div className="card">
                
                    <div className="card-header">
                            <h3>Product Name: {singleData.name}</h3>
                            <h5>Brnad: {singleData.brand}</h5>
                    </div>
                <div className="card-body">
                    
                </div>
            </div>
        </div>
      
    )
}

export default Product_view
