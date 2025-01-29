export default function Solutions() {
    return (
      <section id="solutions" className="bg-neutral-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-4xl font-bold text-white mb-4">Our Solutions</h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Innovative approaches to ensure clean and accessible facilities for everyone
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Mobile App with Facility Finder",
                description:
                  "Locate nearby partner restrooms with real-time directions and reviews through our user-friendly mobile application.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
                features: ["Real-time availability updates", "User reviews and ratings", "Navigation assistance"],
              },
              {
                title: "Verified Clean Program",
                description:
                  "Ensuring high standards through regular audits and maintaining cleanliness certification for partner establishments.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                features: ["Regular hygiene audits", "Quality certification", "User feedback system"],
              },
              {
                title: "Premium Subscription",
                description:
                  "Priority access to premium facilities with exclusive benefits and rewards for frequent users.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                features: ["VIP access", "Reward points", "Exclusive amenities"],
              },
              {
                title: "Corporate Sponsorships",
                description:
                  "Partnering with businesses to sponsor facilities in underserved areas while enhancing brand visibility.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
                features: ["Brand visibility", "Social impact", "Community support"],
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="bg-neutral-800 rounded-xl p-8 border border-neutral-700 shadow-xl animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500 rounded-full p-3">{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-white ml-4">{solution.title}</h3>
                </div>
                <p className="text-neutral-300 mb-6">{solution.description}</p>
                <ul className="space-y-3 text-neutral-400">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  