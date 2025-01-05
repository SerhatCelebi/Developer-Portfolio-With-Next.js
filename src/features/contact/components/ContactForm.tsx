import { useRef } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { observer } from "mobx-react-lite";
import { contactViewModel } from "../viewmodels/ContactViewModel";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

const showSuccessMessage = (name: string) => {
  toast.custom(
    (t) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full bg-gradient-to-r from-green-500 to-green-600 shadow-2xl rounded-lg pointer-events-auto p-8 z-[9999]`}
      >
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <div className="h-14 w-14 rounded-full bg-green-600 flex items-center justify-center">
              <span className="text-4xl">✓</span>
            </div>
          </div>
          <div className="ml-4 flex-1">
            <p className="text-2xl font-medium text-white">
              Teşekkürler {name}!
            </p>
            <p className="mt-2 text-white text-lg">
              Mesajınız başarıyla gönderildi. En kısa sürede size dönüş
              yapacağım.
            </p>
          </div>
        </div>
      </motion.div>
    ),
    {
      duration: 2000,
    }
  );
};

export const ContactForm = observer(() => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = recaptchaRef.current?.getValue();
      if (!token) {
        toast.custom(
          (t) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full bg-gradient-to-r from-red-500 to-red-600 shadow-2xl rounded-lg pointer-events-auto p-8 z-[9999]`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <div className="h-14 w-14 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-4xl">🔌</span>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-2xl font-medium text-white">
                    Bağlantı Hatası
                  </p>
                  <p className="mt-2 text-white text-lg">
                    Bir bağlantı hatası oluştu. Lütfen internet bağlantınızı
                    kontrol edip tekrar deneyin.
                  </p>
                </div>
              </div>
            </motion.div>
          ),
          {
            duration: 2000,
          }
        );
        return;
      }

      contactViewModel.setRecaptchaToken(token);
      await contactViewModel.submitForm();

      if (contactViewModel.success) {
        showSuccessMessage(contactViewModel.form.name);
        recaptchaRef.current?.reset();
      } else if (contactViewModel.error) {
        toast.custom(
          (t) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full bg-gradient-to-r from-red-500 to-red-600 shadow-2xl rounded-lg pointer-events-auto p-8 z-[9999]`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <div className="h-14 w-14 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-4xl">❌</span>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-2xl font-medium text-white">Hata Oluştu</p>
                  <p className="mt-2 text-white text-lg">
                    {contactViewModel.error}
                  </p>
                </div>
              </div>
            </motion.div>
          ),
          {
            duration: 2000,
          }
        );
      }
    } catch (error) {
      toast.custom(
        (t) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full bg-gradient-to-r from-red-500 to-red-600 shadow-2xl rounded-lg pointer-events-auto p-8 z-[9999]`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <div className="h-14 w-14 rounded-full bg-red-600 flex items-center justify-center">
                  <span className="text-4xl">🔌</span>
                </div>
              </div>
              <div className="ml-4 flex-1">
                <p className="text-2xl font-medium text-white">
                  Bağlantı Hatası
                </p>
                <p className="mt-2 text-white text-lg">
                  Bir bağlantı hatası oluştu. Lütfen internet bağlantınızı
                  kontrol edip tekrar deneyin.
                </p>
              </div>
            </div>
          </motion.div>
        ),
        {
          duration: 2000,
        }
      );
      console.error("Form gönderme hatası:", error);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-2xl mx-auto px-4 sm:px-6"
    >
      <div className="relative">
        <label
          htmlFor="name"
          className="block text-base md:text-lg text-white mb-2"
        >
          Ad Soyad
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={contactViewModel.form.name}
          onChange={(e) => contactViewModel.setField("name", e.target.value)}
          required
          className="contact-input text-base md:text-lg py-3 md:py-4"
          placeholder="Adınız ve soyadınız"
          disabled={contactViewModel.loading}
        />
      </div>

      <div className="relative">
        <label
          htmlFor="email"
          className="block text-base md:text-lg text-white mb-2"
        >
          E-posta
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={contactViewModel.form.email}
          onChange={(e) => contactViewModel.setField("email", e.target.value)}
          required
          className="contact-input text-base md:text-lg py-3 md:py-4"
          placeholder="E-posta adresiniz"
          disabled={contactViewModel.loading}
        />
      </div>

      <div className="relative">
        <label
          htmlFor="message"
          className="block text-base md:text-lg text-white mb-2"
        >
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          value={contactViewModel.form.message}
          onChange={(e) => contactViewModel.setField("message", e.target.value)}
          required
          className="contact-textarea text-base md:text-lg py-3 md:py-4"
          placeholder="Mesajınızı yazın"
          rows={6}
          disabled={contactViewModel.loading}
        />
      </div>

      <div className="flex justify-center mb-4 transform scale-90 md:scale-100">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={RECAPTCHA_SITE_KEY}
          theme="dark"
          size="normal"
        />
      </div>

      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={contactViewModel.loading}
          className={`w-full py-3 md:py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-base md:text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
            contactViewModel.loading ? "opacity-75 cursor-not-allowed" : ""
          }`}
        >
          {contactViewModel.loading ? "Gönderiliyor..." : "Gönder"}
        </motion.button>
      </div>
    </motion.form>
  );
});
