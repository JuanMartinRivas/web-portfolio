import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";

const projects = [
  {
    title: "Oralik - Dentistry booking app",
    description: "Oralik is a mobile-first appointment booking app that separates professionals and patients, lets professionals set weekly availability ranges (like Calendly), and automatically generates 30-minute booking slots that patients can reserve. Built as a production-ready prototype to demonstrate reliable scheduling, role-based flows, and realtime syncing without shipping the source code.",
    technologies: ["React Native", "Expo", "Firebase"],
    githubUrl: "https://github.com/JuanMartinRivas/portfolio",
    liveUrl: "https://drive.google.com/file/d/1WiVmX_FiUjjrPlg-SKOabXrZi9nRZxe8/view?usp=sharing"
  },
  {
    title: "Calcudolar - Conversion app",
    description: "Calcudolar is a lightweight, mobile-friendly currency conversion tool built as a front-end only app. It fetches exchange rates from dolarApi and gives users a fast, simple interface to convert ARS to USD (at different exchange rates). The goal was a tiny, reliable tool that’s pleasant to use on phones and that demonstrates clean React patterns and API integration.",
    technologies: ["React", "Vite", "TypeScript", "API"],
    githubUrl: "https://github.com/JuanMartinRivas/calcudolar",
    liveUrl: "https://calcudolar.vercel.app/"
  },
  {
    title: "Helicopteros VIP - On-demand helicopter booking (prototype)",
    description: "Helicopteros VIP is a booking platform for helicopter rides — users browse helicopters & routes, view available slots, and book seats. The MVP focuses on reliable slot management, secure bookings, and a mobile-friendly UX.",
    technologies: ["Next.js", "Firebase", "React", "TypeScript", "Vercel"],
    githubUrl: "https://github.com/JuanMartinRivas/portfolio",
    liveUrl: "https://helis-vip.vercel.app/"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <h3 className="text-2xl mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
