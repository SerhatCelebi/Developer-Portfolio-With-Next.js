import { Project, Translation, ContactForm } from "../types";

export class ApiService {
  private static instance: ApiService;
  private baseUrl: string;

  private constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  async getTranslations(): Promise<Translation> {
    const response = await fetch("/api/translations");
    return response.json();
  }

  async getProjects(): Promise<Project[]> {
    const response = await fetch("/api/projects");
    return response.json();
  }

  async submitContactForm(data: ContactForm): Promise<void> {
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}
