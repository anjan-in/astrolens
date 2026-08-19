import {
  BarChart3,
  BookOpen,
  FileText,
  Layers3,
} from "lucide-react";
import { Container } from "@/components/layout";
import { Card } from "@/components/ui";
import "./FeaturesSection.css";

const features = [
  {
    icon: BarChart3,
    title: "Pattern dashboards",
    description:
      "Understand important dimensions through clean, visual summaries.",
  },
  {
    icon: FileText,
    title: "Personal reports",
    description:
      "Explore detailed reports without being overwhelmed by information.",
  },
  {
    icon: BookOpen,
    title: "Guided learning",
    description:
      "Continue your journey with structured lessons and reflection.",
  },
  {
    icon: Layers3,
    title: "Everything connected",
    description:
      "Assessments, reports, insights and learning come together in one workspace.",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="features-section">
      <Container>
        <div className="section-heading">
          <span className="section-heading__eyebrow">
            ONE CONNECTED EXPERIENCE
          </span>

          <h2>Designed around understanding.</h2>

          <p>
            Every part of AstroLens is designed to help you move from
            information to understanding without unnecessary complexity.
          </p>
        </div>

        <div className="features-section__grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card key={feature.title} className="feature-card">
                <div className="feature-card__icon">
                  <Icon size={22} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default FeaturesSection;