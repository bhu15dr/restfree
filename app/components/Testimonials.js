"use client";
import { useState } from "react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: "Rahul Kumar",
      role: "Frequent Traveler",
      content:
        "RestFree has been a game-changer during my travels. Knowing I can rely on clean facilities makes all the difference.",
      avatar: "R",
    },
    {
      name: "Priya Sharma",
      role: "Urban Commuter",
      content:
        "The premium access is worth every rupee. Clean, accessible facilities whenever I need them during my daily commute.",
      avatar: "P",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Real experiences from people who rely on RestFree
          </p>
        </div>

        <div className="testimonials-slider relative">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`swiper-slide bg-neutral-800 rounded-xl p-8 border border-neutral-700 shadow-xl animate__animated animate__fadeInUp ${
                  index === currentTestimonial ? "block" : "hidden"
                }`}
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 ${
                      index === 0 ? "bg-blue-500" : "bg-emerald-500"
                    } rounded-full flex items-center justify-center`}
                  >
                    <span className="text-xl font-bold text-white">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-neutral-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex text-emerald-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-neutral-300">{testimonial.content}</p>
              </div>
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
