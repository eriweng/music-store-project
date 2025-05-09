import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MusicCard from "../components/musicCard";
import MiniPlayer from "../components/MiniPlayer";
import useSound from "use-sound";

export default function Home() {
  // 所需資料都放這：
  const [albums, setAlbums] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  // 作業區：連接 API 資料
  useEffect(() => {
    fetch("http://localhost:5000/api/albums")
      .then((res) => {
        console.log("API status:", res.status);
        if (!res.ok) throw new Error("API res failed");
        return res.json();
      })
      .then((data) => {
        console.log("API data:", data);
        if (Array.isArray(data)) {
          setAlbums(data);
        } else {
          console.error("API data is not Array");
        }
      })
      .catch((err) => {
        console.error("API req failed");
      });
  }, []);

  // 控制迷你播放器的曲目：抽換曲目/ 觸發需要轉為 true 的項目
  const handlePlay = (track) => {
    setCurrentTrack(track);
    console.log(track);
    setIsPlaying(true);
    setIsPlayerVisible(true);
  };
  // 控制迷你播放器：播放鍵／暫停鍵
  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
    
  };

  // 作業區：渲染專輯區塊
  const musicCardElement = albums.map((album) => {
    return (
      <MusicCard
        key={album.id}
        {...album}
        onPlay={(track) => {
          handlePlay(track);
        }}
      />
    );
  });

  return (
    <>
      <div className="home container min-h-screen bg-black">
        <Header />
        {/* main */}
        <main>
          <div className="main container h-[380px] bg-slate-300 my-8"></div>
        </main>
        {/* music block */}
        <div
          className="music container grid 
      grid-cols-2 gap-x-2 gap-y-5
      md:grid-cols-3
      xl:grid-cols-4"
        >
          {musicCardElement}
        </div>
        <div className="flex justify-center ">
          <Link to="/music">
            <button className="more-button text-white md:hidden">More</button>
          </Link>
        </div>
        {/* music block end here*/}
        {/* events block */}
        <div className="event">
          <div className="flex justify-center ">
            <Link to="/events">
              <button className="event-button text-white">Events</button>
            </Link>{" "}
          </div>
        </div>

        {/* subscribe form is here */}
        {/* footer is here */}
        <Footer />
      </div>
       {/* Mini player is here */}
      {isPlayerVisible && currentTrack && (
        <MiniPlayer
          track={currentTrack}
          isPlaying={isPlaying}
          onTogglePlay={togglePlay}
          onClose={() => setIsPlayerVisible(false)}
        />
      )}
    </>
  );
}
