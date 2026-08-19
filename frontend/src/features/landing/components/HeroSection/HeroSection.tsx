import { ArrowRight, Sparkles } from "lucide-react";
import { Button, Badge } from "@/components/ui";
import { Container } from "@/components/layout";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <Container>
        <div className="hero__grid">
          <div className="hero__content">
            <Badge variant="success">
              Self-awareness, made clearer
            </Badge>

            <h1 className="hero__title">
              Understand your patterns.
              <span>Grow with clarity.</span>
            </h1>

            <p className="hero__description">
              AstroLens transforms complex personal patterns into
              clear insights you can understand, reflect on, and act on.
            </p>

            <div className="hero__actions">
              <Button size="lg">
                Discover your patterns
                <ArrowRight size={18} />
              </Button>

              <a href="#how-it-works" className="hero__secondary-action">
                See how it works
              </a>
            </div>

            <div className="hero__note">
              <Sparkles size={15} />
              Built around reflection, not prediction.
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__visual-glow" />

            <div className="hero__profile-card">
              <div className="hero__profile-header">
                <div>
                  <span className="hero__eyebrow">
                    YOUR PATTERN PROFILE
                  </span>

                  <h2>Personal Insights</h2>
                </div>

                <Badge variant="success">
                  Updated
                </Badge>
              </div>

              <div className="hero__chart">
                <div className="hero__chart-ring hero__chart-ring--outer" />
                <div className="hero__chart-ring hero__chart-ring--middle" />
                <div className="hero__chart-ring hero__chart-ring--inner" />

                <div className="hero__chart-axis hero__chart-axis--1" />
                <div className="hero__chart-axis hero__chart-axis--2" />
                <div className="hero__chart-axis hero__chart-axis--3" />
                <div className="hero__chart-axis hero__chart-axis--4" />

                <div className="hero__chart-shape" />
              </div>

              <div className="hero__metrics">
                <div>
                  <strong>82</strong>
                  <span>Focus</span>
                </div>

                <div>
                  <strong>76</strong>
                  <span>Reflection</span>
                </div>

                <div>
                  <strong>68</strong>
                  <span>Adaptability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;