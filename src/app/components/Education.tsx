import { Calendar, GraduationCap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const educationData = [
  {
    degree: "Codo a Codo 4.0 - Front End Development Bootcamp",
    institution: "Government of Buenos Aires",
    period: "2024",
    description: "Intensive 6-month program covering modern web technologies and frameworks.",
    achievements: [
      "Built several front-end applications",
      "Learned React, Node.js, and Typescript",
      "Collaborative team projects"
    ]
  },
  {
    degree: "Full Stack Web Development Courses",
    institution: "freeCodeCamp && The Odin Project",
    period: "2022 - 2025",
    description: "A series of free courses in which I learned about web development.",
    achievements: [
      "Built several full-stack applications",
      "Learned React, Git, Databases, etc",
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Education</h2>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <Card key={index} className="border-l-4 border-l-purple-600">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg shrink-0">
                      <GraduationCap size={24} className="text-purple-600" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl mb-2">{edu.degree}</h3>
                      <div className="text-lg text-gray-600 mb-2">{edu.institution}</div>
                      <div className="flex items-center gap-2 text-gray-500 mb-4">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <p className="text-gray-700 mb-4">{edu.description}</p>

                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
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
