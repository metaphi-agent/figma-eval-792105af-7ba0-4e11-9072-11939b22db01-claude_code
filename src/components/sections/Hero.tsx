import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="bg-primary-900 py-20 lg:py-36 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-3 h-3 rounded-full bg-accent-yellow" />
        <div className="absolute top-32 left-1/4 w-4 h-4 rounded-full bg-primary-500" />
        <div className="absolute top-20 right-1/3 w-2 h-2 rounded-full bg-accent-yellow" />
        <div className="absolute bottom-20 left-1/3 w-3 h-3 rounded-full bg-primary-500" />
      </div>

      <div className="section-padding relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Get More Done with whitepace
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-lg mx-auto lg:mx-0">
              Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
            </p>
            <div className="mt-10 lg:mt-15">
              <Button variant="primary" size="lg">
                Try Whitepace free
                <svg className="ml-2.5 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                  <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="bg-primary-100 rounded-lg p-4 lg:p-6">
              <img
                src="./assets/images/hero-dashboard.png"
                alt="Whitepace Dashboard"
                className="w-full h-auto rounded"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
