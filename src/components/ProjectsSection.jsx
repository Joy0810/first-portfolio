import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "RiskLens - AI-Powered Pull Request Risk Intelligence Platform",
    description:
      "ML pipeline predicting pull request risk from historical commit and bug-fix data using an XGBoost classifier with SHAP-based explainability; RAG pipeline (pgvector) grounds AI review feedback in real engineering standards.",
    image: "/projects/risklens.svg",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "XGBoost", "Docker"],
    githubUrl: "",
  },
  {
    id: 2,
    title: "Satellite Imagery Analysis for Power Line Corridors",
    description:
      "End-to-end geospatial pipeline over Sentinel-2 satellite imagery detecting vegetation encroachment in high-voltage power line corridors, reaching F1 0.83 and AP 0.90; packaged for ARM edge hardware deployment.",
    image: "/projects/satellite.svg",
    tags: ["Python", "PyTorch", "OpenCV", "Sentinel-2"],
    githubUrl: "",
  },
  {
    id: 3,
    title: "SupportOps - Cross-Platform IT Diagnostics & Troubleshooting Platform",
    description:
      "Extends an open-source sysadmin toolkit into a full IT support platform with a FastAPI backend, REST endpoints, and a React dashboard for diagnostics, network checks, and automated root-cause analysis.",
    image: "/projects/supportops.svg",
    tags: ["Python", "PowerShell", "FastAPI", "React"],
    githubUrl: "",
  },
  {
    id: 4,
    title: "Employee Attrition Prediction",
    description:
      "Prediction of Employee Attrition and Salary.",
    image: "/projects/attrition.svg",
    tags: ["Python", "panda & numpy", "matplotlib"],
    githubUrl: "https://github.com/Joy0810/ML/tree/main/src/part1",
  },
  {
    id: 5,
    title: "Chess App",
    description:
      "A full-stack real-time multiplayer chess game built with React on the frontend and Node.js + WebSockets on the backend.",
    image: "/projects/chess.svg",
    tags: ["TypeScript", "Chess.js", "WebSockets"],
    githubUrl: "https://github.com/Joy0810/chess-app",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a> */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Joy0810"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
