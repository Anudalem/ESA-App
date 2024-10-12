import vedio from "../assets/hero.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen relative bg-blue flex items-center justify-center">
      <video
        src={vedio}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover absolute z-0"
      />
      <h1 className="text-blue text-5xl -mt-20 font-bold relative z-10 motion-preset-typewriter motion-duration-500">
        Empowering Students to Achieve More, Together.
      </h1>
    </div>
  );
};

export default Hero;
