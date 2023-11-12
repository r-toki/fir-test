import { onRequest } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2/options";

import { sleep } from "~/utils";

setGlobalOptions({
  region: "asia-northeast1",
});

export const healthCheck = onRequest(async (_req, res) => {
  await sleep(1_000);

  res.json({
    message: "Good evening from firebase!",
  });
});
