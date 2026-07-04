export type Industry = {
  slug: string;
  name: string;
  description: string;
  pain: string;
  icon: string;
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description: "Discrete and process manufacturing operations.",
    pain: "Production data trapped in paper, spreadsheets, and aging MES systems.",
    icon: "Factory",
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    description: "Food production, processing, and packaging facilities.",
    pain: "Compliance records scattered across shifts, traceability gaps at audit time.",
    icon: "UtensilsCrossed",
  },
  {
    slug: "logistics",
    name: "Logistics & Distribution",
    description: "Warehousing, 3PL, and distribution operations.",
    pain: "WMS and TMS that don't speak to each other, orders falling through the cracks.",
    icon: "Truck",
  },
  {
    slug: "plastics-rubber",
    name: "Plastics & Rubber",
    description: "Injection moulding, extrusion, and compounding plants.",
    pain: "Machine parameters logged by hand, defect patterns invisible until reject rates spike.",
    icon: "Layers",
  },
  {
    slug: "metal-fabrication",
    name: "Metal Fabrication",
    description: "Machining, welding, stamping, and forming shops.",
    pain: "Job tracking via whiteboards, no live view of WIP or machine utilisation.",
    icon: "Wrench",
  },
  {
    slug: "agri-processing",
    name: "Agri-Processing",
    description: "Grain handling, milling, and agricultural processing.",
    pain: "Seasonal throughput spikes expose manual bottlenecks in intake and dispatch.",
    icon: "Sprout",
  },
];
