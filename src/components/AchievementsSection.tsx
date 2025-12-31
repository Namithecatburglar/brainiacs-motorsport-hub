import { Trophy, Award, Medal, Star, Zap, Shield, Palette, Users, CheckCircle, Presentation, Sparkles } from "lucide-react";

const achievements = [
  {
    event: "EKVC 2024",
    prizes: [
      { icon: Trophy, text: "Winner – Endurance", color: "text-racing-gold" },
      { icon: Award, text: "Best Brake & Acceleration Award", color: "text-primary" },
      { icon: Medal, text: "Best Moto Man (Best Driver)", color: "text-racing-silver" },
    ],
  },
  {
    event: "TNKC 2024",
    prizes: [
      { icon: Trophy, text: "Endurance Winner", color: "text-racing-gold" },
      { icon: Medal, text: "Best Driver", color: "text-racing-silver" },
      { icon: Award, text: "Best Skidpad Award", color: "text-primary" },
    ],
  },
  {
    event: "GKDC 2024",
    prizes: [
      { icon: Medal, text: "Runner Up", color: "text-racing-silver" },
    ],
  },
  {
    event: "AIMS 2024 (EV Category)",
    prizes: [
      { icon: Trophy, text: "Overall Championship Winner", color: "text-racing-gold" },
      { icon: Trophy, text: "Endurance Winner", color: "text-racing-gold" },
      { icon: Trophy, text: "Acceleration Event Winner", color: "text-racing-gold" },
      { icon: Trophy, text: "Auto Cross Event Winner", color: "text-racing-gold" },
      { icon: Award, text: "Best Cost Optimum Award", color: "text-primary" },
      { icon: Sparkles, text: "Special Endurance Award – Girls Driver", color: "text-pink-400" },
      { icon: Trophy, text: "Endurance Winner (EV Category)", color: "text-racing-gold" },
    ],
  },
  {
    event: "AIMS 2023 (EV Category)",
    prizes: [
      { icon: Trophy, text: "First Prize", color: "text-racing-gold" },
      { icon: Trophy, text: "Best Endurance", color: "text-racing-gold" },
      { icon: Zap, text: "Best Innovation", color: "text-accent" },
      { icon: Shield, text: "Best Safety Award", color: "text-green-400" },
      { icon: Users, text: "Best Faculty Mentor", color: "text-blue-400" },
      { icon: Award, text: "Best Build Quality Award", color: "text-primary" },
      { icon: Palette, text: "Best Aesthetics Award", color: "text-purple-400" },
      { icon: Medal, text: "Best Driver", color: "text-racing-silver" },
      { icon: Star, text: "Best Captain", color: "text-racing-gold" },
      { icon: CheckCircle, text: "First Vehicle Inspection Clearance", color: "text-green-400" },
      { icon: Presentation, text: "Best Virtual Presentation Award", color: "text-cyan-400" },
    ],
  },
  {
    event: "GKDC 2023",
    prizes: [
      { icon: Medal, text: "First Runner Up", color: "text-racing-silver" },
      { icon: Trophy, text: "Endurance Winner (EV Category)", color: "text-racing-gold" },
      { icon: Medal, text: "Best Driver", color: "text-racing-silver" },
    ],
  },
  {
    event: "GKDC 2022",
    prizes: [
      { icon: Zap, text: "Best Innovation Award", color: "text-accent" },
      { icon: Medal, text: "2nd Place – Skidpad", color: "text-racing-silver" },
      { icon: Award, text: "3rd Place – Auto Cross", color: "text-racing-bronze" },
    ],
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 bg-racing-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wider">
            Our <span className="text-primary">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-2xl font-bold text-racing-gold mb-2">Prize Money: ₹3L+</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A legacy of excellence across national electric karting competitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(0_84%_50%/0.2)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 rounded-full p-2">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{achievement.event}</h3>
              </div>
              <ul className="space-y-2">
                {achievement.prizes.map((prize, prizeIndex) => (
                  <li key={prizeIndex} className="flex items-center gap-2">
                    <prize.icon className={`w-4 h-4 ${prize.color}`} />
                    <span className="text-muted-foreground text-sm">{prize.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
