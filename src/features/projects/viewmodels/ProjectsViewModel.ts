import { makeAutoObservable } from "mobx";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  year: string;
}

export class ProjectsViewModel {
  projects: Project[] = [
    {
      id: 1,
      title: "",
      description: "",
      year: "2021",
      technologies: ["C#", "ASP.NET", "MVC", "SQL Server", "Bootstrap"],
      imageUrl: "",
      githubUrl: "",
    },
    {
      id: 2,
      title: "Asansör Algoritması Yazılımı",
      description: "",
      year: "2022",
      technologies: [
        "C Programlama",
        "DOS",
        "PLC",
        "Serial Communication",
        "EEPROM",
        "FIFO",
      ],
      imageUrl: "",
    },
    {
      id: 3,
      title: "",
      description: "",
      year: "2022",
      technologies: ["Unity", "C#", "3D Modelleme", "Mobil Oyun Geliştirme"],
      imageUrl: "/images/projects/touch-and-bomb.png",
      githubUrl: "",
    },
    {
      id: 4,
      title: "",
      description: "",
      year: "2023",
      technologies: [
        "C#",
        "Unity",
        "Unity Packages",
        "3D Core",
        "Unity Scenes",
      ],
      imageUrl: "",
      githubUrl: "",
    },
    {
      id: 5,
      title: "E-Trade MVC Sitesi",
      description: "",
      year: "2023",
      technologies: [
        "C#",
        "ASP.NET Core",
        "MVC",
        "Entity Framework",
        "SQL Server",
      ],
      imageUrl: "",
    },
    {
      id: 6,
      title: "SignalR Restaurant Otomasyonu",
      description: "",
      year: "2024",
      technologies: [
        "ASP.NET Core 6.0",
        "ASP.NET Core API",
        "SignalR",
        "Swagger",
        "DTO",
        "N-Tier Architecture",
        "MSSQL",
        "HTML CSS Bootstrap",
        "JavaScript",
        "Ajax",
        "Entity Framework - LINQ",
      ],
      imageUrl: "",
      githubUrl: "",
    },
    {
      id: 7,
      title: "E-Trade Multishop",
      description: "Mikroservis ",
      year: "2025",
      technologies: [
        "ASP.NET Core API",
        "Redis",
        "Dapper",
        "Docker",
        "MongoDB",
        "Identity Server",
        "API Gateway",
        "Swagger",
        "Onion Architecture",
        "CQRS Pattern",
        "Mediator Pattern",
        "JWT",
        "Ajax",
        "Repository Pattern",
      ],
      imageUrl: "",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  getProjectById(id: number) {
    return this.projects.find((p) => p.id === id);
  }

  getProjectsByYear(year: string) {
    return this.projects.filter((p) => p.year === year);
  }
}

export const projectsViewModel = new ProjectsViewModel();
