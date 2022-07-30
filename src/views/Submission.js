import React,{useEffect,useState} from 'react'  

 

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
  
  console.log(form)
 
}





return(
  <>
    <div className='card bLamim'>
        <h5>All form Submitted</h5>
          {form.map((key)=>(
            <>
            <div className='bLamim'>
              <h4>Form no. {key.id} </h4> <button className='btn btn-danger'> delete</button>  <button className='btn btn-success'> view</button>
            </div>
            </>
          ))}
        
    </div>
  
  </>


)



}