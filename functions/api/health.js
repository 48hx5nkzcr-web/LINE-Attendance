export async function onRequest() {
  return Response.json({
    status: "ok",
    service: "LINE Attendance API",
    version: "1.0.0"
  });
}