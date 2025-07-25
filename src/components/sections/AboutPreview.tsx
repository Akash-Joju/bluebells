import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const AboutPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-8">
            Our Story
          </h2>
          
          <p className="font-poppins text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            "With over 10 years of culinary excellence, Bluebells blends comfort and taste in every bite and every stay. 
            We believe in creating memories that last a lifetime, one meal and one night at a time."
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-playfair font-bold text-accent mb-2">10+</div>
              <p className="font-poppins text-muted-foreground">Years of Excellence</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-playfair font-bold text-accent mb-2">500+</div>
              <p className="font-poppins text-muted-foreground">Happy Guests</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-playfair font-bold text-accent mb-2">50+</div>
              <p className="font-poppins text-muted-foreground">Signature Dishes</p>
            </div>
          </div>

          <Link to="/about">
            <Button variant="outline" size="lg" className="hover-scale">
              Read More About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};