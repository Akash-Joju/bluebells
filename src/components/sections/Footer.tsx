import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-rich-brown text-warm-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full gradient-gold"></div>
              <span className="font-playfair text-2xl font-bold">Bluebells</span>
            </div>
            <p className="font-poppins text-warm-cream/80 mb-4 max-w-md">Kozhikode,Kerala</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="font-poppins text-warm-cream/80 hover:text-gold-accent transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/book-table" className="font-poppins text-warm-cream/80 hover:text-gold-accent transition-smooth">
                  Book Table
                </Link>
              </li>
              <li>
                <Link to="/dishes" className="font-poppins text-warm-cream/80 hover:text-gold-accent transition-smooth">
                  Our Dishes
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="font-poppins text-warm-cream/80 hover:text-gold-accent transition-smooth">
                  Rooms
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-poppins text-warm-cream/80 hover:text-gold-accent transition-smooth">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-accent" />
                <span className="font-poppins text-sm text-warm-cream/80">
                  123 Restaurant Street, City
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-accent" />
                <span className="font-poppins text-sm text-warm-cream/80">
                  +91 12345 67890
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-accent" />
                <span className="font-poppins text-sm text-warm-cream/80">
                  hello@bluebells.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-accent" />
                <span className="font-poppins text-sm text-warm-cream/80">
                  Mon-Sun: 10 AM - 11 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-cream/20 pt-8 text-center">
          <p className="font-poppins text-warm-cream/60">© 2025Bluebells . All rights reserved.</p>
        </div>
      </div>
    </footer>;
};