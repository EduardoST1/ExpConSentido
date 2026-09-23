import { NextResponse } from "next/server";

const required = ["name", "email", "phone", "role", "experience", "category", "zone", "description", "impact", "authorization", "privacy"] as const;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try { body = await request.json() as Record<string, unknown>; }
  catch { return NextResponse.json({ message: "El formato enviado no es válido." }, { status: 400 }); }

  if (body.company) return NextResponse.json({ message: "Solicitud descartada." }, { status: 400 });
  if (required.some((key) => typeof body[key] !== "string" || !(body[key] as string).trim())) {
    return NextResponse.json({ message: "Completa todos los campos y consentimientos." }, { status: 400 });
  }
  if (!String(body.email).includes("@")) return NextResponse.json({ message: "Revisa el correo electrónico." }, { status: 400 });

  const webhook = process.env.APPLICATION_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ message: "El canal de recepción todavía no está configurado. Contacta al equipo por Instagram para continuar." }, { status: 503 });
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...body, source: "experiencias-consentido-web", receivedAt: new Date().toISOString() }),
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) return NextResponse.json({ message: "El servicio de recepción no respondió. Intenta nuevamente más tarde." }, { status: 502 });
  return NextResponse.json({ message: "Te contactaremos después de revisar que la información esté completa." }, { status: 201 });
}
