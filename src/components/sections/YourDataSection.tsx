import Button from '../ui/Button';

export default function YourDataSection() {
  return (
    <section className="bg-white py-[140px] px-[220px]">
      <div className="max-w-[1480px] mx-auto flex items-center gap-[100px]">
        <div className="flex-1 space-y-[60px]">
          <div className="space-y-6">
            <h2 className="text-[72px] font-bold leading-[1.2] text-[#212529]">
              100% your data
            </h2>
            <p className="text-lg leading-[1.5] text-[#212529]">
              The app is open source and your notes are saved to an open format, so you'll
              always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes
              and ensure no-one but yourself can access them.
            </p>
          </div>
          <Button variant="primary" size="md" showArrow>
            Read more
          </Button>
        </div>
        <div className="flex-shrink-0 w-[681px] h-[381.13px] relative">
          {/* Data illustration placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-[#C4DEFD] to-[#4F9CF9] rounded-lg flex items-center justify-center">
            <div className="text-white text-6xl font-bold opacity-20">DATA</div>
          </div>
        </div>
      </div>
    </section>
  );
}
