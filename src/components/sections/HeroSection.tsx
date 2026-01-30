import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="bg-[#043873] text-white py-[140px] px-[220px] relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg className="absolute left-0 top-0" width="2652" height="547" viewBox="0 0 2652 547" fill="none">
          {/* Decorative curved lines */}
          <path d="M0 273C221.5 273 221.5 0 443 0C664.5 0 664.5 547 886 547C1107.5 547 1107.5 273 1329 273C1550.5 273 1550.5 547 1772 547C1993.5 547 1993.5 0 2215 0C2436.5 0 2436.5 273 2652 273" stroke="white" strokeOpacity="0.3" strokeWidth="2"/>
        </svg>
      </div>

      <div className="max-w-[1480px] mx-auto flex items-center gap-[60px]">
        {/* Text Content */}
        <div className="flex-1 space-y-[60px]">
          <div className="space-y-6">
            <h1 className="text-[64px] font-bold leading-[1.2]">
              Get More Done with whitepace
            </h1>
            <p className="text-lg leading-[1.5] opacity-90">
              Project management software that enables your teams to collaborate, plan,
              analyze and manage everyday tasks
            </p>
          </div>
          <Button variant="primary" size="lg" showArrow>
            Try Whitepace free
          </Button>
        </div>

        {/* Image Container */}
        <div className="flex-shrink-0 w-[824px] h-[549px] bg-[#C4DEFD] rounded-lg"></div>
      </div>
    </section>
  );
}
