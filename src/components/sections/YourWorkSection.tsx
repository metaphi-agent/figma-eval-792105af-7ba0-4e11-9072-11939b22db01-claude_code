import Button from '../ui/Button';

export default function YourWorkSection() {
  return (
    <section className="bg-[#043873] text-white py-[140px] px-[220px]">
      <div className="max-w-[1480px] mx-auto text-center space-y-[60px]">
        <div className="space-y-6">
          <h2 className="text-[72px] font-bold leading-[1.2]">
            Your work, everywhere you are
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Access your notes from your computer, phone or tablet by synchronising with various
            services, including whitepace, Dropbox and OneDrive. The app is available on
            Windows, macOS, Linux, Android and iOS. A terminal app is also available!
          </p>
        </div>
        <Button variant="primary" size="lg" showArrow>
          Try Taskey
        </Button>
      </div>
    </section>
  );
}
