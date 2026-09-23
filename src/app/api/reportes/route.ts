import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as Record<string, unknown> | null;
  if (!body || !body.name || !body.email || !body.type || !body.detail || body.privacy !== "accepted") return NextResponse.json({ message: "Completa todos los campos." }, { status: 400 });
  const webhook = process.env.REPORT_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ message: "El canal de reportes todavía no está configurado. Contacta al equipo por Instagram." }, { status: 503 });
  const response = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...body, receivedAt: new Date().toISOString(), source: "experiencias-consentido-report" }), signal: AbortSignal.timeout(8000) });
  if (!response.ok) return NextResponse.json({ message: "No fue posible entregar el reporte." }, { status: 502 });
  return NextResponse.json({ message: "Reporte recibido. Revisaremos la evidencia antes de actualizar la ficha." }, { status: 201 });
}
