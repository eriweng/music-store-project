import { CirclePlay } from "lucide-react";

export default function MusicCard({
  state,
  mode,
  id,
  coverImage,
  title,
  artist,
  songs,
  onPlay,
}) {
  return (
    <div className="card sm:w-max-20 md:w-max-75 overflow-hidden group">
      {/* out now and single */}
      <div className="flex justify-between text-white text-[1rem]">
        <span className="state">{state}</span>
        <span className="mode">{mode}</span>
      </div>
      {/* album cover */}
      <div className="albumCover sm:w-max-20 md:w-max-75 border-[1px] border-white">
        <img
          className="aspect-square w-full object-cover  hover:blur-sm"
          src={coverImage}
          alt={title}
        />
      </div>
      {/* title and play btn */}
      <div className="flex justify-between py-1 text-white">
        <span className="font-semibold text-[14px] truncate">{title}</span>
        <button
          onClick={() =>
            onPlay({
              id,
              coverImage,
              title,
              artist,
              audioPreview: songs[0].audioPreview,
            })
          }
        >
          <CirclePlay size={30} strokeWidth={1} />
        </button>
      </div>
      {/* artist */}
      <span className="artist text-white text-[12px] truncate">{artist}</span>
    </div>
  );
}
