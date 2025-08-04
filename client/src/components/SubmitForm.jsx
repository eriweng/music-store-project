
export default function SubmitForm() {
  return (

    <div className="w-full h-full relative border">
      <img
        className="scale-125 object-cover"
        src="assets/images/banners/banner-4.png"
        alt="background"
      />

      {/* Description */}
      <div className="w-1/2 left-0 top-[58px] absolute text-white text-xl font-semibold leading-snug [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">
        Join us for all the latest release, events and news from Ranvin.
      </div>

      {/* Icons */}
      {/* <div className="left-0 top-[158px] absolute inline-flex gap-4 my-4">
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={20} />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdFacebook size={20} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://open.spotify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify size={20} />
        </a>
      </div> */}

      {/* Submit Button */}
      <div className="w-9 h-5 left-[272px] top-[168px] cursor-pointer">
        <div className="w-9 h-3.5 left-0 top-[2.85px] bg-white rounded" />
        <div className="top-0 absolute justify-start text-black text-[6px] font-bold font-['Inter'] leading-tight">
          Submit
        </div>
      </div>

      {/* Form Fields */}
      <div className="w-32 left-[226px] top-[53px] absolute inline-flex flex-col justify-start items-start gap-0.5">
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="justify-start text-white text-[8px] font-medium font-['Inter'] leading-tight">
            Name
          </div>
          <input
            type="text"
            className="self-stretch h-3.5 bg-white border border-white text-xs px-1"
            style={{ fontSize: "8px" }}
            placeholder="Your name"
          />
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="justify-start text-white text-[8px] font-medium font-['Inter'] leading-tight">
            Email
          </div>
          <input
            type="email"
            className="self-stretch h-3.5 bg-white border border-white text-xs px-1"
            style={{ fontSize: "8px" }}
            placeholder="Your email"
          />
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="justify-start text-white text-[8px] font-medium font-['Inter'] leading-tight">
            Country
          </div>
          <input
            type="text"
            className="self-stretch h-3.5 bg-white border border-white text-xs px-1"
            style={{ fontSize: "8px" }}
            placeholder="Country"
          />
        </div>
      </div>
    </div>
  );
}
