import chat from '../assets/images/chat.jpeg';
import zaki from '../assets/images/zaki.jpg';
import mat from '../assets/images/mat.jpg';
import gong from '../assets/images/gong.jpeg';
import akshay from '../assets/images/akshay.jpg';
import kun from '../assets/images/kun.jpg';

const people = [
  {
    name: 'Kunal',
    role: 'Prez',
    imageUrl: kun,
  },
  {
    name: 'Akshay',
    role: 'Treasurer',
    imageUrl: akshay,
  },
  {
    name: 'Gong',
    role: 'Secretary',
    imageUrl: gong,
  },
  {
    name: 'Chat',
    role: 'Vice Prez.',
    imageUrl: chat,
  },
  {
    name: 'Matilda',
    role: 'Chief Designer',
    imageUrl: mat,
  },
  {
    name: 'Zaki',
    role: 'Chief Tea Officer',
    imageUrl: zaki,
  },
];

export const Execs = () => {
  return (
    <div className="bg-inherit py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Meet the execs
          </h2>
          <p className="mt-6 text-lg/8 text-white/50">
            We all love drinking tea and helping share that joy with others in
            the community! We are also always looking for new execs to help out
            with running The Tea Club.
          </p>
        </div>
        <ul
          role="list"
          className="col-span-2 grid gap-x-8  gap-y-12 sm:grid-cols-2 sm:gap-y-16"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6 px-8">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="aspect-auto size-16 rounded-full"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-orange-400">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
