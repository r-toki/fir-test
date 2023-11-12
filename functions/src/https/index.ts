import * as Cors from "cors";
import type { Request, Response } from "express";
import { onRequest } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2/options";

import { sleep } from "~/utils";

setGlobalOptions({
  region: "asia-northeast1",
  invoker: "public",
});

const cors = Cors({ origin: true });

function appOnRequest(fn: (req: Request, res: Response) => void | Promise<void>) {
  return onRequest((req, res) =>
    cors(req, res, async () => {
      await fn(req, res);
    }),
  );
}

export const healthCheck = appOnRequest(async (_req, res) => {
  await sleep(1_000);
  res.json({
    message: "Good evening from firebase!",
  });
});
