import { Sparkles } from "lucide-react";
import { Container } from "@/components/layout";
import "./LandingFooter.css";

function LandingFooter() {
  return (
    <footer className="landing-footer">
      <Container>
        <div className="landing-footer__top">
          <div>
            <a href="/" className="landing-footer__brand">
              <span className="landing-footer__logo">
                <Sparkles size={16} />
              </span>

              AstroLens
            </a>

            <p>
              A calmer way to understand your personal patterns.
            </p>
          </div>

          <div className="landing-footer__links">
            <div>
              <strong>Product</strong>
              <a href="#features">Features</a>
              <a href="#how-it-works">How it works</a>
              <a href="/login">Sign in</a>
            </div>

            <div>
              <strong>Resources</strong>
              <a href="#courses">Courses</a>
              <a href="#insights">Insights</a>
              <a href="#support">Support</a>
            </div>
          </div>
        </div>

        <div className="landing-footer__bottom">
          <span>© 2026 AstroLens</span>

          <span>
            Built for reflection, clarity and growth.
          </span>
        </div>
      </Container>
    </footer>
  );
}

export default LandingFooter;