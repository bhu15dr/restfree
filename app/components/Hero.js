export default function Hero() {
  return (
    <section id="hero" className="bg-neutral-900 text-white min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-20">
          <div className="md:w-1/2 mb-10 md:mb-0 animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Find Clean Restrooms{" "}
              <span className="text-blue-500">Anywhere in India</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Access clean, safe, and comfortable restrooms through our network
              of verified partners. Never worry about finding clean facilities
              again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#download"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 inline-flex items-center justify-center"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Download App
              </a>
              <a
                href="#features"
                className="bg-transparent border-2 border-white hover:border-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 inline-flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="md:w-1/2 animate__animated animate__fadeInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-3xl filter blur-xl"></div>
              <div className="relative bg-neutral-800 p-8 rounded-3xl shadow-2xl border border-neutral-700 mx-6">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                  <p className="text-sm">Verified Clean Program</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-neutral-700 p-4 rounded-lg">
                    <p className="text-sm">Find nearest clean restroom</p>
                    <div className="mt-2 bg-neutral-600 h-2 rounded-full w-3/4"></div>
                  </div>
                  <div className="bg-neutral-700 p-4 rounded-lg">
                    <p className="text-sm">Real-time availability</p>
                    <div className="mt-2 bg-neutral-600 h-2 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 py-8 mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center text-center">
            <div className="animate__animated animate__fadeIn">
              <h3 className="text-3xl font-bold text-blue-500">1000+</h3>
              <p className="text-gray-400">Partner Locations</p>
            </div>
            <div
              className="animate__animated animate__fadeIn"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-3xl font-bold text-blue-500">50k+</h3>
              <p className="text-gray-400">Happy Users</p>
            </div>
            <div
              className="animate__animated animate__fadeIn"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-3xl font-bold text-blue-500">4.8/5</h3>
              <p className="text-gray-400">User Rating</p>
            </div>
            <div
              className="animate__animated animate__fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              <h3 className="text-3xl font-bold text-blue-500">100%</h3>
              <p className="text-gray-400">Verified Clean</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
