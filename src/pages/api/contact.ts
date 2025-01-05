import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const MAIL_HOST = process.env.MAIL_HOST;
const MAIL_PORT = Number(process.env.MAIL_PORT);
const MAIL_USER = process.env.MAIL_USER;
const MAIL_PASS = process.env.MAIL_PASS;

async function verifyRecaptcha(token: string) {
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    }
  );

  const data = await response.json();
  return data.success;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message, recaptchaToken } = req.body;

    // Validasyon
    if (!name || !email || !message || !recaptchaToken) {
      return res.status(400).json({ error: "Tüm alanlar zorunludur" });
    }

    // reCAPTCHA doğrulama
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return res.status(400).json({
        error: "Robot doğrulaması başarısız oldu. Lütfen tekrar deneyin.",
      });
    }

    // Mail gönderme işlemi
    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: MAIL_PORT,
      secure: true,
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: MAIL_USER,
      to: "yourname@gmail.com",
      subject: "Yeni İletişim Formu Mesajı",
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
        <p><small>Gönderilme Tarihi: ${new Date().toLocaleString(
          "tr-TR"
        )}</small></p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    res.status(500).json({ error: "Mail gönderilemedi" });
  }
}
