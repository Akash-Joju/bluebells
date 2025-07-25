export const RestaurantDescription = () => {
  return (
    <section className="py-20 bg-warm-cream">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-8">
            A Blend of Flavor & Comfort
          </h2>
          
          <p className="font-poppins text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Bluebells offers a delightful blend of gourmet dishes, warm ambience, and luxurious rooms. 
            Whether you're here for a meal or a weekend getaway, we've got you covered.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                Gourmet Dining
              </h3>
              <p className="font-poppins text-muted-foreground">
                Fresh ingredients, expertly crafted dishes
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                Comfortable Stay
              </h3>
              <p className="font-poppins text-muted-foreground">
                Luxurious rooms with modern amenities
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                Warm Atmosphere
              </h3>
              <p className="font-poppins text-muted-foreground">
                Perfect ambience for every occasion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};