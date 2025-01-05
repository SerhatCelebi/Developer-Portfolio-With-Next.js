import { makeAutoObservable } from "mobx";

interface Skill {
  name: string;
  level: number;
  subSkills?: { name: string; level: number }[];
}

export class SkillsViewModel {
  skills: Skill[] = [
    {
      name: "C#",
      level: 90,
      subSkills: [
        { name: "ASP.NET Core", level: 80 },
        { name: "Entity Framework Core", level: 70 },
        { name: "MVC", level: 80 },
        { name: "Design Patterns", level: 60 },
        { name: "REST Web API", level: 70 },
        { name: "SignalR", level: 50 },
        { name: "Identity", level: 60 },
        { name: "Swagger", level: 70 },
      ],
    },
    {
      name: "Java",
      level: 75,
      subSkills: [
        { name: "Spring Boot", level: 30 },
        { name: "Hibernate", level: 50 },
        { name: "Apache", level: 30 },
      ],
    },
    {
      name: "Python",
      level: 70,
      subSkills: [
        { name: "Django", level: 50 },
        { name: "NumPy", level: 50 },
        { name: "Pandas", level: 40 },
        { name: "TensorFlow", level: 30 },
      ],
    },
    {
      name: "PHP",
      level: 65,
      subSkills: [
        { name: "Laravel", level: 40 },
        { name: "CodeIgniter", level: 40 },
      ],
    },
    {
      name: "JavaScript",
      level: 85,
      subSkills: [
        { name: "jQuery", level: 70 },
        { name: "Node.js", level: 50 },
        { name: "Express", level: 40 },
        { name: "React", level: 60 },
        { name: "Next.js", level: 50 },
      ],
    },
    {
      name: "SQL",
      level: 80,
      subSkills: [
        { name: "MS SQL", level: 80 },
        { name: "MySQL", level: 60 },
        { name: "PostgreSQL", level: 50 },
        { name: "Oracle", level: 40 },
        { name: "MongoDB", level: 40 },
      ],
    },
    {
      name: "Git",
      level: 80,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  getSkillLevel(skillName: string): number {
    const skill = this.skills.find((s) => s.name === skillName);
    return skill?.level || 0;
  }

  getSubSkills(skillName: string) {
    const skill = this.skills.find((s) => s.name === skillName);
    return skill?.subSkills || [];
  }
}

export const skillsViewModel = new SkillsViewModel();
