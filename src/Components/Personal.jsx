import React,{useState} from 'react'
import validator from 'validator';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Container from '@mui/material/Container'
import { TextField,Button,Divider,Typography } from '@mui/material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';

function Personal({nextStep, handleInputData,values}) {
    const [number, setNumber] = useState(0)

  const submitFormData = (e) => {
    e.preventDefault()
      if(validator.isEmpty(values.name) || validator.isEmpty(values.email) 
      ){
       alert('Please enter your name or email')
      }else{
        nextStep();
        
      }}
     
  return (
    <Container maxWidth="sm" sx={{marginTop:15}}>
      
        <Typography variant="h1" sx={{textAlign:'center',fontSize:26,margin:2}}>Registration</Typography>
        <Typography variant="h1" sx={{textAlign:'center',fontSize:16,margin:2}}>Leave your contact details</Typography>
        <form className="form1" >
          <TextField 
          placeholder='your name'
          type="text"
            variant="outlined"
            sx={{borderRadius:30 }}
            fullWidth
            onChange={handleInputData('name')}
            defaultValue={values.name}
          />
                    <TextField 
          placeholder='your email'
          type="email"
            onChange={handleInputData('email')}
            defaultValue={values.email}
            variant="outlined"
            sx={{borderRadius:30 }}
            fullWidth
          />
           <PhoneInput
placeholder="Enter phone number"
      value={number}
      onChange={setNumber}
      className="phone"
      />
          <Button variant="contained" 
          sx={{background:"blue", borderRadius:30}}
          onClick={submitFormData}
          >Next </Button>

          <Divider />
          <Button variant="contained" 
          sx={{background:"blue", borderRadius:30, wordSpacing:10}}
          >
            <FacebookRoundedIcon sx={{marginRight:2}}/> with Facebook
          </Button>
                    <Button variant="contained" 
          sx={{background:"blue", borderRadius:30, wordSpacing:10, 
        }}
          >
            <GoogleIcon  sx={{marginRight:2}}/> With Google
          </Button>

          <Typography variant="h1" sx={{textAlign:'center',fontSize:16,margin:2}}>Already registered? <span className='signIn'>Sign In </span></Typography>
          </form>
    </Container>
  )
}

export default Personal