import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import AmenitiesBar from "./components/AmenitiesBar";
import GallerySection from "./components/GallerySection";
import TestimonialCarousel from "./components/TestimonialCarousel";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";

export default function UbudSanctuaryPage() {
  return (
    <div className="bg-[#EAE8DB] font-sans text-[#2F3A2E] selection:bg-[#85987A] selection:text-white p-6">
      <main>
        <HeroSection />
        <IntroSection />
        <AmenitiesBar />
        <GallerySection />
        <TestimonialCarousel />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
