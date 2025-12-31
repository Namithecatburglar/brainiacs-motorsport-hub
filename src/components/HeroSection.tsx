import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden racing-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            hsl(0 0% 50%) 35px,
            hsl(0 0% 50%) 70px
          )`
        }} />
      </div>

      {/* Red Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-primary" />

      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Logo */}
          <img
            src={logo}
            alt="Team Brainiacs Racing"
            className="mx-auto h-32 md:h-40 lg:h-48 w-auto object-contain mb-8 animate-float"
          />

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Team <span className="text-primary">Brainiacs</span> Racing
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-4">
            A Business-Driven Electric Karting Team
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-primary font-semibold mb-8">
            "Where Motorsport Meets Brand Visibility"
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
