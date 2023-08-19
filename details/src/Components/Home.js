
import Nav from './Nav'
import React, { useState } from 'react'
import axios from 'axios';
const Home = () => {

  const [id,setid] = useState('');
 const [num,setnum] = useState('')
 const [name,setname] =useState('')
 const [delayed,setdelayed] = useState('')
  const [number,setnumber] = useState('')
  const [sleeper,setsleeper] = useState('')
  const[price,setprice]= useState('')
  const[price2,setprice2]= useState('')
  const [hour,sethr] = useState('')
  const [minutes,setmin] = useState('')
 const [traindata,settraindata] = useState([]);
  const submitHandler= (e) =>{
    e.preventDefault();

       const url = "http://localhost:8000/train/"+num;
       axios.get(url).then(
        (arr) =>{
          console.log(arr.data)
          settraindata(arr.data)
          setnumber(arr.data.trainNumber)
          setname(arr.data.trainName)
          setdelayed(arr.data.delayedBy)
          setsleeper(Number(arr.data.seatsAvailable.sleeper)+Number(arr.data.seatsAvailable.AC))
         setprice(arr.data.price.sleeper)
         setprice2(arr.data.price.AC)   
         sethr(arr.data.departureTime.Hours)
         setmin(arr.data.departureTime.Minutes)

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
             <input type="text"  class="form-control mx-auto w-70 text-center"  name='email'   required placeholder="enter Train Number"  onChange={(e) =>{setnum(e.target.value)}}/>
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

         
        <center><p className="text-4xl text-green-900">Train Data Get Access to all Trains</p></center>
        <div className="container mx-auto mt-7 px-4   py-8 ">
        <table className="w-full text-sm text-center shadow ring-1 ring-black ring-opacity-5 text-gray-900 divide-y divide-gray-300 md:rounded-lg">
          <thead className="text-xs text-center  text-gray-900 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3  text-sm font-semibold text-gray-900 text-center ">
                Train No
                <br/>
                <br/>
                {number}
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 ">
                Train Name
                <br/>
                <br/>
                {name}
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 ">
                Departue Time
                <br/><br/>
                {hour}<span>:</span>{minutes}
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 ">
                Price
                <br/>
                <br/>
                <span>Sleeper </span>{price}<br/>
                <span>AC </span>{price2}
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 ">
                Seats Available
                <br/><br/>
                {sleeper}
              </th>
             
            </tr>
          </thead>
          {/* <tbody>
            {traindata.map((item, index) => (
              <tr key={index} className="bg-white ">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {item.trainNumber}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {item.trainName}
                </td>
                <td className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
                  {item.departureTime.Hours + "Hours" + item.departureTime.Minutes + " Minutes"}
                </td>
                <td className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
                   {item.price.AC + " for AC seats" + item.price.sleeper + " for Sleeper"}
                </td>
                <td className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
                   {item.seatsAvailable.AC + "IN AC "+item.seatsAvailable.sleeper + " in Sleeper"}
                </td>
              </tr>
            ))}
          </tbody> */}
           
        </table>
      </div>




    </div>
  )
}

export default Home
