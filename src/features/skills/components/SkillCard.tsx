import React from "react";
import { motion } from "framer-motion";

interface SubSkill {
  name: string;
  level: number;
}

interface Skill {
  name: string;
  level: number;
  subSkills?: SubSkill[];
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="skill-card rounded-lg p-6"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="skill-title">{skill.name}</h3>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="h-2 bg-blue-900/30 rounded-full overflow-hidden mb-4">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="skill-progress h-full rounded-full"
        />
      </div>
      {skill.subSkills && skill.subSkills.length > 0 && (
        <div className="space-y-3 mt-4">
          {skill.subSkills.map((subSkill, index) => (
            <div key={index} className="skill-content">
              <div className="flex justify-between items-center mb-2">
                <span className="skill-subtitle">{subSkill.name}</span>
                <span className="skill-percentage">{subSkill.level}%</span>
              </div>
              <div className="h-1.5 bg-blue-900/30 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${subSkill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  className="skill-progress h-full rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default SkillCard;
