export default function About() {
  return (
    <section className="py-24 md:py-32 bg-stone-50 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] text-neutral-500 uppercase">
            About Us
          </span>
          <div className="w-16 h-px bg-neutral-300 mx-auto mt-6 mb-8" />
        </div>

        <div className="space-y-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-800 leading-relaxed">
            Where Vision Meets Design
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
            With over a decade of experience in crafting exceptional spaces, we transform houses into homes and buildings into landmarks. Our philosophy centers on creating timeless designs that reflect your unique personality while maintaining the highest standards of elegance and functionality.
          </p>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
            Every project we undertake is a journey of collaboration, where your aspirations merge with our expertise to create spaces that inspire, comfort, and endure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-light text-neutral-800 mb-2">200+</div>
            <div className="text-sm tracking-wider text-neutral-500 uppercase">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-light text-neutral-800 mb-2">15+</div>
            <div className="text-sm tracking-wider text-neutral-500 uppercase">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-light text-neutral-800 mb-2">50+</div>
            <div className="text-sm tracking-wider text-neutral-500 uppercase">Design Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
}
