import { Building2, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wider">
            About <span className="text-primary">Us</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Brainiacs is an emerging company in the electric mobility and motorsports industry, specializing in the development of high-performance electric go-karts and sustainable electric vehicles for customers. With a focus on advancement and engineering excellence, we strive to redefine the future of electric transportation.
          </p>
        </div>

        {/* Stats Blocks */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary transition-all duration-300 min-w-[180px]">
            <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
            <p className="text-4xl font-bold text-foreground mb-2">7+</p>
            <p className="text-muted-foreground uppercase text-sm tracking-wider">Years of Experience</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary transition-all duration-300 min-w-[180px]">
            <Building2 className="w-10 h-10 text-primary mx-auto mb-4" />
            <p className="text-4xl font-bold text-foreground mb-2">2018</p>
            <p className="text-muted-foreground uppercase text-sm tracking-wider">Year of Establishment</p>
          </div>
        </div>

        {/* USP */}
        <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider text-center">
            Our Unique Selling Proposition
          </h3>
          <p className="text-muted-foreground text-center leading-relaxed">
            Our electric go-kart features a system-optimized powertrain for strong acceleration, a lightweight CAD-designed chassis for superior handling, integrated safety systems including a digital dashboard and robust braking, all built for durability in racing and commercial applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
