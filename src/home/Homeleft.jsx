import { useNavigate } from "react-router-dom"


function Homeleft() {
  const navigator=useNavigate()
  return (
    <div className="max-w-[310px] flex-1 min-h-[100vh] bg-black pt-[70px] px-7 box-border">

        <div className="flex flex-col gap-5  border-b-[2px] border-[#282828] pb-5">

            <button onClick={()=>navigator('/')}  className="home_btn1 flex items-center gap-5">
              <img src="./Home_Fill_S.svg" alt="" />
              <span>Home</span>
            </button>

            <button className="home_btn1 flex items-center gap-5 opacity-70">
              <img src="./Search_S.svg" alt="" />
              <span>Search</span>
            </button>

            <button className="home_btn1 flex items-center gap-5 opacity-70">
              <img src="./Library_S.svg" alt="" />
              <span>Your Library</span>
            </button>

            <button className="home_btn1 flex items-center gap-5 opacity-70">
              <img src="./+Library_S.svg" alt="" />
              <span>Create Playlist</span>
            </button>

            <button className="home_btn1 flex items-center gap-5" onClick={()=>navigator('/like')}>
              <img src="./Liked Songs_S.svg" alt="" />
              <span>Liked Songs</span>
            </button>

        </div>


        <div className="flex flex-col mt-[22px] gap-[18px]">
          <p className="home_l_p">Chill Mix</p>
          <p className="home_l_p">Insta Hits</p>
          <p className="home_l_p">Your Top Songs 2021</p>
          <p className="home_l_p">Mellow Songs</p>
          <p className="home_l_p">Anime Lofi & Chillhop Music</p>
          <p className="home_l_p">BG Afro “Select” Vibes</p>
          <p className="home_l_p">Afro “Select” Vibes</p>
          <p className="home_l_p">Happy Hits!</p>
          <p className="home_l_p">Deep Focus</p>
          <p className="home_l_p">Instrumental Study</p>
          <p className="home_l_p">OST Compilations</p>
          <p className="home_l_p">Nostalgia for old souled mill...</p>
          <p className="home_l_p">Mixed Feelings</p>





        </div>

    </div>
  )
}

export default Homeleft
