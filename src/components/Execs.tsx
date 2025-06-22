import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';

const people = [
  {
    name: 'Alanna',
    role: 'Prez',
    imageUrl: img1,
  },
  {
    name: 'Alanna',
    role: 'Treasurer',
    imageUrl: img2,
  },
  {
    name: 'Alanna',
    role: 'Secretary',
    imageUrl: img3,
  },
  {
    name: 'Alanna',
    role: 'Designer',
    imageUrl: img4,
  },
];

export const Execs = () => {
  return (
    <div className="bg-inherit py-24 sm:py-32">
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
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="size-16 rounded-full"
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
