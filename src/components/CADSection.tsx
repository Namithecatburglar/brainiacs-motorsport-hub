import cadTop from "@/assets/cad-top.jpeg";
import cadIso from "@/assets/cad-iso.jpeg";

const CADSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wider">
            CAD <span className="text-primary">Snapshots</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Precision-engineered designs crafted using advanced CAD technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary transition-all duration-300">
            <div className="aspect-square overflow-hidden">
              <img
                src={cadIso}
                alt="CAD Isometric View"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary transition-all duration-300">
            <div className="aspect-square overflow-hidden">
              <img
                src={cadTop}
                alt="CAD Top View"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CADSection;
