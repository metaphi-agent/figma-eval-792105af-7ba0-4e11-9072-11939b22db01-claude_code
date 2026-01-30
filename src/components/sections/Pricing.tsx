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
      'Add due dates, reminders, and notifications to your tasks',
    ],
    buttonText: 'Get Started',
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
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-white py-20 lg:py-36">
      <div className="section-padding">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark tracking-tight">
            Choose Your Plan
          </h2>
          <p className="mt-6 text-lg text-text-dark/80 max-w-3xl mx-auto">
            Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 lg:p-11 ${
                plan.featured
                  ? 'bg-primary-900 text-white shadow-xl scale-105 lg:scale-110'
                  : 'bg-white border border-accent-yellow text-text-dark'
              }`}
            >
              <div className="mb-8">
                <h3 className={`text-2xl font-semibold ${plan.featured ? 'text-white' : 'text-text-dark'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-4 text-4xl font-bold ${plan.featured ? 'text-accent-yellow' : 'text-text-dark'}`}>
                  {plan.price}
                </p>
                <p className={`mt-4 text-lg ${plan.featured ? 'text-white/90' : 'text-text-dark/80'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.featured ? 'bg-primary-500' : 'bg-primary-500'
                    }`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className={`text-base ${plan.featured ? 'text-white/90' : 'text-text-dark/80'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? 'primary' : 'outline'}
                size="md"
                className="w-auto"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
