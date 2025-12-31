import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Star, Diamond, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tiers = [
  {
    name: "Silver Sponsor",
    icon: Award,
    color: "text-racing-silver",
    borderColor: "border-racing-silver/50",
    bgColor: "bg-racing-silver/10",
    benefits: [
      "Company logo will be placed on team T-shirts",
      "Company logo will be placed on the kart",
    ],
  },
  {
    name: "Gold Sponsor",
    icon: Star,
    color: "text-racing-gold",
    borderColor: "border-racing-gold/50",
    bgColor: "bg-racing-gold/10",
    benefits: [
      "Company logo on team T-shirts and the kart",
      "Sponsor branding on standees and equipment",
      "A short documentary featuring the sponsor partnership",
    ],
  },
  {
    name: "Diamond Sponsor",
    icon: Diamond,
    color: "text-cyan-400",
    borderColor: "border-cyan-400/50",
    bgColor: "bg-cyan-400/10",
    benefits: [
      "Company logo on team T-shirts and the kart",
      "Sponsor branding on standees and equipment",
      "A professional documentary highlighting the partnership",
      "MoU for internship opportunities for students and staff",
    ],
  },
];

const SponsorshipPage = () => {
  const handleContactClick = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 racing-gradient relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 uppercase tracking-wider">
            Sponsorship <span className="text-primary">Opportunities</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Partner with Team Brainiacs Racing
          </p>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            We offer structured sponsorship packages designed to provide maximum brand exposure and long-term collaboration. Partner with us to gain visibility in the growing electric mobility space.
          </p>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 bg-racing-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wider">
              Sponsorship <span className="text-primary">Tiers</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-card border-2 ${tier.borderColor} rounded-lg p-8 hover:shadow-[0_0_40px_hsl(0_84%_50%/0.2)] transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`${tier.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                  <tier.icon className={`w-8 h-8 ${tier.color}`} />
                </div>
                <h3 className={`text-2xl font-bold ${tier.color} mb-6 text-center uppercase tracking-wider`}>
                  {tier.name}
                </h3>
                <ul className="space-y-4">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss sponsorship opportunities and how we can create value together.
          </p>
          <Button variant="racing" size="xl" onClick={handleContactClick}>
            Contact Us Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SponsorshipPage;
