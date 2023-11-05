import fastify from "fastify";
import { http } from "@ampt/sdk";
import { query } from "@ifyour/deeplx";

const app = fastify();

app.get("/", async (_request, reply) => {
  reply.send("hello, ampt!");
});

app.post("/translate", async (_request, reply) => {
  reply.send(await query(_request.body));
});

http.node.use(app);
