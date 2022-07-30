const BaseForm= (...fields)=>{
    return(  
    
    <div className='form-group col-md-6 bLamim'>
            {!fields?"": fields.map((key)=>(
                    <>
                     <label className='bLamim'>{key.label}:</label>
                     <input className='form-control col-md-6' type={key.formType} name={key.name} placeholder={key.label}/>
                    </>
            ))
        
        
        
        }
        </div>       
                     
                 
           
     )
}

export default BaseForm;