"use client";

import { useReportWebVitals } from "next/web-vitals";
import posthog from "posthog-js";

export function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    posthog.capture("web_vital", {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      id: metric.id,
    });
  });

  return null;
}
