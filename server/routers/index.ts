import { adminProcedure, t } from "../trpc";
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
  secretData: adminProcedure.query(({ ctx }) => {
    console.log(ctx.user);
    return "Super top secret admin data";
  }),

  users: userRouter,
});
