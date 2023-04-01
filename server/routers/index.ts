import { t } from "../trpc";
import { userRouter } from "./users";
import { z } from "zod";

export const appRouter = t.router({
  sayBye: t.procedure.query(() => {
    return "bye";
  }),
  sayHi: t.procedure.query(() => {
    return "hi";
  }),
  logToServer: t.procedure.input(z.string()).mutation((req) => {
    console.log(`Client says: ${req.input}`);
    return true;
  }),

  users: userRouter,
});
