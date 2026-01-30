import Button from '../ui/Button';

export default function AppsSection() {
  return (
    <section className="bg-[#043873] text-white py-[140px] px-[220px] relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg className="absolute right-0 top-0" width="2041" height="700" viewBox="0 0 2041 700" fill="none">
          <path d="M0 350C170.083 350 170.083 0 340.167 0C510.25 0 510.25 700 680.333 700C850.417 700 850.417 350 1020.5 350C1190.58 350 1190.58 700 1360.67 700C1530.75 700 1530.75 0 1700.83 0C1870.92 0 1870.92 350 2041 350" stroke="white" strokeOpacity="0.3" strokeWidth="2"/>
        </svg>
      </div>

      <div className="max-w-[1480px] mx-auto flex items-center gap-[100px]">
        {/* Apps illustration placeholder */}
        <div className="flex-shrink-0 w-[582px] h-[471px] relative">
          <div className="w-full h-full flex items-center justify-center">
            {/* App icons grid */}
            <div className="grid grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div
                  key={i}
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <div className="w-12 h-12 bg-white/30 rounded-xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-[60px]">
          <div className="space-y-6">
            <h2 className="text-[72px] font-bold leading-[1.2]">
              Work with Your
              <br />
              Favorite Apps Using
              <br />
              whitepace
            </h2>
            <p className="text-lg opacity-90">
              Whitepace teams up with your favorite software. Integrate with over 1000+ apps
              with Zapier to have all the tools you need for your project success.
            </p>
          </div>
          <Button variant="primary" size="md" showArrow>
            Read more
          </Button>
        </div>
      </div>
    </section>
  );
}
