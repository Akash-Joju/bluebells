import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-restaurant.jpg";
export const Hero = () => {
  return <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to <span className="text-gold-accent">Bluebells</span>
        </h1>
        
        <p className="font-poppins text-xl md:text-2xl mb-4 animate-slide-up opacity-90">
          Book Your Table & Stay with Us
        </p>
        
        <p className="font-poppins text-lg mb-8 animate-slide-up opacity-80 max-w-2xl mx-auto">
          "Dine. Relax. Stay the Bluebells Way."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Link to="/book-table">
            <Button size="lg" className="gradient-gold text-rich-brown font-semibold hover-scale hover-glow text-red-950">
              Book a Table
            </Button>
          </Link>
          <Link to="/rooms">
            <Button size="lg" variant="outline" className="border-white/30 backdrop-blur-sm font-semibold hover-scale bg-amber-300 hover:bg-amber-200 text-red-950">
              View Rooms
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1 h-3 bg-white/70 rounded-full mx-auto animate-bounce"></div>
        </div>
      </div>
    </section>;
};