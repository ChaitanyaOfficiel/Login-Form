import {useState} from 'react'
import Header from "./Section/Header";
import Password from './Components/Password';
import Personal from './Components/Personal';
function App() {
  const [step,setStep] = useState(1);
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    rePassword:""                         
  })

  const nextStep = () =>  {
    setStep(step + 1)
  }

  const handleInputData = input => e => {
    const {value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }

  switch(step){
    case 1: 
    return(
      <>
      <Header />
      <Personal nextStep={nextStep} handleInputData={handleInputData} values={formData}/>
      </>
    );
  
  case 2: 
  return (
    <>
    <Header />
    <Password nextStep={nextStep} handleInputData={handleInputData} values={formData}/>
    </>
  );
  default:
    return(
      <div className='root'></div>
    );
}
}
export default App;