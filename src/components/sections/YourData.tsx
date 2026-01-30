import Button from '../ui/Button';

export default function YourData() {
  return (
    <section className="bg-white py-20 lg:py-36">
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight tracking-tight">
              100%{' '}
              <span className="relative inline-block">
                your data
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 250 12" fill="none">
                  <path d="M2 10C40 2 120 2 248 10" stroke="#FFE492" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="mt-6 text-lg text-text-dark/80 max-w-lg">
              The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
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

          {/* Image */}
          <div className="flex-1 w-full max-w-2xl">
            <img
              src="./assets/images/your-data.png"
              alt="Your Data Illustration"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
