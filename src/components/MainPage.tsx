import teaClub from '../assets/images/teaClub.png';
import { FloatingNavbar } from './FloatingNavbar';
import { HomeText } from './HomeText';
import Dither from './Dither';
import { Execs } from './Execs';
import { AboutUs } from './AboutUs';
import { Pricing } from './Pricing';
import { MarqueeImages } from './MarqueeImages';
import { Footer } from './Footer';

export const Mainpage = () => {
  return (
    <div className="h-[300vh] bg-black">
      <div className="absolute h-[110vh] w-full">
        <Dither
          waveColor={[5, 0.9, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={0.3}
          colorNum={6}
          waveAmplitude={0.3}
          waveFrequency={1}
          waveSpeed={0.05}
        />
        <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-black via-80% to-transparent" />
      </div>
      <FloatingNavbar />
      <HomeText />
      <div className="flex h-screen  items-center justify-center">
        <img
          src={teaClub}
          alt="Tea Club sticker image"
          className="relative h-32 w-32 -rotate-[30deg] transform object-contain drop-shadow-[0px_0px_60px_rgba(255,0,0,1)] drop-shadow-[0px_0px_60px_rgba(255,255,255,1)]"
        />
      </div>
      <AboutUs />
      <Pricing />
      <MarqueeImages />
      <Execs />
      <Footer />
    </div>
  );
};
