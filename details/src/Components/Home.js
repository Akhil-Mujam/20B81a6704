
import Nav from './Nav'
import React, { useState } from 'react'
import axios from 'axios';
const Home = () => {

  const [id,setid] = useState('');
 const [num,setnum] = useState('')
  const submitHandler= (e) =>{
    e.preventDefault();

    const url = "http://localhost:8000/train/"+id;
    axios.get(url).then(
      (arr)=>{
        console.log(arr.data)
        setid(arr.data.trainNumber)
      }
    )
  }

  return (
    <div>   
     <Nav/>
      
     <form >
       <div class="row justify-content-between">
         <div class="col-md-8">
         {/* <TextField id="standard-basic" fullWidth label="Email" FullWidth required placeholder="enter TrainNumber" onChange={(e) =>{ setid(e.target.value)}} variant="standard" /> */}
             <input type="text"  class="form-control mx-auto w-70 text-center"  name='email'   required placeholder="enter your email"  onChange={(e) =>{setid(e.target.value)}}/>
             </div>
           </div>
        <br/>
        
        <br/>
        <div class="row justify-content-between">
            <div class="col-md-8">
             <button class="btn btn-success ml-2" onClick={submitHandler}>submit</button>
            </div>
        </div>
        </form>

           <p>
            <h1>{id}</h1>
           </p>
    </div>
  )
}

export default Home
