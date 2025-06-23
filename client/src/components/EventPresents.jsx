export default function EventPresents() {
  return (
    <div className="my-5 text-white w-full lg:self-center">
      <div id="eventBoardTitle">
        <h1 className="text-8xl font-black">RANVIN</h1>
        <h2 className="text-6xl font-medium">Presents</h2>
      </div>
      <video
        className="w-full h-auto my-5"
        src="./assets/sample.mp4"
        autoPlay
        loop
        muted
        controls={false}
      >
        <source src="./assets/sample.mp4" type="video/mp4" />
        您的瀏覽器不支援 video 標籤。
      </video>

      <div id="eventBoardInfo">
        <p className="break-normal">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose.
        </p>
      </div>
    </div>
  );
}
