import { BarChart3, FileSearch, Sparkles } from "lucide-react";
import { Container } from "@/components/layout";
import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Explore",
    description:
      "Complete guided assessments designed to reveal meaningful patterns.",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Understand",
    description:
      "See your results through clear visualizations and structured insights.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Grow",
    description:
      "Turn self-awareness into practical reflection and continuous learning.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <Container>
        <div className="section-heading">
          <span className="section-heading__eyebrow">
            HOW IT WORKS
          </span>

          <h2>From complexity to clarity.</h2>

          <p>
            AstroLens turns detailed personal information into an
            experience that is easier to understand and act on.
          </p>
        </div>

        <div className="how-it-works__grid">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article key={step.number} className="step-card">
                <div className="step-card__top">
                  <span>{step.number}</span>

                  <div className="step-card__icon">
                    <Icon size={20} />
                  </div>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;