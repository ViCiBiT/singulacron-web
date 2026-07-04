export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Do you sell off-the-shelf software?",
    answer:
      "No. Every engagement is a custom build shaped around how your operation actually runs. We start by mapping your workflows before writing a single line of code.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Scope determines timeline. A focused automation — one workflow, one system — typically ships in 6–10 weeks. Multi-system integrations with dashboards run 3–6 months. We scope before we start.",
  },
  {
    question: "We already have an ERP. Can you work with it?",
    answer:
      "Yes. We integrate with SAP, Sage, Syspro, Microsoft Dynamics, Odoo, and custom ERP systems via API, database connection, or file exchange — whichever the system supports.",
  },
  {
    question: "Who maintains the software after delivery?",
    answer:
      "We offer ongoing support and maintenance contracts. You can also take ownership — we document everything and hand over source code at the end of every project.",
  },
  {
    question: "Do you work on-site?",
    answer:
      "For factory-floor integrations, yes. We visit the plant, map the equipment, and test against live systems. For pure software projects we work remotely with regular check-ins.",
  },
];
