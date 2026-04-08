import { Award, Users, Clock, Heart } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Award-Winning Excellence',
    description: 'Recognition from leading design institutions and industry publications for our innovative approach.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'Your vision is our priority. We collaborate closely to bring your dream spaces to life.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Meticulous planning and execution ensure your project is completed on schedule, every time.',
  },
  {
    icon: Heart,
    title: 'Passion for Detail',
    description: 'Every element is thoughtfully considered, from concept to completion, ensuring perfection.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-stone-100 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] text-neutral-500 uppercase">
            Why Choose Us
          </span>
          <div className="w-16 h-px bg-neutral-300 mx-auto mt-6 mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-800 mb-6">
            The Atelier Difference
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light">
            We combine artistic vision with technical expertise to deliver exceptional results that stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group text-center"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.1}s backwards`,
                }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                  <Icon className="w-10 h-10 text-neutral-700" />
                </div>
                <h3 className="text-xl font-light text-neutral-800 mb-3">
                  {reason.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
