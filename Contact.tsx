import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] text-neutral-500 uppercase">
            Contact
          </span>
          <div className="w-16 h-px bg-neutral-300 mx-auto mt-6 mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-800 mb-6">
            Let's Create Together
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light">
            Ready to transform your space? We'd love to hear about your vision and bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="text-center group">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-100 group-hover:bg-neutral-800 transition-colors duration-500">
              <Mail className="w-8 h-8 text-neutral-700 group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-sm tracking-wider text-neutral-500 uppercase mb-3">
              Email
            </h3>
            <a
              href="mailto:contact@atelierelegance.com"
              className="text-lg text-neutral-800 hover:text-neutral-600 transition-colors"
            >
              contact@atelierelegance.com
            </a>
          </div>

          <div className="text-center group">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-100 group-hover:bg-neutral-800 transition-colors duration-500">
              <Phone className="w-8 h-8 text-neutral-700 group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-sm tracking-wider text-neutral-500 uppercase mb-3">
              Phone
            </h3>
            <a
              href="tel:+12125551234"
              className="text-lg text-neutral-800 hover:text-neutral-600 transition-colors"
            >
              +1 (212) 555-1234
            </a>
          </div>

          <div className="text-center group">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-100 group-hover:bg-neutral-800 transition-colors duration-500">
              <MapPin className="w-8 h-8 text-neutral-700 group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-sm tracking-wider text-neutral-500 uppercase mb-3">
              Location
            </h3>
            <p className="text-lg text-neutral-800">
              123 Design Avenue<br />
              New York, NY 10001
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="mailto:contact@atelierelegance.com"
            className="inline-block px-12 py-4 bg-neutral-900 text-white text-sm tracking-widest uppercase hover:bg-neutral-800 transition-colors duration-500"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
