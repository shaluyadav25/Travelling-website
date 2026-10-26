import video from "../../../assets/bg.mp4";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full min-h-screen object-cover"
      />
      <div className="absolute inset-0 z-10 flex flex-col mt-25 lg:mt-50 m-10 lg:ml-30">
        <h1 className="text-4xl md:text-7xl font-sans  text-white font-extrabold leading-tight">Travel <br /> <span className="text-orange-600">The World</span> </h1>
        <p className="text-gray-200 text-xl">Explore new destinations, create unforgettable memories and experience the <br /> beauty of the world with our specially curated travel packages.</p>
        <button className="bg-orange-600 text-white lg:text-xl text-center m-3 lg:w-70 h-13 rounded-2xl my-10">Explore Packages</button>
      </div>

    </div>
  );
};

export default HeroSection;