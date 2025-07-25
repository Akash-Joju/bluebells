import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "Every dish is crafted with love and attention to detail"
    },
    {
      icon: Award,
      title: "Quality Ingredients",
      description: "We source only the finest, freshest ingredients"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building lasting relationships with our guests"
    },
    {
      icon: Clock,
      title: "Timeless Hospitality",
      description: "Traditional values with modern comfort"
    }
  ];

  const timeline = [
    {
      year: "2014",
      title: "The Beginning",
      description: "Bluebells opened its doors with a vision to create memorable dining experiences"
    },
    {
      year: "2017",
      title: "Expansion",
      description: "Added luxury accommodation services to offer complete hospitality"
    },
    {
      year: "2020",
      title: "Innovation",
      description: "Adapted with modern safety standards while maintaining our charm"
    },
    {
      year: "2024",
      title: "Excellence",
      description: "Celebrating 10 years of culinary excellence and hospitality"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-warm-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-4">
            Our Story
          </h1>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            A decade of passion, flavor, and hospitality
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-8">
              The Bluebells Experience
            </h2>
            <div className="space-y-6 font-poppins text-lg text-muted-foreground leading-relaxed">
              <p>
                Bluebells was founded with a passion for culinary art and comfort hospitality. 
                Located in the heart of the city, we're proud to serve customers with heart-warming 
                dishes and cozy stays that create lasting memories.
              </p>
              <p>
                Our journey began over 10 years ago with a simple belief: great food brings people 
                together, and comfortable accommodation makes every visit special. We've grown from 
                a small bistro to a complete hospitality destination, but our core values remain unchanged.
              </p>
              <p>
                Every dish that leaves our kitchen tells a story of tradition, innovation, and love. 
                Every room we offer is designed to be your home away from home. At Bluebells, 
                we don't just serve food or provide rooms - we create experiences.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-playfair font-bold text-accent mb-2">10+</div>
              <p className="font-poppins text-muted-foreground">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-playfair font-bold text-accent mb-2">500+</div>
              <p className="font-poppins text-muted-foreground">Happy Guests</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-playfair font-bold text-accent mb-2">50+</div>
              <p className="font-poppins text-muted-foreground">Signature Dishes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-playfair font-bold text-accent mb-2">24/7</div>
              <p className="font-poppins text-muted-foreground">Service Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center shadow-elegant hover-scale transition-smooth">
                <CardContent className="p-6">
                  <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-rich-brown" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="font-poppins text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Journey
            </h2>
            <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of growth, innovation, and dedication
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20"></div>

              {timeline.map((item, index) => (
                <div key={item.year} className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}>
                    <Card className="shadow-elegant hover-scale transition-smooth">
                      <CardContent className="p-6">
                        <div className="text-2xl font-playfair font-bold text-accent mb-2">
                          {item.year}
                        </div>
                        <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                          {item.title}
                        </h3>
                        <p className="font-poppins text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;