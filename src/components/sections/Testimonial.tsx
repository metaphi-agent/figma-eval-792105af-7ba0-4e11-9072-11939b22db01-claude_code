import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: '"Whitepace is designed as a collaboration tool for businesses that is a full project management. It provides all the features needed for team collaboration."',
    name: 'Oberon Shaw, MCH',
    title: 'Head of Talent Acquisition, North America',
    featured: true,
  },
  {
    id: 2,
    quote: '"Whitepace helps us stay organized and communicate effectively across different teams. It\'s become an essential part of our daily workflow."',
    name: 'Sarah Chen',
    title: 'Product Manager, TechCorp',
    featured: false,
  },
  {
    id: 3,
    quote: '"The integration capabilities and intuitive interface make Whitepace stand out. Our team productivity has increased significantly."',
    name: 'Michael Roberts',
    title: 'Engineering Lead, StartupX',
    featured: false,
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-20 lg:py-36">
      <div className="section-padding">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark tracking-tight">
            What Our Clients Says
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`rounded-xl p-8 lg:p-10 ${
                index === 0
                  ? 'bg-white shadow-xl'
                  : 'bg-primary-500'
              }`}
            >
              {/* Quote Icon */}
              <div className={`text-6xl font-serif mb-6 ${index === 0 ? 'text-primary-500' : 'text-white'}`}>
                "
              </div>

              {/* Quote */}
              <p className={`text-lg mb-8 ${index === 0 ? 'text-text-dark/80' : 'text-white/90'}`}>
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className={`border-t ${index === 0 ? 'border-text-dark/10' : 'border-white/20'} pt-6`}>
                {/* Author */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className={`font-semibold text-lg ${index === 0 ? 'text-text-dark' : 'text-white'}`}>
                      {testimonial.name}
                    </p>
                    <p className={`text-sm mt-1 ${index === 0 ? 'text-text-dark/60' : 'text-white/70'}`}>
                      {testimonial.title}
                    </p>
                  </div>

                  {/* Avatar placeholder */}
                  <div className={`w-16 h-16 rounded-full ${index === 0 ? 'bg-gray-200' : 'bg-white/20'}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? 'bg-primary-500' : 'bg-primary-500/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
