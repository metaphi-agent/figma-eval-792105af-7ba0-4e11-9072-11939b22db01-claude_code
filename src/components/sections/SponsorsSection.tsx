export default function SponsorsSection() {
  const sponsors = [
    { name: 'Apple', logo: './assets/sponsors/apple.svg' },
    { name: 'Microsoft', logo: './assets/sponsors/microsoft.svg' },
    { name: 'Slack', logo: './assets/sponsors/slack.svg' },
    { name: 'Google', logo: './assets/sponsors/google.svg' },
  ];

  return (
    <section className="bg-white py-[140px] px-[220px]">
      <div className="max-w-[1480px] mx-auto space-y-[100px]">
        <h2 className="text-[72px] font-bold leading-[1.2] text-[#212529] text-center">
          Our sponsors
        </h2>
        <div className="flex items-center justify-between">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="flex items-center justify-center">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-[68px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
