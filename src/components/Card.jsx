import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Card(props) {
  const naviget=useNavigate();

      return (
    <div className='w-[224px] box-border h-[324px] bg-[#ffffff06] rounded-[8px] px-[21px] pb-[18px] pt-5'>
        <img src={props.data.images[0].url} alt="" className='w-[182px] h-[182px] cursor-pointer' onClick={()=>{ naviget('/sahifa2/'+props.data.id) }} />
        <h2 className='name mt-[25px] cursor-pointer ' onClick={()=>{naviget('/sahifa2') }}>{props.data.name}</h2>
        <p className='fnt font-[450] text-[18px] text-[#b3b3b3]'>{props.data.description}</p>
      
    </div>
  )
}

export default React.memo(Card)
