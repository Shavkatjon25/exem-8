import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Omborchi from '../Omborchi';

function Like() {
    const dispach=useDispatch();
    const audo=useSelector(a=>a.pleylistId);
    const mal34=useSelector(a=>a.lake);
    
    
   
  return (
    <div className='pt-5 px-[41px] max-w-[1072px] flex-1 w-full box-border pb-10 like_bg'>


        <div className='flex gap-[22px] '>
        <button onClick={()=>window.history.back(-1)} className='w-10 rotate-180 h-10 bg-[#0000007b] rounded-full flex justify-center items-center'><svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M13.0702 11.302C13.4745 11.7064 13.458 12.3669 13.034 12.7506L2.33908 22.4269C1.82715 22.8901 1.03669 22.8506 0.573517 22.3386C0.110348 21.8267 0.149872 21.0362 0.661796 20.5731L10.1874 11.9547L0.616553 2.38388C0.128398 1.89573 0.128398 1.10427 0.616553 0.616116C1.10471 0.127961 1.89617 0.127961 2.38432 0.616117L13.0702 11.302Z" fill="white"/>
</svg>
</button>
        <button className='w-10 h-10 bg-[#0000007b] rounded-full flex justify-center items-center'><svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0702 11.302C13.4745 11.7064 13.458 12.3669 13.034 12.7506L2.33908 22.4269C1.82715 22.8901 1.03669 22.8506 0.573517 22.3386C0.110348 21.8267 0.149872 21.0362 0.661796 20.5731L10.1874 11.9547L0.616553 2.38388C0.128398 1.89573 0.128398 1.10427 0.616553 0.616116C1.10471 0.127961 1.89617 0.127961 2.38432 0.616117L13.0702 11.302Z" fill="white"/>
</svg>
</button>
        </div>

        <div className='mt-12 flex gap-8 items-end'>
            <div>
            <svg width="297" height="297" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="2" fill="url(#paint0_linear_124_3039)"/>
<path d="M16.0006 10.158C17.6448 8.56071 20.1858 8.61373 21.7699 10.3307C23.3532 12.0484 23.4078 14.784 21.9351 16.5684L15.9992 23L10.0647 16.5684C8.59191 14.784 8.64721 12.0439 10.2299 10.3307C11.8154 8.616 14.3514 8.55844 16.0006 10.158Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_124_3039" x1="1" y1="1" x2="32" y2="30.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#3822EA"/>
<stop offset="1" stop-color="#C7E9D7"/>
</linearGradient>
</defs>
</svg>


            </div>
            <div>
                <h3 className='text-[1rem] font-medium text-white fnt'>PUBLIC PLAYLIST</h3>
                <h2 className='text-[112px] font-[900] text-white'>Liked Songs</h2>
                <p className='fnt font-[450] text-[18px] text-[#b3b3b3]'>Made for davedirect3 34 songs, 2hr 01 min</p>
            </div>
        </div>

        
        <div className='flex justify-between mt-[60px]'>


        <div className='flex items-center gap-6'>
            <button><svg width="72" height="72" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="47" cy="43" r="31" fill="#65D36E"/>
<path d="M58.4412 43.4412C59.1863 43.0229 59.1863 41.9771 58.4412 41.5588L41.6765 32.1472C40.9314 31.7289 40 32.2518 40 33.0884V51.9116C40 52.7482 40.9314 53.2711 41.6765 52.8528L58.4412 43.4412Z" fill="black"/>
</svg>
            </button>
            <button><svg width="52" height="52" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0013 7.06396L13.4902 6.58897C11.3153 4.56735 7.97855 4.63857 5.88479 6.80838C3.78656 8.98499 3.70712 12.4754 5.65217 14.7498L13.9988 23.4187L22.3475 14.7498C24.2922 12.4757 24.2145 8.99156 22.1145 6.80802L14.0013 7.06396ZM14.0013 6.06396L14.5119 6.58858M14.0013 7.06396L14.5119 6.58858M14.5119 6.58858C16.68 4.57015 20.0233 4.63612 22.1143 6.80779L14.5119 6.58858Z" stroke="white" strokeWidth="1.5"/>
                </svg>
            </button>
            <button><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="26" cy="26" r="17.75" stroke="white" stroke-width="2.5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.839 28.9289L26.884 36.8839C26.3959 37.372 25.6044 37.372 25.1162 36.8839L17.1613 28.9289C16.6731 28.4408 16.6731 27.6493 17.1613 27.1612C17.6494 26.673 18.4409 26.673 18.9291 27.1612L24.7501 32.9822L24.7501 17C24.7501 16.3096 25.3098 15.75 26.0001 15.75C26.6905 15.75 27.2501 16.3096 27.2501 17L27.2501 32.9822L33.0712 27.1612C33.5594 26.673 34.3508 26.673 34.839 27.1612C35.3271 27.6493 35.3271 28.4408 34.839 28.9289Z" fill="white"/>

</svg>
            </button>
            <button className='flex gap-[6px]'>
                <div className='w-[7px] h-[7px] bg-white rounded-full'></div>
                <div className='w-[7px] h-[7px] bg-white rounded-full'></div>
                <div className='w-[7px] h-[7px] bg-white rounded-full'></div>
            </button>
        </div>

            <div className='flex gap-[35px] items-center'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.7747 22.3561L29.5924 28.4934C30.1511 29.0828 30.1332 30.0268 29.5524 30.5933C28.9808 31.1511 28.078 31.1329 27.5282 30.5526L21.7061 24.4083C19.7272 25.93 17.4956 26.7673 15.0114 26.9203C13.3514 27.0226 11.7438 26.792 10.1886 26.2288C8.63335 25.6655 7.2766 24.8625 6.11833 23.8199C4.96006 22.7772 4.01249 21.5057 3.27561 20.0055C2.53874 18.5053 2.12096 16.9125 2.02229 15.2271C1.92361 13.5418 2.15262 11.9092 2.70933 10.3292C3.26604 8.74932 4.05852 7.37069 5.08678 6.19334C6.11504 5.01599 7.36839 4.05225 8.84685 3.30212C10.3253 2.55198 11.8945 2.1258 13.5543 2.02356C15.2142 1.92132 16.8218 2.15183 18.3771 2.7151C19.9324 3.27837 21.2892 4.08134 22.4474 5.12402C23.6055 6.16669 24.5531 7.43815 25.2901 8.93838C26.027 10.4386 26.4448 12.0314 26.5434 13.7168C26.606 14.7861 26.5356 15.8403 26.3321 16.8793C26.1287 17.9184 25.8096 18.8946 25.3747 19.8079C24.9399 20.7212 24.4066 21.5706 23.7747 22.3561ZM14.84 23.9912C16.1107 23.9129 17.3094 23.5854 18.436 23.0085C19.5626 22.4317 20.519 21.6933 21.305 20.7934C22.091 19.8934 22.6986 18.8412 23.1279 17.6365C23.5572 16.4319 23.7341 15.1845 23.6586 13.8944C23.5831 12.6042 23.262 11.3875 22.6953 10.2442C22.1286 9.10096 21.4026 8.13081 20.5173 7.33378C19.632 6.53674 18.5964 5.92105 17.4106 5.48669C16.2247 5.05232 14.9965 4.87428 13.7258 4.95255C12.4551 5.03081 11.2565 5.35835 10.1298 5.93514C9.00317 6.51194 8.04682 7.25035 7.26078 8.15038C6.47473 9.0504 5.86709 10.1027 5.43783 11.3072C5.00858 12.5117 4.83171 13.7591 4.90721 15.0494C4.98272 16.3396 5.3038 17.5563 5.87045 18.6995C6.4371 19.8427 7.16312 20.8128 8.04853 21.6099C8.93394 22.407 9.96951 23.0227 11.1552 23.457C12.341 23.8913 13.5692 24.0694 14.84 23.9912Z" fill="white"/>
                </svg>
                <select name="" id="" className='bg-inherit text-white font-[450] text-[18px] w-[140px]'>
                    <option value="">Custom order </option>
                </select>


            </div>
        </div>

        <div className='flex justify-between pl-[25px] pr-[59px] py-[14px] mt-[30px] border-b'>
            <h4 className='sahifa2_h4 flex gap-[19px]'><span className='text-[22px]'>#</span>TITLE</h4>
            <div className='flex flex-1 justify-between max-w-[400px]'>
            <h4 className='sahifa2_h4'>ALBBUM</h4>
            <h4 className='sahifa2_h4'>DATE ADDED</h4>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23 14C23 18.9706 18.9706 23 14 23C9.02944 23 5 18.9706 5 14C5 9.02944 9.02944 5 14 5C18.9706 5 23 9.02944 23 14ZM25 14C25 20.0751 20.0751 25 14 25C7.92487 25 3 20.0751 3 14C3 7.92487 7.92487 3 14 3C20.0751 3 25 7.92487 25 14ZM14.5 8.5H12.5V15.5H18V13.5H14.5V8.5Z" fill="#B3B3B3"/>
            </svg>
            </div>

        </div>

        {
           mal34.length !=0 ? mal34.map((a, index)=>{

                return(
                    <div className='flex items-center pl-5 pr-[63px] mt-[22px] justify-between' onClick={()=>dispach(Omborchi.actions.pleylist(a))} >
                    <div className='flex'>
                    <p className='font-[450] text-[22px] text-[#b3b3b3] fnt'>{audo && audo?.track.id==a?.track.id ? <img src="https://i.gifer.com/Z23N.gif"  width={28} alt="" /> : (index+1)}</p>
                        <img src={a.track.album.images[1].url} className='w-[52px] h-[52px] ml-3 mr-[21px]' alt="" />
                        <div className='flex flex-col justify-between '>
                            <h4 className='font-[450]  text-[20px] text-[#fff] leading-[25px]'>{a.track.name}</h4>
                            <p className='fnt font-[450] text-[18px] text-[#b3b3b3]'>{a.track.album.artists[0].name}</p>
                        </div>
                    </div>
                    <div className='max-w-[400px] flex-1 justify-between flex'>
                    <h4 className='fnt  font-[450] text-[18px] text-[#b3b3b3]'>{a.track.album.name}</h4>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill='#63CF6C' xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0013 7.06396L13.4902 6.58897C11.3153 4.56735 7.97855 4.63857 5.88479 6.80838C3.78656 8.98499 3.70712 12.4754 5.65217 14.7498L13.9988 23.4187L22.3475 14.7498C24.2922 12.4757 24.2145 8.99156 22.1145 6.80802L14.0013 7.06396ZM14.0013 6.06396L14.5119 6.58858M14.0013 7.06396L14.5119 6.58858M14.5119 6.58858C16.68 4.57015 20.0233 4.63612 22.1143 6.80779L14.5119 6.58858Z" stroke='#63CF6C' strokeWidth="1.5"/>
                </svg>
                        <p className='fnt font-[450] text-[20px] text-white'>{Math.floor((a.track.duration_ms)/60000)}:{((a.track.duration_ms)%60)}</p>
                    </div>
                    </div>
                )

            }) : <div className='w-full'><h2 className='ftn text-[24px] text-white mt-5'>Siz hechqanday qo'shiqqa layk bosmadingiz!</h2></div>
        }



      
    </div>
  )
}

export default Like
