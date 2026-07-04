export type Technology = {
  name: string;
  category: string;
};

export const technologies: Technology[] = [
  { name: "Python", category: "Backend" },
  { name: "TypeScript", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "PostgreSQL", category: "Data" },
  { name: "TimescaleDB", category: "Data" },
  { name: "Redis", category: "Data" },
  { name: "MQTT", category: "Industrial" },
  { name: "OPC-UA", category: "Industrial" },
  { name: "Modbus", category: "Industrial" },
  { name: "REST APIs", category: "Integration" },
  { name: "Webhooks", category: "Integration" },
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Docker", category: "Infrastructure" },
  { name: "Linux", category: "Infrastructure" },
];
