import teaClub from '../assets/images/teaClub.png';
import { FloatingNavbar } from './FloatingNavbar';
export const Mainpage = () => {
  return (
    <div className="bg-black">
      <FloatingNavbar />
      <div className="flex h-screen w-screen items-center justify-center">
        <img
          src={teaClub}
          alt="Tea Club sticker image"
          className=" h-32 w-32 -rotate-[30deg] transform object-contain"
        />
      </div>
    </div>
  );
};
