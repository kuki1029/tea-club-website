const socialLinks = [
  {
    src: 'https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg',
    alt: 'Instagram',
    link: 'https://www.instagram.com/uwteaclub/',
  },
  {
    src: 'https://www.svgrepo.com/show/353655/discord-icon.svg',
    alt: 'Discord',
    link: 'https://discord.gg/h3kdHw2',
  },
];

const footerLinks = [
  {
    name: 'Membership',
    link: 'https://wusa.ca/product/uw-tea-and-culture-club/',
  },
  {
    name: 'WUSA Page',
    link: 'https://clubs.wusa.ca/club_listing/188',
  },
  {
    name: 'More',
    link: 'https://linktr.ee/uwteaclub',
  },
];

export const Footer = () => {
  return (
    <footer className="bg-inherit font-sans sm:px-8">
      <div className="container mx-auto px-6 py-12">
        <div className="gap-6sm:gap-y-10 grid grid-cols-2">
          <div className="">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
              Thanks for visiting!
            </h1>
          </div>

          <div className="justify-self-end">
            <p className="font-semibold text-gray-800 dark:text-white">
              Quick Link
            </p>
            <div className="mt-5 flex flex-col items-start space-y-2">
              {footerLinks.map((item) => (
                <a
                  key={item.name}
                  className="text-gray-600 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-6 h-2 border-gray-200 md:my-8 dark:border-gray-700" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
            UW Tea and Culture Club
          </h1>

          <div className="mt-6 flex gap-4 hover:cursor-pointer sm:mt-0">
            {socialLinks.map(({ src, alt, link }) => (
              <a href={link} target="_blank" rel="noopener noreferrer nofollow">
                <img key={alt} src={src} width="30" height="30" alt={alt} />
              </a>
            ))}
          </div>
        </div>

        <p className="p-8 text-start font-sans text-sm text-white/30 md:p-4 md:text-center">
          © UW Tea and Culture Club
        </p>
      </div>
    </footer>
  );
};
