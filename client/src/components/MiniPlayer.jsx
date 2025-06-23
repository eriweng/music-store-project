import { Pause, Play, X, Volume2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function MiniPlayer({
  track,
  onTogglePlay,
  isPlaying,
  onClose,
}) {
  if (!track) return null; //沒有歌曲時不顯示

  const [timeProgress, setTimeProgress] = useState(0); //目前播放秒數 time point
  const [duration, setDuration] = useState(0); //音訊長度（秒）
  const [volume, setVolume] = useState(1); // 音量控制
  const audioRef = useRef();
  //取得 <audio> 元素 ＝> { current: HTMLAudioElement 或 null}

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    console.log("載入音檔:", track.audioPreview);
    console.log("目前播放狀態:", isPlaying);

    const updateProgress = () => {
      setTimeProgress(audio.currentTime);
    }; //取得每次播放時間點

    const updateDuration = () => setDuration(audio.duration); //更新音訊長度
    console.log("音訊長度:", audio.duration);

    const handleAudioError = () => {
      console.error("音訊載入失敗，可能路徑錯誤或檔案不存在:", audio.src);
    };

    audio.addEventListener("timeupdate", updateProgress); //每次時間點更新，state changes
    audio.addEventListener("loadedmetadata", updateDuration); //每次進度條更新，state changes
    audio.addEventListener("error", handleAudioError);

    // 播放/暫停邏輯
    if (isPlaying) {
      if (audio.readyState >= 3) {
        audio.play().catch((err) => {
          console.error("播放失敗:", err);
        });
      } else {
        const onCanPlay = () => {
          audio.play().catch((err) => {
            console.error("播放失敗（等待 canplaythrough 後）:", err);
          });
          audio.removeEventListener("canplaythrough", onCanPlay);
        };
        audio.addEventListener("canplaythrough", onCanPlay);
      }
    } else {
      audio.pause();
    }

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("error", handleAudioError);
      //結束，清理監聽器
    };
  }, [track, isPlaying]); //[track, isPlaying] 每當變換曲目 或是 播放時

  // 這個功能可以讓使用者拖曳時間軸
  const handleProgressChange = (e) => {
    const newTime = Number(e.target.value);
    audioRef.current.currentTime = newTime;
    setTimeProgress(newTime);
  };

  // 處理音量變更
  const handleVolumeChange = (e) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    console.log(newVolume);
  };

  // 切換音量控制顯示
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const toggleVolumeControl = () => {
    setShowVolumeControl(!showVolumeControl);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60) || 0;
    const s = Math.floor(seconds % 60) || 0;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <div className="fixed bottom-0 right-0 w-full sm:w-auto bg-zinc-900 text-white px-3 py-2 flex items-center justify-between shadow-lg">
        {/* 專輯封面+資訊 */}
        <div className="w-[90px] mx-auto sm:mr-5">
          {track.coverImage && (
            <img
              key={track.id}
              src={track.coverImage}
              alt={track.title}
              className="w-fill object-cover aspect-square rounded-md"
            />
            
          )}
        </div>
        <div className="flex flex-col mx-auto">
          <div className="flex flex-col items-center pt-1 ">
            <span className="inline-block text-sm font-semibold truncate">
              {track.title}
            </span>
            <span className="inline-block text-sm text-zinc-400 truncate">
              {track.artist}
            </span>
          </div>

          <audio ref={audioRef} src={track.audioPreview} />

          {/* 播放進度 */}
          <div className="flex gap-5 items-center p-2 ">
            <span className="text-xs w-10 text-right">
              {formatTime(timeProgress)}
            </span>
            <input
              type="range"
              min="0"
              max={duration}
              value={timeProgress}
              onChange={handleProgressChange}
              className="w-full h-1 rounded-lg bg-gray-600 accent-white"
            />
            <span className="text-xs w-10">{formatTime(duration)}</span>
          </div>

          {/* 播放 音量 關閉 按鈕 */}
          <div className="flex ml-6 justify-center ">
            <button className="w-10 align-middle" onClick={toggleVolumeControl}>
              <Volume2 className="size-[18]" />
            </button>
            <button className="w-10 align-middle" onClick={onTogglePlay}>
              {isPlaying ? (
                <Pause className="size-[18]" />
              ) : (
                <Play className="size-[18]" />
              )}
            </button>
            <div className="relative">
              {showVolumeControl && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-zinc-800 p-2 rounded-md ">
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleVolumeChange}
                    className="h-1 bg-gray-600 accent-white"
                  />
                </div>
              )}
            </div>
            <button className="w-10" onClick={onClose}>
              <X className="size-[18]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
