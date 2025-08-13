import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/time", (_req, res) => {
  const now = new Date();
  res.json({
    iso: now.toISOString(),
    time: now.toTimeString().split(" ")[0],
    local: now.toLocaleString("es-AR", { hour12: false }),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  });
});

app.get("/", (_req, res) => res.send("OK"));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});
