import { Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui";
import { Container } from "@/components/layout";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="landing-navbar">
      <Container>
        <nav className="landing-navbar__inner" aria-label="Main navigation">
          <a href="/" className="landing-navbar__brand">
            <span className="landing-navbar__logo">
              <Sparkles size={18} />
            </span>

            <span>AstroLens</span>
          </a>

          <div className="landing-navbar__links">
            <a href="#how-it-works">How it works</a>
            <a href="#features">Features</a>
            <a href="#insights">Insights</a>
            <a href="#courses">Courses</a>
          </div>

          <div className="landing-navbar__actions">
            <a href="/login" className="landing-navbar__login">
              Sign in
            </a>

            <Button size="sm">
              Get started
            </Button>
          </div>

          <button
            type="button"
            className="landing-navbar__menu"
            aria-label="Open navigation menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;