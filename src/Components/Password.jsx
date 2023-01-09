import React,{useState} from 'react'
import Container from '@mui/material/Container'
import { TextField, Typography,FormGroup,FormControlLabel,Checkbox, Button, Modal, Box}
from '@mui/material'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Password({ handleInputData,values}) {
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const onSubmit = (e) => {
    e.preventDefault();
    if(handleInputData.password !== handleInputData.rePassword){
      alert('Please enter proper password')
    }else{
        handleOpen()
    }  
  }
  return (
<>
<Container maxWidth="sm" sx={{marginTop:10}}>
        <form className="form1" >
        <Typography variant="h1" sx={{textAlign:'left',fontSize:26,margin:2}}>Set a password</Typography>
        <Typography variant="h3" sx={{textAlign:'left',fontSize:16,margin:1}}>Last step</Typography>
          <TextField 
          placeholder='your password'
          type="password" 
          name="name"
            variant="outlined"
            sx={{borderRadius:30 }}
            fullWidth
            onChange={handleInputData('password')}
            value={values.password}
          />
                    <TextField 
          placeholder='re-enter password'
            name="password"
            type="password"
            variant="outlined"
            onChange={handleInputData('rePassword')}
            value={values.rePassword}
            sx={{borderRadius:30 }}
            fullWidth
          />

<FormGroup>
  <FormControlLabel required control={<Checkbox defaultChecked sx={{borderRadius:"30"}}/>} label="I Agree terms & conditions and privacy policy" />
  <FormControlLabel  control={<Checkbox sx={{borderRadius:"30"}}/>} label="Receive special offers" />
</FormGroup>
<Button variant="contained" 
          sx={{background:"blue", borderRadius:30}} 
          onClick={onSubmit}
          >Next </Button>
          <Modal  className="popup"
          open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
          >
             <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thank you
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         Thank you for submitting the form 
         One of our team members will be in touch shortly
          </Typography>
          
        </Box>
          </Modal>
          </form>
    </Container>
    
</>
  )
}

export default Password