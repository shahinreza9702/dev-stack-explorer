import HeroImage from "/images/banner-stack.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-base-100">
      <div className="container relative mx-auto flex min-h-[calc(100vh-4rem)] items-center px-4 py-10 lg:py-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="flex flex-col items-start">
            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Build Your Ideal
              <span className="mt-2 block bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-500/30"
              >
                Explore Technologies
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <button
                type="button"
                className="rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Glow behind image */}
            <div className="absolute h-72 w-72 rounded-full bg-linear-to-r from-orange-400/20 via-pink-500/20 to-purple-500/20 blur-3xl sm:h-96 sm:w-96" />

            <div className="relative w-full max-w-xl">
              <img
                src={HeroImage}
                alt="Development stack illustration"
                className="h-auto w-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
