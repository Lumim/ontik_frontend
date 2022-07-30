import React,{useEffect,useState} from 'react'  

 

export default function Submission() {
useEffect(()=>{
getAllForms();
},[])


const getAllForms=async()=>{
  const res = await  fetch('http://localhost:8000/api/app/main/addform/data',{
    method:'GET',
    headers:{}
  });

  const data= await res.json();
  console.log(data)

}

return(
  <>

  
  </>


)



}