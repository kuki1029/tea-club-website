import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import aboutUsTea from '../assets/images/aboutUsTea.jpg';

const features = [
  {
    name: 'Unlimited Snacks and Tea',
    description:
      // eslint-disable-next-line quotes
      "For a one time membership fee, you get unlimited snacks and tea for the entire term. Eat as much or as little as you'd like!",
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Meet amazing people',
    description:
      'Make long lasting connections with people from various programs and backgrounds.',
    icon: LockClosedIcon,
  },
  {
    name: 'Prizes',
    description:
      'At the end of every term, we do a huge raffle with multiple prizes so everyone has a chance to win.',
    icon: ServerIcon,
  },
];

export const AboutUs = () => {
  return (
    <div className="overflow-hidden bg-inherit py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-full grid-cols-1 place-items-center gap-x-8 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none">
          {/* Text */}
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-gray-400">UW</h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Tea Club
              </p>
              <p className="mt-6 text-lg/8 text-white">
                One of the greatest and most active clubs in all of Waterloo!
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-sm text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-orange-500">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 size-5 text-orange-300"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          {/* Image */}
          <div className="flex place-items-center items-center">
            <img
              alt="Tea Club execs"
              src={aboutUsTea}
              className="aspect-square h-auto max-h-72 max-w-full items-center rounded-xl shadow-xl ring-1 ring-gray-400/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
