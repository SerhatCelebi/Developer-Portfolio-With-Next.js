import { MainLayout } from "@/features/layout/components/MainLayout";
import { motion } from "framer-motion";
import { ContactForm } from "@/features/contact/components/ContactForm";

const ContactPage = () => {
  return (
    <MainLayout
      title="İletişim | yourname "
      description="Benimle iletişime geçin"
    >
      <div className="flex-1 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <h1 className="text-4xl font-bold text-center mb-12 text-white">
              İletişim
            </h1>
            <div className="max-w-4xl mx-auto">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
