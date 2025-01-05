import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";
import { MainLayout } from "@/features/layout/components/MainLayout";
import { homeViewModel } from "@/features/home/viewmodels/HomeViewModel";
import { FiCheckCircle } from "react-icons/fi";

const AboutPage = observer(() => {
  const certificates = [
    {
      title: "C# Sertifikası",
      year: "2021",
      platform: "Udemy",
      icon: FiCheckCircle,
    },
    {
      title: "Java Sertifikası",
      year: "2021",
      platform: "Udemy",
      icon: FiCheckCircle,
    },
    {
      title: "Komple Web Geliştirme",
      year: "2022",
      platform: "Udemy",
      icon: FiCheckCircle,
    },
    {
      title: "Unity ile Oyun Geliştirme",
      year: "2022",
      platform: "Udemy",
      icon: FiCheckCircle,
    },
    {
      title: "Asp.Net Core Api SignalR ile QR Kodlu Sipariş Yönetimi",
      year: "2024",
      platform: "Udemy",
      icon: FiCheckCircle,
    },
    {
      title: "Asp.Net Core MultiShop Mikroservis E-Ticaret Kursu",
      year: "2024",
      platform: "Udemy",
      icon: FiCheckCircle,
    },
    {
      title: "Asp.Net Core Api 8.0 Onion Architecture ile BookCar Projesi",
      year: "2024",
      platform: "Udemy",
      icon: FiCheckCircle,
    },
    {
      title: "Asp.Net Core Api - Rapid Api ve Api Consume",
      year: "2024",
      platform: "Udemy",
      icon: FiCheckCircle,
    },
  ];

  return (
    <MainLayout
      title="Hakkımda | yourname"
      description="Full Stack Developer olarak deneyimlerim ve sertifikalarım"
    >
      <div className="flex-1 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white">
              Hakkımda
            </h1>
            <div className="max-w-5xl mx-auto">
              <div className="about-card p-6 md:p-8">
                <p className="about-text text-base md:text-lg mb-6">
                  {homeViewModel.description}
                </p>
                <p className="about-text text-base md:text-lg">
                  {homeViewModel.goal}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 md:mt-16 max-w-6xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center">
              Sertifikalar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gray-900/80 backdrop-blur-lg p-4 md:p-6 rounded-lg border-2 border-blue-900/50 shadow-lg hover:bg-gray-900/90 hover:border-blue-700/70 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <cert.icon className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-white leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-400 mt-1">
                        {cert.platform} • {cert.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
});

export default AboutPage;
