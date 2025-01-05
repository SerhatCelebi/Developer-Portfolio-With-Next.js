import { observer } from "mobx-react-lite";
import { motion, AnimatePresence } from "framer-motion";
import { MainLayout } from "@/features/layout/components/MainLayout";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const SkillsPage = () => {
  const [openSkills, setOpenSkills] = useState<string[]>([]);

  const skills = [
    {
      name: "C#",
      percentage: 80,
      subSkills: [
        { name: "C#", level: 80 },
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
      percentage: 40,
      subSkills: [
        { name: "Java", level: 40 },
        { name: "Spring Boot", level: 30 },
        { name: "Hibernate", level: 50 },
        { name: "Apache", level: 30 },
      ],
    },
    {
      name: "Python",
      percentage: 50,
      subSkills: [
        { name: "Python", level: 50 },
        { name: "Django", level: 50 },
        { name: "NumPy", level: 50 },
        { name: "Pandas", level: 40 },
        { name: "TensorFlow", level: 30 },
      ],
    },
    {
      name: "PHP",
      percentage: 30,
      subSkills: [
        { name: "PHP", level: 30 },
        { name: "Laravel", level: 40 },
        { name: "CodeIgniter", level: 40 },
      ],
    },
    {
      name: "JavaScript",
      percentage: 80,
      subSkills: [
        { name: "JavaScript", level: 80 },
        { name: "jQuery", level: 70 },
        { name: "Node.js", level: 50 },
        { name: "Express", level: 40 },
        { name: "React", level: 60 },
        { name: "Next.js", level: 50 },
      ],
    },
    {
      name: "SQL",
      percentage: 70,
      subSkills: [
        { name: "SQL", level: 70 },
        { name: "MS SQL", level: 80 },
        { name: "MySQL", level: 60 },
        { name: "PostgreSQL", level: 50 },
        { name: "Oracle", level: 40 },
        { name: "MongoDB", level: 40 },
      ],
    },
  ];

  const toggleSkill = (skillName: string) => {
    setOpenSkills((prev) =>
      prev.includes(skillName)
        ? prev.filter((name) => name !== skillName)
        : [...prev, skillName]
    );
  };

  return (
    <MainLayout
      title="Becerilerim | yourname "
      description="Yazılım geliştirme becerilerim ve deneyimlerim"
    >
      <div className="flex-1 py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <h1 className="text-4xl font-bold text-center mb-12 text-white">
              Becerilerim
            </h1>
            K
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-lg rounded-xl border border-blue-900/30 overflow-hidden hover:border-blue-700/50 transition-all duration-300"
                >
                  <div
                    className="p-6 cursor-pointer hover:bg-gray-700/20 transition-colors duration-300"
                    onClick={() => toggleSkill(skill.name)}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-white">
                        {skill.name}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-lg text-blue-400 font-semibold">
                          {skill.percentage}%
                        </span>
                        <motion.div
                          animate={{
                            rotate: openSkills.includes(skill.name) ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <FiChevronDown className="w-6 h-6 text-blue-400" />
                        </motion.div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-900/30 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="skill-bar"
                      />
                    </div>
                  </div>

                  <AnimatePresence>
                    {openSkills.includes(skill.name) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-blue-900/30 bg-gray-900/20"
                      >
                        <div className="p-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {skill.subSkills.map((subSkill, subIndex) => (
                              <motion.div
                                key={subSkill.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: subIndex * 0.1,
                                }}
                                className="hover:bg-gray-800/20 rounded-lg p-4 transition-colors duration-300"
                              >
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-gray-200 font-medium">
                                    {subSkill.name}
                                  </span>
                                  <span className="text-blue-400 font-semibold">
                                    {subSkill.level}%
                                  </span>
                                </div>
                                <div className="w-full bg-gray-900/30 rounded-full h-2 overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${subSkill.level}%` }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="skill-bar-sub"
                                  />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SkillsPage;
