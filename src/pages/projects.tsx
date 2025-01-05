import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";
import { MainLayout } from "@/features/layout/components/MainLayout";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projectsViewModel } from "@/features/projects/viewmodels/ProjectsViewModel";

const ProjectsPage = observer(() => {
  const sortedProjects = [...projectsViewModel.projects].sort(
    (a, b) => parseInt(b.year) - parseInt(a.year)
  );

  return (
    <MainLayout
      title="Projeler | yourname"
      description="Full Stack Developer olarak geliştirdiğim projeler"
    >
      <div className="flex-1 py-8 md:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-white"
          >
            Projelerim
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {sortedProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 shadow-lg overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="inline-flex text-sm text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-300 text-base md:text-lg mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-sm md:text-base text-gray-300 bg-gray-950/80 px-3 py-1 rounded-full border border-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-white transition-colors group"
                      >
                        <FiGithub className="w-5 h-5 mr-2" />
                        <span className="text-base md:text-lg">GitHub</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-white transition-colors group"
                      >
                        <FiExternalLink className="w-5 h-5 mr-2" />
                        <span className="text-base md:text-lg">Demo</span>
                      </a>
                    )}
                    {!project.githubUrl && !project.liveUrl && (
                      <span className="text-sm md:text-base text-gray-500 italic">
                        Özel Proje
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
});

export default ProjectsPage;
