import React,{useEffect,useState} from 'react'  
import Box from '@mui/material/Box'; 
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height:600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



export default function Landing(){
    const [fields,setFeild]=useState([ {
        'label':'Name',
        'name':'name',
        'formType':"text"

    },{
        'label':"Address",
        'name':"address",
        'formType':"text"

    },{
        'label':'Phone number',
        'name':'mobile number',
        'formType':'number'

    }])
    const [formLabel, setFlabel]=useState('');
    const [formName,setFname]=useState('');
    const [formType,setFtype]=useState('');
    const [option,setOpt]=useState('');
    const [option_value,setOptVal]=useState('');
    const [submit,setSubmit]=useState(false);

    useEffect(()=>{
           
    },[fields ])
 
   
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const  handleClose = () => {setOpen(false)
          setFlabel('');
        setFname('');
        setFtype('');  
        setOpt('');
        setOptVal('');

        };




    const submitAdd=(e)=>{
        e.preventDefault()
        if(!formLabel || !formName || !formType){
            alert('please enter every feild');
            setFlabel('');
            setFname('');
            setFtype('');
            setOpt('');
            handleClose()
        }
        else{ 
            const Formdata={
                'label':formLabel,
                'name':formName,
                'formType':formType,
                'formValue':option_value
                } 
        
                    setFeild(current => [...current, Formdata] );
                    console.log(fields)
                    setSubmit(true)
                    handleClose();
                }
           
       }

       const submitData= (e)=>{
        var arr1=[];
        e.preventDefault();
        fields.map((key)=>{
            arr1.push(JSON.stringify(key))
        })

        var formData1= arr1.toString();
        submitServer(formData1)
        
        }


        const submitServer= async(info)=>{
            var formData={formData:info}
        const res=await fetch('http://localhost:8000/api/app/main/addform/data',{
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(formData),
        })
       
        const x = await res.json()
        alert(x.success.success_message)
       }


       return(
        <>  
        
        <div className='col-md-8 bLamim '>
            <div className='card' >
                <div className='card-body'>
                    <h1>Form for ontik assessment    </h1> 
                    <div className='form-group col-md-12 bLamim'>
                    {    !fields.length>=4?<></>: fields.map((field)=>(
                         <div className='form-control'>
                        <label className='  bLamim'>{field.label}</label>
                        {!field.formValue?<></>:<label className='form-control bLamim'>{field.formValue}</label>} 
                        <input classname='' type={field.formType} name={field.label} placeholder={field.name} /> 
                       
                        </div>
                    ))
                    
                    
                    }
                    </div>
                </div>
                { !submit?<></>:<button className='btn btn-success' onClick={submitData}>submit form</button>}
            </div>
        </div>
        <div className='col-md-6' align="center">
               <button className='btn btn-primary' onClick={handleOpen}><i className='bi bi-wrench'> </i> Add an input field in the form</button>
        </div>
 
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
         
               
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className='form-group'>
                        <label>Enter field name </label>
                        <input type='text' value={formName} onChange={(e)=>setFname(e.target.value,e.preventDefault())} className='form-control' placeholder='enter name'/>
                </div>
                <div className='form-group'>
                        <label>Enter label name</label>
                        <input type='text' value={formLabel} onChange={(e)=>setFlabel(e.target.value,e.preventDefault())} className='form-control' placeholder='enter label name' required/>
                </div>
                <div className=' form-group'>
                    <label>
                        Choose field type:
                    </label>
                    
                    <select onChange={(e)=>setFtype(e.target.value,e.preventDefault())} className='form-control' name="" id="">
                        <option  className='form-control' value="">
                            choose from here 
                        </option>
                        <option value='text' className='form-control'>
                            text
                        </option>
                        <option  value='radio'className='form-control'>
                            radio
                        </option>
                    </select>
                </div> 
                {formType=="radio"?<>options
                    <div className='form-group'>
                        <label>number of options</label> 
                            <input type = "number" className='form-control' value={option} onChange={(e)=>setOpt(e.target.value,e.preventDefault())} /> 
                           
                           
                            <label  className='form-label'>   value</label> 
                            
                         <input type = "text" className='form-control' value={option_value} onChange={(e)=>setOptVal(e.target.value,e.preventDefault())} />  
                    </div>
                    
                </>:<></>}
                <div className='form-group'>

                </div>
                <br></br>
                <br></br>   
                <div className='form-group'>
                    <div className=' form-control' >   
                    <button className=' form-control btn btn-success col-md-4' type="submit"onClick={submitAdd} >Add Field</button>  
                    </div>
                    <div className='form-group form-control'>
                    <button className='form-control btn btn-danger  col-md-4' onClick={handleClose} data-dismiss='modal'>Cancel</button>

                    </div>
                </div>
            </Typography>
            <Typography  id="modal-footer"> 
            
               
         
            </Typography>       
            </Box>
        </Modal>

        </>
    );
}