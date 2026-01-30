import Button from '../ui/Button';

export default function YourWork() {
  return (
    <section className="bg-primary-900 py-20 lg:py-36">
      <div className="section-padding">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Your work, everywhere you are
          </h2>
          <p className="mt-6 text-lg text-white/90 max-w-3xl mx-auto">
            Access your notes from your computer, phone or tablet by synchronizing with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
          </p>
          <div className="mt-10">
            <Button variant="primary" size="lg">
              Try Taskey
              <svg className="ml-2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
