import React,{useEffect,useState,lazy,Suspense} from 'react' 
import $ from 'jquery';
import Box from '@mui/material/Box'; 
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Baseform from '../components/BaseForm'

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
    useEffect(()=>{
        
        
    },[])
 
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [formLabel, setFlabel]=useState('');
    const [formName,setFname]=useState('');
    const [formType,setFtype]=useState('');


    const [fields,setFeild]=useState([{
        'label':'',
        'type':'',
        'name':''
    }])
    const openAdd=()=>{
      
    }

    const submitAdd=()=>{
        handleClose()
    } 
    return(
        <>  
        
        <div className='col-md-8 bLamim '>
            <div className='card' >
                <div className='card-body'>
                    <h1>Form for ontik assessment {formType}</h1> 
                    <Baseform/>
                </div>
            </div>
        </div>
        <div className='col-md-6' align="center">
               <button className='btn btn-primary' onClick={handleOpen}><i className='bi bi-wrench'> </i> add an input field in the form</button>
        </div>
 
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                <div className='form-group'>
                        <label>Enter field name</label>
                        <input type='text' className='form-control' placeholder='enter name'/>
                </div>
                <div className='form-group'>
                        <label>Enter label name</label>
                        <input type='text' value={fields.label} className='form-control' placeholder='enter label name'/>
                </div>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className='row form-group'>
                    <label>
                        Choose field type:
                    </label>
                    
                    <select onSelect={(e)=>setFtype(e.target.value)} className='form-control' name="" id="">
                        <option  className='form-control' value="">
                            chose from here 
                        </option>
                        <option value='text' className='form-control'>
                            text
                        </option>
                        <option  value='radio'className='form-control'>
                            radio
                        </option>
                    </select>
                </div> 
            </Typography>
            <Typography  id="modal-footer"> 
            
                <div className='row form-control pLamim ' >  
                    <button className='form-control btn btn-danger  col-md-4' onClick={handleClose} data-dismiss='modal'>Cancel</button>
                    <button className=' form-control btn btn-primary col-md-4'onClick={submitAdd} >save</button>  
                </div>
            </Typography>       
            </Box>
        </Modal>

        </>
    );
}