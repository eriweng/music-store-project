// import tools we need here...
import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import MusicCard from "../components/MusicCard";
import Footer from "../components/layout/Footer";
import MiniPlayer from "../components/MiniPlayer";

export default function Music() {
  const [albums, setAlbums] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerVisible, setIsPlayerVisible] = useState();

  useEffect(() => {
    // 載入 albums.json
    fetch("http://localhost:5000/api/albums")
      .then((res) => {
        console.log("albums API status:", res.status);
        if (!res.ok) throw new Error("albums API res failed");
        return res.json();
      })
      .then((data) => {
        console.log("albums API data:", data);
        if (Array.isArray(data)) {
          setAlbums(data);
        } else {
          console.error("albums data is not Array");
        }
      })
      .catch((err) => {
        console.error("albums API req failed");
      });
  }, []);
  // 控制迷你播放器的曲目：抽換曲目/ 觸發需要轉為 true 的項目
  const handlePlay = (track) => {
    if (currentTrack && currentTrack.id === track.id) {
      setIsPlaying(true);
      setIsPlayerVisible(true);
      return;
    }
    // console.log(track);
    setCurrentTrack(track);
    setIsPlaying(true);
    setIsPlayerVisible(true);
  };
  // 控制迷你播放器：播放鍵／暫停鍵
  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const musicCardElement = albums.map((album) => {
    return (
      <MusicCard
        key={album.id}
        {...album}
        onPlay={(track) => {
          handlePlay(track);
        }}
        isPlaying={isPlaying}
      />
    );
  });

  return (
    <>
      <div className=" music-page container">
        <Header />
        {/* music block */}
        <div className="music-section sm-container-space lg:lg-container-space">
          <h1 className="text-right text-white">MUSIC</h1>
          <hr className="border-normal" />
          <div className="music my-12 grid grid-cols-2 gap-x-2 gap-y-10 items-center md:grid-cols-3 xl:grid-cols-4">
            {musicCardElement}
          </div>
        </div>
        <Footer />
      </div>
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
