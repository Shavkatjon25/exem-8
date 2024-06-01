import { createSlice } from "@reduxjs/toolkit";


const Omborchi=createSlice({
    name:'exem',
    initialState:{
        token:localStorage.getItem('tk') ? localStorage.getItem('tk') :'',
        pleylistId:null,
        lake:localStorage.getItem('like') ? JSON.parse(localStorage.getItem('like')) : [] ,
        d41:[]
    },
    reducers:{
        token:(state, action)=>{
            state.token=action.payload
        },
        pleylist:(state, action)=>{
            state.pleylistId=action.payload
        },
        like:(state, action)=>{
            state.lake.push(action.payload)
            localStorage.setItem('like', JSON.stringify(state.lake))
        },
        dt:(state, action)=>{
            state.d41=action.payload
        },
    }
})

export default Omborchi