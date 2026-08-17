import Benefits from "@/components/Benefits";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="min-h-full bg-zinc-950 font-sans text-white">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Benefits />
      <Newsletter />
      <Footer />
    </div>
  );
}
