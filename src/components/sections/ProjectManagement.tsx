import Button from '../ui/Button';

export default function ProjectManagement() {
  return (
    <section className="py-20 lg:py-36 bg-white">
      <div className="section-padding">
        {/* First Row - Project Management */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20 lg:mb-28">
          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight tracking-tight">
              Project{' '}
              <span className="relative inline-block">
                Management
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 2 150 2 298 10" stroke="#FFE492" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="mt-6 text-lg text-text-dark/80 max-w-lg">
              Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="md">
                Get Started
                <svg className="ml-2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                  <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 order-1 lg:order-2 w-full max-w-2xl">
            <div className="bg-primary-100 rounded-lg p-4 lg:p-6">
              <img
                src="./assets/images/project-management.png"
                alt="Project Management Interface"
                className="w-full h-auto rounded"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Second Row - Work Together */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Image */}
          <div className="flex-1 w-full max-w-2xl">
            <img
              src="./assets/images/work-together.png"
              alt="Work Together Illustration"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight tracking-tight">
              Work{' '}
              <span className="relative inline-block">
                together
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 250 12" fill="none">
                  <path d="M2 10C40 2 120 2 248 10" stroke="#FFE492" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="mt-6 text-lg text-text-dark/80 max-w-lg">
              With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="md">
                Try it now
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
