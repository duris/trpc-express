import { createTRPCProxyClient, loggerLink } from "@trpc/client";
import { httpBatchLink } from "@trpc/client";
import { AppRouter } from "../../server/api";

const client = createTRPCProxyClient<AppRouter>({
  links: [
    loggerLink(),
    httpBatchLink({
      url: "http://localhost:3000/trpc",
      // headers: { Authorization: "Insert Bearer Token" },
    }),
  ],
});

async function main() {
  const result = await client.secretData.query();
  console.log(result);
}

main();
