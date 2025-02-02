// Marking the component as a client-side component
"use client";

import Link from 'next/link';

export default function Pricing() {
  const handlePlanSelection = (planCta) => {
    // Store the selected plan in localStorage
    localStorage.setItem('selectedPlan', planCta);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">Choose the plan that best fits your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Basic",
              price: "Free",
              features: ["Facility Finder", "Basic Navigation", "Community Reviews"],
              cta: "Get Started",
              popular: false,
            },
            {
              title: "Premium",
              price: "₹299",
              period: "/month",
              features: ["All Basic Features", "Priority Access", "Exclusive Facilities", "Reward Points"],
              cta: "Subscribe Now",
              popular: true,
            },
            {
              title: "Business",
              price: "Custom",
              features: ["Partner Dashboard", "Analytics", "Premium Visibility"],
              cta: "Contact Sales",
              popular: false,
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`${
                plan.popular ? "bg-blue-500 text-white transform scale-105" : "bg-neutral-50 text-neutral-900"
              } rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden animate__animated animate__fadeInUp`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-emerald-500 text-white px-3 py-1 rounded-bl-lg text-sm font-semibold">
                  Popular
                </div>
              )}
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? "text-white" : "text-neutral-900"}`}>
                  {plan.title}
                </h3>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-neutral-900"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={plan.popular ? "text-blue-100" : "text-neutral-600"}>{plan.period}</span>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className={`w-5 h-5 ${plan.popular ? "text-emerald-300" : "text-emerald-500"} mr-2`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={plan.popular ? "text-white" : "text-neutral-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`p-4 ${plan.popular ? "bg-blue-600" : "bg-neutral-100"}`}>
                <Link href="/partnerform" passHref>
                  <button
                    onClick={() => handlePlanSelection(plan.cta)}  // Handle the click event directly here
                    className={`w-full py-3 px-6 rounded-lg ${
                      plan.popular ? "bg-white text-blue-500 hover:bg-blue-50" : "bg-white text-blue-500 hover:bg-blue-50"
                    } font-semibold transition-colors`}
                  >
                    {plan.cta}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
