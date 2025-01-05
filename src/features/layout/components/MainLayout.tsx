import { ReactNode, useEffect, useRef, useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogType?: string;
}

export const MainLayout = ({
  children,
  title = "yourname surname | Full Stack Developer",
  description = "desc.",
  keywords = "keywords",
  ogType = "website",
}: MainLayoutProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col relative home-gradient overflow-hidden"
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="yourname yoursurname" />
        <meta name="contact" content="yourmail@yournameyoursurname.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="yourname yoursurname" />
        <meta property="og:url" content="https://yournameyoursurname.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:domain" content="yournameyoursurname.com" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <link rel="canonical" href="https://yournameyoursurname.com" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col min-h-screen"
      >
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(56,189,248,0.15) 0%,
                  rgba(139,92,246,0.15) 30%,
                  transparent 50%
                ),
                conic-gradient(from ${mousePosition.x}deg at ${mousePosition.x}px ${mousePosition.y}px,
                  rgba(56,189,248,0.1),
                  rgba(139,92,246,0.1),
                  rgba(56,189,248,0.1)
                )
              `,
            }}
            animate={{
              background: [
                `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(56,189,248,0.15) 0%,
                  rgba(139,92,246,0.15) 30%,
                  transparent 50%
                ),
                conic-gradient(from 0deg at ${mousePosition.x}px ${mousePosition.y}px,
                  rgba(56,189,248,0.1),
                  rgba(139,92,246,0.1),
                  rgba(56,189,248,0.1)
                )`,
                `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(56,189,248,0.15) 0%,
                  rgba(139,92,246,0.15) 30%,
                  transparent 50%
                ),
                conic-gradient(from 360deg at ${mousePosition.x}px ${mousePosition.y}px,
                  rgba(56,189,248,0.1),
                  rgba(139,92,246,0.1),
                  rgba(56,189,248,0.1)
                )`,
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>

        <Navbar />
        <main className="flex-1 flex flex-col relative pt-20">
          <div className="pattern pattern-dots opacity-[0.08] fixed inset-0 z-0" />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
        </main>
      </motion.div>
    </div>
  );
};
