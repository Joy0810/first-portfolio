const experiences = [
  {
    id: 1,
    role: "Full-Stack Intern (Backend Focus)",
    company: "Joineazy",
    duration: "Jun 2026 - Present",
    image: "/experience/joineazy.svg",
    highlights: [
      "Own a vertical slice of a multi-role college ERP platform, building backend governance modules end-to-end on Node.js, Express, Sequelize, and PostgreSQL",
      "Re-engineered the database schema and set up an AI-augmented development workflow using Claude and Codex to speed up delivery across the team",
    ],
  },
  {
    id: 2,
    role: "Vice President, Technical Education & Consulting",
    company: "Blockchain Club, Mahindra University",
    duration: "Jun 2025 - Jun 2026",
    image: "/experience/blockchain-club.svg",
    highlights: [
      "Led technical consulting and education for 50+ students across 20+ competing teams",
      "Established an industry partnership with Cyfrin Updraft to deliver a structured development bootcamp on engineering practices",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.company}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="text-left mb-6">
                  <h3 className="text-xl font-semibold mb-1">
                    {experience.company}
                  </h3>
                  <p className="text-primary font-medium">{experience.role}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {experience.duration}
                  </p>
                </div>

                <ul className="text-left space-y-3 text-sm text-muted-foreground">
                  {experience.highlights.map((highlight, key) => (
                    <li key={key}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
