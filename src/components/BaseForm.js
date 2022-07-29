const BaseForm= ()=>{
    return( 
      
                 <div className='form-group col-md-6 bLamim'>
                     <label className='bLamim'>Name:</label>
                     <input className='form-control col-md-6' type="text" name="name" placeholder='name'/>
                     <label className='bLamim'>email:</label>
                     <input className='form-control col-md-6' type="email" name="email" placeholder='enter email'/>
                     <label className='bLamim'>Phone:</label>
                     <input className='form-control col-md-6' type="number" name="phone" placeholder='name'/>
                 </div>
           
     )
}

export default BaseForm;