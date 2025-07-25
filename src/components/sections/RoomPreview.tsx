import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bed, Users, Wifi, Coffee } from "lucide-react";

import room4bedroom from "@/assets/room-4bedroom.jpg";
import room2bedroom from "@/assets/room-2bedroom.jpg";

export const RoomPreview = () => {
  return (
    <section className="py-20 bg-warm-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Need a Place to Stay?
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose between our cozy 2-bedroom and spacious 4-bedroom suites, 
            designed for comfort and elegance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* 4-Bedroom Suite */}
          <Card className="group overflow-hidden shadow-elegant hover-scale transition-smooth">
            <div className="relative overflow-hidden">
              <img
                src={room4bedroom}
                alt="Four-Bedroom Suite"
                className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
              />
              <div className="absolute top-4 right-4 bg-gold-accent text-rich-brown px-3 py-1 rounded-full text-sm font-semibold">
                Family Favorite
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-playfair text-2xl font-semibold text-primary">
                  Four-Bedroom Suite
                </h3>
                <span className="font-playfair text-xl font-bold text-accent">
                  ₹6,000/night
                </span>
              </div>
              
              <p className="font-poppins text-muted-foreground mb-4">
                Perfect for families and large groups, our 4-bedroom suite offers comfort, 
                privacy, and elegance with a living area and balcony view.
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  <span>4 Bedrooms</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>8 Guests</span>
                </div>
                <div className="flex items-center gap-1">
                  <Wifi className="w-4 h-4" />
                  <span>Free WiFi</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 2-Bedroom Suite */}
          <Card className="group overflow-hidden shadow-elegant hover-scale transition-smooth">
            <div className="relative overflow-hidden">
              <img
                src={room2bedroom}
                alt="Two-Bedroom Suite"
                className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
              />
              <div className="absolute top-4 right-4 bg-gold-accent text-rich-brown px-3 py-1 rounded-full text-sm font-semibold">
                Romantic
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-playfair text-2xl font-semibold text-primary">
                  Two-Bedroom Suite
                </h3>
                <span className="font-playfair text-xl font-bold text-accent">
                  ₹3,500/night
                </span>
              </div>
              
              <p className="font-poppins text-muted-foreground mb-4">
                Ideal for couples or small families, our 2-bedroom suite features 
                warm interiors and essential amenities for a perfect stay.
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  <span>2 Bedrooms</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>4 Guests</span>
                </div>
                <div className="flex items-center gap-1">
                  <Coffee className="w-4 h-4" />
                  <span>Breakfast</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/rooms">
            <Button size="lg" className="gradient-gold text-rich-brown font-semibold hover-scale hover-glow">
              Explore All Rooms
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};