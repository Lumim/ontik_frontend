import React,{useEffect,useState,lazy,Suspense} from 'react' 
import $ from 'jquery';
import Box from '@mui/material/Box'; 
import Select,{SelectChangeEvent} from '@mui/material/Select'
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
    useEffect(()=>{
        
        
    },[])


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [formType,setformType]=useState([{}]);
    const [message,setMessage]=useState('');
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
                    <h1>Form for ontik assessment</h1> 
                    <div className='form-group col-md-6 bLamim'>
                        <label className='bLamim'>Name:</label>
                        <input className='form-control col-md-6' type="text" name="name" placeholder='name'/>
                        <label className='bLamim'>email:</label>
                        <input className='form-control col-md-6' type="email" name="email" placeholder='enter email'/>
                        <label className='bLamim'>Phone:</label>
                        <input className='form-control col-md-6' type="number" name="phone" placeholder='name'/>
                    </div>
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
                <div>
                        <input type='text' placeholder='enter name'/>
                </div>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className='row form-group'>
                    <label>
                        Choose field type:
                    </label>
                    
                    <select className='form-control' name="" id="">
                        <option value="">
                            chose from here 
                        </option>
                        <option>
                            text
                        </option>
                        <option>
                            radio
                        </option>
                    </select>
                </div> 
            </Typography>
            <Typography  id="modal modal-footer"> 
                <div className='row modal-footer bLamim' >  
                    <button className='form-control btn btn-danger' onClick={handleClose} data-dismiss='modal'>Cancel</button>
                    <button className=' form-control btn btn-primary'onClick={submitAdd} >save</button>  
                </div>
            </Typography>       
            </Box>
        </Modal>

        </>
    );
}