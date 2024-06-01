import React, { useEffect, useState } from 'react'
import Homeright from './home/Homeright'
import Homeleft from './home/Homeleft'

import { useDispatch, useSelector } from 'react-redux'
import Omborchi from './Omborchi'
import Sahifa1 from './components/Sahifa1'
import Saxifa2 from './components/Saxifa2'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Like from './components/Like'


function App() {
const [pl, setPl]=useState(true);
const dispach =useDispatch();
const qoshiq=useSelector(a=>a.pleylistId);
const like=useSelector(a=>a.lake);
console.log(like);


  async function Token(){
    const date=new Date;
    const dat1=date.getFullYear()+'/'+date.getMonth()+'/'+date.getDay()+'/'+date.getHours();
    if (!localStorage.getItem('tk') || !localStorage.getItem('vq') || localStorage.getItem('vq')!=dat1) {
      const dt=await fetch('https://accounts.spotify.com/api/token', 
  
      {
        method:'POST',
        headers:{
          "Content-Type":'application/x-www-form-urlencoded',
          "Authorization":`Basic ${btoa('5600412904044fa1bfb5e3f541c70a25'+":"+'2e50a238ea094468b9be7c618f34c769')}`
        },
        body:'grant_type=client_credentials'
      }
      )
      const dtj= await  dt.json();
      dispach(Omborchi.actions.token(dtj));
      localStorage.setItem('tk', dtj.access_token);
      const date=new Date;
      const dat=date.getFullYear()+'/'+date.getMonth()+'/'+date.getDay()+'/'+date.getHours();
      localStorage.setItem('vq', dat);
      console.log(dtj);
      
    }
  
    
  }

  useEffect(()=>{
    Token();
    console.log(localStorage.getItem('tk'));
    
  }, [])

  useEffect(()=>{
      setPl(true)
  }, [qoshiq])

const x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 



  return (
    <div className={`flex max-w-[1728px] justify-between w-full mx-auto ${qoshiq ? 'pb-[112px]': ''}`}>
      
         <Router>
            <Homeleft/>
            <Routes>
              <Route path="/" element={<Sahifa1 />} />
              <Route path="/sahifa2/:id" element={<Saxifa2 />} />
              <Route path="/like" element={<Like />} />
            </Routes>
            <Homeright/>
       </Router>

       <div className='w-[18%] max-w-[310px] max-h-[310px] flex fixed bg-white bottom-[112px]'>
        <img src={qoshiq?.track?.album?.images[0]?.url} alt="" />
       </div>
      
      <div className={` bg-[#181818]  fixed h-[112px] bottom-0 box-border w-full flex items-center pl-[18px] pr-[63px] max-w-[1728px] justify-between ${qoshiq ? '':'hidden'}`}> 


      <div className='flex items-center'>
        <div className='w-[200px]'>
        <h4 className='font-[450]  text-[20px] text-[#fff] leading-[25px] z-10'>{qoshiq?.track?.name}</h4>
        <p className='fnt font-[450] text-[18px] text-[#b3b3b3]'>{qoshiq?.track?.album?.artists[0]?.name}</p>
        </div>
          <button onClick={()=>dispach(Omborchi.actions.like(qoshiq))}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill={like && qoshiq && like?.some(x=>x.track.id==qoshiq.track.id)  ? '#63CF6C':''} xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0013 7.06396L13.4902 6.58897C11.3153 4.56735 7.97855 4.63857 5.88479 6.80838C3.78656 8.98499 3.70712 12.4754 5.65217 14.7498L13.9988 23.4187L22.3475 14.7498C24.2922 12.4757 24.2145 8.99156 22.1145 6.80802L14.0013 7.06396ZM14.0013 6.06396L14.5119 6.58858M14.0013 7.06396L14.5119 6.58858M14.5119 6.58858C16.68 4.57015 20.0233 4.63612 22.1143 6.80779L14.5119 6.58858Z" stroke={like && qoshiq && like?.some(x=>x.track.id==qoshiq.track.id) ? '#63CF6C':'#fff'} strokeWidth="1.5"/>
                </svg>
          </button>
      </div>

      <audio id='myAudio' className='hidden' autoPlay src={qoshiq?.track?.preview_url}></audio>

    <div className='flex flex-col gap-4 items-center'>

    <div className='flex gap-[76px]'>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.4708 7.31952C21.0448 7.74555 21.0448 8.43627 21.4708 8.8623L22.1566 9.54813H19.8151C18.3733 9.54813 17.0016 10.215 16.0522 11.3776L7.94266 21.3076C7.37299 22.0052 6.55001 22.4053 5.68493 22.4053H5V24.5481H5.68493C7.12674 24.5481 8.49837 23.8813 9.44781 22.7187L17.5573 12.7887C18.127 12.0911 18.95 11.691 19.8151 11.691H22.4991L21.4708 12.7192C21.0448 13.1453 21.0448 13.836 21.4708 14.262C21.8968 14.688 22.5876 14.688 23.0136 14.262L26.1313 11.1443C26.3265 10.9491 26.3265 10.6325 26.1313 10.4372L23.0136 7.31952C22.5876 6.89349 21.8968 6.89349 21.4708 7.31952ZM6.36879 8.54813C7.76049 8.54813 9.08446 9.19407 10.0009 10.3202L12.4531 13.1728L11 14.5481L8.54806 11.687C7.9982 11.0113 7.20381 10.6238 6.36879 10.6238H5.00043V8.54813H6.36879ZM16.3284 20.7761C17.2449 21.9022 18.5688 22.5481 19.9605 22.5481H22.6419L21.4708 23.7192C21.0448 24.1453 21.0448 24.836 21.4708 25.262C21.8968 25.688 22.5876 25.688 23.0136 25.262L26.1313 22.1443C26.3265 21.9491 26.3265 21.6325 26.1313 21.4372L23.0136 18.3195C22.5876 17.8935 21.8968 17.8935 21.4708 18.3195C21.0448 18.7455 21.0448 19.4363 21.4708 19.8623L22.081 20.4725H19.9605C19.1255 20.4725 18.3311 20.0849 17.7813 19.4093L16 17.0481L14.5 18.5481L16.3284 20.7761Z" fill="#BABABA"/>
</svg>

      {
        pl ?       <button className='text-white' onClick={()=>{pauseAudio(); setPl(!pl)}}><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24ZM16.3 15.1C16.3 14.5477 16.7477 14.1 17.3 14.1H20.8C21.3523 14.1 21.8 14.5477 21.8 15.1V32.9C21.8 33.4523 21.3523 33.9 20.8 33.9H17.3C16.7477 33.9 16.3 33.4523 16.3 32.9V15.1ZM27.2 14.1C26.6477 14.1 26.2 14.5477 26.2 15.1V32.9C26.2 33.4523 26.6477 33.9 27.2 33.9H30.7C31.2523 33.9 31.7 33.4523 31.7 32.9V15.1C31.7 14.5477 31.2523 14.1 30.7 14.1H27.2Z" fill="white"/>
        </svg>
        </button> : <button onClick={()=>{playAudio(); setPl(!pl)}}><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM17.95 14.2388L34.45 23.1126C35.1833 23.507 35.1833 24.493 34.45 24.8874L17.95 33.7612C17.2167 34.1556 16.3 33.6626 16.3 32.8738V15.1262C16.3 14.3374 17.2167 13.8444 17.95 14.2388Z" fill="white"/>
</svg>
</button>
      }

<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 8H10C8.89543 8 8 8.89543 8 10V18C8 19.1046 8.89543 20 10 20H12V22H10C7.79086 22 6 20.2091 6 18V10C6 7.79086 7.79086 6 10 6H22C24.2091 6 26 7.79086 26 10V18C26 20.2091 24.2091 22 22 22H18.843L20.0141 23.1711C20.4401 23.5971 20.4401 24.2879 20.0141 24.7139C19.588 25.1399 18.8973 25.1399 18.4713 24.7139L15.3536 21.5962C15.1583 21.4009 15.1583 21.0843 15.3536 20.8891L18.4713 17.7714C18.8973 17.3454 19.588 17.3454 20.0141 17.7714C20.4401 18.1974 20.4401 18.8881 20.0141 19.3142L19.3282 20H22C23.1046 20 24 19.1046 24 18V10C24 8.89543 23.1046 8 22 8Z" fill="#BABABA"/>
</svg>

      </div>

      <div className='flex gap-2 items-center'>
        <p className='text-[1rem] text-[#A6A6A6] font-[450]'>2:39</p>
        <div className='w-[350px] bg-[#A6A6A6] h-1'><div className='w-[70px] bg-[#fffffff3] h-1'> </div> </div>
        <p className='text-[1rem] text-[#A6A6A6] font-[450]'>4:32</p>
      </div>

    </div>


      <div className='w-[200px] flex items-center'>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M16.1385 9.74993L9.47894 13.6673C7.50702 14.8273 7.50702 17.679 9.47894 18.8389L16.1385 22.7563V9.74993ZM8.4649 11.9434C5.17837 13.8767 5.17837 18.6295 8.4649 20.5628L16.6314 25.3666C17.2981 25.7588 18.1385 25.2781 18.1385 24.5047V8.00152C18.1385 7.2281 17.2981 6.74745 16.6314 7.13958L8.4649 11.9434ZM19.1387 9.25317C20.1236 9.25317 21.0989 9.44717 22.0088 9.82408C22.9187 10.201 23.7455 10.7534 24.442 11.4499C25.1384 12.1463 25.6909 12.9731 26.0678 13.883C26.4447 14.793 26.6387 15.7683 26.6387 16.7532C26.6387 17.7381 26.4447 18.7134 26.0678 19.6233C25.6909 20.5332 25.1384 21.36 24.442 22.0565C23.7455 22.7529 22.9187 23.3054 22.0088 23.6823C21.0989 24.0592 20.1236 24.2532 19.1387 24.2532V22.2443C19.8598 22.2443 20.5738 22.1022 21.24 21.8263C21.9062 21.5503 22.5116 21.1459 23.0215 20.636C23.5314 20.1261 23.9358 19.5207 24.2118 18.8545C24.4877 18.1883 24.6298 17.4743 24.6298 16.7532C24.6298 16.0321 24.4877 15.318 24.2118 14.6518C23.9358 13.9856 23.5314 13.3803 23.0215 12.8704C22.5116 12.3605 21.9062 11.956 21.24 11.6801C20.5738 11.4041 19.8598 11.2621 19.1387 11.2621V9.25317ZM21.3311 14.5363C20.7997 13.8955 20.053 13.4431 19.213 13.2532L19.1387 20.2532C19.9826 20.079 20.7387 19.6408 21.2836 19.0101C21.8285 18.3795 22.1299 17.5936 22.1385 16.781C22.1471 15.9684 21.8625 15.177 21.3311 14.5363Z" fill="white"/>
</svg> <div className='w-[100px] bg-[#ffffff60] h-1'><div className='w-[70px] bg-[#fffffff3] h-1'> </div> </div>
      </div>



      </div>


    </div>
  )
}

export default App
