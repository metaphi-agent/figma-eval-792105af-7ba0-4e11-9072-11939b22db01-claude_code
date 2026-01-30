import Button from '../ui/Button';

export default function FreeTrial() {
  return (
    <section className="bg-primary-900 py-20 lg:py-36">
      <div className="section-padding">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Try Whitepace today
          </h2>
          <p className="mt-6 text-xl text-white/90">
            Get started for free.
            <br />
            Add your whole team as your needs grow.
          </p>

          <div className="mt-10">
            <Button variant="primary" size="lg">
              Try Taskey free
              <svg className="ml-2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>

          <p className="mt-6 text-lg text-white/80">
            On a big team?{' '}
            <a href="#" className="text-primary-500 hover:underline">
              Contact sales
            </a>
          </p>

          {/* App Store Icons */}
          <div className="mt-10 flex items-center justify-center gap-10">
            <a href="#" className="transition-opacity hover:opacity-80">
              <svg className="h-10 w-auto text-white" viewBox="0 0 120 40" fill="currentColor">
                <rect x="0" y="0" width="120" height="40" rx="6" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1"/>
                <text x="60" y="25" textAnchor="middle" fontSize="12" fill="currentColor">App Store</text>
              </svg>
            </a>
            <a href="#" className="transition-opacity hover:opacity-80">
              <svg className="h-10 w-auto text-white" viewBox="0 0 135 40" fill="currentColor">
                <rect x="0" y="0" width="135" height="40" rx="6" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1"/>
                <text x="67" y="25" textAnchor="middle" fontSize="12" fill="currentColor">Google Play</text>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
