const ENDPOINT = import.meta.env.VITE_REQUEST_ENDPOINT;

export async function submitRequest(form) {
  if (!ENDPOINT) {
    console.warn("No VITE_REQUEST_ENDPOINT set. Request not sent:", form);
    return { ok: true, mocked: true };
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}
