export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-light tracking-wider">
            𝔞𝔫𝔱𝔞𝔯𝔞𝔤𝔞_𝔦𝔫𝔱𝔢𝔯𝔦𝔬𝔯𝔰_
          </h3>
          <p className="text-neutral-400 text-sm tracking-wider">
            Crafting Timeless Interiors
          </p>
          <div className="w-16 h-px bg-neutral-700 mx-auto" />
          <p className="text-neutral-500 text-sm">
            © {currentYear} 𝔞𝔫𝔱𝔞𝔯𝔞𝔤𝔞_𝔦𝔫𝔱𝔢𝔯𝔦𝔬𝔯𝔰_. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
