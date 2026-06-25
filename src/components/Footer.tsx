import { Link } from "react-router";
import logoImg from "../assets/logo-png.png";

export function Footer() {
  const footerCols = [
    {
      title: "Company",
      links: [
        { label: "About Us", to: "/about-us", isRouter: true },
        { label: "Services", to: "/services", isRouter: true },
        { label: "Cars", to: "/cars", isRouter: true },
        { label: "Gallery", to: "/gallery", isRouter: true },
        { label: "Contact Us", to: "/contact", isRouter: true },
        { label: "Terms & Conditions", to: "/terms-and-conditions", isRouter: true },
        { label: "Privacy Policy", to: "/privacy-policy", isRouter: true },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Car Rental with Driver", to: "/services#driver", isRouter: false },
        { label: "Business Car Rental", to: "/services#business", isRouter: false },
        { label: "Airport Services", to: "/services#airport", isRouter: false },
        { label: "Intercity Car Rental", to: "/services#intercity", isRouter: false },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { label: "jayramcarrental@gmail.com", to: "mailto:jayramcarrental@gmail.com", isRouter: false },
        { label: "+91 70024 36100", to: "tel:+917002436100", isRouter: false },
        { label: "West sripuria, Tinsukia, Assam 786145", to: "#", isRouter: false },
        { label: "Open 24/7 Support", to: "#", isRouter: false },
      ],
    },
  ];

  return (
    <footer className="bg-cream px-6 pt-20 pb-10">
      <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center py-2">
            <img
              src={logoImg}
              alt="Jayram Car Rentals Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Premium car rental with a curated fleet, fair pricing and reliable service worldwide.
          </p>
        </div>
        {footerCols.map((col) => (
          <div key={col.title}>
            <h4 className="font-display font-bold">{col.title}</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.isRouter ? (
                    <Link to={link.to} className="hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.to} className="hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-7xl mt-14 pt-6 border-t border-border text-sm text-muted-foreground text-center">
        © {new Date().getFullYear()} Jay Ram Car Rental. All rights reserved.
      </div>
    </footer>
  );
}
