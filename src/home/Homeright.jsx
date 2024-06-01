import React from 'react'

function Homeright() {
  return (
    <div className="max-w-[346px] min-h-[100vh] flex-1 bg-black pt-[29px] px-5">


        <div className='flex items-center gap-4 flex-wrap'>
          <h2 className='flex-1 flex home_r_h2'>Friend Activity</h2>
          <button className='w-8'><img src="User Plus_S.svg" alt="" /></button>
          <button><img src="Union.svg" alt="" /></button>
        </div>
        
        <p className='home_r_p mt-[39px] mb-[23px]'>Let friends and followers on Spotify see what youre listening to.</p>

        <div className='flex items-center gap-[15px] flex-wrap'>
          <div className=' w-[62px] h-[62px] bg-[#ffffff42] flex justify-center items-center rounded-full after:content-[""] after:block after:w-4 after:h-4 after:absolute after:rounded-full after:mt-[-40px] after:ml-10 after:bg-[#63CF6C]'>
            <img src="Union.png"  alt="" />
          </div>
          <div className='flex flex-col gap-[6px]'>
            <p className='w-[102px] bg-[#ffffff42] h-[10px] rounded-xl'></p>
            <p className='w-[79px] bg-[#ffffff42] h-[10px] rounded-xl'></p>
            <p className='w-[79px] bg-[#ffffff42] h-[10px] rounded-xl'></p>
          </div>
        </div>
        <div className='flex items-center gap-[15px] flex-wrap after:content-[""] after:block after:w-4 after:h-4 after:absolute after:rounded-full after:mt-[-40px] after:ml-10 after:bg-[#63CF6C]'>
          <div className=' w-[62px] h-[62px] bg-[#ffffff42] flex justify-center items-center rounded-full'>
            <img src="Union.png"  alt="" />
          </div>
          <div className='flex flex-col gap-[6px] mt-5 mb-5 '>
            <p className='w-[102px] bg-[#ffffff42] h-[10px] rounded-xl'></p>
            <p className='w-[79px] bg-[#ffffff42] h-[10px] rounded-xl'></p>
            <p className='w-[79px] bg-[#ffffff42] h-[10px] rounded-xl'></p>
          </div>
        </div>
        <div className='flex items-center gap-[15px] flex-wrap'>
          <div className=' w-[62px] h-[62px] bg-[#ffffff42] flex justify-center items-center rounded-full after:content-[""] after:block after:w-4 after:h-4 after:absolute after:rounded-full after:mt-[-40px] after:ml-10 after:bg-[#63CF6C]'>
            <img src="Union.png"  alt="" />
          </div>
          <div className='flex flex-col gap-[6px]'>
            <p className='w-[102px] bg-[#ffffff42] h-[10px] rounded-xl'></p>
            <p className='w-[79px] bg-[#ffffff42] h-[10px] rounded-xl'></p>
            <p className='w-[79px] bg-[#ffffff42] h-[10px] rounded-xl'></p>
          </div>
        </div>

        <p className='home_r_p mt-[21px] mb-[23px]'>Go to Settings  Social and enable “Share my listening activity on Spotify. You can turn this off at any time.</p>

        <button className='px-16 py-5 bg-white rounded-full mx-auto  block home_r_btn'>SETTINGS</button>

    </div>
  )
}

export default Homeright
