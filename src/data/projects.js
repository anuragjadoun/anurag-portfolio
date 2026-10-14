// Add a new project by copying one object and filling in its details.
// For GitHub, use the direct repository URL (not just your profile).
const projects = [
  {
    name: "BingeBuddy",
    type: "AI · Movie Recommendations",
    description: "An AI-powered movie recommendation app that uses semantic similarity and natural-language interaction to help people discover what to watch.",
    technologies: ["Java", "Spring Boot", "Spring AI", "Gemini API", "Vector Embeddings"],
    liveUrl: "https://binge-buddy-eight.vercel.app/",
    githubUrl: "https://github.com/anuragjadoun",
    symbol: "BB",
    theme: "purple",
  },
  {
    name: "SummarizeAI",
    type: "Generative AI · Text Summarization",
    description: "A Generative AI application that transforms user-provided text into concise summaries using Spring Boot, Spring AI, and Gemini.",
    technologies: ["Java", "Spring Boot", "Spring AI", "Gemini API", "LLMs"],
    liveUrl: "https://gen-ai-chatbot-wheat.vercel.app/",
    githubUrl: "https://github.com/anuragjadoun",
    symbol: "AI",
    theme: "blue",
  },
  {
    name: "NoCollege",
    type: "Full Stack · Microservices",
    description: "A resource-sharing platform for students with secure study-material workflows, JWT authentication, email verification, and a notification microservice.",
    technologies: ["React", "Spring Boot", "MySQL", "Docker", "Microservices"],
    liveUrl: "https://no-college-docker-43bv.vercel.app/",
    githubUrl: "https://github.com/anuragjadoun",
    symbol: "NC",
    theme: "orange",
  },
  {
    name: "Digital Campus Management",
    type: "Full Stack · Academic Management",
    description: "A full-stack academic management system for managing students, faculty, courses, and academic activities with role-based access.",
    technologies: ["React", "Spring Boot", "MySQL", "JWT", "REST APIs"],
    liveUrl: "",
    githubUrl: "https://github.com/anuragjadoun",
    symbol: "DC",
    theme: "green",
  },
];

export default projects;