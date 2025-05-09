import { Pause, Play, X} from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function MiniPlayer({ track, onTogglePlay, isPlaying, onClose }) {
  if (!track) return null; //沒有歌曲時不顯示

  const [timeProgress, setTimeProgress] = useState(0); //目前播放秒數 time point
  const [duration, setDuration] = useState(0); //音訊長度（秒）
  const audioRef = useRef();
  //取得 <audio> 元素 ＝> { current: HTMLAudioElement 或 null}

  useEffect(() => {
    const audio = audioRef.current;
    // 得到 => HTMLAudioElement {
    // src: "http://example.com/audio.mp3",
    // currentTime: 0,
    // duration: 180,
    // paused: true,
    // volume: 1,
    // play: ƒ play(),
    // pause: ƒ pause(),}
    if (!audio) return;

    console.log("載入音檔:", track.audioPreview);
    console.log("目前播放狀態:", isPlaying);

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    const updateProgress = () => setTimeProgress(audio.currentTime); //取的每次播放時間點
    const updateDuration = () => setDuration(audio.duration); //更新音訊長度， state changes
    console.log("音訊長度:", audio.duration);

    audio.addEventListener("timeupdate", updateProgress); //每次時間點更新，state changes
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("error", () => {
      console.error("音訊載入失敗，可能路徑錯誤或檔案不存在:", audio.src);
    });

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateDuration);
      //結束，清理監聽器
    };
  }, [track, isPlaying]);

  const handleProgressChange = (e) => {
    const newTime = Number(e.target.value);
    audioRef.current.currentTime = newTime;
    setTimeProgress(newTime);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60) || 0
    const s = Math.floor(seconds % 60) || 0
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
  }

  return (
     <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 text-white px-4 py-2 flex items-center gap-4 shadow-lg">
      <img
        src={track.coverImage}
        alt={track.title}
        className="w-12 h-12 object-cover rounded"
      />
      <div className="flex-1">
        <div className="text-sm font-semibold truncate">{track.title}</div>
        <div className="text-sm text-zinc-400 truncate">{track.artist}</div>
      </div>

      <audio ref={audioRef} src={track.audioPreview} />
      <span className="text-xs w-10 text-right">{formatTime(timeProgress)}</span>
      <input
        type="range"
        min="0"
        max={duration}
        value={timeProgress}
        onChange={handleProgressChange}
        className="w-full h-1 rounded-lg appearance-none bg-gray-600 accent-white max-w-[500px]"
      />
       <span className="text-xs w-10">{formatTime(duration)}</span>
      <button onClick={onTogglePlay}>
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <button onClick={onClose}>
        <X />
      </button>
    </div>
  );
}
