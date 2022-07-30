import React,{useEffect,useState} from 'react'  
import {Link } from "react-router-dom";
 

export default function Submission() {
const [form,setForm]=useState([]);
useEffect(()=>{
const getFormData= async()=>{
  const dataFromServer=await getAllForms();
}

getFormData();
},[])


const getAllForms=async()=>{
  const res = await  fetch('http://localhost:8000/api/app/main/getforms',{
    method:'GET',
    headers:{}
  });

  const data= await res.json();
 // var formdata= data.form_data;
  setForm(data.form_data); 
 
}

const deleteForm=async(id,e)=>{
 e.preventDefault();
  const res = await fetch(`http://localhost:8000/api/app/main/deleteform/${id}`,{
    method:'GET',
    headers:{
      'content-type':'application/json',
    },
    
  })
  console.log(res)
  setForm(form.filter((key)=>key.id!==id));
}
 


return(
  <>
    <div className='card bLamim col-md-8 cLamim'>
        <h5>All form Submitted</h5>
        <ul>
          {form.map((key)=>(
            <>
            <li className='liLamim'>
            <div className='bLamim form-group'>
              <h4>Form no. {key.id} </h4> <button onClick={(e)=>deleteForm(key.id,e)} className='btn btn-danger'> delete</button>  <Link to={{
      pathname: '/view',
      state:{data:key.id},
    }} >View Form</Link> 
            </div>
            </li>
            </>
          ))}
        </ul>
    </div>
  
  </>


)



}