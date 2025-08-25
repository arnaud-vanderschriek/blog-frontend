const LOGIN_URL = import.meta.env.VITE_API_URL_LOGIN;

export async function getConnected(login) {
  const res = await fetch(`${LOGIN_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(login),
  });

  return res.json();
}
