import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import { MainLayout } from "@/features/layout/components/MainLayout";
import { projectsViewModel } from "@/features/projects/viewmodels/ProjectsViewModel";

const ProjectDetailPage = observer(() => {
  const router = useRouter();
  const { id } = router.query;
  const project = projectsViewModel.projects.find((p) => p.id === Number(id));

  if (!project) return null;

  return (
    <MainLayout title={`${project.title} | yourname yoursurname`}>
      <div className="container mx-auto px-4 py-8">
        <div className="glass-card p-6 rounded-lg">
          <h1 className="text-3xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              GitHub'da Görüntüle
            </a>
          )}
        </div>
      </div>
    </MainLayout>
  );
});

export default ProjectDetailPage;
