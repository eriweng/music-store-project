import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CirclePlay } from "lucide-react";
import Playlist from "../components/Playlist";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function AlbumPage() {
  const { id } = useParams();
  console.log("useParams id:", id);

  const [album, setAlbum] = useState(null);
  const options = [
    { id: "vinyl", label: "Vinyl", price: "$11.99" },
    { id: "wav", label: "WAV", price: "$3.99" },
    { id: "mp3", label: "MP3", price: "$3.99" },
  ];

  useEffect(() => {
    if (!id) {
      console.warn("⛔ 沒有拿到 id，跳出 early return");
      return}

    fetch(`http://localhost:5000/api/albums/${id}`)
      .then((res) => {
        console.log("album API status:", res.status);
        if (!res) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("albums data", data);
        setAlbum(data);
      })
      .catch((err) => console.error("Failed to fetch album", err));
  }, [id]);

  if (!album) return <div className="text-white">Loading...</div>;
  console.log(album.mode);
  // useEffect(() => {
  //   if (album) {
  //     console.log("album.images", album.images);
  //   }
  // }, [album]);

  // console.log(album);
  // console.log(album.images);

  return (
    <>
      <div className="album-page container">
        <Header />
        <div className="album-section sm-container-space lg:lg-container-space text-white">
          {/* album's pic collection */}
          <div className="rwd-layout md:flex gap-10">
            <div className="for-rwd">
              <section className="one flex flex-col mb-5">
                <div className="image-big min-w-min-[200px] w-full h-full overflow-hidden mb-5">
                  <img
                    src={album.coverImage}
                    className="aspect-square object-cover"
                    alt=""
                  />
                </div>
                <div className="images-small grid grid-flow-row grid-cols-4 gap-2">
                  {Array.isArray(album.images) &&
                    album.images.map((img, i) => (
                      <div
                        key={i}
                        className="min-w-min-[95px] overflow-hidden group"
                      >
                        <img
                          className="aspect-square object-cover"
                          src={img}
                          alt={`img-${i}`}
                        />
                      </div>
                    ))}
                </div>
              </section>
            </div>
            <div className="for-rwd md:flex md:flex-col gap-10">
              {/* album's info + options + tracks */}
              <section className="two">
                {/* info */}
                <div className="album-info">
                  <div className="flex w-full justify-between">
                    <div className="for-label-artist">
                      <h1 className="text-2xl font-bold">{album.title}</h1>
                      <p>{album.artist}</p>
                    </div>
                    <button>
                      <CirclePlay className="mt-auto size-[30px]" />
                    </button>
                  </div>
                  <hr className="my-2 border-t-normal" />
                  <p className="mt-2">
                    {album.releaseDate}&nbsp;|&nbsp;RANVINCD00{album.id}
                  </p>
                </div>
                {/* options */}
                <div className="album-type flex flex-col mb-5">
                  <fieldset className="my-5">
                    <legend className="sr-only">Types</legend>
                    <div className="space-y-3">
                      {options.map((opt) => (
                        <div key={opt.id}>
                          <label
                            htmlFor={`audio-${opt.id}`}
                            className={`
                  flex w-full h-[8vh] px-5 mb-4 items-center justify-between 
                  cursor-pointer text-white 
                  bg-zinc-900 transition-all
                  hover:bg-white/5
                `}
                          >
                            <input
                              type="radio"
                              id={`audio-${opt.id}`}
                              name="audio"
                              value={opt.id}
                              className="peer hidden"
                            />
                            {/* radio indicator 指示 */}
                            <span
                              className={`
                  w-4 h-4 rounded-full border-2
                  borer-white
                  peer-checked:bg-white
                  transition-all mr-3
                `}
                            ></span>

                            {/* label + price */}
                            <div className="flex justify-between w-full text-md font-medium peer-checked:font-semibold">
                              <span>{opt.label}</span>
                              <span>{opt.price}</span>
                            </div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                  <button
                    id="add-to-cart"
                    className="ml-auto mt-[-20px] p-3 text-sm text-nowrap border-white border-normal transition-all hover:bg-white hover:text-black active:font-black"
                  >
                    ADD TO CART
                  </button>
                </div>
              </section>
              {/* tracks */}
              <section className="three mb-10">
                <Playlist album={album} />
              </section>
              {/* album's story */}
              <section className="four text-white mb-10">
                <p className="break-normal">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose.
                </p>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
