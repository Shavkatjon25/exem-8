
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import Omborchi from '../Omborchi';

function Sahifa1() {
    const token=useSelector((a)=>a.token);
    const dt1=useSelector((a)=>a.d41);
    const [d6, setD6]=useState();
    const [d41, setD41]=useState();
    const [d42, setD42]=useState();
    const [d43, setD43]=useState();
    const [d44, setD44]=useState();
    const [d45, setD45]=useState();
    const naviget=useNavigate();
    const dispach=useDispatch();


    async function Dta() {

        try{

            const d=await fetch('https://api.spotify.com/v1/browse/featured-playlists',
            {
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            }
        )
        
        const dj=await d.json();
        setD6(dj.playlists.items.splice(13, 6))
        

        }
        catch(err){
            console.log(err, 'sodir bodi');
            
        }

        try{

            const d=await fetch('https://api.spotify.com/v1/browse/categories/toplists/playlists',
            {
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            }
        )
    
        
        const dj=await d.json();
        setD41(dj.playlists.items.splice(6, 4))
        
        

        }
        catch(err){
            console.log(err, 'sodir bodi');
            
        }

        try{

            const d=await fetch('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists',
            {
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            }
        )
    
        
        const dj=await d.json();
       
       
        setD42(dj.playlists.items.splice(4, 4))
        
        

        }
        catch(err){
            console.log(err, 'sodir bodi');
            
        }

        try{

            const d=await fetch('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists',
            {
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            }
        )
    
        
        const dj=await d.json();
       
       
        setD43(dj.playlists.items.splice(10, 4))
        
        

        }
        catch(err){
            console.log(err, 'sodir bodi');
            
        }

        try{

            const d=await fetch('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists',
            {
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            }
        )
    
        
        const dj=await d.json();
       
       
        setD44(dj.playlists.items.splice(10, 4))
        
        

        }
        catch(err){
            console.log(err, 'sodir bodi');
            
        }

        try{

            const d=await fetch('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists',
            {
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            }
        )
    
        
        const dj=await d.json();
       
       
        setD45(dj.playlists.items.splice(0, 4))
        
        

        }
        catch(err){
            console.log(err, 'sodir bodi');
            
        }

        
        
    }



    useEffect(()=>{       
        Dta();
    }, [token])

    
    

  
    const arr6=[1, 2, 3, 4, 6, 7]
    const arr4=[1, 2, 3, 4]



  return (
    <div className='flex-1 max-w-[1072px] w-full bg box-border pt-5 pb-10 px-[41px]'>


        <div className='flex gap-[22px] '>
        <button className='w-10 rotate-180 h-10 bg-[#0000007b] rounded-full flex justify-center items-center'><img src="./Polygon 2 (Stroke).svg" alt="" /></button>
            <button className='w-10 h-10 bg-[#0000007b] rounded-full flex justify-center items-center'><img src="./Polygon 2 (Stroke).svg" alt="" /></button>
        </div>
        
        <div className='mt-[50px]'>
            <h2 className='sahifa1_div2_h2'>Good afternoon</h2>
        </div>

        <div className='flex flex-wrap mt-[29px] gap-x-[31px] gap-y-4'>

            {
                d6 ? d6.map((a, index)=>{
                    return(
                        <div key={index} onClick={()=>naviget('/sahifa2/'+a.id)} className='w-[479px] bg-[#ffffff1c]  h-[82px] flex items-center gap-[21px]'>
                        <img src={a.images[0].url} className='flex h-full' alt="" />
                        <h3 className='name'>{a.name}</h3>
                    </div>
                    )
                }): arr6.map(a=>{
                    return(
                        <div key={a} className="w-[479px] h-[82px] bg-[#ffffff1c] flex  items-center gap-4">
                            <Skeleton className="w-[82px] h-[82px] m-0" baseColor='#ffffff1c'></Skeleton>
                            <Skeleton className="w-52 h-[20px] m-0" baseColor='#ffffff1c' borderRadius='5px'></Skeleton>
                        </div>
                    )
                })
            }


        </div>

        <div className='flex justify-between mt-[50px] mb-[26px]'>
            <h2 className='playName'>Your top mixes</h2>
            <button className='btn_all' onClick={()=>setD41(dt1)}>SEE ALL</button>
        </div>

        <div className='flex flex-wrap gap-[31px]'>
            {
                d41 ? d41.map((a, index)=>{
                    return <Card data={a}/>
                }): arr4.map(a=>{
                    return(
                        <div key={a} className='w-[224px] box-border h-[324px] bg-[#ffffff06] rounded-[8px] px-[21px] pb-[18px] pt-5 '>
                        <Skeleton className="w-[182px] h-[182px] m-0 mb-[25px]" baseColor='#ffffff1c'></Skeleton>
                        <Skeleton className="w-[182px] h-4 m-0" baseColor='#ffffff1c'></Skeleton>
                        <Skeleton className="w-[182px] h-3 m-0" baseColor='#ffffff1c'></Skeleton>
                        <Skeleton className="w-[182px] h-3 m-0" baseColor='#ffffff1c'></Skeleton>
                        </div>
                    )
                })


            }
        </div>

        <div className='flex justify-between mt-[50px] mb-[26px]'>
            <h2 className='playName'>Made for you</h2>
            <button className='btn_all'>SEE ALL</button>
        </div>

        <div className='flex flex-wrap gap-[31px]'>
            {
                d42 ? d42.map(a=>{
                    return <Card data={a}/>
                }):                arr4.map(a=>{
                    return(
                        <div key={a} className='w-[224px] box-border h-[324px] bg-[#ffffff06] rounded-[8px] px-[21px] pb-[18px] pt-5 '>
                        <Skeleton className="w-[182px] h-[182px] m-0 mb-[25px]" baseColor='#ffffff1c'></Skeleton>
                        <Skeleton className="w-[182px] h-4 m-0" baseColor='#ffffff1c'></Skeleton>
                        <Skeleton className="w-[182px] h-3 m-0" baseColor='#ffffff1c'></Skeleton>
                        <Skeleton className="w-[182px] h-3 m-0" baseColor='#ffffff1c'></Skeleton>
                        </div>
                    )
                })

                


            }
        </div>

        <div className='flex justify-between mt-[50px] mb-[26px]'>
            <h2 className='playName'>Recently played</h2>
            <button className='btn_all'>SEE ALL</button>
        </div>

        <div className='flex flex-wrap gap-[31px]'>
            {
                d43 ? d43.map(a=>{
                    return <Card data={a}/>
                }):                arr4.map(a=>{
                    return(
                        <div key={a} className='w-[224px] box-border h-[324px] bg-[#ffffff06] rounded-[8px] px-[21px] pb-[18px] pt-5 '>
                        <Skeleton className="w-[182px] h-[182px] m-0 mb-[25px]" baseColor='#ffffff1c'></Skeleton>
                        <Skeleton className="w-[182px] h-4 m-0" baseColor='#ffffff1c'></Skeleton>
                        <Skeleton className="w-[182px] h-3 m-0" baseColor='#ffffff1c'></Skeleton>
                        <Skeleton className="w-[182px] h-3 m-0" baseColor='#ffffff1c'></Skeleton>
                        </div>
                    )
                })

                


            }
        </div>

        <div className='flex justify-between mt-[50px] mb-[26px]'>
            <h2 className='playName'>Jump back in</h2>
            <button className='btn_all'>SEE ALL</button>
        </div>

        <div className='flex flex-wrap gap-[31px]'>
            {
                d44 ? d44.map(a=>{
                    return <Card data={a}/>
                }):                arr4.map(a=>{
                    return(
                        <div key={a} className='w-[224px] box-border h-[324px] bg-[#ffffff06] rounded-[8px] px-[21px] pb-[18px] pt-5 '>
                        <Skeleton className="w-[182px] h-[182px] m-0 mb-[25px]" baseColor='#ffffff1c'></Skeleton>
                        <Skeleton className="w-[182px] h-4 m-0" baseColor='#ffffff1c'></Skeleton>
                        <Skeleton className="w-[182px] h-3 m-0" baseColor='#ffffff1c'></Skeleton>
                        <Skeleton className="w-[182px] h-3 m-0" baseColor='#ffffff1c'></Skeleton>
                        </div>
                    )
                })

                


            }
        </div>

        <div className='flex justify-between mt-[50px] mb-[26px]'>
            <h2 className='playName'>Uniquely yours</h2>
            <button className='btn_all'>SEE ALL</button>
        </div>

        <div className='flex flex-wrap gap-[31px]'>
            {
                d45 ? d45.map(a=>{
                    return <Card data={a}/>
                }):                arr4.map(a=>{
                    return(
                        <div key={a} className='w-[224px] box-border h-[324px] bg-[#ffffff06] rounded-[8px] px-[21px] pb-[18px] pt-5 '>
                        <Skeleton className="w-[182px] h-[182px] m-0 mb-[25px]" baseColor='#ffffff1c'></Skeleton>
                        <Skeleton className="w-[182px] h-4 m-0" baseColor='#ffffff1c'></Skeleton>
                        <Skeleton className="w-[182px] h-3 m-0" baseColor='#ffffff1c'></Skeleton>
                        <Skeleton className="w-[182px] h-3 m-0" baseColor='#ffffff1c'></Skeleton>
                        </div>
                    )
                })

                


            }
        </div>



    </div>
  )
}

export default Sahifa1
