import Snowfall from '@/components/Snowfall';
import PromoPopup from '@/components/PromoPopup';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TeamSection from '@/components/TeamSection';
import GallerySection from '@/components/GallerySection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CareersSection from '@/components/CareersSection';
import InstagramSection from '@/components/InstagramSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Global Snowfall Effect */}
      <Snowfall />
      
      {/* Promotional Popup - First Visit Only */}
      <PromoPopup />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section with Video Background */}
        <HeroSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Meet the Team Section */}
        <TeamSection />
        
        {/* Gallery Section */}
        <GallerySection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Careers Section */}
        <CareersSection />
        
        {/* Instagram Feed Section */}
        <InstagramSection />
        
        {/* Call to Action Section */}
        <CTASection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;