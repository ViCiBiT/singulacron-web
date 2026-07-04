export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  outcome: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "process-automation",
    shortTitle: "Process Automation",
    title: "Automate the repetitive. Free the operator.",
    description:
      "Manual data entry, shift handover reports, quality checklists, purchase-order workflows — we replace them with software that runs on your schedule and your rules.",
    outcome: "One client eliminated 4 hours of daily manual reporting per shift.",
    icon: "Zap",
  },
  {
    slug: "system-integration",
    shortTitle: "System Integration",
    title: "Connect the systems that never talked.",
    description:
      "ERP, MES, SCADA, WMS, spreadsheets — your data sits in silos. We build the connectors so information flows where it needs to go, in real time.",
    outcome: "Live ERP-to-floor sync replacing an overnight batch job.",
    icon: "GitMerge",
  },
  {
    slug: "data-streaming",
    shortTitle: "Data Streaming",
    title: "Factory-floor data to executive desk in seconds.",
    description:
      "OPC-UA, MQTT, Modbus, REST — we pull from any source and stream it into dashboards, alerts, and downstream systems without middleware bloat.",
    outcome: "Sub-5-second latency from sensor read to dashboard update.",
    icon: "Activity",
  },
  {
    slug: "analytics-dashboards",
    shortTitle: "Analytics & Dashboards",
    title: "Scattered data into decisions you can act on.",
    description:
      "We build operational dashboards that show the right numbers to the right people — OEE, scrap rates, order status, downtime root causes — without the noise.",
    outcome: "One dashboard replacing three manual weekly reports.",
    icon: "BarChart3",
  },
];
