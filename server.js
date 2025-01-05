const next = require("next");
const express = require("express");
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Güvenlik önlemleri
  server.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
    })
  );

  // Sıkıştırma
  server.use(compression());

  // Statik dosyalar
  server.use(express.static(path.join(__dirname, "public")));

  // API rate limiting
  const rateLimit = require("express-rate-limit");
  const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 dakika
    max: 100, // IP başına maksimum istek
  });
  server.use("/api/", apiLimiter);

  // Tüm istekleri Next.js'e yönlendir
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  // Sunucuyu başlat
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Server running on http://localhost:${port}`);
  });
});
