import banner from "@/assets/about-banner.jpg";

export function AboutHero() {
  return (
    <section className="px-4 pt-4">
      <div className="relative mx-auto max-w-[1400px] h-[420px] rounded-[40px] overflow-hidden">
        <img src={banner} alt="NovaRide showroom" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="font-display font-bold text-6xl md:text-7xl">About Us</h1>
          <div className="mt-4 flex items-center gap-2 font-medium">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="text-primary">/</span>
            <span className="text-primary">About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}
