export type FloorVisual = {
  key: string;
  title: string;
  caption: string;
  /** Composition variant rendered when no image is provided */
  variant: "floor" | "flow" | "desk";
  /** Optional real photo (place under public/images/) — swaps in for the abstract composition */
  image?: string;
};

export const floorVisuals: FloorVisual[] = [
  {
    key: "floor",
    title: "On the line",
    caption: "Sensor reads captured at the machine, not typed at a desk.",
    variant: "floor",
    image: "/images/floor-line.jpg",
  },
  {
    key: "flow",
    title: "Through one pipeline",
    caption: "Floor, ERP, and warehouse data moving without middleware.",
    variant: "flow",
    image: "/images/pipeline.jpg",
  },
  {
    key: "desk",
    title: "Onto one screen",
    caption: "The numbers that decide the shift, live on one dashboard.",
    variant: "desk",
    image: "/images/control-desk.jpg",
  },
];
