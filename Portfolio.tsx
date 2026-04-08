const projects = [
  {
    id: 1,
    title: 'Modern Minimalist Living',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 2,
    title: 'Luxe Penthouse Suite',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 3,
    title: 'Contemporary Kitchen',
    category: 'Modular Kitchen',
    image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 4,
    title: 'Executive Office',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 5,
    title: 'Serene Bedroom Retreat',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 6,
    title: 'Urban Loft Design',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] text-neutral-500 uppercase">
            Portfolio
          </span>
          <div className="w-16 h-px bg-neutral-300 mx-auto mt-6 mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-800">
            Our Latest Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm tracking-wider text-neutral-300 uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-light text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
