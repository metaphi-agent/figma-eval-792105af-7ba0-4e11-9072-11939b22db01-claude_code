import { useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
    author: 'Oberon Shaw, MCH',
    role: 'Head of Talent Acquisition, North America',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    bgColor: 'bg-white',
    textColor: 'text-[#212529]',
  },
  {
    id: 2,
    quote: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
    author: 'Oberon Shaw, MCH',
    role: 'Head of Talent Acquisition, North America',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    bgColor: 'bg-[#4F9CF9]',
    textColor: 'text-white',
  },
  {
    id: 3,
    quote: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
    author: 'Oberon Shaw, MCH',
    role: 'Head of Talent Acquisition, North America',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    bgColor: 'bg-[#4F9CF9]',
    textColor: 'text-white',
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-[140px] px-[220px]">
      <div className="max-w-[1480px] mx-auto space-y-[60px]">
        <h2 className="text-[70px] font-bold text-center text-[#212529]">
          What Our Clients{' '}
          <span className="relative inline-block">
            Says
            <span className="absolute bottom-0 left-0 w-full h-4 bg-[#FFE492] -z-10"></span>
          </span>
        </h2>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${testimonial.bgColor} ${testimonial.textColor} rounded-[10px] p-10 shadow-lg hover:scale-105 transition-transform duration-300`}
            >
              <div className="space-y-8">
                <Quote className="w-16 h-16 opacity-80" />
                <p className="text-lg leading-relaxed">{testimonial.quote}</p>
                <hr className={`${testimonial.textColor === 'text-white' ? 'border-white/30' : 'border-gray-300'}`} />
                <div className="flex items-center gap-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-lg">{testimonial.author}</div>
                    <div className={`text-sm ${testimonial.textColor === 'text-white' ? 'opacity-90' : 'text-gray-600'}`}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="flex items-center justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? 'bg-[#4F9CF9] w-12' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
