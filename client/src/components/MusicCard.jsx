// import CirclePlayEffect from "./CirclePlayEffect";
import { CirclePlay } from "lucide-react";
import { Link } from "react-router-dom";

export default function MusicCard({
  state,
  mode,
  id,
  coverImage,
  title,
  artist,
  songs,
  onPlay,
  isPlaying,
}) {
  return (
    <div className="card sm:w-max-20 md:w-max-75 overflow-hidden group">
      {/* out now and single */}
      <div className="flex justify-between text-white text-[1rem]">
        <span className="state">{state}</span>
        <span className="mode">{mode}</span>
      </div>
      {/* album cover */}
      <Link to={`/album/${id}`}>
        <div className="albumCover sm:w-max-20 md:w-max-75 border-[1px] border-white">
          <img
            className="aspect-square w-full object-cover  hover:blur-sm"
            src={coverImage}
            alt={title}
          />
        </div>
      </Link>
      {/* title and play btn */}
      <div className="flex flex-col py-1">
        <div className="flex justify-between text-white ">
          <span className="font-medium text-[18px] truncate">{title}</span>
          <button
            onClick={() =>
              onPlay({
                id,
                coverImage,
                title,
                artist,
                audioPreview: songs[0].audioPreview,
                isPlaying,
              })
            }
          >
            <CirclePlay />
          </button>
        </div>

        {/* artist */}
        <span className="artist text-white font-light text-[15px] truncate">{artist}</span>
      </div>
    </div>
  );
}
