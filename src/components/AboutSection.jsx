import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Engineer & AI/ML Builder
            </h3>

            <p className="text-muted-foreground">
              I'm a Computer Science and AI student who builds production backend systems and applies machine learning to real-world problems — from a live college ERP platform to ML pipelines for risk prediction and geospatial analysis. I lean heavily on AI-augmented development workflows to ship faster without cutting corners on quality.
            </p>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">Research Interests</h4>
              <p className="text-muted-foreground text-sm">
                Applied Machine Learning, Retrieval-Augmented Generation (RAG), and Geospatial Computer Vision.
              </p>
            </div>

            <div className="space-y-4 bg-secondary/20 p-6 rounded-xl border border-primary/10">
              <h4 className="text-lg font-semibold text-primary">Personal Details</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li><span className="font-medium text-foreground">Name:</span> L Joy Nirantar</li>
                <li><span className="font-medium text-foreground">Phone:</span> 9502624039</li>
                <li><span className="font-medium text-foreground">College Email:</span> se23uari169@mahindrauniversity.edu.in</li>
                <li><span className="font-medium text-foreground">Personal Email:</span> joywork2nd@gmail.com</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/cv/Joy_s_CV-9.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Open CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Engineering</h4>
                  <p className="text-muted-foreground">
                    Designing and shipping REST APIs, database schemas, and
                    governance systems for production platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Building ML pipelines with explainable models, RAG systems,
                    and computer vision for real-world data.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI-Augmented Development</h4>
                  <p className="text-muted-foreground">
                    Using AI coding tools like Claude and Codex within a
                    disciplined workflow — scoped implementation, diff review,
                    and containerized verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
