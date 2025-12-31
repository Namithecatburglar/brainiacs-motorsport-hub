import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We will get back to you soon.",
    });
    setFormData({ name: "", company: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wider">
            Contact <span className="text-primary">Us</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            Organizations and individuals may contact us to inquire about kart purchases, sponsorship support, or potential partnership opportunities. We look forward to mutually beneficial discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  name="company"
                  placeholder="Company (Optional)"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>
              <Button type="submit" variant="racing" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold text-foreground mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 rounded-full p-3">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">Email</p>
                  <a
                    href="mailto:webrainiacs01@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    webrainiacs01@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 rounded-full p-3">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">Location</p>
                  <p className="text-muted-foreground">Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
