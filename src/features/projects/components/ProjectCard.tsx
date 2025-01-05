import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    githubUrl: string;
    technologies: string[];
  };
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="project-card p-6 flex flex-col h-full"
    >
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="flex flex-wrap gap-3 mb-6">
        {project.technologies.map((tech, index) => (
          <span key={index} className="project-tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <Link
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-lg text-gray-300 hover:text-white transition-colors mt-auto group"
      >
        <FiGithub className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
        <span>GitHub'da Görüntüle</span>
      </Link>
    </motion.div>
  );
};
