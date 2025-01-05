import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiUser, FiCode, FiBriefcase, FiMail } from "react-icons/fi";
import { homeViewModel } from "@/features/home/viewmodels/HomeViewModel";
import { MainLayout } from "@/features/layout/components/MainLayout";

const HomePage = observer(() => {
  return (
    <MainLayout
      title="Ana Sayfa | Portfolio"
      description="Yazılım geliştirici portfolio sitesi ana sayfası"
    >
      <div className="flex-1 flex items-start pt-8 md:pt-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto mb-8"
            >
              <div className="w-56 h-[22rem] md:w-64 md:h-[26rem] relative mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-md transform rotate-[3deg] scale-105 blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-md transform -rotate-[3deg] scale-105 blur-sm" />
                <div className="relative w-full h-full rounded-[16px] overflow-hidden border border-white/[0.02] shadow-[0_0_10px_rgba(0,0,0,0.1)] backdrop-blur-[2px]">
                  <Image
                    src="/images/profile.jpg"
                    alt="yourname yoursurname"
                    fill
                    priority
                    className="object-cover object-center scale-95 rounded-[16px]"
                    sizes="(max-width: 768px) 224px, 256px"
                    loading="eager"
                    quality={100}
                  />
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              {homeViewModel.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl mb-8"
            >
              Bilgisayar Mühendisi
            </motion.p>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                { href: "/about", icon: FiUser, text: "Hakkımda" },
                { href: "/skills", icon: FiCode, text: "Becerilerim" },
                { href: "/projects", icon: FiBriefcase, text: "Projelerim" },
                { href: "/contact", icon: FiMail, text: "İletişim" },
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.08 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={item.href}
                    className="glass-card px-6 py-3 rounded-xl flex items-center space-x-2 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <item.icon className="w-5 h-5 transition-colors duration-300 group-hover:text-blue-400" />
                    <span>{item.text}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
});

export default HomePage;
