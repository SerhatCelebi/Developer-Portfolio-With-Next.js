import { makeAutoObservable } from "mobx";

interface SubSkill {
  name: string;
  level: number;
}

interface Skill {
  name: string;
  level: number;
  subSkills?: SubSkill[];
  isOpen?: boolean;
}

export class HomeViewModel {
  constructor() {
    makeAutoObservable(this);
  }

  title = "yourname surname";
  subtitle = "Full Stack Developer";
  description = "your desc";

  goal = "your goal";

  skills: Skill[] = [
    {
      name: "C#",
      level: 80,
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
      level: 40,
      subSkills: [
        { name: "Spring Boot", level: 30 },
        { name: "Hibernate", level: 50 },
        { name: "Apache", level: 30 },
      ],
    },
    {
      name: "Python",
      level: 50,
      subSkills: [
        { name: "Django", level: 50 },
        { name: "NumPy", level: 50 },
        { name: "Pandas", level: 40 },
        { name: "TensorFlow", level: 30 },
      ],
    },
    {
      name: "PHP",
      level: 30,
      subSkills: [
        { name: "Laravel", level: 40 },
        { name: "CodeIgniter", level: 40 },
      ],
    },
    {
      name: "JavaScript",
      level: 80,
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
      level: 70,
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

  toggleSkill(skillName: string) {
    this.skills = this.skills.map((skill) => {
      if (skill.name === skillName) {
        return { ...skill, isOpen: !skill.isOpen };
      }
      return skill;
    });
  }
}

export const homeViewModel = new HomeViewModel();
