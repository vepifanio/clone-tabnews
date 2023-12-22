test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();

  expect(responseBody).toEqual({
    updated_at: parsedUpdatedAt,
    dependencies: {
      database: {
        version: "16.1",
        max_connections: expect.any(Number),
        opened_connections: 1,
      },
    },
  });
});
