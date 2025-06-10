import teaClub from '../assets/images/teaClub.png';
import { FloatingNavbar } from './FloatingNavbar';
import { HomeText } from './HomeText';

export const Mainpage = () => {
  return (
    <div className="h-[300vh] bg-black">
      <FloatingNavbar />
      <HomeText />
      <div className="flex h-screen w-screen items-center justify-center">
        <img
          src={teaClub}
          alt="Tea Club sticker image"
          className="h-32 w-32 -rotate-[30deg] transform object-contain drop-shadow-[0px_0px_60px_rgba(255,0,0,1)] drop-shadow-[0px_0px_60px_rgba(255,255,255,1)]"
        />
      </div>
    </div>
  );
};
