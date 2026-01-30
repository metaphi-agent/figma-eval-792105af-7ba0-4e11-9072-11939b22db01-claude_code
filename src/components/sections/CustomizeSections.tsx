import Button from '../ui/Button';

export default function CustomizeSections() {
  return (
    <>
      {/* Customization Section 1 - Blue Background */}
      <section className="bg-white py-[140px] px-[220px]">
        <div className="max-w-[1480px] mx-auto flex items-center gap-[98px]">
          <div className="flex-shrink-0 w-[714px] h-[532px] bg-[#C4DEFD] rounded-lg"></div>
          <div className="flex-1 space-y-[60px]">
            <div className="space-y-6">
              <h2 className="text-[72px] font-bold leading-[1.2] text-[#212529]">
                Customise it to{' '}
                <span className="relative inline-block">
                  your needs
                  <span className="absolute bottom-0 left-0 w-full h-4 bg-[#FFE492] -z-10"></span>
                </span>
              </h2>
              <p className="text-lg leading-[1.5] text-[#212529]">
                Customise the app with plugins, custom themes and multiple text editors (Rich
                Text or Markdown). Or create your own scripts and plugins using the Extension
                API.
              </p>
            </div>
            <Button variant="primary" size="md" showArrow>
              Let's Go
            </Button>
          </div>
        </div>
      </section>

      {/* Customization Section 2 - Dark Blue Background */}
      <section className="bg-[#043873] text-white py-[140px] px-[220px]">
        <div className="max-w-[1480px] mx-auto flex items-center gap-[98px]">
          <div className="flex-1 space-y-[60px]">
            <div className="space-y-6">
              <h2 className="text-[72px] font-bold leading-[1.2]">
                Customise it to
                <br />
                your needs
              </h2>
              <p className="text-lg leading-[1.5] opacity-90">
                Customise the app with plugins, custom themes and multiple text editors (Rich
                Text or Markdown). Or create your own scripts and plugins using the Extension
                API.
              </p>
            </div>
            <Button variant="primary" size="md" showArrow>
              Let's Go
            </Button>
          </div>
          <div className="flex-shrink-0 w-[686px] h-[479px] bg-[#C4DEFD] rounded-lg"></div>
        </div>
      </section>
    </>
  );
}
