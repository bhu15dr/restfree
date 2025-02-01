import Link from "next/link";

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Partner Network
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Join our growing network of quality establishments providing clean
            facilities across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700 shadow-xl animate__animated animate__fadeInLeft">
            <h3 className="text-2xl font-bold text-white mb-6">
              Partner Benefits
            </h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Increased Foot Traffic",
                  description: "Attract new customers through our platform",
                },
                {
                  title: "Brand Visibility",
                  description: "Featured listing in our mobile app",
                },
                {
                  title: "Eco-Friendly Recognition",
                  description: "Special badges for sustainable practices",
                },
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-emerald-500 mt-1 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-neutral-400">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700 shadow-xl animate__animated animate__fadeInRight">
            <h3 className="text-2xl font-bold text-white mb-6">
              Partner Requirements
            </h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Clean Facilities",
                  description: "Maintain high hygiene standards",
                },
                {
                  title: "Accessibility",
                  description: "Ensure easy access for all users",
                },
                {
                  title: "Regular Maintenance",
                  description: "Commit to facility upkeep",
                },
              ].map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-500 mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {requirement.title}
                    </h4>
                    <p className="text-neutral-400">
                      {requirement.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center animate__animated animate__fadeInUp">
          <Link href="/partnerform">
            <button className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
              Become a Partner
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
