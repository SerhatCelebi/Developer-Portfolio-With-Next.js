import { motion } from "framer-motion";

interface SkillItemProps {
  name: string;
  percentage: number;
}

export const SkillItem = ({ name, percentage }: SkillItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="skill-item"
    >
      <div className="flex justify-between items-center">
        <h3 className="skill-name">{name}</h3>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-bar-container">
        <div className="skill-bar-wrapper">
          <div className="skill-bar" style={{ width: `${percentage}%` }} />
        </div>
      </div>
    </motion.div>
  );
};
