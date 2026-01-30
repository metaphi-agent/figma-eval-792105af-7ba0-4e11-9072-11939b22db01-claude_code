import Button from '../ui/Button';

export default function Apps() {
  return (
    <section className="bg-primary-900 py-20 lg:py-36 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-dashed border-primary-500 rounded-full" />
        <div className="absolute top-40 left-20 w-64 h-64 border-2 border-dashed border-primary-500 rounded-full" />
        <div className="absolute top-40 left-40 w-64 h-64 border-2 border-dashed border-primary-500 rounded-full" />
      </div>

      <div className="section-padding relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* App Icons Illustration */}
          <div className="flex-1 w-full max-w-xl">
            <img
              src="./assets/images/apps-circle.png"
              alt="Apps Integration"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Work with Your{' '}
              <span className="relative inline-block">
                Favorite
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 230 12" fill="none">
                  <path d="M2 10C35 2 110 2 228 10" stroke="#FFE492" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>{' '}
              Apps Using whitepace
            </h2>
            <p className="mt-6 text-lg text-white/90 max-w-lg">
              Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="md">
                Read more
                <svg className="ml-2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                  <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
