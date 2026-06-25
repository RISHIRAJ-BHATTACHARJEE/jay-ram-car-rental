import logoImg from "../assets/logo-png.png";
import { PillButton } from "../pages/ui";
import { Link, useLocation } from "react-router";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Service", path: "/services" },
  { name: "Cars", path: "/cars" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center py-2">
          <img
            src={logoImg}
            alt="Jayram Car Rentals Logo"
            className="h-14 w-auto object-contain"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = item.path === "/" ? currentPath === "/" : currentPath === item.path;
            const isRouterLink = item.path.startsWith("/");

            return isRouterLink ? (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.path}
                className={`flex items-center gap-1 text-sm font-medium transition-colors text-foreground hover:text-primary`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>
        <PillButton>Book A Rental</PillButton>
      </div>
    </header>
  );
}
