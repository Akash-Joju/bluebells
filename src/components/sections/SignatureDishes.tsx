import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import dishChicken from "@/assets/dish-chicken.jpg";
import dishPrawns from "@/assets/dish-prawns.jpg";
import dishPizza from "@/assets/dish-pizza.jpg";
import dishSoup from "@/assets/dish-soup.jpg";
import dishCheesecake from "@/assets/dish-cheesecake.jpg";

export const SignatureDishes = () => {
  const dishes = [
    {
      name: "Grilled Herb Chicken",
      description: "Tender chicken breast with garden herbs and seasonal vegetables",
      image: dishChicken,
    },
    {
      name: "Spicy Garlic Prawns",
      description: "Fresh prawns sautéed in spicy garlic butter sauce",
      image: dishPrawns,
    },
    {
      name: "Classic Margherita Pizza",
      description: "Wood-fired pizza with fresh mozzarella and basil",
      image: dishPizza,
    },
    {
      name: "Creamy Mushroom Soup",
      description: "Rich and velvety soup with wild mushrooms",
      image: dishSoup,
    },
    {
      name: "Mango Cheesecake",
      description: "Silky smooth cheesecake with tropical mango coulis",
      image: dishCheesecake,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Featured Dishes
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our chef's signature creations, crafted with passion and the finest ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dishes.map((dish, index) => (
            <Card 
              key={dish.name} 
              className={`group overflow-hidden hover-scale shadow-elegant transition-smooth ${
                index === 2 ? "lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                  {dish.name}
                </h3>
                <p className="font-poppins text-muted-foreground">
                  {dish.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/dishes">
            <Button variant="outline" size="lg" className="hover-scale">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};