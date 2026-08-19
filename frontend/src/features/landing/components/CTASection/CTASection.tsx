import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { Container } from "@/components/layout";
import "./CTASection.css";

function CTASection() {
  return (
    <section className="cta-section">
      <Container size="lg">
        <div className="cta-section__content">
          <span className="cta-section__eyebrow">
            START WITH YOURSELF
          </span>

          <h2>
            See your patterns with a little more clarity.
          </h2>

          <p>
            Begin your AstroLens journey and turn self-discovery into
            something you can understand and use.
          </p>

          <Button size="lg">
            Get started
            <ArrowRight size={18} />
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default CTASection;