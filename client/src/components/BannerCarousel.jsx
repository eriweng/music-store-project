import { initCarousels } from "flowbite";
import { useEffect } from "react";
const x = [11, 22, 33];

export default function BannerCarousel() {
  useEffect(() => {
    initCarousels();
  }, []);

  return (
    <>
      {/* carousel-inner */}
      <div
        id="carouselTarget"
        className="relative overflow-hidden w-full h-[310px] sm:h-[440px] md:h-[580px] xl:h-[640px]"
        // 圖片播放的效果
        data-carousel="slide"
        // 圖片轉播的速度
        data-carousel-interval="5000"
      >
        {/* carousel-items */}
        {/* <!-- Item 1 --> */}
        <div
          className="active w-full overflow-hidden duration-700 ease-linear"
          data-carousel-item
        >
          <img
            key="1"
            src="./assets/images/banners/banner-1.jpg"
            className="absolute block w-full h-[310px] sm:h-[440px] md:h-[580px] xl:h-[640px] object-cover "
            alt="banner-1"
          />
        </div>
        {/* <!-- Item 2 --> */}
        <div
          className="hidden w-full overflow-hidden duration-700 ease-linear"
          data-carousel-item
        >
          <img
            key="2"
            src="./assets/images/banners/banner-2.jpg"
            className="absolute block w-full h-[310px] sm:h-[440px] md:h-[580px] xl:h-[640px] object-cover"
            alt="banner-2"
          />
        </div>
        {/* <!-- Item 3 --> */}
        <div
          className="hidden w-full overflow-hidden duration-700 ease-linear"
          data-carousel-item
        >
          <img
            key="3"
            src="./assets/images/banners/banner-3.jpg"
            className="absolute block w-full h-[310px] sm:h-[440px] md:h-[580px] xl:h-[640px] object-cover"
            alt="banner-3"
          />
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50  group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
        {/* <!-- Slider indicators --> */}
        <div className="absolute z-30 hidden rounded-[1vw] bg-white/50 p-1 px-4 bottom-5 -translate-x-1/2 left-1/2 space-x-3 rtl:space-x-reverse xl:flex">
          {x.map((item) => {
            // console.log(item)
            return (
              <button
                key={item}
                type="button"
                className="w-2 h-2 rounded-full hover:bg-white/100"
                // aria-current 告知目前顯示的幻燈片
                aria-current={item === 0 ? "true" : "false"}
                // aria-label 提供語音輔助的描述
                aria-label={`Slide ${item + 11}`}
                // data-carousel-slide-to 標記幻燈片索引，方便控制輪播
                data-carousel-slide-to={item}
              ></button>
            );
          })}
        </div>
      </div>
    </>
  );
}
