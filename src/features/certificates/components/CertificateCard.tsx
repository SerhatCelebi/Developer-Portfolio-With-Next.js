import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CertificateCardProps {
  certificate: {
    id: number;
    title: string;
    image: string;
    link?: string;
  };
}

export const CertificateCard = ({ certificate }: CertificateCardProps) => {
  const Card = ({ children }: { children: React.ReactNode }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="group relative overflow-hidden rounded-lg bg-gray-900/40 hover:bg-gray-900/60"
        style={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {children}
      </motion.div>
    );
  };

  const content = (
    <Card>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={certificate.image}
          alt={certificate.title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold text-white drop-shadow-lg">
          {certificate.title}
        </h3>
      </div>
    </Card>
  );

  if (certificate.link) {
    return (
      <Link
        href={certificate.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </Link>
    );
  }

  return content;
};
