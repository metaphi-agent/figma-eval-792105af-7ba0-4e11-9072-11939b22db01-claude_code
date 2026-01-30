import { Check } from 'lucide-react';
import Button from '../ui/Button';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Capture ideas and find them quickly',
    features: [
      'Sync unlimited devices',
      '10 GB monthly uploads',
      '200 MB max. note size',
      'Customize Home dashboard and access extra widgets',
      'Connect primary Google Calendar account',
      'Add due dates, reminders, and notifications to your tasks',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outline' as const,
    featured: false,
  },
  {
    name: 'Personal',
    price: '$11.99',
    description: 'Keep home and family on track',
    features: [
      'Sync unlimited devices',
      '10 GB monthly uploads',
      '200 MB max. note size',
      'Customize Home dashboard and access extra widgets',
      'Connect primary Google Calendar account',
      'Add due dates, reminders, and notifications to your tasks',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'primary' as const,
    featured: true,
  },
  {
    name: 'Organization',
    price: '$49.99',
    description: 'Capture ideas and find them quickly',
    features: [
      'Sync unlimited devices',
      '10 GB monthly uploads',
      '200 MB max. note size',
      'Customize Home dashboard and access extra widgets',
      'Connect primary Google Calendar account',
      'Add due dates, reminders, and notifications to your tasks',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outline' as const,
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-white py-[140px] px-[220px]">
      <div className="max-w-[1480px] mx-auto space-y-[60px]">
        {/* Heading */}
        <div className="text-center space-y-6">
          <h2 className="text-[72px] font-bold leading-[1.2] text-[#212529]">
            Choose{' '}
            <span className="relative inline-block">
              Your Plan
              <span className="absolute bottom-0 left-0 w-full h-4 bg-[#FFE492] -z-10"></span>
            </span>
          </h2>
          <p className="text-lg text-[#212529] max-w-3xl mx-auto">
            Whether you want to get organized, keep your personal life on track, or boost
            workplace productivity, Evernote has the right plan for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[10px] p-10 border-2 ${
                plan.featured
                  ? 'bg-[#043873] text-white border-[#FFE492]'
                  : 'bg-white text-[#212529] border-[#FFE492]'
              }`}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-6">{plan.price}</div>
                  <p className={plan.featured ? 'opacity-90' : 'text-[#212529]'}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-7">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.buttonVariant}
                  size="md"
                  className={`w-full ${
                    plan.featured
                      ? 'bg-[#4F9CF9] text-white hover:bg-[#3a8ce0]'
                      : 'border-[#FFE492] text-[#043873] hover:bg-[#FFE492]'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
