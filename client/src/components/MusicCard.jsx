import { CirclePlay } from "lucide-react"

export default function MusicCard ({state, mode, coverImage, title, artist, onPlay}) {

   
  return(
    <div className="card container group w-full max-w-[250px] transition-all">
      {/* out now and single */}
      <div className="flex justify-between text-white text-[13px]">
        <span className="state">{state}</span>
        <span className="mode">{mode}</span>
      </div>
      {/* album cover */}
      <div className="albumCover">
        <img className="aspect-square w-[250px] h-[250px] object-cover border-[1px] border-white hover:blur-sm" src={coverImage} alt={title} />
      </div>
      {/* title and play btn */}
      <div className="flex justify-between text-white">
        <span className="font-semibold text-[14px] truncate">{title}</span>
        <button onClick={() => onPlay({coverImage, title, artist })}><CirclePlay size={20} strokeWidth={2}/></button>
      </div>
      {/* artist */}
      <span className="artist text-white text-[12px] truncate">{artist}</span>
    </div>
  )
}