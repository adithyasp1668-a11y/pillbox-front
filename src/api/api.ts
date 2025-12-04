// src/api/api.ts (example)
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5184";

export async function apiGET(path: string) {
  const res = await fetch(API_BASE + path);
  if (!res.ok) throw new Error("Fetch error");
  return res.json();
}

export async function apiPOST(path: string, body: any) {
  const res = await fetch(API_BASE + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("POST failed");
  return res.json();
}
