import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solutions from "./components/Solutions";
import Features from "./components/Features";
import Partners from "./components/Partners";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Download from "./components/Download";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <Solutions />
        <Features />
        <Partners />
        <Pricing />
        <Testimonials />
        <Download />
      </main>
    </>
  );
}
