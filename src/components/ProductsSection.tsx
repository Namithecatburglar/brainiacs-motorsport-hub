import kart1 from "@/assets/kart-1.png";
import kart2 from "@/assets/kart-2.png";
import kart3 from "@/assets/kart-3.png";
import kart4 from "@/assets/kart-4.png";
import kart5 from "@/assets/kart-5.png";
import kart6 from "@/assets/kart-6.jpeg";

const products = [
  { id: 1, image: kart1 },
  { id: 2, image: kart2 },
  { id: 3, image: kart3 },
  { id: 4, image: kart4 },
  { id: 5, image: kart5 },
  { id: 6, image: kart6 },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-racing-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wider">
            Our <span className="text-primary">Products</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            High-performance electric go-karts engineered for excellence on the track.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={product.image}
                  alt="Electric Racing Kart"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
