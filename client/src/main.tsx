import { createTRPCProxyClient } from "@trpc/client";
import { httpBatchLink } from "@trpc/client";
import { AppRouter } from "../../server/api";

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
});

async function main() {
  const result = await client.users.getUser.query({ userId: "12324" });
  console.log(result);

  const log = await client.logToServer.mutate("hello");
  console.log(log);

  const result2 = await client.sayBye.query();
  console.log(result2);
}

main();
