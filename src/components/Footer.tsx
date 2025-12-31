import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-racing-black border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div className="flex flex-col gap-4">
            <img
              src={logo}
              alt="Team Brainiacs Racing"
              className="h-16 w-auto object-contain opacity-80"
            />
            <p className="text-muted-foreground text-sm max-w-xs">
              An emerging company in electric mobility and motorsports, specializing in high-performance electric go-karts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold text-lg mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sponsorship" className="text-muted-foreground hover:text-primary transition-colors">
                  Sponsorship
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold text-lg mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:webrainiacs01@gmail.com" className="hover:text-primary transition-colors">
                  webrainiacs01@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Team Brainiacs Racing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
