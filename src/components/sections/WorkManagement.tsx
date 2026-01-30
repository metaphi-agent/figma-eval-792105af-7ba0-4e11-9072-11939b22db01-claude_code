import Button from '../ui/Button';

export default function WorkManagement() {
  return (
    <section className="bg-white py-[140px] px-[220px]">
      <div className="max-w-[1480px] mx-auto space-y-[100px]">
        {/* Project Management */}
        <div className="flex items-center gap-[60px]">
          <div className="flex-1 space-y-[60px]">
            <div className="space-y-6">
              <h2 className="text-[72px] font-bold leading-[1.2] text-[#212529]">
                Project{' '}
                <span className="relative inline-block">
                  Management
                  <span className="absolute bottom-0 left-0 w-full h-4 bg-[#FFE492] -z-10"></span>
                </span>
              </h2>
              <p className="text-lg leading-[1.5] text-[#212529]">
                Images, videos, PDFs and audio files are supported. Create math expressions and
                diagrams directly from the app. Take photos with the mobile app and save them
                to a note.
              </p>
            </div>
            <Button variant="primary" size="md" showArrow>
              Get Started
            </Button>
          </div>
          <div className="flex-shrink-0 w-[748px] h-[547px] bg-[#C4DEFD] rounded-lg"></div>
        </div>

        {/* Work Together */}
        <div className="flex items-center gap-[100px]">
          {/* Circular illustration placeholder */}
          <div className="flex-shrink-0 w-[710px] h-[661px] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central logo */}
              <div className="absolute w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <img src="./assets/logo-icon.svg" alt="" className="w-8 h-8" />
              </div>
              {/* Orbiting dots */}
              <svg className="w-full h-full" viewBox="0 0 710 661">
                <circle cx="355" cy="330.5" r="200" stroke="#E5E5E5" strokeWidth="2" fill="none" strokeDasharray="8 8"/>
                <circle cx="355" cy="330.5" r="280" stroke="#E5E5E5" strokeWidth="2" fill="none" strokeDasharray="8 8"/>
                <circle cx="355" cy="130.5" r="30" fill="#FFD966"/>
                <circle cx="505" cy="200.5" r="35" fill="#4F9CF9"/>
                <circle cx="635" cy="380.5" r="40" fill="#22C55E"/>
                <circle cx="505" cy="560.5" r="35" fill="#F59E0B"/>
                <circle cx="205" cy="560.5" r="35" fill="#4F9CF9"/>
                <circle cx="75" cy="380.5" r="35" fill="#EF4444"/>
                <circle cx="205" cy="200.5" r="35" fill="#4F9CF9"/>
                <circle cx="385" cy="250.5" r="30" fill="#22C55E"/>
              </svg>
            </div>
          </div>

          <div className="flex-1 space-y-[60px]">
            <div className="space-y-6">
              <h2 className="text-[72px] font-bold leading-[1.2] text-[#212529]">
                Work together
              </h2>
              <p className="text-lg leading-[1.5] text-[#212529]">
                With whitepace, share your notes with your colleagues and collaborate on them.
                You can also publish a note to the internet and share the URL with others.
              </p>
            </div>
            <Button variant="primary" size="md" showArrow>
              Try it now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
