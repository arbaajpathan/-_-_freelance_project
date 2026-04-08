import { Home, Building2, ChefHat, Sofa, Lightbulb, Ruler } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Design',
    description: 'Transform your living spaces into personalized sanctuaries that reflect your lifestyle and taste.',
  },
  {
    icon: Building2,
    title: 'Commercial Spaces',
    description: 'Create inspiring work environments that enhance productivity and embody your brand identity.',
  },
  {
    icon: ChefHat,
    title: 'Modular Kitchen',
    description: 'Design functional and beautiful kitchens that combine style with practical efficiency.',
  },
  {
    icon: Sofa,
    title: 'Furniture Curation',
    description: 'Carefully selected and custom-designed furniture pieces to complete your interior vision.',
  },
  {
    icon: Lightbulb,
    title: 'Lighting Design',
    description: 'Strategic lighting solutions that enhance ambiance and highlight architectural features.',
  },
  {
    icon: Ruler,
    title: 'Space Planning',
    description: 'Optimize your space with intelligent layouts that maximize functionality and flow.',
  },
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-neutral-900 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] text-neutral-400 uppercase">
            Services
          </span>
          <div className="w-16 h-px bg-neutral-700 mx-auto mt-6 mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
            What We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-neutral-800/50 hover:bg-neutral-800 transition-all duration-500 border border-neutral-700/50 hover:border-neutral-600"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-12 h-12 text-neutral-400 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-light text-white mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
