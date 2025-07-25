import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bed, Users, Wifi, Coffee, Car, Tv, Bath, AirVent } from "lucide-react";

import room4bedroom from "@/assets/room-4bedroom.jpg";
import room2bedroom from "@/assets/room-2bedroom.jpg";

const Rooms = () => {
  const rooms = [
    {
      name: "Four-Bedroom Suite",
      price: "₹6,000",
      period: "per night",
      description: "Perfect for families and large groups, our 4-bedroom suite offers comfort, privacy, and elegance with a spacious living area, dining space, and balcony with scenic views.",
      image: room4bedroom,
      badge: "Family Favorite",
      features: [
        { icon: Bed, text: "4 Bedrooms" },
        { icon: Users, text: "Up to 8 Guests" },
        { icon: Bath, text: "3 Bathrooms" },
        { icon: Wifi, text: "Free WiFi" },
        { icon: Tv, text: "Smart TV" },
        { icon: AirVent, text: "Air Conditioning" },
        { icon: Car, text: "Free Parking" },
        { icon: Coffee, text: "Mini Kitchen" }
      ],
      highlights: [
        "Spacious living room with sofa seating",
        "Private balcony with scenic views",
        "Fully equipped mini kitchen",
        "Separate dining area",
        "24/7 room service available"
      ]
    },
    {
      name: "Two-Bedroom Suite",
      price: "₹3,500",
      period: "per night",
      description: "Ideal for couples or small families, our 2-bedroom suite features warm interiors, modern amenities, and a cozy atmosphere perfect for a relaxing stay.",
      image: room2bedroom,
      badge: "Romantic Getaway",
      features: [
        { icon: Bed, text: "2 Bedrooms" },
        { icon: Users, text: "Up to 4 Guests" },
        { icon: Bath, text: "2 Bathrooms" },
        { icon: Wifi, text: "Free WiFi" },
        { icon: Tv, text: "Smart TV" },
        { icon: AirVent, text: "Air Conditioning" },
        { icon: Coffee, text: "Complimentary Breakfast" },
        { icon: Car, text: "Free Parking" }
      ],
      highlights: [
        "Comfortable sitting area",
        "Complimentary breakfast included",
        "Modern bathroom with premium toiletries",
        "Blackout curtains for better sleep",
        "Daily housekeeping service"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-warm-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-4">
            Luxury Accommodations
          </h1>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience comfort and elegance in our thoughtfully designed suites
          </p>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {rooms.map((room, index) => (
              <div key={room.name} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}>
                {/* Image */}
                <div className={`relative overflow-hidden rounded-lg shadow-elegant ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}>
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-96 object-cover hover:scale-105 transition-smooth"
                  />
                  <Badge className="absolute top-4 right-4 gradient-gold text-rich-brown">
                    {room.badge}
                  </Badge>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="flex items-baseline gap-4 mb-4">
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary">
                      {room.name}
                    </h2>
                    <div className="text-right">
                      <div className="font-playfair text-2xl font-bold text-accent">
                        {room.price}
                      </div>
                      <div className="font-poppins text-sm text-muted-foreground">
                        {room.period}
                      </div>
                    </div>
                  </div>

                  <p className="font-poppins text-lg text-muted-foreground mb-6">
                    {room.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {room.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <feature.icon className="w-4 h-4 text-accent" />
                        <span className="font-poppins text-sm text-muted-foreground">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h3 className="font-playfair text-lg font-semibold text-primary mb-3">
                      Room Highlights
                    </h3>
                    <ul className="space-y-2">
                      {room.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="font-poppins text-muted-foreground">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button size="lg" className="gradient-gold text-rich-brown font-semibold hover-scale hover-glow">
                    Contact to Book
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;