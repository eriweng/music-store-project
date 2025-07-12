import { CirclePlay } from "lucide-react";

export default function Playlist(album) {
  // 有包一層，就拿出來
  const realAlbum = album.album ?? album;
  const songs = realAlbum?.songs || [];

  console.log(songs);

  return (
    <div className="flex flex-col text-white">
      <hr className="border-t-normal" />
      {songs.length === 0 ? (
        <p>NO songs found.</p>
      ) : (
        songs.map((song, i) => (
          <div
            key={song.id}
            className="single-track flex py-5 font-light items-center justify-between"
          >
            <div className="flex gap-3">
              <a href="#album">
                <span>{song.title}</span>
              </a>
              <span>-</span>
              <a href="#artist">
                <span>{realAlbum.artist}</span>
              </a>
            </div>
            {/* <span className="inline-block ml-auto mr-5">3:33</span> */}
            <button>
              <CirclePlay className="ml-auto size-[30px]" />
            </button>
          </div>
        ))
      )}
    </div>
  );
}
