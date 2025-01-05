import { makeAutoObservable, action, runInAction } from "mobx";

interface ContactForm {
  name: string;
  email: string;
  message: string;
  recaptchaToken?: string;
}

const RECAPTCHA_SITE_KEY = "your key";

export class ContactViewModel {
  form: ContactForm = {
    name: "",
    email: "",
    message: "",
  };
  loading = false;
  success = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setField = action((field: keyof ContactForm, value: string) => {
    this.form[field] = value;
  });

  setRecaptchaToken = action((token: string) => {
    this.form.recaptchaToken = token;
  });

  resetForm = action(() => {
    this.form = {
      name: "",
      email: "",
      message: "",
    };
    this.error = null;
  });

  submitForm = action(async () => {
    if (!this.form.recaptchaToken) {
      runInAction(() => {
        this.error = "Lütfen robot olmadığınızı doğrulayın.";
      });
      return;
    }

    runInAction(() => {
      this.loading = true;
      this.error = null;
      this.success = false;
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Form gönderilemedi");
      }

      runInAction(() => {
        this.success = true;
      });

      setTimeout(() => {
        runInAction(() => {
          this.resetForm();
        });
      }, 1000);
    } catch (error) {
      console.error("Form gönderme hatası:", error);
      runInAction(() => {
        this.error =
          error instanceof Error
            ? error.message
            : "Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan yourmail@yournameyoursurname.com adresine mail gönderin.";
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  });
}

export const contactViewModel = new ContactViewModel();
