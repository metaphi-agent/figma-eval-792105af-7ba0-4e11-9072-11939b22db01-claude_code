export default function Sponsors() {
  const sponsors = [
    { name: 'Apple', logo: './assets/images/apple.svg' },
    { name: 'Microsoft', logo: './assets/images/microsoft.svg' },
    { name: 'Slack', logo: './assets/images/slack.svg' },
    { name: 'Google', logo: './assets/images/google.svg' },
  ];

  return (
    <section className="bg-white py-20 lg:py-36">
      <div className="section-padding">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark tracking-tight">
            Our sponsors
          </h2>

          <div className="mt-16 lg:mt-24 flex flex-wrap items-center justify-center lg:justify-between gap-8 lg:gap-16">
            {sponsors.map((sponsor) => (
              <div key={sponsor.name} className="flex items-center justify-center">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-12 lg:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
