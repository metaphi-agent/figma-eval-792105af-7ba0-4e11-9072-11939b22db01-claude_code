import Button from '../ui/Button';

export default function FreeTrialSection() {
  return (
    <section className="bg-[#043873] text-white py-[140px] px-[220px]">
      <div className="max-w-[1480px] mx-auto">
        <div className="max-w-[608px] mx-auto text-center space-y-10">
          <div className="space-y-6">
            <h2 className="text-[72px] font-bold leading-[1.2]">
              Try Whitepace
              <br />
              today
            </h2>
            <p className="text-2xl leading-relaxed">
              Get started for free.
              <br />
              Add your whole team as your needs grow.
            </p>
          </div>
          <Button variant="primary" size="lg" showArrow>
            Try Taskey free
          </Button>
          <p className="text-lg">
            On a big team? Contact sales
          </p>
        </div>
      </div>
    </section>
  );
}
