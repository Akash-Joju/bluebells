import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import dishChicken from "@/assets/dish-chicken.jpg";
import dishPrawns from "@/assets/dish-prawns.jpg";
import dishPizza from "@/assets/dish-pizza.jpg";
import dishSoup from "@/assets/dish-soup.jpg";
import dishCheesecake from "@/assets/dish-cheesecake.jpg";

const Dishes = () => {
  const dishCategories = [
    {
      title: "Main Courses",
      dishes: [
        {
          name: "Grilled Herb Chicken",
          description: "Tender chicken breast marinated in garden herbs, served with seasonal vegetables and roasted potatoes",
          price: "₹450",
          image: dishChicken,
          isSpecial: true,
        },
        {
          name: "Spicy Garlic Prawns",
          description: "Fresh prawns sautéed in spicy garlic butter sauce, served with steamed rice and vegetables",
          price: "₹520",
          image: dishPrawns,
          isSpecial: false,
        },
        {
          name: "Classic Margherita Pizza",
          description: "Wood-fired pizza with fresh mozzarella, tomato sauce, and basil leaves",
          price: "₹380",
          image: dishPizza,
          isSpecial: false,
        },
      ]
    },
    {
      title: "Soups & Appetizers",
      dishes: [
        {
          name: "Creamy Mushroom Soup",
          description: "Rich and velvety soup made with wild mushrooms, cream, and fresh herbs",
          price: "₹220",
          image: dishSoup,
          isSpecial: false,
        },
      ]
    },
    {
      title: "Desserts",
      dishes: [
        {
          name: "Mango Cheesecake",
          description: "Silky smooth cheesecake topped with tropical mango coulis and fresh mint",
          price: "₹280",
          image: dishCheesecake,
          isSpecial: true,
        },
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
            Our Signature Dishes
          </h1>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our chef's masterpieces, crafted with passion and the finest ingredients
          </p>
        </div>
      </section>

      {/* Dishes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {dishCategories.map((category, categoryIndex) => (
            <div key={category.title} className={categoryIndex > 0 ? "mt-16" : ""}>
              <h2 className="font-playfair text-3xl font-bold text-primary mb-8 text-center">
                {category.title}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.dishes.map((dish) => (
                  <Card key={dish.name} className="group overflow-hidden hover-scale shadow-elegant transition-smooth">
                    <div className="relative overflow-hidden">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth"></div>
                      {dish.isSpecial && (
                        <Badge className="absolute top-4 right-4 gradient-gold text-rich-brown">
                          Chef's Choice
                        </Badge>
                      )}
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-playfair text-xl font-semibold text-primary">
                          {dish.name}
                        </h3>
                        <span className="font-playfair text-lg font-bold text-accent">
                          {dish.price}
                        </span>
                      </div>
                      <p className="font-poppins text-muted-foreground">
                        {dish.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dishes;