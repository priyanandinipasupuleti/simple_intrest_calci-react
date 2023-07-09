
import './App.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {

  const[num1,setNum1]=useState(0);
  const [num2,setNum2]=useState(0);
  const [num3,setNum3]=useState(0);
  const [Add,setAdd]=useState(0);

  const calcSum = (e) => {

    e.preventDefault();

    if (num1===0 || num2 ===0 || num3===0)
    {
      alert("Please enter your Principle, Rate, Time values ");
    }
    else
    {
      let Add = parseInt(num1)*parseInt(num2)*parseInt(num3)/100;
      console.log(typeof(Add));
      setAdd(parseInt(Add))
    }

  }

  const handleClick = (e) =>{

    setAdd(0);
    window.location.reload();
  }

  return (
    <div className="app">
      <div className='container'>
        <div className='heading_text'>
          <h1 className='heading_one'>Simple Intrest Calculator</h1>
          <p className='heading_two'>Calculate your simple intrest easily</p>
        </div>
        <div className='total_amount_card'>
          <div className='card_text '>
          <h3 className='total_amount_heading'>₹ {Add}</h3>
          <p className='total_amount_para'>Total simple interest</p>
          </div>
        </div>

        <form onSubmit={calcSum}>
 
        <div className='input_area'>
            <div className='input_field'>
            <TextField type="number" value={num1 || ""} onChange={(e) => setNum1(e.target.value)} id="outlined-basic" label="₹ Principal amount" variant="outlined" />
            </div>
            <div className='input_field'>
            <TextField type="number" value={num2 || ""} onChange={(e) => setNum2(e.target.value)} id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" />
            </div>
            <div className='input_field'>
            <TextField  type="number" value={num3 || ""} onChange={(e) => setNum3(e.target.value)} id="outlined-basic" label="Time period ( Yr )" variant="outlined" />
            </div>
        </div>
        <div className='button_collection'>
          <Stack spacing={2} direction="row">       
          <Button type='submit' className='btn_one' style={{backgroundColor: 'black'}} variant="contained">Calculate</Button>
          <Button className='btn_one'  onClick={handleClick}  variant="outlined">Reset</Button>
          </Stack>
        </div>
        </form>

      </div>
    </div>
  );
}

export default App;
