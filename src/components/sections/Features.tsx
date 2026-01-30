import Button from '../ui/Button';

export default function Features() {
  return (
    <>
      {/* Use an Extension Section */}
      <section className="bg-primary-900 py-20 lg:py-36">
        <div className="section-padding">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Use an{' '}
                <span className="relative inline-block">
                  Extension
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 280 12" fill="none">
                    <path d="M2 10C45 2 140 2 278 10" stroke="#FFE492" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
              <p className="mt-6 text-lg text-white/90 max-w-lg">
                Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
              </p>
              <div className="mt-8">
                <Button variant="primary" size="md">
                  Let's Go
                  <svg className="ml-2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                    <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </div>
            </div>

            {/* Illustration */}
            <div className="flex-1 w-full max-w-xl">
              <img
                src="./assets/images/customise-illustration.png"
                alt="Extension Illustration"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customise it to your needs Section */}
      <section className="bg-white py-20 lg:py-36">
        <div className="section-padding">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Image */}
            <div className="flex-1 w-full max-w-2xl">
              <div className="bg-primary-100 rounded-lg p-4 lg:p-6">
                <img
                  src="./assets/images/extension-ui.png"
                  alt="Customise Interface"
                  className="w-full h-auto rounded"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight tracking-tight">
                Customise it to{' '}
                <span className="relative inline-block">
                  your needs
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 280 12" fill="none">
                    <path d="M2 10C45 2 140 2 278 10" stroke="#FFE492" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
              <p className="mt-6 text-lg text-text-dark/80 max-w-lg">
                Customize the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
              </p>
              <div className="mt-8">
                <Button variant="primary" size="md">
                  Let's Go
                  <svg className="ml-2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                    <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
