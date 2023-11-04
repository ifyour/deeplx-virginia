import fastify from "fastify";
import { http } from "@ampt/sdk";

const app = fastify();

app.get("/", (_request, reply) => {
  reply.send({ hello: "world" });
});

http.node.use(app);
