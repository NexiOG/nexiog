import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const appRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string() }).optional())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? 'world'} from tRPC`,
      };
    }),
});

export type AppRouter = typeof appRouter;
