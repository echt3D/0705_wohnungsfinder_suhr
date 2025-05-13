const Video = () => {
  return (
    <section className="bg-primary bg-opacity-80 flex justify-center items-center w-screen h-screen">
      <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop mx-auto h-full flex justify-center items-center">
        <video
          width="1200"
          height="675"
          autoPlay
          muted
          controls
          controlsList="nofullscreen nodownload"
        >
          <source src="/video/Baarermatte_07.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Video;
