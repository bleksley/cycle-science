import { NextResponse } from "next/server";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  riderType: z.enum(["local", "international"]),
  destination: z.string().optional(),
  message: z.string().min(10, "Please include a few details about your trip"),
});

async function sendViaResend(payload: z.infer<typeof enquirySchema>) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey || !to) return false;

  const body = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone ?? "—"}`,
    `Rider type: ${payload.riderType}`,
    `Destination: ${payload.destination || "—"}`,
    "",
    payload.message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Cycle Science enquiry — ${payload.name}`,
      text: body,
      reply_to: payload.email,
    }),
  });

  return res.ok;
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = enquirySchema.safeParse(json);

    if (!parsed.success) {
      const first = parsed.error.issues[0]?.message ?? "Invalid form data";
      return NextResponse.json({ error: first }, { status: 400 });
    }

    const sent = await sendViaResend(parsed.data);

    if (!sent) {
      console.info("[enquiry]", JSON.stringify(parsed.data, null, 2));
    }

    return NextResponse.json({ ok: true, emailed: sent });
  } catch {
    return NextResponse.json(
      { error: "Unable to process enquiry. Please try again." },
      { status: 500 },
    );
  }
}
