export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Untitled-1.png')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Capture Your Beautiful Moments
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Professional wedding photography, videography, and video editing services.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-bold hover:bg-accent/90 transition-colors text-lg"
          >
            Book Your Session
          </a>

          <a
            href="#portfolio"
            className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors text-lg"
          >
            View Portfolio
          </a>
        </div>
      </div>

    </section>
  )
}
