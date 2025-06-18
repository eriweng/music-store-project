import { useEffect, useState } from "react";
import { Link, useActionData } from "react-router-dom";
import Header from "../components/layout/Header";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";
import MusicCard from "../components/MusicCard";
import MiniPlayer from "../components/MiniPlayer";
import EventCard from "../components/EventCard";

export default function Home() {
  // 所需資料都放這：
  const [albums, setAlbums] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const [events, setEvents] = useState([]);

  // 作業區：連接 API 資料
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

    // 載入 events.json
    fetch("http://localhost:5000/api/events")
      .then((res) => {
        console.log("events API status:", res.status);
        if (!res.ok) throw new Error("events API res failed");
        // console.log(res.json())
        return res.json();
      })

      .then((data) => {
        console.log("events API data:", data);
        if (Array.isArray(data)) {
          setEvents(data);
        } else {
          console.error("events API data is not Array");
        }
      })
      .catch((err) => {
        console.error("events API req failed");
      });
  }, []);

  // 控制迷你播放器的曲目：抽換曲目/ 觸發需要轉為 true 的項目
  const handlePlay = (track) => {
    if (currentTrack && currentTrack.id === track.id) {
      setIsPlaying(true);
      setIsPlayerVisible(true);
      return;
    }
    console.log(track);
    setCurrentTrack(track);
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
        isPlaying={isPlaying}
      />
    );
  });

  const eventCardElement = events.map((event) => {
    // console.log(event.image)
    return <EventCard key={event.id} event={event} />;
  });

  return (
    <>
      <div className="home container min-w-[375px] min-h-screen bg-black">
        <Header />
        {/* main */}
        <Main />
        {/* music block */}
        <div className="container">
          <h2 className="text-white">MUSIC</h2>
          <hr className="border-normal" />
          <div className="music my-12 grid grid-cols-2 gap-x-2 gap-y-10 items-center md:grid-cols-3 xl:grid-cols-4">
            {musicCardElement}
          </div>
        </div>

        {/* music block end here*/}
        {/* events block */}
        <div className="event container">
          <h2 className="text-white">EVENTS</h2>
          <hr className="border-normal" />
          <div className="my-12">{eventCardElement}</div>
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
