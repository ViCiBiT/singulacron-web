import * as Sentry from "@sentry/nextjs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    throw new Error("Sentry test error — safe to ignore, triggered manually to verify wiring");
  } catch (error) {
    Sentry.captureException(error);
    await Sentry.flush(2000);
    return NextResponse.json({ ok: true, message: "test error sent to Sentry" });
  }
}
